import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

export function StoryPage() {
  return (
    <div className="story-page">
      <section className="sub-hero story-hero"><div><p className="eyebrow">OUR STORY</p><h1>素肌に還る、<br />静かな時間を。</h1><p>肌にも、環境にも、誠実であるために。</p></div></section>
      <section className="editorial-section section"><p className="section-kicker">01 / BEGINNING</p><div><h2>肌がゆらいだ日から、<br />KINUHAは始まりました。</h2><p>忙しい日々の中で、突然いつものスキンケアが合わなくなる。選択肢はたくさんあるのに、何を信じればいいのか分からない。そんな実感から、肌が敏感なときにも迷わず手に取れるものを作ろうと考えました。</p><p>名前の由来は、絹のようにしなやかな肌と、植物の葉。必要以上に飾らず、毎日に静かに寄り添うブランドでありたいという想いを込めています。</p></div></section>
      <section className="nature-panel"><div className="nature-image" /><div><p className="eyebrow">02 / INGREDIENTS</p><h2>自然の力を、<br />必要なかたちで。</h2><p>自然由来であることだけを理由にせず、品質、産地、肌への役割まで確かめて選びます。植物の恵みと現代の処方技術、その両方を大切にしています。</p></div></section>
      <section className="values-section section"><p className="section-kicker">03 / RESPONSIBILITY</p><h2>小さな選択を、<br />未来へつなげる。</h2><div className="values-grid"><article><b>01</b><h3>詰め替えやすい容器</h3><p>できる限り再生素材を選び、使い終わった後のことまで考えます。</p></article><article><b>02</b><h3>過剰包装をしない</h3><p>美しさは保ちながら、梱包材を必要最小限に抑えます。</p></article><article><b>03</b><h3>長く続けられる価格</h3><p>毎日使うものだから、品質と続けやすさのバランスを大切にします。</p></article></div></section>
      <section className="final-cta"><p className="eyebrow">MEET OUR PRODUCTS</p><h2>肌に寄り添うケアを、<br />見つけてください。</h2><Link to="/products" className="primary-button">商品を見る <ArrowIcon /></Link></section>
    </div>
  )
}
