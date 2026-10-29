'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'

const ingredients = [
  { name: 'Abacate', detail: 'Textura cremosa, sabor delicado e presença generosa.', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=900&q=85', note: 'frescor · cremosidade' },
  { name: 'Limão-siciliano', detail: 'Acidez luminosa que desperta cada composição.', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=85', note: 'acidez · perfume' },
  { name: 'Manjericão', detail: 'Aroma verde e fresco, colhido para finalizar.', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=900&q=85', note: 'aroma · delicadeza' },
  { name: 'Tomate', detail: 'Doçura natural e intensidade para a nossa cozinha.', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85', note: 'doçura · intensidade' },
]

const dishes = [
  { category: 'Brunch', name: 'Toast de abacate & ervas', description: 'Pão de fermentação natural, abacate, ervas frescas e azeite.', price: 'R$ 42', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=85' },
  { category: 'Brunch', name: 'Ovos artesanais da estação', description: 'Ovos cremosos, vegetais tostados e folhas jovens.', price: 'R$ 48', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85' },
  { category: 'Almoço', name: 'Risoto de cogumelos', description: 'Arroz carnaroli, cogumelos, ervas aromáticas e parmesão.', price: 'R$ 74', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=85' },
  { category: 'Almoço', name: 'Tomates & manjericão', description: 'Tomates maduros, massa artesanal e azeite extravirgem.', price: 'R$ 62', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85' },
  { category: 'Sobremesas', name: 'Frutas da estação', description: 'Frutas frescas, creme de baunilha e folhas de hortelã.', price: 'R$ 32', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=85' },
  { category: 'Bebidas', name: 'Cold brew da casa', description: 'Café especial extraído lentamente, servido sobre gelo.', price: 'R$ 22', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85' },
]

const categories = ['Todos', 'Brunch', 'Almoço', 'Sobremesas', 'Bebidas']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeIngredient, setActiveIngredient] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.72)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const [category, setCategory] = useState('Todos')
  const [selectedDish, setSelectedDish] = useState<(typeof dishes)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const filteredDishes = category === 'Todos' ? dishes : dishes.filter((dish) => dish.category === category)

  return (
    <main className="site-shell">
      <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="logo" href="#inicio" aria-label="Verdanté início">VERDANTÉ<span>•</span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#essencia" onClick={() => setMenuOpen(false)}>Nossa essência</a>
          <a href="#ingredientes" onClick={() => setMenuOpen(false)}>Ingredientes</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#reservas" onClick={() => setMenuOpen(false)}>Reservas</a>
        </nav>
        <a className="header-book" href="#reservas">Reservar uma mesa <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-image" role="img" aria-label="Mesa com ingredientes naturais e prato autoral" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">Restaurante gastronômico · São Paulo</p>
          <h1>Da natureza,<br /><em>à sua melhor forma.</em></h1>
          <p className="hero-description">Uma experiência gastronômica que celebra ingredientes naturais, sabores autênticos e a beleza de cada estação.</p>
          <div className="hero-actions"><a className="button button-light" href="#menu">Explorar nosso menu <ArrowUpRight size={16} /></a><a className="text-link light-link" href="#reservas">Reservar uma experiência <span>↗</span></a></div>
        </div>
        <div className="hero-foot"><span className="scroll-cue"><ArrowDown size={15} /> role para descobrir</span><span>São Paulo — Brasil</span></div>
      </section>

      <section id="essencia" className="essence section-light">
        <div className="section-kicker">01 <span>—</span> Nossa essência</div>
        <div className="essence-grid">
          <div><h2>Natural por essência.<br /><em>Extraordinário por natureza.</em></h2></div>
          <div className="essence-text"><p className="lead">Acreditamos que a verdadeira sofisticação começa na origem.</p><p>Selecionamos ingredientes 100% naturais e valorizamos sua frescura, suas características e a riqueza dos sabores que a natureza oferece. Cada prato é pensado para respeitar o ingrediente, valorizar sua identidade e transformar o simples em uma experiência extraordinária.</p><a className="text-link" href="#ingredientes">Conheça nossa filosofia <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="essence-visual"><div className="essence-photo" role="img" aria-label="Folhas e ingredientes frescos sobre uma mesa" /><div className="vertical-note">ingredientes · tempo · cuidado</div><div className="principles"><div><b>01</b><span>Origem<br />consciente</span></div><div><b>02</b><span>Respeito à<br />sazonalidade</span></div><div><b>03</b><span>Gastronomia<br />autoral</span></div></div></div>
      </section>

      <section id="ingredientes" className="ingredients dark-section">
        <div className="section-kicker light-kicker">02 <span>—</span> A natureza em detalhes</div>
        <div className="ingredients-head"><div><h2>Cada ingrediente<br /><em>tem uma história.</em></h2></div><p>Descubra a origem dos sabores que dão vida à nossa cozinha.</p></div>
        <div className="ingredient-stage"><div className="ingredient-orbit" aria-hidden="true" /><img className="ingredient-main" src={ingredients[activeIngredient].image} alt={ingredients[activeIngredient].name} /><div className="ingredient-info"><span className="ingredient-index">0{activeIngredient + 1} / 04</span><h3>{ingredients[activeIngredient].name}</h3><p>{ingredients[activeIngredient].detail}</p><small>{ingredients[activeIngredient].note}</small></div></div>
        <div className="ingredient-list">{ingredients.map((item, index) => <button key={item.name} className={index === activeIngredient ? 'ingredient-tab active' : 'ingredient-tab'} onClick={() => setActiveIngredient(index)}><span>0{index + 1}</span>{item.name}<ArrowUpRight size={15} /></button>)}</div>
      </section>

      <section id="menu" className="menu-section section-light"><div className="section-kicker">03 <span>—</span> Menu gastronômico</div><div className="menu-head"><h2>Uma cozinha guiada<br /><em>pela natureza.</em></h2><p>Ingredientes selecionados, combinações autorais e sabores que respeitam cada estação.</p></div><div className="category-tabs" role="tablist">{categories.map((item) => <button key={item} className={category === item ? 'category active' : 'category'} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="dish-grid">{filteredDishes.map((dish) => <button className="dish-card" key={dish.name} onClick={() => setSelectedDish(dish)}><div className="dish-image"><img src={dish.image} alt={dish.name} /><span>ver prato <ArrowUpRight size={14} /></span></div><div className="dish-meta"><div><h3>{dish.name}</h3><p>{dish.description}</p></div><strong>{dish.price}</strong></div></button>)}</div></section>

      <section id="experiencia" className="season-section"><div className="season-image" role="img" aria-label="Prato colorido com vegetais da estação" /><div className="season-overlay" /><div className="season-content"><div className="section-kicker light-kicker">04 <span>—</span> A experiência Verdanté</div><h2>A beleza<br />de cada <em>estação.</em></h2><p>Nosso menu acompanha a riqueza dos ingredientes naturais e encontra novas possibilidades em cada época do ano.</p><a className="button button-light" href="#reservas">Conheça nossa experiência <ArrowUpRight size={16} /></a></div><div className="season-stamp">VERDANTÉ<br /><span>cultivar o natural</span></div></section>

      <section id="reservas" className="reservation section-light"><div className="section-kicker">05 <span>—</span> Reservas</div><div className="reservation-grid"><div><h2>Seu próximo momento<br /><em>começa à mesa.</em></h2><p>Escolha a ocasião e envie sua solicitação para viver a experiência VERDANTÉ.</p><div className="reservation-details"><span>Terça a domingo</span><span>12h — 23h</span><span>Rua das Acácias, 108 · Jardins</span></div></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="booking-form">{submitted ? <div className="success-message"><span>✓</span><h3>Solicitação recebida.</h3><p>Este é um fluxo demonstrativo. Entraremos em contato para confirmar sua disponibilidade.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Fazer outra solicitação</button></div> : <><label>Nome<input required name="name" placeholder="Seu nome" /></label><label>Contato<input required name="contact" placeholder="E-mail ou telefone" /></label><div className="form-row"><label>Data<input required type="date" name="date" /></label><label>Horário<select required defaultValue=""><option value="" disabled>Escolha</option><option>12:30</option><option>19:30</option><option>21:00</option></select></label></div><label>Pessoas<select required defaultValue=""><option value="" disabled>Quantidade</option><option>2 pessoas</option><option>3 pessoas</option><option>4 pessoas</option><option>5+ pessoas</option></select></label><label>Observações <span>(opcional)</span><textarea name="notes" placeholder="Alguma ocasião especial?" rows={3} /></label><button className="button button-dark" type="submit">Enviar solicitação <ArrowUpRight size={16} /></button><small>Fluxo demonstrativo — sua reserva só será confirmada após nosso contato.</small></>}</form></div></section>

      <footer className="footer"><div className="footer-top"><a className="logo footer-logo" href="#inicio">VERDANTÉ<span>•</span></a><p>Cultivar o natural.<br /><em>Celebrar o extraordinário.</em></p></div><div className="footer-bottom"><span>© 2026 Verdanté. Conceito demonstrativo.</span><div><a href="#essencia">Essência</a><a href="#menu">Menu</a><a href="#reservas">Reservas</a></div><span>Instagram · contato@verdante.exemplo</span></div></footer>

      {selectedDish && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedDish(null)}><div className="dish-modal" role="dialog" aria-modal="true" aria-label={selectedDish.name} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedDish(null)} aria-label="Fechar"><X /></button><img src={selectedDish.image} alt={selectedDish.name} /><div><span className="eyebrow">{selectedDish.category}</span><h2>{selectedDish.name}</h2><p>{selectedDish.description}</p><strong>{selectedDish.price}</strong></div></div></div>}
    </main>
  )
}
