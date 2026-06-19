document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const menuLabel = menuButton?.querySelector(".visually-hidden");

function closeMenu() {
  if (!menuButton || !globalNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  globalNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (menuLabel) menuLabel.textContent = "メニューを開く";
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  globalNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? "メニューを開く" : "メニューを閉じる";
});

globalNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) closeMenu();
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

let modalTrigger = null;

document.querySelectorAll(".modal-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modal = document.getElementById(trigger.dataset.modal);
    if (!(modal instanceof HTMLDialogElement)) return;

    modalTrigger = trigger;
    document.body.classList.add("modal-open");
    modal.showModal();
    modal.querySelector(".modal-close")?.focus();
  });
});

function closeModal(modal) {
  if (!(modal instanceof HTMLDialogElement)) return;
  modal.close();
  document.body.classList.remove("modal-open");
  modalTrigger?.focus();
}

document.querySelectorAll(".work-modal").forEach((modal) => {
  modal.querySelector(".modal-close")?.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });

  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal(modal);
  });

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusable = [...modal.querySelectorAll(
      'button:not([disabled]), a[href]:not([aria-disabled="true"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )];
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = form?.querySelector(".submit-button");
const contactDraftKey = "contact-form-draft";
const contactDraftFieldIds = ["name", "email", "company", "message", "deadline", "budget", "consent"];

function saveContactDraft() {
  if (!form) return;

  const draft = {};
  contactDraftFieldIds.forEach((id) => {
    const field = document.getElementById(id);
    if (!field) return;
    draft[id] = field.type === "checkbox" ? field.checked : field.value;
  });

  try {
    sessionStorage.setItem(contactDraftKey, JSON.stringify(draft));
  } catch {
    // 一時保存を利用できない環境でも、フォーム入力は継続できます。
  }
}

function restoreContactDraft() {
  if (!form) return;

  try {
    const savedDraft = sessionStorage.getItem(contactDraftKey);
    if (!savedDraft) return;
    const draft = JSON.parse(savedDraft);

    contactDraftFieldIds.forEach((id) => {
      const field = document.getElementById(id);
      if (!field || !(id in draft)) return;
      if (field.type === "checkbox") {
        field.checked = Boolean(draft[id]);
      } else {
        field.value = String(draft[id]);
      }
    });
  } catch {
    sessionStorage.removeItem(contactDraftKey);
  }
}

restoreContactDraft();

contactDraftFieldIds.forEach((id) => {
  const field = document.getElementById(id);
  if (!field) return;
  field.addEventListener(field.type === "checkbox" ? "change" : "input", saveContactDraft);
});

const fieldRules = {
  name: {
    message: "お名前を入力してください。",
    validate: (field) => field.value.trim().length > 0,
  },
  email: {
    message: "正しい形式のメールアドレスを入力してください。",
    validate: (field) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()),
  },
  message: {
    message: "相談したい内容を入力してください。",
    validate: (field) => field.value.trim().length > 0,
  },
  consent: {
    message: "個人情報の取り扱いへの同意が必要です。",
    validate: (field) => field.checked,
  },
};

function validateField(field) {
  const rule = fieldRules[field.id];
  if (!rule) return true;

  const isValid = rule.validate(field);
  const error = document.getElementById(`${field.id}-error`);
  field.setAttribute("aria-invalid", String(!isValid));
  if (error) error.textContent = isValid ? "" : rule.message;
  return isValid;
}

Object.keys(fieldRules).forEach((id) => {
  const field = document.getElementById(id);
  if (!field) return;
  const eventName = field.type === "checkbox" ? "change" : "blur";
  field.addEventListener(eventName, () => validateField(field));
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
});

function isLocalPreview() {
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function showLocalSubmitNotice() {
  if (!formStatus) return;
  formStatus.hidden = false;
  formStatus.dataset.status = "error";
  formStatus.innerHTML = "<strong>ローカル確認中です。</strong><p>Netlifyの公開URLで送信すると、Netlify Formsに送信されます。</p>";
  formStatus.focus();
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formStatus) formStatus.hidden = true;

  const fields = Object.keys(fieldRules)
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const validity = fields.map(validateField);
  const firstInvalid = fields[validity.indexOf(false)];

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  if (isLocalPreview()) {
    showLocalSubmitNotice();
    return;
  }

  if (submitButton) submitButton.disabled = true;
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
  sessionStorage.removeItem(contactDraftKey);
  form.submit();
});
