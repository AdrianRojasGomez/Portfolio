document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // evita que el form agregue sus propios parámetros
  const nombre  = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('message').value.trim();

  const subject = `Consulta desde mi portfolio - ${nombre || 'Sin nombre'}`;
  const body = `Nombre: ${nombre}\r\nEmail: ${email}\r\n\r\nMensaje:\r\n${mensaje || '(sin mensaje)'}`;

  window.location.href = `mailto:adrz1993@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});