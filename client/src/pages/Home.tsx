import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  Compass,
  Download,
  FileCheck2,
  FileText,
  Flag,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  PenLine,
  Presentation,
  Rocket,
  Search,
  Send,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Module = {
  id: number;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  time: string;
  color: "coral" | "blue" | "gold" | "mint" | "purple";
  summary: string;
  why: string;
  learns: string[];
  steps: { label: string; text: string }[];
  deliverable: string;
  prompt: string;
};

const modules: Module[] = [
  {
    id: 1,
    number: "01",
    eyebrow: "Comece pelo mapa",
    title: "Mapa das oportunidades",
    shortTitle: "Oportunidades",
    icon: Compass,
    time: "20 min",
    color: "coral",
    summary:
      "Transforme a busca por trabalho em uma investigação com direção: descubra onde suas habilidades encontram demandas reais.",
    why:
      "Quem sabe o que procura consegue escolher melhor onde investir energia. Este módulo ajuda você a sair do modo ‘qualquer vaga’ e reconhecer caminhos possíveis, próximos e honestos.",
    learns: [
      "Ler uma vaga procurando sinais de prioridade, não apenas requisitos.",
      "Separar oportunidade de curto prazo de uma direção profissional.",
      "Identificar competências transferíveis em experiências do dia a dia.",
    ],
    steps: [
      { label: "Olhe ao redor", text: "Liste 5 lugares, negócios ou organizações que fazem parte da sua rotina e poderiam precisar das suas habilidades." },
      { label: "Conecte os pontos", text: "Para cada lugar, escreva uma tarefa que você já sabe fazer e uma habilidade que quer desenvolver." },
      { label: "Escolha um norte", text: "Marque duas possibilidades para investigar nesta semana. Direção nasce de pequenos testes." },
    ],
    deliverable: "Um mapa com 3 possibilidades de trabalho e o próximo passo de investigação para cada uma.",
    prompt: "Em qual problema você gostaria de ser a pessoa que ajuda a resolver?",
  },
  {
    id: 2,
    number: "02",
    eyebrow: "Proteja seu caminho",
    title: "Detetive dos golpes",
    shortTitle: "Golpes",
    icon: ShieldAlert,
    time: "18 min",
    color: "blue",
    summary:
      "Aprenda a reconhecer propostas suspeitas antes de compartilhar seus dados, pagar taxas ou colocar sua segurança em risco.",
    why:
      "A pressa e a promessa de dinheiro fácil são usadas para criar decisões impulsivas. Uma checagem simples protege seu tempo, seu dinheiro e sua identidade.",
    learns: [
      "Reconhecer pedidos de pagamento, urgência artificial e promessas desproporcionais.",
      "Verificar domínio, empresa, endereço e canal oficial de contato.",
      "Responder com segurança quando uma proposta parecer estranha.",
    ],
    steps: [
      { label: "Pare e respire", text: "Desconfie de quem exige resposta imediata, segredo ou pagamento para liberar uma vaga." },
      { label: "Faça três buscas", text: "Pesquise o nome da empresa, o CNPJ/endereço divulgado e relatos sobre a vaga em fontes independentes." },
      { label: "Proteja seus dados", text: "Não envie senhas, códigos, documentos completos ou dados bancários antes de validar a oportunidade." },
    ],
    deliverable: "Uma checklist pessoal de segurança para usar antes de responder a qualquer vaga.",
    prompt: "Qual sinal de alerta você vai passar a checar primeiro?",
  },
  {
    id: 3,
    number: "03",
    eyebrow: "Conte sua história",
    title: "Currículo turbo",
    shortTitle: "Currículo",
    icon: FileText,
    time: "35 min",
    color: "gold",
    summary:
      "Monte um currículo direto, legível e adaptável — mesmo que sua experiência ainda esteja começando ou tenha acontecido fora do emprego formal.",
    why:
      "Currículo não é autobiografia: é uma ponte entre o que você já fez e o que a oportunidade precisa. Clareza vale mais do que enfeite.",
    learns: [
      "Escrever um resumo profissional com foco no valor que você entrega.",
      "Transformar tarefas em evidências de competência e resultado.",
      "Adaptar palavras-chave sem inventar experiências.",
    ],
    steps: [
      { label: "Abra com intenção", text: "Escreva 2 linhas dizendo qual tipo de oportunidade procura e quais são seus pontos fortes mais úteis." },
      { label: "Mostre evidências", text: "Troque ‘sou organizado’ por uma situação concreta: ‘organizei pedidos e reduzi atrasos nas entregas da família’." },
      { label: "Faça a revisão final", text: "Confira contato, datas, ortografia e se o documento cabe em uma página fácil de escanear." },
    ],
    deliverable: "Uma versão de currículo de uma página, pronta para personalizar para duas vagas.",
    prompt: "Que resultado pequeno prova que você é mais capaz do que imagina?",
  },
  {
    id: 4,
    number: "04",
    eyebrow: "Abra conversas",
    title: "Mensagem que abre portas",
    shortTitle: "Networking",
    icon: MessageCircle,
    time: "25 min",
    color: "mint",
    summary:
      "Escreva mensagens humanas e objetivas para pedir informação, apresentar seu trabalho e criar conexões sem parecer que está implorando por uma vaga.",
    why:
      "Muitas oportunidades começam antes do anúncio. Uma boa mensagem respeita o tempo da outra pessoa e deixa claro como ela pode ajudar.",
    learns: [
      "Escolher a pessoa certa para cada tipo de pergunta.",
      "Escrever mensagens curtas, específicas e fáceis de responder.",
      "Fazer follow-up sem pressionar ou desaparecer.",
    ],
    steps: [
      { label: "Dê contexto", text: "Diga quem você é, por que escolheu falar com aquela pessoa e o que admira ou quer entender." },
      { label: "Faça um pedido pequeno", text: "Peça 10 minutos, uma indicação de fonte ou uma resposta para uma dúvida — não ‘qualquer oportunidade’." },
      { label: "Agradeça e continue", text: "Registre o que aprendeu e mantenha a relação viva mesmo quando não houver uma vaga imediata." },
    ],
    deliverable: "Duas mensagens prontas: uma para pedir orientação e outra para fazer follow-up.",
    prompt: "Que pergunta inteligente você gostaria de fazer a alguém que já está na área?",
  },
  {
    id: 5,
    number: "05",
    eyebrow: "Chegue preparado",
    title: "Entrevista sem medo",
    shortTitle: "Entrevista",
    icon: Presentation,
    time: "30 min",
    color: "purple",
    summary:
      "Troque respostas decoradas por preparação real: organize histórias, pratique exemplos e entre na conversa sabendo também o que perguntar.",
    why:
      "Entrevista é uma conversa de decisão para os dois lados. Preparar exemplos concretos reduz a ansiedade e ajuda você a escolher ambientes que combinam com seu momento.",
    learns: [
      "Responder perguntas comportamentais usando contexto, ação e resultado.",
      "Falar sobre pontos fortes e desafios com honestidade e repertório.",
      "Avaliar cultura, rotina, remuneração e próximos passos.",
    ],
    steps: [
      { label: "Separe três histórias", text: "Prepare um exemplo de desafio, um de colaboração e um de aprendizado. A história precisa ter começo, ação e resultado." },
      { label: "Pratique em voz alta", text: "Grave uma resposta de 90 segundos. Ajuste clareza, ritmo e palavras que você repete sem perceber." },
      { label: "Leve perguntas", text: "Pergunte como é um dia típico, como o sucesso é medido e qual será o próximo passo do processo." },
    ],
    deliverable: "Um roteiro de preparação com 3 histórias e 4 perguntas para levar à entrevista.",
    prompt: "Qual experiência mostra melhor a forma como você trabalha com outras pessoas?",
  },
];

const iconById: Record<number, LucideIcon> = Object.fromEntries(modules.map((module) => [module.id, module.icon]));

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function safePdfText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function createCertificatePdf(name: string) {
  const cleanName = safePdfText(name.trim());
  const issuedAt = new Date();
  const pageWidth = 841.89;
  const pageHeight = 595.28;
  const text = (x: number, y: number, size: number, value: string, color = "0.95 0.95 0.92") =>
    `${color} rg BT /F1 ${size} Tf ${x} ${y} Td (${safePdfText(value)}) Tj ET`;
  const content = [
    "q",
    "0.055 0.09 0.16 rg 0 0 841.89 595.28 re f",
    "0.96 0.36 0.28 rg 0 0 16 595.28 re f",
    "0.96 0.36 0.28 rg 825 0 16 595.28 re f",
    "0.96 0.36 0.28 RG 32 32 777.89 531.28 re S",
    "0.94 0.78 0.38 RG 50 50 741.89 495.28 re S",
    "0.94 0.78 0.38 rg 378 448 86 2 re f",
    text(60, 472, 11, "TRILHA DO TRABALHO", "0.94 0.78 0.38"),
    text(60, 405, 38, "CERTIFICADO", "0.95 0.95 0.92"),
    text(60, 362, 18, "de conclusao", "0.96 0.36 0.28"),
    text(60, 285, 13, "Certificamos que", "0.72 0.76 0.78"),
    text(60, 235, 31, cleanName || "Participante", "0.95 0.95 0.92"),
    "0.72 0.76 0.78 RG 60 214 520 1 re S",
    text(60, 176, 13, "concluiu a jornada formativa com 5 modulos praticos", "0.72 0.76 0.78"),
    text(60, 153, 13, "sobre oportunidades, seguranca, curriculo, conexoes e entrevistas.", "0.72 0.76 0.78"),
    text(60, 92, 11, `Emitido em ${issuedAt.toLocaleDateString("pt-BR")}`, "0.94 0.78 0.38"),
    text(655, 92, 11, "TRABALHO / 2026", "0.94 0.78 0.38"),
    "Q",
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function ProgressRing({ value }: { value: number }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="progress-ring" aria-label={`${value}% concluído`}>
      <svg viewBox="0 0 64 64" role="img">
        <circle className="progress-ring-track" cx="32" cy="32" r={radius} />
        <circle className="progress-ring-value" cx="32" cy="32" r={radius} style={{ strokeDasharray: circumference, strokeDashoffset: offset }} />
      </svg>
      <strong>{value}%</strong>
    </div>
  );
}

export default function Home() {
  const [selectedId, setSelectedId] = useState(1);
  const [completed, setCompleted] = useState<Record<number, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("trilha-completed") || "{}") as Record<number, boolean>;
    } catch {
      return {};
    }
  });
  const [notes, setNotes] = useState(() => localStorage.getItem("trilha-notes") || "");
  const [name, setName] = useState(() => localStorage.getItem("trilha-name") || "");
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedModule = modules.find((module) => module.id === selectedId) || modules[0];
  const completedCount = modules.filter((module) => completed[module.id]).length;
  const progress = Math.round((completedCount / modules.length) * 100);
  const isComplete = completedCount === modules.length;
  const SelectedIcon = selectedModule.icon;

  useEffect(() => {
    localStorage.setItem("trilha-completed", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem("trilha-notes", notes);
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("trilha-name", name);
  }, [name]);

  const nextAction = useMemo(() => {
    const next = modules.find((module) => !completed[module.id]);
    return next ? `Continue em ${next.shortTitle}` : "Jornada concluída";
  }, [completed]);

  const selectModule = (id: number) => {
    setSelectedId(id);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("module-detail")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const toggleComplete = () => {
    const alreadyComplete = Boolean(completed[selectedId]);
    setCompleted((current) => ({ ...current, [selectedId]: !alreadyComplete }));
    setNotice(alreadyComplete ? "Módulo reaberto para você revisar." : `Módulo ${selectedModule.number} concluído. Bom avanço!`);
    window.setTimeout(() => setNotice(""), 3200);
    if (!alreadyComplete && selectedId < modules.length) {
      const next = modules.find((module) => module.id > selectedId && !completed[module.id]);
      if (next) setSelectedId(next.id);
    }
  };

  const downloadCertificate = () => {
    if (!name.trim()) {
      setNotice("Digite seu nome para personalizar o certificado.");
      return;
    }
    const blob = createCertificatePdf(name);
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `certificado-trilha-do-trabalho-${name.trim().toLowerCase().replace(/\s+/g, "-")}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
    setCertificateGenerated(true);
    setNotice("Seu certificado PDF foi baixado.");
    window.setTimeout(() => setNotice(""), 4000);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Trilha do Trabalho, início">
            <span className="brand-mark"><BriefcaseBusiness size={18} strokeWidth={2.4} /></span>
            <span><strong>trilha</strong><em>do trabalho</em></span>
          </a>
          <nav className={`topnav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#jornada" onClick={() => setMenuOpen(false)}>A jornada</a>
            <a href="#modulos" onClick={() => setMenuOpen(false)}>Módulos</a>
            <a href="#conclusao" onClick={() => setMenuOpen(false)}>Certificado</a>
          </nav>
          <div className="topbar-actions">
            <span className="progress-chip"><span className="chip-dot" /> {completedCount}/5 concluídos</span>
            <button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
              {menuOpen ? <span>×</span> : <span>☰</span>}
            </button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow light"><Sparkles size={14} /> uma jornada prática para o próximo passo</p>
              <h1>Seu trabalho<br /><span>começa aqui.</span></h1>
              <p className="hero-lede">Cinco encontros curtos para encontrar oportunidades, se proteger de golpes e apresentar o que você sabe fazer com mais confiança.</p>
              <div className="hero-actions">
                <button className="button button-coral" onClick={() => selectModule(completedCount < 5 ? (modules.find((module) => !completed[module.id])?.id || 1) : 1)}>
                  {completedCount ? "Continuar trilha" : "Começar a trilha"} <ArrowRight size={17} />
                </button>
                <a className="text-link light-link" href="#jornada">Como funciona <ChevronRight size={15} /></a>
              </div>
              <div className="hero-proof"><span><CheckCircle2 size={16} /> no seu ritmo</span><span><CheckCircle2 size={16} /> conteúdo direto</span><span><CheckCircle2 size={16} /> certificado PDF</span></div>
            </div>
            <div className="hero-card-wrap" aria-label="Resumo do seu progresso">
              <div className="hero-card-back" />
              <div className="hero-card">
                <div className="hero-card-top"><span>SEU PONTO DE PARTIDA</span><span className="card-status"><span className="status-dot" /> aberto</span></div>
                <div className="hero-progress-row"><ProgressRing value={progress} /><div><p className="hero-progress-label">progresso geral</p><h2>{progress === 0 ? "Vamos começar?" : progress === 100 ? "Você chegou lá." : `${completedCount} de 5 módulos`}</h2><p className="muted-copy">{nextAction}</p></div></div>
                <div className="mini-roadmap">{modules.map((module) => { const Icon = module.icon; return <button className={`mini-step ${completed[module.id] ? "done" : ""} ${selectedId === module.id ? "current" : ""}`} key={module.id} onClick={() => selectModule(module.id)} title={module.title}><span>{completed[module.id] ? <Check size={14} /> : <Icon size={14} />}</span><small>{module.number}</small></button>; })}</div>
                <div className="card-footer-note"><LockKeyhole size={14} /> progresso salvo neste navegador</div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section" id="jornada">
          <div className="container intro-grid">
            <div className="intro-statement"><p className="eyebrow">Por que esta trilha existe</p><h2>Menos ansiedade.<br /><span>Mais próximos passos.</span></h2></div>
            <div className="intro-copy"><p>Procurar trabalho pode parecer um labirinto quando ninguém mostra o caminho. Aqui você encontra um roteiro possível: observar, verificar, organizar, conversar e praticar.</p><p>Não é sobre ter todas as respostas hoje. É sobre sair com ferramentas que continuam úteis depois que esta página termina.</p><div className="intro-signature"><span className="signature-line" /> <span>feito para começar de onde você está</span></div></div>
          </div>
          <div className="container stats-row"><div className="stat-item"><strong>05</strong><span>módulos com aplicação real</span></div><div className="stat-item"><strong>02h</strong><span>de conteúdo para fazer no seu ritmo</span></div><div className="stat-item"><strong>01</strong><span>certificado PDF ao concluir</span></div></div>
        </section>

        <section className="modules-section" id="modulos">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">O caminho completo</p><h2>Uma trilha que <span>anda com você.</span></h2></div><div className="section-meta"><span className="meta-kicker">módulo selecionado</span><strong>{selectedModule.number} <span>/ 05</span></strong></div></div>
            <div className="learning-layout">
              <aside className="module-list" aria-label="Módulos da trilha">
                {modules.map((module) => { const Icon = module.icon; const done = Boolean(completed[module.id]); return <button key={module.id} className={`module-list-item color-${module.color} ${selectedId === module.id ? "selected" : ""} ${done ? "completed" : ""}`} onClick={() => selectModule(module.id)}><span className="module-number">{done ? <Check size={15} /> : module.number}</span><span className="module-list-text"><small>{module.eyebrow}</small><strong>{module.title}</strong><em><Clock3 size={13} /> {module.time}</em></span><Icon className="module-list-icon" size={19} /></button>; })}
                <div className="aside-tip"><Lightbulb size={17} /><div><strong>Um jeito bom de usar</strong><p>Faça um módulo por vez e anote uma ação pequena para colocar em prática ainda hoje.</p></div></div>
              </aside>

              <article className={`module-detail color-${selectedModule.color}`} id="module-detail">
                <div className="module-detail-top"><div className="module-icon-large"><SelectedIcon size={27} /></div><div><p className="eyebrow">{selectedModule.eyebrow} <span className="eyebrow-separator">/</span> módulo {selectedModule.number}</p><h3>{selectedModule.title}</h3></div><span className={`completion-badge ${completed[selectedModule.id] ? "is-done" : ""}`}>{completed[selectedModule.id] ? <><CheckCircle2 size={15} /> concluído</> : <><Clock3 size={15} /> {selectedModule.time}</>}</span></div>
                <p className="module-summary">{selectedModule.summary}</p>
                <div className="module-insight"><Target size={18} /><div><strong>Por que isso importa</strong><p>{selectedModule.why}</p></div></div>
                <div className="detail-columns"><div><p className="detail-label"><BookOpen size={15} /> nesta etapa você aprende</p><ul className="learn-list">{selectedModule.learns.map((learn) => <li key={learn}><CheckCircle2 size={16} /> <span>{learn}</span></li>)}</ul></div><div className="deliverable-card"><p className="detail-label"><FileCheck2 size={15} /> saída prática</p><p>{selectedModule.deliverable}</p></div></div>
                <div className="steps-block"><div className="steps-heading"><div><p className="detail-label"><ClipboardCheck size={15} /> roteiro de aplicação</p><h4>Faça assim, sem complicar.</h4></div><span>3 passos</span></div><div className="steps-list">{selectedModule.steps.map((step, index) => <div className="step-row" key={step.label}><div className="step-index">0{index + 1}</div><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div></div>
                <div className="reflection-card"><div className="reflection-icon"><PenLine size={19} /></div><div><p className="detail-label">pare e registre</p><h4>{selectedModule.prompt}</h4><p className="reflection-helper">Uma frase já é suficiente. Você pode voltar aqui depois.</p></div></div>
                <div className="module-action-row"><label className="sr-only" htmlFor="reflection-note">Sua anotação</label><textarea id="reflection-note" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Escreva uma ideia, exemplo ou próximo passo..." /><button className={`button complete-button ${completed[selectedModule.id] ? "is-complete" : ""}`} onClick={toggleComplete}>{completed[selectedModule.id] ? <><CheckCircle2 size={17} /> Reabrir módulo</> : <>Marcar como concluído <ArrowRight size={17} /></>}</button></div>
              </article>
            </div>
          </div>
        </section>

        <section className={`completion-section ${isComplete ? "is-ready" : ""}`} id="conclusao">
          <div className="container completion-inner">
            <div className="completion-copy"><p className="eyebrow">Seu próximo marco</p><h2>{isComplete ? <>Você fez o caminho.<br /><span>Agora leve isso com você.</span></> : <>Cada módulo concluído<br /><span>é um passo visível.</span></>}</h2><p>{isComplete ? "Seu certificado está pronto. Coloque seu nome abaixo e baixe um registro bonito dessa conquista para guardar ou compartilhar." : "Termine os cinco módulos para liberar seu certificado de conclusão. Seu progresso fica salvo neste navegador."}</p><div className="completion-checks"><span className={completedCount >= 1 ? "active" : ""}><Check size={14} /> mapa</span><span className={completedCount >= 3 ? "active" : ""}><Check size={14} /> repertório</span><span className={completedCount === 5 ? "active" : ""}><Check size={14} /> certificado</span></div></div>
            <div className="certificate-panel"><div className="certificate-stamp"><Award size={22} /><span>trilha<br />concluída</span></div><div className="certificate-panel-content"><div className="certificate-panel-top"><span>certificado de conclusão</span><BadgeCheck size={20} /></div>{isComplete ? <><label htmlFor="participant-name">Como seu nome deve aparecer?</label><div className="name-input-wrap"><UserRound size={17} /><input id="participant-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Digite seu nome completo" /></div><button className="button button-coral certificate-button" onClick={downloadCertificate}>{certificateGenerated ? "Baixar novamente" : "Gerar meu certificado PDF"} <Download size={17} /></button><p className="certificate-note"><LockKeyhole size={13} /> gerado no seu navegador, sem envio de dados</p></> : <div className="certificate-locked"><LockKeyhole size={25} /><strong>Seu certificado está esperando por você.</strong><p>Conclua os {5 - completedCount} módulos restantes para liberar o download.</p><div className="locked-progress"><span style={{ width: `${progress}%` }} /></div><small>{completedCount}/5 módulos completos</small></div>}</div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><BriefcaseBusiness size={17} strokeWidth={2.4} /></span><span><strong>trilha</strong><em>do trabalho</em></span></div><p>Conhecimento prático para o próximo passo.</p><div className="footer-links"><a href="#inicio">voltar ao início</a><span>© 2026</span></div></div></footer>
      {notice && <div className="notice" role="status"><CheckCircle2 size={17} /> {notice}</div>}
    </div>
  );
}

void iconById;
void CalendarDays;
void CircleHelp;
void Flag;
void Lightbulb;
void Rocket;
void Search;
void Send;
void TrendingUp;
void UsersRound;
