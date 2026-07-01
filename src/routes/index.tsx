import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Hammer,
  Layers,
  Phone,
  Mail,
  MapPin,
  Ruler,
  PaintRoller,
  Compass,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { BlueprintTransition } from "@/components/BlueprintTransition";
import heroImg from "@/assets/hero-architecture.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import aboutImg from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edifique Construções — Construção e reformas de alto padrão" },
      {
        name: "description",
        content:
          "Edifique Construções: excelência em construção, reformas e acabamentos refinados para residências e empreendimentos de alto padrão.",
      },
      { property: "og:title", content: "Edifique Construções" },
      {
        property: "og:description",
        content:
          "Excelência em construção, reformas e acabamentos de alto padrão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Building2,
    title: "Construção de alto padrão",
    text: "Residências exclusivas projetadas e executadas com precisão técnica e acabamento impecável.",
  },
  {
    icon: Hammer,
    title: "Reformas premium",
    text: "Renovações completas com gestão de obra rigorosa e respeito ao projeto arquitetônico.",
  },
  {
    icon: PaintRoller,
    title: "Acabamentos refinados",
    text: "Mármores, madeiras nobres, marcenaria sob medida e iluminação cênica integrada.",
  },
  {
    icon: Compass,
    title: "Projetos personalizados",
    text: "Acompanhamento próximo do conceito ao detalhe final, em sintonia com arquitetos parceiros.",
  },
  {
    icon: Layers,
    title: "Gerenciamento de obra",
    text: "Cronogramas, orçamentos e fornecedores controlados com transparência e governança.",
  },
  {
    icon: Ruler,
    title: "Consultoria técnica",
    text: "Análise de viabilidade, compatibilização de projetos e curadoria de materiais.",
  },
];

const projects = [
  {
    img: project1,
    title: "Residência Marbella",
    tag: "Construção · 720 m²",
    location: "Jardins, São Paulo",
  },
  {
    img: project2,
    title: "Casa Atlântica",
    tag: "Construção · 980 m²",
    location: "Riviera de São Lourenço",
  },
  {
    img: project3,
    title: "Cobertura Linear",
    tag: "Reforma integral",
    location: "Itaim Bibi, São Paulo",
  },
  {
    img: project4,
    title: "Spa privê Aurora",
    tag: "Acabamento premium",
    location: "Alphaville, SP",
  },
];

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-4">
        <div className="glass rounded-full flex items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full" />
            <span className="font-display font-bold tracking-tight text-ink">
              Edifique
            </span>
            <span className="text-muted-foreground text-sm hidden sm:inline">
              Construções
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
            <a href="#servicos" className="story-link">Serviços</a>
            <a href="#sobre" className="story-link">Sobre</a>
            <a href="#portfolio" className="story-link">Portfólio</a>
            <a href="#contato" className="story-link">Contato</a>
          </nav>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(15,76,92,0.55)] hover:brightness-110"
          >
            Orçamento
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="absolute left-0 top-20 lg:-left-20 lg:top-32">
        <BlueprintTransition />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-8">
            <span className="w-8 h-px bg-primary" /> Construtora premium
          </div>
          <h1
            data-reveal data-delay="80"
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-ink"
          >
            Edifique
            <br />
            <span className="text-primary">Construções</span>
          </h1>
          <p
            data-reveal data-delay="180"
            className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed"
          >
            Excelência em construção, reformas e acabamentos de alto padrão —
            obras executadas com rigor técnico, materiais nobres e cuidado
            artesanal em cada detalhe.
          </p>
          <div data-reveal data-delay="280" className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(15,76,92,0.55)] hover:brightness-110"
            >
              Ver projetos
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium border border-border text-ink transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Nossos serviços
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div
            data-reveal data-delay="120"
            className="relative aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden shadow-[var(--shadow-elevate)]"
          >
            <img
              src={heroImg}
              alt="Residência minimalista de alto padrão construída pela Edifique"
              width={1600}
              height={1100}
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
            />
            <div className="absolute left-6 bottom-6 right-6 glass rounded-xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Em obra</p>
                <p className="text-ink font-semibold">Residência Marbella · 720 m²</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-ink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "18+", label: "Anos de mercado" },
    { value: "120", label: "Obras entregues" },
    { value: "45k m²", label: "Construídos" },
    { value: "100%", label: "Projetos exclusivos" },
  ];
  return (
    <section className="bg-ice border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it, i) => (
          <div key={it.label} data-reveal data-delay={i * 80} className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight">
              {it.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.16em]">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p data-reveal className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Serviços
          </p>
          <h2 data-reveal data-delay="80" className="text-4xl md:text-5xl leading-tight">
            Cada projeto, uma assinatura
            <span className="text-primary"> técnica e estética.</span>
          </h2>
          <p data-reveal data-delay="160" className="mt-6 text-foreground/80 text-lg leading-relaxed">
            Da fundação ao último detalhe de acabamento, cuidamos de tudo com
            uma abordagem precisa, discreta e profundamente comprometida com a
            qualidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal data-delay={i * 70}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevate)]"
            >
              <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-ice py-28 lg:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div data-reveal className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[5/4] shadow-[var(--shadow-soft)]">
            <img
              src={aboutImg}
              alt="Equipe Edifique em obra de alto padrão"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-[1.05]"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p data-reveal className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Sobre a Edifique
          </p>
          <h2 data-reveal data-delay="80" className="text-4xl md:text-5xl leading-tight">
            Construímos com a mesma exigência de quem irá morar.
          </h2>
          <p data-reveal data-delay="160" className="mt-6 text-foreground/80 text-lg leading-relaxed">
            Há quase duas décadas conduzimos obras residenciais e comerciais de
            alto padrão, sempre em parceria próxima com arquitetos, designers e
            clientes. Nossa marca é o equilíbrio entre rigor técnico, gestão
            transparente e um olhar sensível para o detalhe.
          </p>
          <ul className="mt-8 space-y-3 text-foreground/85">
            {[
              "Equipe própria de mestres-de-obra e marceneiros experientes",
              "Curadoria de materiais nobres e fornecedores selecionados",
              "Cronograma e orçamento auditáveis em tempo real",
            ].map((line, i) => (
              <li key={line} data-reveal data-delay={220 + i * 80} className="flex gap-3">
                <span className="mt-2 w-6 h-px bg-primary shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p data-reveal className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Portfólio selecionado
            </p>
            <h2 data-reveal data-delay="80" className="text-4xl md:text-5xl leading-tight">
              Projetos que falam por si.
            </h2>
          </div>
          <a
            data-reveal data-delay="160"
            href="#contato"
            className="story-link text-sm font-medium text-ink"
          >
            Solicitar portfólio completo →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#contato"
              data-reveal data-delay={i * 100}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.tag}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-6 right-6 bottom-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                <p className="text-xs uppercase tracking-[0.18em] opacity-80">{p.tag}</p>
                <h3 className="text-2xl font-display font-semibold mt-1 text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm opacity-85">{p.location}</p>
              </div>
              <div className="p-6 flex items-center justify-between border-t border-border group-hover:border-transparent transition-colors duration-500">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-28 lg:py-36 bg-ice border-y border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p data-reveal className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
          Vamos conversar
        </p>
        <h2 data-reveal data-delay="80" className="text-4xl md:text-6xl leading-[1.05]">
          Seu próximo projeto começa
          <br />
          com uma conversa.
        </h2>
        <p data-reveal data-delay="160" className="mt-6 text-foreground/80 text-lg max-w-2xl mx-auto">
          Conte-nos sobre seu terreno, sua reforma ou seu projeto arquitetônico.
          Retornamos em até 24 horas com uma proposta inicial.
        </p>
        <div data-reveal data-delay="240" className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:contato@edifique.com.br"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(15,76,92,0.55)] hover:brightness-110"
          >
            <Mail className="w-4 h-4" /> Enviar briefing
          </a>
          <a
            href="tel:+551130000000"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium border border-border text-ink transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <Phone className="w-4 h-4" /> +55 11 3000-0000
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full" />
            <span className="font-display font-bold text-ink">Edifique Construções</span>
          </div>
          <p className="mt-4 text-foreground/75 max-w-md leading-relaxed">
            Construção, reformas e acabamentos de alto padrão. Obras conduzidas
            com rigor técnico e sensibilidade estética.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Contato</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2"><Mail className="w-4 h-4 text-primary mt-0.5" /> contato@edifique.com.br</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-primary mt-0.5" /> +55 11 3000-0000</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Av. Paulista, 1000 — São Paulo</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Navegação</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><a href="#servicos" className="story-link">Serviços</a></li>
            <li><a href="#sobre" className="story-link">Sobre</a></li>
            <li><a href="#portfolio" className="story-link">Portfólio</a></li>
            <li><a href="#contato" className="story-link">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Edifique Construções. Todos os direitos reservados.</p>
          <p>CREA · Construtora certificada</p>
        </div>
      </div>
    </footer>
  );
}
