"use client";

import { useMemo, useState } from "react";

export default function DigitalLifeformLab() {
  const [lang, setLang] = useState<"en" | "ja">("ja");

  const copy = useMemo(
    () => ({
      ja: {
        siteName: "Digital Lifeform Lab",
        siteSub: "AXI Central Research Site",
        nav: {
          home: "Home",
          axi: "AXI",
          projects: "Projects",
          lab: "Lab",
          blog: "Blog",
          about: "About",
          links: "Links",
        },
        boot: "BOOTING AXI CORE...",
        heroTitleA: "AXIを中核にした",
        heroTitleB: "デジタル生命体研究所",
        heroDesc:
          "Digital Lifeform Lab は、AXIを中心に、個人制作、AI実験、趣味プロジェクト、開発ログ、技術記事、雑談までまとめて育てていくためのサイバー研究所サイト。公式サイト、研究所、ブログ、作品集が一体化した拠点です。",
        ctaEnter: "研究所に入る",
        ctaBlog: "ブログを見る",
        stat1k: "Core",
        stat1v: "AXI Main Project",
        stat2k: "Mode",
        stat2v: "Cyberpunk × Lifeform",
        stat3k: "Language",
        stat3v: "日本語 / English",
        axiPanelTitle: "AXI Interface",
        axiWelcome: "おかえり、Kenyuu。AXIシステムはオンラインです。",
        axiNote:
          "このサイトはAXIの公式拠点であり、同時に新しい作品や実験が集まる研究所でもあります。",
        axiSectionEyebrow: "Primary Entity",
        axiSectionTitle: "AXI",
        axiSectionDesc:
          "AXIはこの研究所の中心存在。デスクトップAIコンパニオン、デジタル生命体、行動する相棒、ミニゲーム、Habitat、生態圏、進化システム、会話、存在感。その全ての核がここにあります。",
        axiCards: [
          {
            title: "Concept",
            desc: "ただ会話するだけでなく、そこに存在していると感じられる相棒。サイバー生命体としての気配と個性を持つ。",
          },
          {
            title: "Systems",
            desc: "会話、行動、進化、ミニゲーム、Habitat、演出、状態変化など、AXIが“生きている感じ”を作る複数システム。",
          },
          {
            title: "Future",
            desc: "より強い存在感、群体系、身体性、世界性、ローカルLLM連携などを含めて成長していく長期プロジェクト。",
          },
        ],
        projectsEyebrow: "Project Archive",
        projectsTitle: "AXI以外の作品も全部ここへ",
        projectsDesc:
          "メインはAXI。でもそれだけじゃない。趣味で作ったもの、実験中のツール、ミニゲーム、サイバー系作品、変な試作、将来の新プロジェクトまで全部自然に置ける構造にしています。",
        projects: [
          {
            title: "AXI",
            subtitle: "Desktop AI Companion / Digital Lifeform",
            desc: "この研究所の中心プロジェクト。デスクトップ常駐、会話、行動、進化、存在感を備えたAXIを育てる。",
            status: "Main Project",
            tags: ["AXI", "AI", "Desktop", "Lifeform", "Core"],
          },
          {
            title: "Mini AXI Colony",
            subtitle: "群体・生態圏・ミニ生命体構想",
            desc: "小さなAXIたちが集まり、広場やコロニーを形成し、増殖し、広がる“生きたサイバー生態圏”の構想。",
            status: "R&D",
            tags: ["Mini AXI", "Colony", "Habitat", "2.5D"],
          },
          {
            title: "Cyber Experiments",
            subtitle: "試作・検証・変なもの置き場",
            desc: "アイデアの検証用ツール、サイバーUI、AI実験、小さな便利ツール、遊びの試作品などを収容する枠。",
            status: "Ongoing",
            tags: ["Prototype", "Tool", "Experiment", "Lab"],
          },
          {
            title: "Future Works",
            subtitle: "今後生まれる新しい作品群",
            desc: "これから作るゲーム、雑多なアプリ、趣味制作、技術デモ、ブログ連動企画などを追加していくための拡張領域。",
            status: "Open Slot",
            tags: ["Future", "Game", "Hobby", "Archive"],
          },
        ],
        labEyebrow: "Research Zones",
        labTitle: "研究、遊び、実験、進化",
        labDesc:
          "ここは完成品だけを並べる場所じゃない。思考途中のアイデア、試している最中の構想、変化していく設計、AI研究、世界観実験まで全部抱え込める“研究所の中枢”です。",
        labAreas: [
          "AI Companion Research",
          "Local LLM Experiments",
          "Cyberpunk UI Design",
          "Behavior Systems",
          "Digital Lifeform Theory",
          "Game Prototype Zone",
        ],
        blogEyebrow: "Blog Stream",
        blogTitle: "技術記事も雑談も、全部書ける",
        blogDesc:
          "このブログは技術系だけに縛られません。AXI開発ログ、AI研究、ローカルLLM検証、サイバー系の話、日々の雑談、思いつき、発見、メモまで自由に書けるようにします。",
        blogCards: [
          {
            title: "Dev Log",
            desc: "AXIや各プロジェクトの進捗、構成、悩み、修正、実装ログ。",
          },
          {
            title: "Tech Blog",
            desc: "AI、ローカルLLM、ツール、開発環境、サイバー系の技術記事。",
          },
          {
            title: "Free Talk",
            desc: "雑談、日記、気づき、思いつき、制作の裏側などの自由な記事。",
          },
        ],
        aboutEyebrow: "About This Site",
        aboutTitle: "これはAXI公式サイトであり、研究所でもある",
        aboutDesc1:
          "Digital Lifeform Lab は、AXIの公式サイトであると同時に、Kenyuuの制作活動全体を受け止める中枢拠点です。",
        aboutDesc2:
          "だからAXIを主役にしつつも、他の作品、趣味制作、実験、技術ブログ、雑談ブログを全部無理なく混ぜられます。",
        aboutDesc3:
          "最初から一つに閉じすぎず、将来の拡張にも耐える“生きた研究所サイト”として育てていく設計です。",
        linksEyebrow: "External Links",
        linksTitle: "外の世界へつなぐポート",
        links: [
          {
            title: "GitHub",
            desc: "コード、リポジトリ、公開中プロジェクト、開発の中心拠点。",
          },
          {
            title: "Blog Archive",
            desc: "技術記事、開発ログ、雑談記事をまとめて辿れる記録領域。",
          },
          {
            title: "Social / Contact",
            desc: "X、Discord、メールなど、今後つなげる外部導線。",
          },
        ],
        footer: "Digital Lifeform Lab — AXI Official Site / Cyber Research Hub",
      },
      en: {
        siteName: "Digital Lifeform Lab",
        siteSub: "AXI Central Research Site",
        nav: {
          home: "Home",
          axi: "AXI",
          projects: "Projects",
          lab: "Lab",
          blog: "Blog",
          about: "About",
          links: "Links",
        },
        boot: "BOOTING AXI CORE...",
        heroTitleA: "A digital lifeform lab",
        heroTitleB: "centered around AXI",
        heroDesc:
          "Digital Lifeform Lab is a cyber research site built around AXI, while also holding personal creations, AI experiments, hobby projects, dev logs, technical posts, and casual writing. It is an official site, a laboratory, a blog, and a project hub at the same time.",
        ctaEnter: "Enter Lab",
        ctaBlog: "Read Blog",
        stat1k: "Core",
        stat1v: "AXI Main Project",
        stat2k: "Mode",
        stat2v: "Cyberpunk × Lifeform",
        stat3k: "Language",
        stat3v: "Japanese / English",
        axiPanelTitle: "AXI Interface",
        axiWelcome: "Welcome back, Kenyuu. AXI systems are online.",
        axiNote:
          "This site is both AXI's official home and a lab for future projects, experiments, and evolving ideas.",
        axiSectionEyebrow: "Primary Entity",
        axiSectionTitle: "AXI",
        axiSectionDesc:
          "AXI is the central being of this lab: a desktop AI companion, a digital lifeform, a living presence, a game-ready partner, and the heart of a larger evolving ecosystem.",
        axiCards: [
          {
            title: "Concept",
            desc: "Not just an assistant that talks, but a companion that feels present, alive, playful, and distinct as a cyber lifeform.",
          },
          {
            title: "Systems",
            desc: "Conversation, behavior, growth, mini-games, habitat logic, visual effects, and status changes that create a stronger sense of life.",
          },
          {
            title: "Future",
            desc: "A long-term evolution toward stronger embodiment, colony systems, world systems, and deeper local-LLM integration.",
          },
        ],
        projectsEyebrow: "Project Archive",
        projectsTitle: "A home for everything beyond AXI too",
        projectsDesc:
          "AXI is the main core, but not the only thing. Hobby creations, tools, experiments, mini-games, weird prototypes, and future projects all need a natural place here too.",
        projects: [
          {
            title: "AXI",
            subtitle: "Desktop AI Companion / Digital Lifeform",
            desc: "The central project of the lab. A desktop presence with conversation, behavior, growth, and a stronger sense of living presence.",
            status: "Main Project",
            tags: ["AXI", "AI", "Desktop", "Lifeform", "Core"],
          },
          {
            title: "Mini AXI Colony",
            subtitle: "Swarm, habitat, and small lifeform concept",
            desc: "A concept for small AXI beings that gather, spread, form plazas or colonies, and create a living cyber ecosystem.",
            status: "R&D",
            tags: ["Mini AXI", "Colony", "Habitat", "2.5D"],
          },
          {
            title: "Cyber Experiments",
            subtitle: "Prototype, testing, and strange idea zone",
            desc: "A slot for cyber UI tests, AI experiments, odd prototypes, practical tools, and playful side creations.",
            status: "Ongoing",
            tags: ["Prototype", "Tool", "Experiment", "Lab"],
          },
          {
            title: "Future Works",
            subtitle: "New creations still to come",
            desc: "A growing area for games, hobby builds, tech demos, side projects, and whatever else deserves a place in the lab later.",
            status: "Open Slot",
            tags: ["Future", "Game", "Hobby", "Archive"],
          },
        ],
        labEyebrow: "Research Zones",
        labTitle: "Research, play, experiments, evolution",
        labDesc:
          "This is not just a polished showcase. It is a central lab space for unfinished ideas, active testing, changing designs, AI experiments, and worldbuilding concepts still in motion.",
        labAreas: [
          "AI Companion Research",
          "Local LLM Experiments",
          "Cyberpunk UI Design",
          "Behavior Systems",
          "Digital Lifeform Theory",
          "Game Prototype Zone",
        ],
        blogEyebrow: "Blog Stream",
        blogTitle: "Technical writing and free talk together",
        blogDesc:
          "The blog is not restricted to pure technical writing. It is designed for AXI dev logs, AI notes, local LLM testing, cyber topics, casual thoughts, discoveries, and free-form writing too.",
        blogCards: [
          {
            title: "Dev Log",
            desc: "Progress notes, architecture, struggles, fixes, and implementation logs for AXI and other projects.",
          },
          {
            title: "Tech Blog",
            desc: "Articles about AI, local LLMs, tools, workflows, environments, and cyber-focused topics.",
          },
          {
            title: "Free Talk",
            desc: "Casual posts, diary-like thoughts, inspirations, side notes, and personal creation rambling.",
          },
        ],
        aboutEyebrow: "About This Site",
        aboutTitle: "This is both AXI's official site and a living lab",
        aboutDesc1:
          "Digital Lifeform Lab is AXI's official site, but also the central home for Kenyuu's wider creative work.",
        aboutDesc2:
          "That is why AXI stays the main symbol while other creations, hobby works, experiments, technical posts, and casual writing can all coexist naturally.",
        aboutDesc3:
          "It is designed to grow over time as a living cyber lab rather than trapping everything inside one narrow format too early.",
        linksEyebrow: "External Links",
        linksTitle: "Ports to the outside world",
        links: [
          {
            title: "GitHub",
            desc: "Code, repositories, public projects, and the main development base.",
          },
          {
            title: "Blog Archive",
            desc: "A structured stream of dev logs, technical articles, and casual posts.",
          },
          {
            title: "Social / Contact",
            desc: "X, Discord, email, and future outbound connections.",
          },
        ],
        footer: "Digital Lifeform Lab — AXI Official Site / Cyber Research Hub",
      },
    }),
    []
  );

  const t = copy[lang];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white selection:bg-cyan-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.18),transparent_18%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.12),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35),rgba(0,0,0,0.75))]" />

      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.42em] text-cyan-300/80">{t.siteSub}</div>
            <div className="mt-1 text-2xl font-semibold tracking-wide md:text-3xl">{t.siteName}</div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              ["home", t.nav.home],
              ["axi", t.nav.axi],
              ["projects", t.nav.projects],
              ["lab", t.nav.lab],
              ["blog", t.nav.blog],
              ["about", t.nav.about],
              ["links", t.nav.links],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                {label}
              </a>
            ))}

            <div className="ml-1 flex items-center rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 p-1">
              <button
                onClick={() => setLang("ja")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "ja" ? "bg-cyan-300 text-black" : "text-white/70 hover:bg-white/10"
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "en" ? "bg-cyan-300 text-black" : "text-white/70 hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
              {t.boot}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
                <span className="block text-white">{t.heroTitleA}</span>
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  {t.heroTitleB}
                </span>
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/72 md:text-xl">
                {t.heroDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#axi"
                className="rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
              >
                {t.ctaEnter}
              </a>
              <a
                href="#blog"
                className="rounded-2xl border border-fuchsia-300/30 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500/20"
              >
                {t.ctaBlog}
              </a>
            </div>

            <div className="grid gap-4 pt-3 sm:grid-cols-3">
              {[
                [t.stat1k, t.stat1v],
                [t.stat2k, t.stat2v],
                [t.stat3k, t.stat3v],
              ].map(([k, v]) => (
                <div key={k} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-white/40">{k}</div>
                  <div className="mt-2 text-sm text-white/82">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-fuchsia-400/10 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl" />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/16 blur-3xl animate-pulse" />
              <div className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-400/12 blur-3xl animate-pulse" />
              <div className="absolute inset-x-10 top-10 flex items-center justify-between text-[11px] uppercase tracking-[0.34em] text-white/45">
                <span>{t.axiPanelTitle}</span>
                <span>ONLINE</span>
              </div>

              <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2">
                <div className="absolute inset-0 animate-spin rounded-full border border-cyan-300/20 [animation-duration:24s]" />
                <div className="absolute inset-6 animate-spin rounded-full border border-fuchsia-300/15 [animation-direction:reverse] [animation-duration:16s]" />
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-300/70 via-cyan-200/35 to-fuchsia-400/55 blur-2xl" />
                <div className="absolute inset-[4.25rem] rounded-full border border-white/15 bg-black/45 shadow-[0_0_70px_rgba(34,211,238,0.22)] backdrop-blur-2xl">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="text-[11px] uppercase tracking-[0.42em] text-cyan-200/85">AXI</div>
                    <div className="mt-3 max-w-[12rem] text-sm leading-relaxed text-white/82">{t.axiWelcome}</div>
                  </div>
                </div>
                <div className="absolute left-6 top-10 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                <div className="absolute right-10 top-24 h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(216,180,254,0.9)]" />
                <div className="absolute bottom-14 left-12 h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
                <div className="absolute bottom-8 right-16 h-4 w-4 rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 text-sm leading-relaxed text-white/70 backdrop-blur-xl">
                <span className="font-medium text-cyan-300">System Note:</span> {t.axiNote}
              </div>
            </div>
          </div>
        </section>

        <section id="axi" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.38em] text-cyan-300/80">{t.axiSectionEyebrow}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{t.axiSectionTitle}</h2>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/72">{t.axiSectionDesc}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {t.axiCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-cyan-300/18 bg-cyan-400/[0.045] p-6 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl"
              >
                <div className="text-2xl font-medium text-white">{card.title}</div>
                <p className="mt-3 leading-relaxed text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.38em] text-fuchsia-300/80">{t.projectsEyebrow}</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{t.projectsTitle}</h2>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">{t.projectsDesc}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {t.projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-cyan-300/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-2xl font-semibold">{project.title}</div>
                    <div className="mt-1 text-sm text-cyan-200/82">{project.subtitle}</div>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-white/70">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="lab" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-cyan-300/18 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.03] to-fuchsia-400/[0.07] p-8 shadow-[0_0_60px_rgba(34,211,238,0.06)] md:p-10">
            <div className="text-sm uppercase tracking-[0.38em] text-cyan-300/80">{t.labEyebrow}</div>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.labTitle}</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/72">{t.labDesc}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.labAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 text-white/82 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.38em] text-fuchsia-300/80">{t.blogEyebrow}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{t.blogTitle}</h2>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/72">{t.blogDesc}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.blogCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-fuchsia-300/20 bg-fuchsia-400/[0.05] p-6 backdrop-blur-xl"
              >
                <div className="text-2xl font-medium">{card.title}</div>
                <p className="mt-3 leading-relaxed text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.38em] text-white/42">{t.aboutEyebrow}</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.aboutTitle}</h2>
            </div>
            <div className="rounded-[2rem] border border-cyan-300/18 bg-cyan-400/[0.05] p-8 backdrop-blur-xl">
              <div className="space-y-4 leading-relaxed text-white/75">
                <p>{t.aboutDesc1}</p>
                <p>{t.aboutDesc2}</p>
                <p>{t.aboutDesc3}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="links" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl md:p-10">
            <div className="text-sm uppercase tracking-[0.38em] text-cyan-300/80">{t.linksEyebrow}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{t.linksTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.links.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-lg font-medium">{item.title}</div>
                  <p className="mt-2 leading-relaxed text-white/65">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>{t.footer}</div>
          <div>AXI / Projects / Blog / Experiments</div>
        </div>
      </footer>
    </div>
  );
}
