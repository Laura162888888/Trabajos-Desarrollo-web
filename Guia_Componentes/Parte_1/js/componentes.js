async function cargarComponente(id, url) {
  const resp = await fetch(url);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
cargarComponente("header", "componentes/header.html");
cargarComponente("content", "componentes/content.html");
cargarComponente("footer", "componentes/footer.html");
