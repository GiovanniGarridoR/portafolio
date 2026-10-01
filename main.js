// =====================================================================
//  LÓGICA DEL PORTAFOLIO
//  Lee los datos de data.js y arma la página. El "enfoque" elegido
//  (todo, web, python, soporte, ciber) decide qué se destaca.
// =====================================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let enfoqueActual = "todo";

// ¿Este elemento corresponde al enfoque elegido? En "todo" coincide siempre.
const coincide = (tags) => enfoqueActual === "todo" || tags.includes(enfoqueActual);

// Escapa texto antes de meterlo en innerHTML.
const esc = (texto) =>
  String(texto).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function mostrarAviso(mensaje) {
  const aviso = $("#aviso");
  aviso.textContent = mensaje;
  aviso.classList.add("visible");
  clearTimeout(mostrarAviso.timer);
  mostrarAviso.timer = setTimeout(() => aviso.classList.remove("visible"), 2200);
}

async function copiar(texto, mensaje) {
  try {
    await navigator.clipboard.writeText(texto);
    mostrarAviso(mensaje);
  } catch {
    mostrarAviso(texto);
  }
}

// ---------- Datos fijos del perfil y enlaces ----------
function rellenarPerfil() {
  $$("[data-perfil]").forEach((el) => (el.textContent = PERFIL[el.dataset.perfil]));

  const enlaces = {
    github: PERFIL.github,
    linkedin: PERFIL.linkedin,
    email: `mailto:${PERFIL.email}`,
    whatsapp: `https://wa.me/${PERFIL.whatsapp}`,
  };
  $$("[data-link]").forEach((el) => (el.href = enlaces[el.dataset.link]));
  $("#anio").textContent = new Date().getFullYear();
}

// ---------- Botones de enfoque ----------
function crearChips() {
  $("#chips").innerHTML = Object.entries(ENFOQUES)
    .map(([clave, e]) => `<button class="chip" data-enfoque="${clave}" aria-pressed="false">${e.icono} ${esc(e.etiqueta)}</button>`)
    .join("");

  $$(".chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      cambiarEnfoque(chip.dataset.enfoque);
      // Guarda el enfoque en la URL para poder compartir el enlace.
      const url = new URL(location.href);
      if (chip.dataset.enfoque === "todo") url.searchParams.delete("enfoque");
      else url.searchParams.set("enfoque", chip.dataset.enfoque);
      history.replaceState(null, "", url);
    })
  );
}

function cambiarEnfoque(clave) {
  if (!ENFOQUES[clave]) clave = "todo";
  enfoqueActual = clave;
  const e = ENFOQUES[clave];

  document.documentElement.dataset.enfoque = clave;
  $$(".chip").forEach((chip) => chip.setAttribute("aria-pressed", chip.dataset.enfoque === clave));

  $("#hero-pitch").textContent = e.pitch;
  $("#enfoque-rol").textContent = e.rol;
  $("#enfoque-razones").innerHTML = e.razones.map((r) => `<li>${esc(r)}</li>`).join("");
  $("#enfoque-claves").innerHTML = e.claves.map((c) => `<span class="tag">${esc(c)}</span>`).join("");
  $$("[data-cv]").forEach((a) => (a.href = e.cv));

  pintarTerminal();
  pintarProyectos();
  pintarExperiencia();
  pintarHabilidades();
  escritura.fijar(clave === "todo" ? null : e.rol);
}

// ---------- Tarjeta tipo editor de código ----------
function pintarTerminal() {
  const e = ENFOQUES[enfoqueActual];
  const str = (t) => `<span class="c-str">"${esc(t)}"</span>`;
  const key = (k) => `  <span class="c-key">${k}</span>: `;
  $("#terminal-codigo").innerHTML = [
    `<span class="c-kw">const</span> <span class="c-var">giovanni</span> = {`,
    `${key("titulo")}${str(PERFIL.titulo)},`,
    `${key("ubicacion")}${str(PERFIL.ubicacion)},`,
    `${key("perfil")}${str(e.rol)},`,
    `${key("stack")}[${e.claves.slice(0, 4).map(str).join(", ")}],`,
    `${key("ingles")}${str("B1 · intermedio")},`,
    `${key("disponible")}<span class="c-kw">true</span>`,
    `};`,
    ``,
    `<span class="c-com">// ${enfoqueActual === "todo" ? "Elige un perfil más abajo 👇" : "Perfil filtrado: " + esc(e.etiqueta)}</span>`,
  ].join("\n");
}

// ---------- Proyectos ----------
function pintarProyectos() {
  // Los proyectos que coinciden con el enfoque van primero.
  const ordenados = PROYECTOS.map((p, i) => ({ ...p, i, ok: coincide(p.tags) })).sort((a, b) => b.ok - a.ok || a.i - b.i);

  $("#lista-proyectos").innerHTML = ordenados
    .map(
      (p) => `
      <button class="proyecto ${p.ok ? "" : "apagado"}" data-i="${p.i}">
        <span class="proyecto-emoji">${p.emoji}</span>
        <span class="proyecto-tipo">${esc(p.tipo)}</span>
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.resumen)}</p>
        <span class="tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</span>
        <span class="proyecto-mas">Ver detalle →</span>
      </button>`
    )
    .join("");

  $$(".proyecto").forEach((card) => card.addEventListener("click", () => abrirProyecto(PROYECTOS[card.dataset.i])));
}

function abrirProyecto(p) {
  let enlace = p.repo
    ? `<a class="btn btn-primario" href="${p.repo}" target="_blank" rel="noopener">Ver código en GitHub</a>`
    : `<p class="nota">🔒 ${esc(p.nota)}</p>`;
  if (p.descarga) enlace += `<a class="btn btn-secundario" href="${p.descarga}" target="_blank" rel="noopener">⬇ Descargar en itch.io</a>`;

  $("#modal-contenido").innerHTML = `
    <span class="proyecto-emoji grande">${p.emoji}</span>
    <span class="proyecto-tipo">${esc(p.tipo)}</span>
    <h3 id="modal-titulo">${esc(p.nombre)}</h3>
    <p>${esc(p.detalle)}</p>
    <p class="mini-titulo">Qué hace</p>
    <ul class="lista-check">${p.funciones.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    <p class="mini-titulo">Tecnologías</p>
    <div class="tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
    <div class="botones">${enlace}</div>`;
  $("#modal").showModal();
}

// ---------- Experiencia y certificaciones ----------
function pintarExperiencia() {
  $("#lista-experiencia").innerHTML = EXPERIENCIA.map(
    (x) => `
    <article class="hito">
      <span class="hito-fecha">${esc(x.fecha)}</span>
      <h3>${esc(x.cargo)}</h3>
      <p class="hito-lugar">${esc(x.lugar)}</p>
      <ul>${x.puntos.map((p) => `<li class="${coincide(p.tags) ? "resaltado" : "apagado"}">${esc(p.texto)}</li>`).join("")}</ul>
    </article>`
  ).join("");

  $("#lista-certs").innerHTML = CERTIFICACIONES.map((c) => {
    const etiqueta = c.url ? `<a href="${c.url}" target="_blank" rel="noopener">Ver certificado ↗</a>` : "";
    return `
    <article class="cert ${coincide(c.tags) ? "" : "apagado"}">
      <span class="cert-logo">G</span>
      <div>
        <h4>${esc(c.nombre)}</h4>
        <p>${esc(c.emisor)} · ${esc(c.fecha)}</p>
        ${etiqueta}
      </div>
    </article>`;
  }).join("");
}

// ---------- Habilidades ----------
function pintarHabilidades() {
  const claves = ENFOQUES[enfoqueActual].claves;
  // Primero los grupos del enfoque elegido.
  const grupos = HABILIDADES.map((h, i) => ({ ...h, i, ok: coincide(h.tags) })).sort((a, b) => b.ok - a.ok || a.i - b.i);

  $("#lista-habilidades").innerHTML = grupos
    .map(
      (h) => `
      <article class="habilidad ${h.ok ? "" : "apagado"}">
        <h3>${h.icono} ${esc(h.grupo)}</h3>
        <div class="tags">${h.items
          .map((it) => `<span class="tag ${enfoqueActual !== "todo" && claves.includes(it) ? "tag-fuerte" : ""}">${esc(it)}</span>`)
          .join("")}</div>
      </article>`
    )
    .join("");
}

// ---------- Efecto de escritura en el título ----------
const escritura = (() => {
  const el = $("#escribiendo");
  const roles = Object.values(ENFOQUES).filter((e) => e !== ENFOQUES.todo).map((e) => e.rol);
  let texto = "";
  let indice = 0;
  let borrando = false;
  let fijo = null;
  let timer;

  function paso() {
    const objetivo = fijo ?? roles[indice];
    if (!borrando && texto === objetivo) {
      if (fijo) return; // con un enfoque elegido se queda quieto
      borrando = true;
      timer = setTimeout(paso, 1800);
      return;
    }
    if (borrando && (texto === "" || (fijo && objetivo.startsWith(texto)))) {
      borrando = false;
      if (!fijo) indice = (indice + 1) % roles.length;
    }
    texto = borrando ? texto.slice(0, -1) : objetivo.slice(0, texto.length + 1);
    el.textContent = texto;
    timer = setTimeout(paso, borrando ? 35 : 70);
  }

  return {
    // rol = texto fijo a mostrar, o null para ir rotando entre todos los roles.
    fijar(rol) {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = rol ?? ENFOQUES.todo.rol;
        return;
      }
      fijo = rol;
      borrando = texto !== "";
      clearTimeout(timer);
      paso();
    },
  };
})();

// ---------- Tema claro / oscuro ----------
function iniciarTema() {
  let guardado = null;
  try {
    guardado = localStorage.getItem("tema");
  } catch {}
  const aplicar = (tema) => {
    document.documentElement.dataset.theme = tema;
    $("#btn-tema").textContent = tema === "dark" ? "☀️" : "🌙";
  };
  aplicar(guardado ?? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

  $("#btn-tema").addEventListener("click", () => {
    const nuevo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    aplicar(nuevo);
    try {
      localStorage.setItem("tema", nuevo);
    } catch {}
  });
}

// ---------- Menú móvil, modal, copiar y animaciones ----------
function iniciarInteracciones() {
  const menu = $("#menu");
  const btnMenu = $("#btn-menu");
  btnMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    btnMenu.setAttribute("aria-expanded", abierto);
  });
  $$("#menu a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("abierto")));

  const modal = $("#modal");
  $("#modal-cerrar").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (ev) => ev.target === modal && modal.close()); // clic fuera cierra

  $("#btn-email").addEventListener("click", () => {
    copiar(PERFIL.email, "Correo copiado ✔");
    $("#email-estado").textContent = "¡Copiado!";
    setTimeout(() => ($("#email-estado").textContent = "Clic para copiar"), 2000);
  });

  $("#btn-compartir").addEventListener("click", () => copiar(location.href, "Enlace copiado: abre la página con este perfil ✔"));

  // Las secciones aparecen suavemente al hacer scroll.
  const observador = new IntersectionObserver(
    (entradas) => entradas.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
    { threshold: 0.12 }
  );
  $$(".seccion").forEach((s) => observador.observe(s));
}

// ---------- Arranque ----------
rellenarPerfil();
iniciarTema();
crearChips();
iniciarInteracciones();
cambiarEnfoque(new URLSearchParams(location.search).get("enfoque") ?? "todo");
