import { useEffect, useMemo, useState } from 'react'
import { ArrowIcon, CheckIcon } from '../components/Icons'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import type { Concern } from '../types'

interface AnswerOption {
  label: string
  value: string
  concern?: Concern
}

interface QuizQuestion {
  title: string
  note: string
  options: AnswerOption[]
}

const questions: QuizQuestion[] = [
  {
    title: '今、一番気になる肌のサインは？',
    note: '最も近いものをひとつ選んでください。',
    options: [
      { label: '洗顔後につっぱる、粉をふく', value: 'dry', concern: '乾燥' },
      { label: '季節や体調で不安定になりやすい', value: 'sensitive', concern: 'ゆらぎ' },
      { label: '乾燥による毛穴目立ちが気になる', value: 'pores', concern: '毛穴' },
      { label: '肌荒れを防ぎ、状態を整えたい', value: 'balance', concern: '肌荒れ予防' },
    ],
  },
  {
    title: '普段の肌の感触は？',
    note: '夕方ごろの肌を思い浮かべてみてください。',
    options: [
      { label: '全体的に乾燥している', value: 'very-dry', concern: '乾燥' },
      { label: '部分的にカサつき、刺激を感じる', value: 'unstable', concern: 'ゆらぎ' },
      { label: 'Tゾーンはべたつき、頬は乾燥する', value: 'combination', concern: '毛穴' },
      { label: '大きな悩みはないが、予防したい', value: 'prevent', concern: '肌荒れ予防' },
    ],
  },
  {
    title: 'スキンケアにかけられる時間は？',
    note: '無理なく続けられるペースを選びましょう。',
    options: [
      { label: '3分以内。できるだけシンプルに', value: 'simple' },
      { label: '5分ほど。基本のケアを丁寧に', value: 'standard' },
      { label: '10分ほど。美容液なども取り入れたい', value: 'careful' },
    ],
  },
  {
    title: '選ぶときに一番大切なことは？',
    note: 'あなたの今の気持ちに近いものを。',
    options: [
      { label: 'まず少量から試せること', value: 'trial' },
      { label: '成分が分かりやすく、低刺激なこと', value: 'gentle' },
      { label: 'しっかり保湿できること', value: 'moisture', concern: '乾燥' },
      { label: 'べたつかず、使い続けやすいこと', value: 'light', concern: '毛穴' },
    ],
  },
]

export function SkinQuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [resultConcern, setResultConcern] = useState<Concern | null>(null)

  useEffect(() => {
    if (resultConcern) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [resultConcern])

  const recommendations = useMemo(() => {
    if (!resultConcern) return []
    const trialSelected = answers.includes('trial') || answers.includes('simple')
    return [...products]
      .filter((product) => product.concerns.includes(resultConcern))
      .sort((a, b) => {
        if (trialSelected && a.category === 'セット') return -1
        if (trialSelected && b.category === 'セット') return 1
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      })
      .slice(0, 3)
  }, [answers, resultConcern])

  const selectAnswer = (option: AnswerOption) => {
    const nextAnswers = [...answers, option.value]
    if (step < questions.length - 1) {
      setAnswers(nextAnswers)
      setStep(step + 1)
      return
    }

    const selectedOptions = questions.flatMap((question, index) => {
      const value = index === step ? option.value : nextAnswers[index]
      return question.options.filter((entry) => entry.value === value)
    })
    const scores = selectedOptions.reduce<Record<string, number>>((acc, entry) => {
      if (entry.concern) acc[entry.concern] = (acc[entry.concern] ?? 0) + 1
      return acc
    }, {})
    const concern = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] as Concern | undefined
    setAnswers(nextAnswers)
    setResultConcern(concern ?? 'ゆらぎ')
  }

  const restart = () => {
    setStep(0)
    setAnswers([])
    setResultConcern(null)
  }

  if (resultConcern) {
    return (
      <div className="page-wrap quiz-result">
        <section className="result-hero">
          <div className="result-badge"><CheckIcon /></div>
          <p className="eyebrow">YOUR SKIN PROFILE</p>
          <h1>今のあなたは、<br /><em>「{resultConcern}ケア」</em>を大切に。</h1>
          <p>{resultConcern === '乾燥' && '水分と油分をバランスよく補い、うるおいを逃さないケアがおすすめです。'}
            {resultConcern === 'ゆらぎ' && 'アイテム数を増やしすぎず、やさしい基本ケアで肌を落ち着かせましょう。'}
            {resultConcern === '毛穴' && '落としすぎを避けながら、うるおいでキメを整えるケアがおすすめです。'}
            {resultConcern === '肌荒れ予防' && '毎日無理なく続けられるシンプルなケアで、すこやかな状態を守りましょう。'}</p>
        </section>
        <section className="result-routine section">
          <div className="section-heading centered"><p className="eyebrow">YOUR DAILY RITUAL</p><h2>おすすめのケア</h2></div>
          <div className="routine-flow">
            <article><b>01</b><span>洗う</span><p>摩擦を避け、うるおいを残して洗います。</p></article>
            <article><b>02</b><span>整える</span><p>手のひらで包むように水分を届けます。</p></article>
            <article><b>03</b><span>守る</span><p>クリームでうるおいを閉じ込めます。</p></article>
          </div>
        </section>
        <section className="section result-products">
          <div className="section-heading split"><div><p className="eyebrow">RECOMMENDED FOR YOU</p><h2>今の肌におすすめの商品</h2></div><button className="clear-button" onClick={restart}>もう一度診断する</button></div>
          <div className="product-grid">{recommendations.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <p className="quiz-disclaimer">※ この診断は化粧品選びを補助するための簡易コンテンツであり、医学的な診断ではありません。</p>
        </section>
      </div>
    )
  }

  const question = questions[step]

  return (
    <div className="page-wrap quiz-page">
      <section className="quiz-intro">
        <div>
          <p className="eyebrow">KINUHA SKIN CHECK</p>
          <h1>1分でわかる、<br />今の肌に必要なこと。</h1>
          <p>4つの質問から、今のあなたに合うケアと商品をご案内します。</p>
        </div>
      </section>
      <section className="quiz-panel" aria-live="polite">
        <div className="quiz-progress">
          <span>QUESTION {step + 1} / {questions.length}</span>
          <div><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
        </div>
        <h2>{question.title}</h2>
        <p>{question.note}</p>
        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button key={option.value} onClick={() => selectAnswer(option)}>
              <b>0{index + 1}</b><span>{option.label}</span><ArrowIcon />
            </button>
          ))}
        </div>
        {step > 0 && <button className="quiz-back" onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)) }}>前の質問に戻る</button>}
      </section>
      <p className="quiz-note">気になる症状が続く場合は、専門医へご相談ください。</p>
    </div>
  )
}
