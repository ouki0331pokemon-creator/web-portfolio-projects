import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { ArrowIcon, CheckIcon } from '../components/Icons'

const promises = [
  { number: '01', title: '敏感肌を考えた設計', text: '毎日手に取るものだから、肌へのやさしさを第一に。必要なものを、必要なだけ届けます。' },
  { number: '02', title: '植物の恵みを選ぶ', text: '産地や抽出方法まで確かめながら、肌をすこやかに保つ植物由来成分を選定します。' },
  { number: '03', title: 'すべてを、正直に', text: '配合成分も、使い方も、避けているものも。選ぶために必要な情報を隠しません。' },
]

const concerns = [
  { name: '乾燥', en: 'DRYNESS', text: 'つっぱり・粉ふきが気になる', color: 'peach' },
  { name: 'ゆらぎ', en: 'SENSITIVITY', text: '季節や環境で不安定になりやすい', color: 'sage' },
  { name: '毛穴', en: 'PORES', text: '乾燥による毛穴目立ちが気になる', color: 'sand' },
  { name: '肌荒れ予防', en: 'BALANCE', text: 'すこやかな状態を保ちたい', color: 'pink' },
]

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="自然光の中に並ぶKINUHAのスキンケア商品" />
        <div className="hero-content">
          <p className="eyebrow">BOTANICAL CARE FOR SENSITIVE SKIN</p>
          <h1>ゆらぎやすい肌に、<br /><em>やさしい余白</em>を。</h1>
          <p className="hero-copy">植物の力とシンプルな処方で、<br />毎日安心して続けられるスキンケアを。</p>
          <Link to="/products" className="primary-button">商品を見る <ArrowIcon /></Link>
        </div>
        <p className="hero-note">Made gently, for your everyday skin.</p>
      </section>

      <section className="intro section">
        <div className="section-kicker">FOR YOUR SKIN</div>
        <div className="intro-grid">
          <h2>なんとなく調子が悪い。<br />そんな日が、増えていませんか。</h2>
          <div>
            <p>季節の変わり目、睡眠不足、忙しい毎日。<br />肌は、私たちが思う以上に小さな変化を感じ取っています。</p>
            <p>KINUHAは、足しすぎるのではなく、肌が本来持つ力を邪魔しないことから考えました。</p>
            <Link to="/story" className="text-link">KINUHAの考え方 <ArrowIcon /></Link>
          </div>
        </div>
        <div className="skin-words" aria-hidden="true">
          <span>つっぱる</span><span>赤みが気になる</span><span>季節でゆらぐ</span><span>何を選べばいい？</span>
        </div>
      </section>

      <section className="promise-section section">
        <div className="section-heading centered">
          <p className="eyebrow">OUR PROMISE</p>
          <h2>肌に触れるものだから、<br />3つの約束を。</h2>
        </div>
        <div className="promise-grid">
          {promises.map((promise) => (
            <article key={promise.number} className="promise-card">
              <span>{promise.number}</span>
              <div className="promise-icon"><CheckIcon /></div>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading split">
          <div><p className="eyebrow">OUR FAVORITES</p><h2>肌がよろこぶ、<br />毎日の定番。</h2></div>
          <Link to="/products" className="text-link">すべての商品を見る <ArrowIcon /></Link>
        </div>
        <div className="product-grid">
          {products.filter((product) => product.featured).slice(0, 4).map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>

      <section className="concern-section section">
        <div className="section-heading centered">
          <p className="eyebrow">FIND YOUR CARE</p>
          <h2>今の肌悩みから探す</h2>
          <p>その日の肌に合わせて、必要なケアを。</p>
        </div>
        <div className="concern-grid">
          {concerns.map((concern) => (
            <Link to={`/products?concern=${concern.name}`} className={`concern-card ${concern.color}`} key={concern.name}>
              <span>{concern.en}</span><h3>{concern.name}</h3><p>{concern.text}</p><ArrowIcon />
            </Link>
          ))}
        </div>
      </section>

      <section className="quiz-teaser">
        <div className="quiz-teaser-image" role="img" aria-label="KINUHAの植物由来スキンケア商品" />
        <div className="quiz-teaser-content">
          <p className="eyebrow">KINUHA SKIN CHECK</p>
          <h2>今の肌に必要なものを、<br />4つの質問から。</h2>
          <p>肌の状態と毎日のリズムに合わせて、無理なく続けられるケアをご提案します。</p>
          <Link to="/skin-quiz" className="secondary-button">肌診断をはじめる <ArrowIcon /></Link>
          <small>約1分 / 会員登録不要</small>
        </div>
      </section>

      <section className="ritual-section section">
        <div className="ritual-visual">
          <div className="ritual-circle"><span>3</span><small>STEPS</small></div>
          <span className="line-art leaf-a" /><span className="line-art leaf-b" />
        </div>
        <div className="ritual-content">
          <p className="eyebrow">DAILY RITUAL</p>
          <h2>迷わない、<br />基本の3ステップ。</h2>
          <p>肌に必要なのは、複雑なケアではなく、毎日無理なく続けられること。KINUHAは3つのステップを基本にしています。</p>
          <ol className="steps">
            <li><b>01</b><span><strong>洗う</strong>うるおいを守りながら、不要なものだけを落とす。</span></li>
            <li><b>02</b><span><strong>整える</strong>水分を届け、やわらかく受け止められる肌へ。</span></li>
            <li><b>03</b><span><strong>守る</strong>うるおいを包み、外部刺激を受けにくい状態へ。</span></li>
          </ol>
          <Link to="/products/first-ritual-set" className="secondary-button">はじめてのセットを見る <ArrowIcon /></Link>
        </div>
      </section>

      <section className="voices-section section">
        <div className="section-heading centered"><p className="eyebrow">CUSTOMER VOICES</p><h2>肌と向き合う人たちの声</h2></div>
        <div className="voice-grid">
          {[
            ['スキンケアの時間が、楽しみになりました。', '乾燥が気になる時期にも手に取りやすく、シンプルな3ステップだから忙しい朝にも続けられます。', 'A.K.さん / 29歳'],
            ['成分を見て選べる安心感があります。', '何が入っていて、何が入っていないかが分かりやすい。香りも控えめで心地よく使えています。', 'M.S.さん / 32歳'],
            ['まずはセットで試せたのがよかった。', '肌に合うか不安でしたが、14日分から始められました。旅行にも持っていきやすいサイズです。', 'Y.N.さん / 27歳'],
          ].map(([title, text, author]) => (
            <article className="voice-card" key={author}><div className="stars" aria-label="5つ星">★★★★★</div><h3>{title}</h3><p>{text}</p><small>{author}</small></article>
          ))}
        </div>
        <p className="fiction-note">※ 掲載しているレビューはポートフォリオ用の架空の内容です。</p>
      </section>

      <section className="story-teaser">
        <div className="story-photo" role="img" aria-label="植物と自然素材のイメージ" />
        <div className="story-teaser-content">
          <p className="eyebrow">OUR STORY</p>
          <h2>肌にも、環境にも、<br />誠実でありたい。</h2>
          <p>自然からいただくものを、必要な分だけ。容器や梱包まで含めて、できることを一つずつ選んでいます。</p>
          <Link to="/story" className="secondary-button">私たちについて <ArrowIcon /></Link>
        </div>
      </section>

      <section className="faq-preview section">
        <div className="section-heading split">
          <div><p className="eyebrow">BEFORE YOU SHOP</p><h2>はじめての方へ</h2></div>
          <p>商品選びやお届けについて、<br />よくいただくご質問をまとめました。</p>
        </div>
        <div className="guide-links">
          <Link to="/faq"><span>01</span><strong>敏感肌でも使えますか？</strong><ArrowIcon /></Link>
          <Link to="/faq#shipping"><span>02</span><strong>送料・お届けについて</strong><ArrowIcon /></Link>
          <Link to="/faq#return"><span>03</span><strong>返品・交換について</strong><ArrowIcon /></Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">BEGIN YOUR RITUAL</p>
        <h2>今日の肌に、やさしい選択を。</h2>
        <Link to="/products" className="primary-button">商品を探す <ArrowIcon /></Link>
      </section>
    </>
  )
}
