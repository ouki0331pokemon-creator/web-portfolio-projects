import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition = "center",
  children,
}) {
  if (image) {
    return (
      <section className="border-b border-line pt-20 lg:pt-24">
        <div className="mx-auto grid min-h-[560px] max-w-[1440px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
            <Reveal className="w-full max-w-xl">
              {eyebrow && (
                <p className="mb-6 font-display text-sm uppercase tracking-[0.28em] text-gold">
                  {eyebrow}
                </p>
              )}
              <h1 className="font-serif text-4xl font-normal leading-[1.35] tracking-japanese sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="mt-7 max-w-lg text-sm font-light leading-8 tracking-japanese text-ink-muted sm:text-base">
                  {description}
                </p>
              )}
              {children}
            </Reveal>
          </div>
          <Reveal className="min-h-[360px] overflow-hidden lg:min-h-[560px]" delay={0.08} distance={12}>
            <img
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.02]"
              src={image}
              style={{ objectPosition: imagePosition }}
            />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-line px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          {eyebrow && (
            <p className="mb-6 font-display text-sm uppercase tracking-[0.28em] text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.35] tracking-japanese sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-2xl text-sm font-light leading-8 tracking-japanese text-ink-muted sm:text-base">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
