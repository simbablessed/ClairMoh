import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Heart, Users, Compass, BookOpen, ShieldCheck, Sparkles, HandHeart, MapPin, Menu, X, Quote, Check, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import community from '@/assets/community.jpg';
import editorialPortrait from '@/assets/clair_editorial.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Clair Mutyambizi | Social Work, Research & Impact' },
    { name: 'description', content: 'Meet Clair Mutyambizi, a social work professional supporting people, strengthening systems, and creating meaningful change through practice and research.' },
    { property: 'og:title', content: 'Clair Mutyambizi | People at the Heart of Change' },
    { property: 'og:description', content: 'Social work, professional support, and research. Discover Clair’s people-centered approach and Her Gentle Reset Initiative.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const work = [
  { icon: Users, title: 'Social Work & Human Services', description: 'Supporting children, women, and communities through compassionate, person-centered practice.', detail: 'My practice brings together child protection and safeguarding, mental health and psychosocial support, women’s wellbeing, and gender-based violence support. I focus on dignity, safety, and the strengths of each person and community.', areas: ['Child protection & safeguarding', 'Mental health & psychosocial support', 'Women’s wellbeing & GBV support', 'Community engagement'] },
  { icon: Compass, title: 'Administration & Professional Support', description: 'Connecting people, programmes, and processes so meaningful work can move forward.', detail: 'Behind every effective programme are thoughtful coordination and strong systems. My work includes programme facilitation, monitoring and evaluation, communication, and administrative support, helping teams stay organised and focused on people.', areas: ['Programme coordination & facilitation', 'Monitoring & evaluation', 'Organisational support', 'Communication & operations'] },
  { icon: BookOpen, title: 'Research & Workforce Wellbeing', description: 'Turning curiosity and evidence into healthier workplaces and more informed practice.', detail: 'My research interests sit at the intersection of mental health, resilience, women’s wellbeing, and doctoral research. I am interested in how evidence can improve everyday practice and support the professionals who care for others.', areas: ['Mental health & resilience', 'Women’s wellbeing', 'Workforce wellbeing', 'Evidence-informed practice'] },
];
const values = [
  { icon: Heart, title: 'Dignity', text: 'Respect for every person.' },
  { icon: HandHeart, title: 'Empathy', text: 'Understanding without judgment.' },
  { icon: ShieldCheck, title: 'Safety', text: 'Supportive, protective spaces.' },
  { icon: Check, title: 'Accountability', text: 'Responsibility for our impact.' },
  { icon: Sparkles, title: 'Learning', text: 'Always open to growth.' },
  { icon: Users, title: 'Collaboration', text: 'Meaningful change, together.' },
];
const nav = [['About', '#about'], ['My work', '#work'], ['Simuka Tiende', '#initiative'], ['Experience', '#experience']];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [initiativeOpen, setInitiativeOpen] = useState(false);
  const activeWork = selected === null ? undefined : work[selected];
  return <>
    <header className="site-header">
      <a href="#" aria-label="Clair Mutyambizi home"><div className="brand-name">Clair Mutyambizi<span className="text-primary">.</span></div><div className="brand-subtitle">SOCIAL WORK · RESEARCH · IMPACT</div></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<Button asChild variant="portfolio" size="lg"><a href="#contact">Let’s connect <ArrowUpRight /></a></Button></nav>
      <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...nav, ['Let’s connect', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>
    <main>
      <section className="hero" aria-label="Meet Clair Mutyambizi">
        <img className="hero-photo" src={editorialPortrait} alt="Clair Mutyambizi wearing glasses and a red blouse" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-inner reveal">
          <p className="eyebrow">People. Purpose. Possibility.</p>
          <h1><span>Clair</span><span>Mutyambizi<span className="text-primary inline!">.</span></span></h1>
          <div className="hero-role">Social Work Professional <i /> Researcher <i /> Changemaker</div>
          <p className="hero-copy">A compassionate approach to people.<br />A thoughtful approach to practice.<br />A lasting commitment to positive change.</p>
          <div className="hero-actions"><Button variant="portfolio" size="lg" asChild><a href="#work">Discover my work <ArrowUpRight /></a></Button><a className="text-link mt-0!" href="#about">A little about me <ArrowRight size={15} /></a></div>
        </div>
        <div className="hero-note"><Heart size={20} /><span>People at the heart of everything.</span></div>
      </section>
      <div className="manifesto"><p>Supporting people. Strengthening systems.</p><small>COMPASSION IN PRACTICE. PURPOSE IN ACTION.</small><Leaf className="text-primary" size={25} strokeWidth={1} /></div>
      <section className="section" id="work">
        <div className="section-heading"><div><p className="eyebrow">Where purpose meets practice</p><h2>Three perspectives.<br /><em>One human-centered mission.</em></h2></div><p>My work lives at the intersection of people, practice, and research, contributing to safer, healthier, and more resilient communities.</p></div>
        <div className="work-grid">{work.map((item, index) => <article className="work-item" key={item.title}><div className="work-top"><item.icon /><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p><Button variant="editorial" onClick={() => setSelected(index)}>Explore this area <ArrowUpRight /></Button></article>)}</div>
      </section>
      <section className="about-band" id="about"><div className="section about-grid">
        <img className="about-photo" src={editorialPortrait} loading="lazy" width={1536} height={1024} alt="Portrait of Clair Mutyambizi" />
        <div className="about-copy"><p className="eyebrow">The person behind the practice</p><h2>Rooted in empathy.<br /><em>Driven by purpose.</em></h2><p>I am a qualified Social Work professional with over five years of experience across child protection, safeguarding, mental health and psychosocial support, programme facilitation, and organisational support.</p><p>I care deeply about supporting people and communities, and the professionals who serve them. My training and experience have shaped a holistic, person-centered approach to everything I do.</p><a className="text-link" href="#experience">Get to know my journey <ArrowRight size={16} /></a></div>
        <div className="values"><div className="values-title">WHAT GUIDES ME</div>{values.map(value => <div className="value" key={value.title}><value.icon /><div><h4>{value.title}</h4><p>{value.text}</p></div></div>)}</div>
      </div></section>
      <section className="quote-band"><Quote size={28} /><blockquote>“Meaningful change happens when we listen, work together and invest in people — at every level.”</blockquote><p>Clair Mutyambizi</p></section>
      <section className="initiative" id="initiative"><img src={community} alt="Women’s hands joined in a gesture of care and mutual support" loading="lazy" width={1536} height={1024} /><div className="initiative-copy"><p className="eyebrow">Simuka Tiende Mwanasikana</p><h2>Her Gentle<br /><em>Reset Initiative.</em></h2><p>A women’s psychosocial support initiative creating safe spaces for women to be heard, supported, and reminded of their dignity and strength.</p><Button variant="portfolio" size="lg" onClick={() => setInitiativeOpen(true)}>Discover the initiative <ArrowUpRight /></Button></div></section>
      <section className="section" id="experience"><div className="section-heading"><div><p className="eyebrow">A journey of meaningful work</p><h2>Building people.<br /><em>Creating change.</em></h2></div><p>A snapshot of my professional journey in social work, programme support, facilitation, monitoring and evaluation, and leadership.</p></div><div className="experience-list">{[
        ['Child Protection & Safeguarding', 'Creating safer environments for children and communities.'],
        ['Programme Support & M&E', 'Facilitation, coordination, and monitoring and evaluation.'],
        ['Leadership & Operations', 'Supporting teams and strengthening organisational systems.'],
        ['Research & Academic Growth', 'Connecting learning and evidence with real-world practice.'],
      ].map(([title, description], i) => <div className="experience-row" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={18} className="text-primary" /></div>)}</div></section>
      <section className="contact-band" id="contact"><div className="contact-inner"><div><p className="eyebrow">Good things begin with a conversation</p><h2>Let’s make a<br /><em>meaningful connection.</em></h2></div><div><a className="contact-email" href="mailto:clairmutyambizi@gmail.com">clairmutyambizi@gmail.com <ArrowUpRight size={26} /></a><p className="contact-location"><MapPin size={14} /> Zimbabwe · Open to international opportunities</p></div></div></section>
    </main>
    <footer className="footer"><a href="#" className="brand-name text-foreground">Clair Mutyambizi.</a><p>© 2026 Clair Mutyambizi. All rights reserved.</p><a href="#" className="flex items-center gap-2">Back to top <ArrowUpRight size={14} /></a></footer>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="sm:max-w-lg"><DialogHeader><DialogTitle className="font-display text-3xl">{activeWork?.title}</DialogTitle><DialogDescription className="leading-relaxed pt-4">{activeWork?.detail}</DialogDescription></DialogHeader><ul className="space-y-3 my-4">{activeWork?.areas.map(area => <li key={area} className="flex items-center gap-3 text-sm"><Check size={16} className="text-primary" />{area}</li>)}</ul><Button variant="portfolio" asChild><a href="mailto:clairmutyambizi@gmail.com">Connect with Clair <ArrowUpRight /></a></Button></DialogContent></Dialog>
    <Dialog open={initiativeOpen} onOpenChange={setInitiativeOpen}><DialogContent className="sm:max-w-lg"><DialogHeader><p className="eyebrow mb-3">Simuka Tiende Mwanasikana</p><DialogTitle className="font-display text-4xl">Her Gentle Reset Initiative</DialogTitle><DialogDescription className="leading-relaxed pt-4">A women’s psychosocial support initiative grounded in dignity, empathy, and connection. A space for women to feel heard and supported, and to reconnect with their strength.</DialogDescription></DialogHeader><p className="text-sm text-muted-foreground my-3">For enquiries or conversations about the initiative, get in touch with Clair.</p><Button variant="portfolio" asChild><a href="mailto:clairmutyambizi@gmail.com?subject=Her%20Gentle%20Reset%20Initiative">Enquire about the initiative <ArrowUpRight /></a></Button></DialogContent></Dialog>
  </>;
}
