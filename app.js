/* Techdelivery — i18n (EN/ES), navigation, form behavior */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    en: {
      "doc.title": "Techdelivery — A senior engineer who ships",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.work": "Experience",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "nav.cta": "Book a call",
      "theme.toDark": "Switch to dark mode",
      "theme.toLight": "Switch to light mode",
      "social.linkedin": "LinkedIn profile",
      "social.linkedinText": "LinkedIn",
      "menu.open": "Open menu",
      "menu.close": "Close menu",

      "hero.eyebrow": "Software consulting · Delivered by seniors",
      "hero.title": "A senior engineer who ships code, not slide decks.",
      "hero.sub": "Techdelivery puts a senior engineer inside your team to design, build, and operate production software — from first commit to steady state.",
      "hero.cta1": "Book a discovery call",
      "hero.cta2": "Explore services",
      "hero.p1": "No hand-offs, ever",
      "hero.p2": "Fixed-scope proposals",
      "hero.p3": "Weekly working demos",
      "panel.week": "week in review",
      "panel.t1": "API — batch matching endpoint",
      "panel.t2": "Dashboard — live telemetry feed",
      "panel.t3": "Pipeline — extraction review step",
      "panel.t4": "Service — architecture review",
      "panel.deployed": "Deployed",
      "panel.review": "In review",
      "panel.merged": "Merged",
      "panel.f1": "fixed scope",
      "panel.f2": "weekly demo",
      "panel.f3": "direct access",

      "stack.label": "Working across",

      "services.eyebrow": "Services",
      "services.title": "Four ways we plug in.",
      "services.sub": "Every engagement is led personally by the engineer who architects, builds, and operates it.",
      "svc1.title": "Custom software development",
      "svc1.desc": "Product engineering from discovery to production: web apps, APIs, and internal platforms built to be owned.",
      "svc1.f1": "Discovery and technical scoping",
      "svc1.f2": "Full-stack build with CI/CD from day one",
      "svc1.f3": "Runbooks and handover your team can keep",
      "svc2.title": "Team augmentation",
      "svc2.desc": "A senior engineer embedded in your squad, working in your codebase, rituals, and ticket flow.",
      "svc2.f1": "Matched to your stack and domain",
      "svc2.f2": "Monthly or milestone-based terms",
      "svc2.f3": "Knowledge transfer built into every sprint",
      "svc3.title": "AI & data engineering",
      "svc3.desc": "Data pipelines, analytics foundations, and pragmatic LLM integration that survives contact with real data.",
      "svc3.f1": "Pipeline and warehouse design",
      "svc3.f2": "Document and workflow automation with LLMs",
      "svc3.f3": "Evaluation, monitoring, and cost control",
      "svc4.title": "Technical advisory",
      "svc4.desc": "Architecture reviews, code and vendor due diligence, and second opinions from people who still ship.",
      "svc4.f1": "Architecture and scalability review",
      "svc4.f2": "Codebase and security audit",
      "svc4.f3": "Hiring and team-structure guidance",

      "process.eyebrow": "How we work",
      "process.title": "A short, boring, reliable loop.",
      "process.sub": "No discovery theatre. We scope tightly, ship weekly, and hand over cleanly.",
      "step1.title": "Discovery call",
      "step1.desc": "A 45-minute call to understand the problem, constraints, and who has to say yes.",
      "step2.title": "Fixed-scope proposal",
      "step2.desc": "A written plan with deliverables, timeline, and a fixed price. You know the cost before we start.",
      "step3.title": "Build in weekly loops",
      "step3.desc": "Working software every Friday, a shared board, and direct access to the engineer doing the work.",
      "step4.title": "Handover & support",
      "step4.desc": "Documentation, runbooks, and a support window so your team owns it confidently.",

      "exp.eyebrow": "Experience",
      "exp.title": "Thirty years of mission-critical systems.",
      "exp.sub": "Over 30 years building mission-critical systems with a focus on operational excellence. Principal engineer for the last 20, leading cross-functional teams to build and operate large-scale systems.",
      "exp.s1": "years on mission-critical systems",
      "exp.s2": "years as principal engineer",
      "exp.s3": "systems built and operated",
      "exp.now": "Present",
      "exp.r1t": "Senior Software & Systems Architect",
      "exp.r1d": "Architecting and technically managing large-scale systems, with a strong focus on operational excellence.",
      "exp.p20": "Last 20 years",
      "exp.r2t": "Principal engineer, cross-functional leadership",
      "exp.r2d": "Leading cross-functional teams through building and operating large-scale production systems — architecture through day-two operations.",
      "exp.p30": "30+ years",
      "exp.r3t": "Mission-critical engineering",
      "exp.r3d": "A career spent on systems that cannot go down: high availability, operational discipline, and engineering practices that hold under pressure.",
      "exp.eduLabel": "Education",
      "exp.eduTitle": "Mechanical Engineering",
      "exp.quote": "\"Javier is a professional with an excellent technical level and management ability. A team player, an expert architect with strong business and strategy vision. A great colleague — I would work with him again without hesitation.\"",
      "exp.quoteBy": "Miguel Arroyo Schnell · former colleague, via LinkedIn",

      "team.eyebrow": "Who you work with",
      "team.title": "You work directly with me.",
      "team.sub": "Techdelivery is one principal engineer with thirty-plus years on mission-critical systems. The person you scope with is the person who ships.",
      "solo.name": "Javier Arrieta",
      "solo.role": "Founder & Principal Engineer",
      "solo.bio": "Thirty-plus years building and operating mission-critical systems, the last twenty as a principal engineer leading cross-functional teams. Currently a Senior Software & Systems Architect at Oracle. With Techdelivery you scope, build, and ship with the same person.",

      "contact.title": "Tell us what you need shipped.",
      "contact.sub": "Send a few lines about the problem. You'll get a straight answer — even when it's \"not us, try this\".",
      "contact.emailLabel": "info@techdelivery.es",
      "contact.hours": "Replies within one business day",
      "contact.location": "Remote-first · Working across US & EU hours",
      "form.name": "Name",
      "form.name.ph": "Your name",
      "form.email": "Work email",
      "form.email.ph": "you@company.com",
      "form.company": "Company",
      "form.company.ph": "Company (optional)",
      "form.type": "What do you need?",
      "form.type.opt0": "Custom software development",
      "form.type.opt1": "Team augmentation",
      "form.type.opt2": "AI & data engineering",
      "form.type.opt3": "Technical advisory",
      "form.type.opt4": "Something else",
      "form.message": "Project details",
      "form.message.ph": "What are you trying to build or fix? Any deadlines or constraints?",
      "form.submit": "Send request",
      "form.note": "Opens your email app with the request pre-filled — nothing is sent until you press send.",
      "form.err.name": "Please tell us your name.",
      "form.err.email": "Please enter a valid email address, e.g. you@company.com.",
      "form.err.message": "Please add a few words about the project (at least 10 characters).",
      "form.ok.title": "Request received.",
      "form.ok.body": "Thanks — your email app should have opened with the request ready to send. I reply within one business day.",
      "form.ok.again": "Send another request",

      "footer.tagline": "Senior software consulting.",
      "footer.rights": "© 2026 Techdelivery. All rights reserved."
    },
    es: {
      "doc.title": "Techdelivery — Un ingeniero senior que entrega",
      "nav.services": "Servicios",
      "nav.process": "Proceso",
      "nav.work": "Experiencia",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",
      "nav.cta": "Agendar llamada",
      "theme.toDark": "Cambiar a modo oscuro",
      "theme.toLight": "Cambiar a modo claro",
      "social.linkedin": "Perfil de LinkedIn",
      "social.linkedinText": "LinkedIn",
      "menu.open": "Abrir menú",
      "menu.close": "Cerrar menú",

      "hero.eyebrow": "Consultoría de software · Entregada por seniors",
      "hero.title": "Un ingeniero senior que entrega código, no diapositivas.",
      "hero.sub": "Techdelivery integra un ingeniero senior en tu equipo para diseñar, construir y operar software en producción — desde el primer commit hasta el estado estable.",
      "hero.cta1": "Agendar una llamada",
      "hero.cta2": "Ver servicios",
      "hero.p1": "Sin traspasos, nunca",
      "hero.p2": "Propuestas de alcance fijo",
      "hero.p3": "Demos funcionales cada semana",
      "panel.week": "resumen de la semana",
      "panel.t1": "API — endpoint de emparejamiento por lotes",
      "panel.t2": "Panel — telemetría en vivo",
      "panel.t3": "Pipeline — revisión de extracción",
      "panel.t4": "Servicio — revisión de arquitectura",
      "panel.deployed": "Desplegado",
      "panel.review": "En revisión",
      "panel.merged": "Integrado",
      "panel.f1": "alcance fijo",
      "panel.f2": "demo semanal",
      "panel.f3": "acceso directo",

      "stack.label": "Tecnologías",

      "services.eyebrow": "Servicios",
      "services.title": "Cuatro formas de integrarnos.",
      "services.sub": "Cada proyecto lo lidera personalmente el ingeniero que lo arquitecta, construye y opera.",
      "svc1.title": "Desarrollo de software a medida",
      "svc1.desc": "Ingeniería de producto de descubrimiento a producción: aplicaciones web, APIs y plataformas internas hechas para ser de tu equipo.",
      "svc1.f1": "Descubrimiento y alcance técnico",
      "svc1.f2": "Desarrollo full-stack con CI/CD desde el día uno",
      "svc1.f3": "Manuales y traspaso que tu equipo puede sostener",
      "svc2.title": "Aumento de equipo",
      "svc2.desc": "Un ingeniero senior integrado en tu squad, trabajando en tu código, rituales y flujo de tickets.",
      "svc2.f1": "Afinados a tu stack y dominio",
      "svc2.f2": "Contratos mensuales o por hitos",
      "svc2.f3": "Transferencia de conocimiento en cada sprint",
      "svc3.title": "IA e ingeniería de datos",
      "svc3.desc": "Pipelines de datos, bases analíticas e integración pragmática de LLMs que resiste el contacto con datos reales.",
      "svc3.f1": "Diseño de pipelines y data warehouse",
      "svc3.f2": "Automatización de documentos y flujos con LLMs",
      "svc3.f3": "Evaluación, monitoreo y control de costos",
      "svc4.title": "Asesoría técnica",
      "svc4.desc": "Revisiones de arquitectura, due diligence de código y proveedores, y segundas opiniones de quien todavía programa.",
      "svc4.f1": "Revisión de arquitectura y escalabilidad",
      "svc4.f2": "Auditoría de código y seguridad",
      "svc4.f3": "Guía de contrataciones y estructura de equipo",

      "process.eyebrow": "Cómo trabajamos",
      "process.title": "Un ciclo corto, simple y confiable.",
      "process.sub": "Sin teatro de descubrimiento. Alcance ajustado, entregas semanales y un traspaso limpio.",
      "step1.title": "Llamada de descubrimiento",
      "step1.desc": "45 minutos para entender el problema, las restricciones y quién debe aprobar.",
      "step2.title": "Propuesta de alcance fijo",
      "step2.desc": "Un plan escrito con entregables, cronograma y precio fijo. Sabes el costo antes de empezar.",
      "step3.title": "Construcción semanal",
      "step3.desc": "Software funcionando cada viernes, tablero compartido y acceso directo al ingeniero que hace el trabajo.",
      "step4.title": "Traspaso y soporte",
      "step4.desc": "Documentación, manuales y una ventana de soporte para que tu equipo lo tome con confianza.",

      "exp.eyebrow": "Experiencia",
      "exp.title": "Treinta años de sistemas críticos.",
      "exp.sub": "Más de 30 años construyendo sistemas críticos con foco en la excelencia operativa. Ingeniero principal los últimos 20, liderando equipos multifuncionales para construir y operar sistemas a gran escala.",
      "exp.s1": "años en sistemas críticos",
      "exp.s2": "años como ingeniero principal",
      "exp.s3": "sistemas construidos y operados",
      "exp.now": "Actualidad",
      "exp.r1t": "Senior Software & Systems Architect",
      "exp.r1d": "Arquitectura y gestión técnica de sistemas a gran escala, con fuerte foco en la excelencia operativa.",
      "exp.p20": "Últimos 20 años",
      "exp.r2t": "Ingeniero principal, liderazgo multifuncional",
      "exp.r2d": "Liderazgo de equipos multifuncionales en la construcción y operación de sistemas de producción a gran escala — de la arquitectura a la operación diaria.",
      "exp.p30": "30+ años",
      "exp.r3t": "Ingeniería de sistemas críticos",
      "exp.r3d": "Una carrera dedicada a sistemas que no pueden caerse: alta disponibilidad, disciplina operativa y prácticas de ingeniería que aguantan bajo presión.",
      "exp.eduLabel": "Formación",
      "exp.eduTitle": "Ingeniería Mecánica",
      "exp.quote": "\"Javier es un profesional con un excelente nivel tecnológico y capacidades de gestión. Acostumbrado a trabajar en equipo, experto arquitecto con gran visión de negocio y estrategia. Buen compañero, volvería a trabajar con él sin dudarlo\"",
      "exp.quoteBy": "Miguel Arroyo Schnell · ex colega, vía LinkedIn",

      "team.eyebrow": "Con quién trabajas",
      "team.title": "Trabajas directamente conmigo.",
      "team.sub": "Techdelivery es un ingeniero principal con más de treinta años en sistemas críticos. Quien define el alcance contigo es quien lo entrega.",
      "solo.name": "Javier Arrieta",
      "solo.role": "Fundador e Ingeniero Principal",
      "solo.bio": "Más de treinta años construyendo y operando sistemas críticos, los últimos veinte como ingeniero principal liderando equipos multifuncionales. Actualmente Senior Software & Systems Architect en Oracle. Con Techdelivery defines el alcance, construyes y entregas con la misma persona.",

      "contact.title": "Cuéntanos qué necesitas entregar.",
      "contact.sub": "Envía unas líneas sobre el problema. Recibirás una respuesta directa — aunque sea \"no somos nosotros, prueba esto\".",
      "contact.emailLabel": "info@techdelivery.es",
      "contact.hours": "Respuesta en un día hábil",
      "contact.location": "Remoto primero · Horarios de EE. UU. y Europa",
      "form.name": "Nombre",
      "form.name.ph": "Tu nombre",
      "form.email": "Correo de trabajo",
      "form.email.ph": "tu@empresa.com",
      "form.company": "Empresa",
      "form.company.ph": "Empresa (opcional)",
      "form.type": "¿Qué necesitas?",
      "form.type.opt0": "Desarrollo de software a medida",
      "form.type.opt1": "Aumento de equipo",
      "form.type.opt2": "IA e ingeniería de datos",
      "form.type.opt3": "Asesoría técnica",
      "form.type.opt4": "Otra cosa",
      "form.message": "Detalles del proyecto",
      "form.message.ph": "¿Qué intentas construir o resolver? ¿Fechas o restricciones?",
      "form.submit": "Enviar solicitud",
      "form.note": "Abre tu aplicación de correo con la solicitud precargada — nada se envía hasta que pulses enviar.",
      "form.err.name": "Por favor dinos tu nombre.",
      "form.err.email": "Ingresa un correo válido, por ejemplo tu@empresa.com.",
      "form.err.message": "Agrega unas palabras sobre el proyecto (al menos 10 caracteres).",
      "form.ok.title": "Solicitud recibida.",
      "form.ok.body": "Gracias — tu aplicación de correo debería haberse abierto con la solicitud lista para enviar. Respondo en un día hábil.",
      "form.ok.again": "Enviar otra solicitud",

      "footer.tagline": "Consultoría de software senior.",
      "footer.rights": "© 2026 Techdelivery. Todos los derechos reservados."
    }
  };

  var LANG_KEY = "td-lang";
  var lang = "en";
  try {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "es") lang = saved;
  } catch (e) { /* storage unavailable: in-memory only */ }

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function applyLang() {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.title = t("doc.title");
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    var phs = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < phs.length; j++) {
      phs[j].setAttribute("placeholder", t(phs[j].getAttribute("data-i18n-ph")));
    }
    var als = document.querySelectorAll("[data-i18n-alt]");
    for (var k = 0; k < als.length; k++) {
      als[k].setAttribute("alt", t(als[k].getAttribute("data-i18n-alt")));
    }
    var als2 = document.querySelectorAll("[data-i18n-aria]");
    for (var m = 0; m < als2.length; m++) {
      als2[m].setAttribute("aria-label", t(als2[m].getAttribute("data-i18n-aria")));
    }
    var btns = document.querySelectorAll(".lang-toggle button");
    for (var n = 0; n < btns.length; n++) {
      btns[n].setAttribute("aria-pressed", String(btns[n].dataset.lang === lang));
    }
    // Re-render live validation messages if any are visible
    refreshVisibleErrors();
  }

  function setLang(next) {
    if (next !== "en" && next !== "es") return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyLang();
  }

  /* ---------------- Language toggle ---------------- */
  var langButtons = document.querySelectorAll(".lang-toggle button");
  for (var b = 0; b < langButtons.length; b++) {
    langButtons[b].addEventListener("click", function () {
      setLang(this.dataset.lang);
    });
  }

  /* ---------------- Theme toggle ---------------- */
  var themeBtn = document.getElementById("theme-toggle");
  function isDark() { return document.documentElement.dataset.theme === "dark"; }
  function updateThemeLabel() {
    if (!themeBtn) return;
    var key = isDark() ? "theme.toLight" : "theme.toDark";
    themeBtn.setAttribute("data-i18n-aria", key);
    themeBtn.setAttribute("aria-label", t(key));
  }
  function setTheme(next) {
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("td-theme", next); } catch (e) { /* ignore */ }
    updateThemeLabel();
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(isDark() ? "light" : "dark");
    });
    updateThemeLabel();
  }

  /* ---------------- Mobile menu ---------------- */
  var burger = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");
  function closeMenu() {
    navLinks.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    navLinks.hidden = false;
    burger.setAttribute("aria-expanded", "true");
  }
  if (window.matchMedia("(max-width: 767px)").matches) closeMenu();
  burger.addEventListener("click", function () {
    if (navLinks.hidden) openMenu(); else closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !navLinks.hidden && window.matchMedia("(max-width: 767px)").matches) {
      closeMenu();
      burger.focus();
    }
  });
  var navAnchors = navLinks.querySelectorAll("a");
  for (var na = 0; na < navAnchors.length; na++) {
    navAnchors[na].addEventListener("click", function () {
      if (window.matchMedia("(max-width: 767px)").matches) closeMenu();
    });
  }
  window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      navLinks.hidden = false;
      burger.setAttribute("aria-expanded", "false");
    } else if (burger.getAttribute("aria-expanded") === "false") {
      navLinks.hidden = true;
    }
  });

  /* ---------------- Active section highlight ---------------- */
  var sections = document.querySelectorAll("main section[id]");
  var linkById = {};
  for (var la = 0; la < navAnchors.length; la++) {
    var href = navAnchors[la].getAttribute("href") || "";
    if (href.charAt(0) === "#") linkById[href.slice(1)] = navAnchors[la];
  }
  if ("IntersectionObserver" in window) {
    var sectionObs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          for (var id in linkById) linkById[id].classList.remove("active");
          var link = linkById[entries[i].target.id];
          if (link) link.classList.add("active");
        }
      }
    }, { rootMargin: "-40% 0px -55% 0px" });
    for (var s = 0; s < sections.length; s++) sectionObs.observe(sections[s]);

    /* ---------------- Reveal on scroll ---------------- */
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealEls = document.querySelectorAll(".reveal");
    if (reduced) {
      for (var r = 0; r < revealEls.length; r++) revealEls[r].classList.add("in");
    } else {
      var revealObs = new IntersectionObserver(function (entries, obs) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add("in");
            obs.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0.12 });
      for (var r2 = 0; r2 < revealEls.length; r2++) revealObs.observe(revealEls[r2]);
    }
  } else {
    var fallback = document.querySelectorAll(".reveal");
    for (var f = 0; f < fallback.length; f++) fallback[f].classList.add("in");
  }

  /* ---------------- Contact form ---------------- */
  var form = document.getElementById("contact-form");
  var formWrap = document.getElementById("form-wrap");
  var successPanel = document.getElementById("form-success");
  var nameInput = document.getElementById("f-name");
  var emailInput = document.getElementById("f-email");
  var companyInput = document.getElementById("f-company");
  var typeSelect = document.getElementById("f-type");
  var messageInput = document.getElementById("f-message");
  var submitBtn = document.getElementById("form-submit");
  var resetBtn = document.getElementById("form-reset");

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(input, errId, show) {
    var errEl = document.getElementById(errId);
    if (!errEl) return;
    if (show) {
      input.setAttribute("aria-invalid", "true");
      errEl.classList.add("show");
      errEl.textContent = t(errEl.getAttribute("data-i18n"));
    } else {
      input.removeAttribute("aria-invalid");
      errEl.classList.remove("show");
    }
  }
  function refreshVisibleErrors() {
    var shown = document.querySelectorAll(".field-error.show");
    for (var i = 0; i < shown.length; i++) {
      shown[i].textContent = t(shown[i].getAttribute("data-i18n"));
    }
  }
  function validName() {
    var ok = nameInput.value.trim().length > 0;
    setError(nameInput, "err-name", !ok);
    return ok;
  }
  function validEmail() {
    var ok = EMAIL_RE.test(emailInput.value.trim());
    setError(emailInput, "err-email", !ok);
    return ok;
  }
  function validMessage() {
    var ok = messageInput.value.trim().length >= 10;
    setError(messageInput, "err-message", !ok);
    return ok;
  }
  nameInput.addEventListener("blur", validName);
  emailInput.addEventListener("blur", validEmail);
  messageInput.addEventListener("blur", validMessage);

  var MAILTO = "info@techdelivery.es";
  var submitting = false;
  function submitForm() {
    if (submitting) return;
    var okName = validName();
    var okEmail = validEmail();
    var okMsg = validMessage();
    if (!okName) { nameInput.focus(); return; }
    if (!okEmail) { emailInput.focus(); return; }
    if (!okMsg) { messageInput.focus(); return; }

    submitting = true;
    var typeLabel = typeSelect.options[typeSelect.selectedIndex].text;
    var subject = (lang === "es" ? "Consulta de proyecto — " : "Project enquiry — ") + typeLabel;
    var body = messageInput.value.trim()
      + "\n\n—\n"
      + "Name: " + nameInput.value.trim() + "\n"
      + "Email: " + emailInput.value.trim() + "\n"
      + "Company: " + (companyInput.value.trim() || "—") + "\n"
      + "Need: " + typeLabel;
    window.location.href = "mailto:" + MAILTO
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);
    formWrap.hidden = true;
    successPanel.hidden = false;
    var heading = successPanel.querySelector("h3");
    if (heading) heading.focus();
    submitting = false;
  }
  submitBtn.addEventListener("click", submitForm);
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      submitForm();
    }
  });
  resetBtn.addEventListener("click", function () {
    form.reset();
    var errs = form.querySelectorAll(".field-error.show");
    for (var i = 0; i < errs.length; i++) errs[i].classList.remove("show");
    var invalids = form.querySelectorAll("[aria-invalid]");
    for (var j = 0; j < invalids.length; j++) invalids[j].removeAttribute("aria-invalid");
    successPanel.hidden = true;
    formWrap.hidden = false;
    nameInput.focus();
  });

  /* ---------------- Init ---------------- */
  applyLang();
})();
