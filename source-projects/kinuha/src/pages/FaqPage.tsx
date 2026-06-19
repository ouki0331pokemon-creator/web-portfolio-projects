const faqs = [
  ['敏感肌でも使えますか？', '敏感肌の方にも使いやすい処方を目指していますが、すべての方に刺激が起きないわけではありません。初めての際は腕の内側などで試してからのご使用をおすすめします。'],
  ['どの商品から始めればよいですか？', '初めての方には「はじめての3ステップセット」がおすすめです。約14日分の洗顔料・化粧水・クリームをお試しいただけます。'],
  ['香りはありますか？', '合成香料は使用していません。原料由来のごく自然な香りを感じる場合があります。'],
  ['妊娠中でも使えますか？', '体調や肌状態が変化しやすい時期のため、かかりつけの医師へご相談のうえご使用ください。'],
  ['注文後、何日で届きますか？', '通常、ご注文から2〜4営業日でお届けします。離島や一部地域ではさらに日数がかかる場合があります。'],
  ['送料はいくらですか？', '全国一律550円です。5,500円（税込）以上のご注文、または初回購入は送料無料です。'],
  ['返品はできますか？', '初回購入の商品に限り、商品到着後14日以内であれば開封後も返品を承ります。お問い合わせフォームからご連絡ください。'],
]

export function FaqPage() {
  return (
    <div className="page-wrap faq-page">
      <header className="page-header"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h1>よくあるご質問</h1><p>商品やご注文について、不安なことはこちらから。</p></header>
      <div className="faq-layout">
        <nav aria-label="FAQカテゴリー"><a href="#products">商品について</a><a href="#shipping">配送・送料</a><a href="#return">返品・交換</a></nav>
        <div className="faq-list">
          <h2 id="products">商品について</h2>
          {faqs.slice(0, 4).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          <h2 id="shipping">配送・送料について</h2>
          {faqs.slice(4, 6).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          <h2 id="return">返品・交換について</h2>
          {faqs.slice(6).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div>
      </div>
      <section className="contact-box"><p className="eyebrow">STILL NEED HELP?</p><h2>解決しない場合は</h2><p>お問い合わせフォームよりお気軽にご連絡ください。<br />平日2営業日以内を目安に返信いたします。</p><a className="secondary-button" href="mailto:hello@example.com">お問い合わせ</a><small>※ ポートフォリオ用のため、実際の送信先ではありません。</small></section>
    </div>
  )
}
