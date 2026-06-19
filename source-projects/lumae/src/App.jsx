import {
  ArrowRight,
  Check,
  CreditCard,
  Droplets,
  Leaf,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Truck,
  Wind,
} from 'lucide-react';
import heroImage from './assets/lumae-hair-oil-hero.png';

const benefits = [
  {
    icon: Sparkles,
    title: '光をまとう自然なツヤ',
    body: '重ねても濁らない軽いツヤで、サロン帰りのような毛流れを演出します。',
  },
  {
    icon: Wind,
    title: '広がりをすっと整える',
    body: '乾燥による浮き毛や毛先のばらつきを、指通りよくなめらかに整えます。',
  },
  {
    icon: Leaf,
    title: '植物由来オイル配合',
    body: 'アルガン、ホホバ、ツバキ由来のオイルをブレンド。毎日使いやすい処方です。',
  },
  {
    icon: Timer,
    title: '朝も夜も30秒ケア',
    body: 'タオルドライ後にも、スタイリングの仕上げにも。忙しい日でも続けられます。',
  },
];

const reviews = [
  {
    title: '朝の広がりが楽に',
    name: 'Mika / 32歳',
    body: 'オイルなのに軽くて、夕方まで毛先がまとまります。香りも強すぎず上品です。',
  },
  {
    title: 'ベタつかず使いやすい',
    name: 'Haruka / 28歳',
    body: '朝の広がりが落ち着くので、アイロン時間が短くなりました。ボトルも洗面台に置きたくなる質感。',
  },
  {
    title: 'ツヤ不足が気にならない',
    name: 'Nozomi / 41歳',
    body: 'パサついて見えやすい髪に自然なツヤが出ます。ベタつかないので家族で使っています。',
  },
];

const faqs = [
  {
    question: 'ベタつきませんか？',
    answer: '少量から調整しやすい軽い使用感です。細い髪の方は半プッシュを毛先中心になじませてください。',
  },
  {
    question: 'どの髪質に向いていますか？',
    answer: '乾燥、広がり、ツヤ不足が気になる髪におすすめです。ストレート、ウェーブ、カラー毛にも使えます。',
  },
  {
    question: '香りは強いですか？',
    answer: 'ホワイトティーとハーブを思わせる、控えめで清潔感のある香りです。時間とともにやわらかく残ります。',
  },
  {
    question: 'どれくらい使えますか？',
    answer: '80mLで約30日分が目安です。髪の長さや使用量に合わせて、半プッシュから2プッシュで調整できます。',
  },
  {
    question: 'いつ使うのが効果的ですか？',
    answer: '夜はタオルドライ後、朝はスタイリングの仕上げに使うと、まとまりとツヤを感じやすくなります。',
  },
];

function CtaButton({ children = '今すぐ購入する', variant = 'primary' }) {
  return (
    <a className={`cta-button ${variant}`} href="#offer">
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function DemoNotice() {
  return (
    <div className="demo-notice" role="note">
      <strong>Demo</strong>
      <span>このLPは架空デモです。購入・決済・個人情報送信は発生しません。</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Lumaé Salon Signature Care</p>
        <h1>広がる髪を、軽くまとまるツヤ髪へ。</h1>
        <p className="hero-copy">
          Lumaé Botanical Hair Oilは、乾燥・広がり・ツヤ不足が気になる髪のためのサロン品質ヘアオイル。
          植物由来オイルを軽やかにブレンドし、ベタつかず毛先までしなやかに整えます。
        </p>
        <div className="hero-actions">
          <CtaButton />
          <a className="text-link" href="#ingredients">成分を見る</a>
        </div>
        <div className="trust-row" aria-label="購入特典">
          <span><Check size={16} />送料無料</span>
          <span><Check size={16} />初回15%OFF</span>
          <span><Check size={16} />サロン監修</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Lumaé Botanical Hair Oilの商品イメージ">
        <img src={heroImage} alt="植物とサロン小物に囲まれたヘアオイルボトル" />
        <div className="product-badge">
          <span>New</span>
          <strong>Lumaé Botanical Hair Oil</strong>
        </div>
      </div>
    </section>
  );
}

function RecommendedFor() {
  const items = [
    '朝の広がりでスタイリングに時間がかかる',
    'ヘアオイルのベタつきが苦手',
    '毛先のパサつきでツヤが出にくい',
    'サロン帰りのまとまりを自宅でも続けたい',
  ];

  return (
    <section className="recommend-section">
      <div className="recommend-heading">
        <p className="eyebrow">Recommended For</p>
        <h2>こんな髪悩みにおすすめです。</h2>
      </div>
      <div className="recommend-list">
        {items.map((item) => (
          <div className="recommend-item" key={item}>
            <Check size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="section comparison-section">
      <div className="section-heading">
        <p className="eyebrow">Before / After</p>
        <h2>乾燥で広がる髪を、ツヤのあるまとまり髪へ。</h2>
      </div>
      <div className="comparison-grid">
        <article className="comparison-panel before">
          <span>Before</span>
          <h3>朝から毛先が広がり、疲れて見える髪に</h3>
          <p>毛先が散らばり、光が乱反射して疲れた印象に見えやすい状態。</p>
          <div className="hair-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </article>
        <article className="comparison-panel after">
          <span>After</span>
          <h3>オイルなのに軽く、自然なツヤが続く髪へ</h3>
          <p>毛流れを薄く整え、重く見せずにサロン帰りのような質感へ。</p>
          <div className="shine-arc" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="section split-section">
      <div>
        <p className="eyebrow">Hair Concern</p>
        <h2>乾燥・湿気・ツヤ不足に悩む髪へ、毎日の一滴を。</h2>
      </div>
      <div className="text-block">
        <p>
          乾燥した毛先、湿気で広がる表面、ツヤ不足で疲れて見える髪。
          Lumaéは髪を重く包むのではなく、必要なうるおい感だけを薄く重ねる発想で作りました。
        </p>
        <p>
          タオルドライ後になじませれば翌朝の扱いやすさに、仕上げに使えば光を受ける自然なツヤに。
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section muted" id="benefits">
      <div className="section-heading">
        <p className="eyebrow">Benefits</p>
        <h2>重いオイルが苦手な人でも、ツヤとまとまりを両立。</h2>
      </div>
      <div className="benefit-grid">
        {benefits.map(({ icon: Icon, title, body }) => (
          <article className="benefit-card" key={title}>
            <div className="icon-pill"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Ingredients() {
  return (
    <section className="section ingredient-section" id="ingredients">
      <div className="ingredient-copy">
        <p className="eyebrow">Botanical Blend</p>
        <h2>毎日使うものだから、植物由来の軽いオイルバランスに。</h2>
        <p>
          アルガンオイル、ホホバオイル、ツバキ種子オイルを配合。
          手のひらで薄く伸び、毛先にすっとなじむテクスチャーです。
        </p>
      </div>
      <div className="ingredient-list">
        <div>
          <Droplets size={24} />
          <strong>アルガンオイル</strong>
          <span>乾燥しがちな髪にしっとりしたツヤ感を。</span>
        </div>
        <div>
          <Leaf size={24} />
          <strong>ホホバオイル</strong>
          <span>重さを出しすぎず、なめらかな指通りへ。</span>
        </div>
        <div>
          <ShieldCheck size={24} />
          <strong>ツバキ種子オイル</strong>
          <span>毛先のまとまりと上品なツヤをサポート。</span>
        </div>
      </div>
    </section>
  );
}

function SalonStory() {
  return (
    <section className="section salon-story">
      <div className="stylist-mark" aria-hidden="true">LS</div>
      <div>
        <p className="eyebrow">Salon Supervision</p>
        <h2>サロン帰りの仕上がりを、自宅でも再現しやすく。</h2>
        <p>
          Lumaé Salonのスタイリストが、仕上げのツヤ感とホームケアの続けやすさを両立するために監修。
          “つけた直後だけきれい”ではなく、翌朝の扱いやすさまで考えたヘアオイルです。
        </p>
      </div>
    </section>
  );
}

function HowToUse() {
  return (
    <section className="section use-section">
      <div className="section-heading">
        <p className="eyebrow">How To Use</p>
        <h2>忙しい朝も夜も、30秒で毛先から整える。</h2>
      </div>
      <div className="steps">
        <article>
          <span>01</span>
          <h3>乾燥しやすい夜の髪に</h3>
          <p>1から2プッシュを手のひらで伸ばし、毛先から中間へなじませます。</p>
        </article>
        <article>
          <span>02</span>
          <h3>広がりやすい朝の髪に</h3>
          <p>半プッシュを表面の浮き毛と毛先へ。まとまりを自然にキープします。</p>
        </article>
        <article>
          <span>03</span>
          <h3>ツヤを足したい仕上げに</h3>
          <p>乾いた髪の表面に薄く重ねると、光を受ける上品なツヤに。</p>
        </article>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews">
      <div className="section-heading">
        <p className="eyebrow">Reviews</p>
        <h2>広がり・パサつきに悩んだ人が、毎日続けたくなる理由。</h2>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="stars" aria-label="5つ星">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Assurance() {
  const items = [
    {
      icon: Truck,
      title: '配送情報の明示',
      body: '通常2〜4営業日で発送。受け取りまでの目安が分かるから、初めてでも安心です。',
    },
    {
      icon: CreditCard,
      title: '決済方法の提示',
      body: 'クレジットカード、電子決済、後払いに対応。いつもの支払い方法で選べます。',
    },
    {
      icon: RotateCcw,
      title: '返品保証の訴求',
      body: '未開封であれば7日以内の返品に対応。はじめてのヘアケア選びを支えます。',
    },
  ];

  return (
    <section className="section assurance-section">
      <div className="section-heading">
        <p className="eyebrow">Purchase Support</p>
        <h2>初めてのヘアオイル選びでも、安心して試せる理由。</h2>
      </div>
      <div className="assurance-grid">
        {items.map(({ icon: Icon, title, body }) => (
          <article key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  const specs = [
    ['容量', '80mL'],
    ['使用目安', '約30日分'],
    ['香り', 'ホワイトティー & ハーブ'],
    ['質感', '軽め・ベタつきにくい'],
    ['使用タイミング', '朝の仕上げ / 夜のドライヤー前'],
  ];

  return (
    <section className="offer" id="offer">
      <div className="offer-inner">
        <div>
          <p className="eyebrow">First Order Offer</p>
          <h2>広がる髪を今日から整える、初回限定15%OFF。</h2>
          <p className="offer-copy">
            初回限定で15%OFF。送料無料で、サロン品質のヘアケアを今日から。
          </p>
          <div className="deadline-box">
            <strong>Limited campaign</strong>
            <span>初回15%OFF / 送料無料 / 数量限定ミニコーム付き</span>
          </div>
          <dl className="product-specs">
            {specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="price-panel">
          <span className="label">初回限定価格</span>
          <div className="price">
            <span className="old-price">¥4,200</span>
            <strong>¥3,570</strong>
            <small>税込</small>
          </div>
          <ul>
            <li><Check size={17} />全国送料無料</li>
            <li><Check size={17} />30日間の使用目安</li>
            <li><Check size={17} />数量限定ミニコーム付き</li>
            <li><Check size={17} />未開封7日以内返品OK</li>
          </ul>
          <CtaButton>今すぐ購入する</CtaButton>
          <p className="demo-caption">送料無料 / 初回15%OFF / 未開封7日以内返品OK</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>ベタつき・香り・髪質の不安にお答えします。</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#">Lumaé Salon</a>
        <nav aria-label="主要ナビゲーション">
          <a href="#benefits">特徴</a>
          <a href="#ingredients">成分</a>
          <a href="#offer">購入</a>
        </nav>
      </header>
      <main>
        <DemoNotice />
        <Hero />
        <RecommendedFor />
        <ProblemSolution />
        <Benefits />
        <Comparison />
        <Ingredients />
        <SalonStory />
        <HowToUse />
        <Reviews />
        <Assurance />
        <Offer />
        <FAQ />
      </main>
      <footer>
        <div>
          <strong>Lumaé Salon</strong>
          <span>Salon-quality botanical hair care.</span>
        </div>
        <div className="footer-links" aria-label="フッターリンク">
          <a href="#offer">特定商取引法に基づく表記</a>
          <a href="#offer">プライバシーポリシー</a>
          <a href="#offer">お問い合わせ</a>
        </div>
      </footer>
      <a className="sticky-cta" href="#offer">
        <MessageCircle size={18} />
        <span>初回15%OFFで購入</span>
      </a>
    </>
  );
}

export default App;
