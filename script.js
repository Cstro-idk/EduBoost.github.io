// Función para manejar la navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
  const secciones = document.querySelectorAll('main section');
  const enlaces = document.querySelectorAll('nav a, .boton[href^="#"]');

  // Función para cambiar de sección
  function cambiarSeccion(id) {
    secciones.forEach(seccion => {
      seccion.classList.remove('seccion-activa');
      seccion.classList.add('seccion-oculta');
    });

    const seccionNueva = document.getElementById(id);
    seccionNueva.classList.remove('seccion-oculta');
    seccionNueva.classList.add('seccion-activa');

    // Desplazamiento suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Manejar clics en los enlaces
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      cambiarSeccion(targetId);
    });
  });

  // Mostrar solo la sección de inicio al cargar
  cambiarSeccion('inicio');
});