if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true
  });
} else {
  document.querySelectorAll("[data-aos]").forEach(function (elemento) {
    elemento.removeAttribute("data-aos");
  });
}


const botonMenu = document.getElementById("boton-menu");
const listaMenu = document.getElementById("lista-menu");

if (botonMenu) {
  botonMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("abierto");
  });
}


const imagenes = document.querySelectorAll(".foto img");

imagenes.forEach(function (imagen) {
  if (imagen.complete && imagen.naturalWidth === 0) {
    imagen.classList.add("sin-imagen");
  }
  imagen.addEventListener("error", function () {
    imagen.classList.add("sin-imagen");
  });
});


const anios = document.getElementById("anios");

if (anios) {
  const momentos = [
    { anio: 1959, titulo: "Nace en Buenos Aires", texto: "Gustavo Adrián Cerati nace el 11 de agosto." },
    { anio: 1982, titulo: "Nace Soda Stereo", texto: "Forma la banda junto a Zeta Bosio y Charly Alberti." },
    { anio: 1986, titulo: "Signos", texto: "Soda Stereo se vuelve famoso en toda Latinoamérica." },
    { anio: 1993, titulo: "Amor Amarillo", texto: "Lanza su primer disco solista, grabado en Chile." },
    { anio: 1997, titulo: "Gracias totales", texto: "Último concierto de Soda Stereo en el estadio de River Plate." },
    { anio: 1999, titulo: "Bocanada", texto: "Comienza de lleno su carrera solista con este disco." },
    { anio: 2002, titulo: "Siempre es Hoy", texto: "Un disco con mucha electrónica y pop." },
    { anio: 2006, titulo: "Ahí Vamos", texto: "Regresa al rock de guitarras con canciones como «Crimen»." },
    { anio: 2007, titulo: "Me verás volver", texto: "Soda Stereo se reúne para una gira por el continente." },
    { anio: 2009, titulo: "Fuerza Natural", texto: "Su último disco de estudio, con un sonido más acústico." },
    { anio: 2014, titulo: "Su música sigue", texto: "Cerati muere el 4 de septiembre en Buenos Aires." }
  ];

  const infoAnio = document.getElementById("info-anio");

  momentos.forEach(function (momento, i) {
    const boton = document.createElement("button");
    boton.textContent = momento.anio;
    boton.addEventListener("click", function () {
      mostrarMomento(i);
    });
    anios.appendChild(boton);
  });

  function mostrarMomento(i) {
    const momento = momentos[i];
    infoAnio.innerHTML =
      "<p class='anio-grande'>" + momento.anio + "</p>" +
      "<h3>" + momento.titulo + "</h3>" +
      "<p>" + momento.texto + "</p>";

    const botones = anios.querySelectorAll("button");
    botones.forEach(function (b) {
      b.classList.remove("activo");
    });
    botones[i].classList.add("activo");
  }

  mostrarMomento(0);
}


const ventana = document.getElementById("ventana");

if (ventana) {
  const discos = [
    {
      nombre: "Amor Amarillo",
      fecha: "1 de noviembre de 1993",
      texto: [
        "Cerati lo grabó casi todo en un pequeño estudio que armó en su casa en Santiago de Chile, mientras Soda Stereo estaba en pausa.",
        "Es un disco muy personal: su esposa de ese momento, Cecilia Amenábar, canta en «Te llevo para que me lleves». Zeta Bosio también colaboró."
      ],
      canciones: ["Te llevo para que me lleves", "Pulsar", "Lisa", "Amor amarillo", "Bajan (versión de Spinetta)"],
      importancia: "Mostró por primera vez al Cerati experimental, el que después veríamos como solista."
    },
    {
      nombre: "Bocanada",
      fecha: "28 de junio de 1999",
      texto: [
        "Fue su primer disco después de la separación de Soda Stereo. Lo grabó en su estudio Casa Submarina, en Buenos Aires.",
        "Mezcla samples, electrónica y guitarras con una orquesta que se grabó en los estudios Abbey Road de Londres."
      ],
      canciones: ["Puente", "Raíz", "Paseo inmoral", "Tabú", "Engaña"],
      importancia: "Muchos críticos y fans lo consideran su obra maestra como solista."
    },
    {
      nombre: "Siempre es Hoy",
      fecha: "26 de noviembre de 2002",
      texto: [
        "Es un disco largo, de 17 canciones, que nació de improvisaciones con su banda en el estudio.",
        "Tiene mucha electrónica y canciones pop. Participaron invitados como Charly García."
      ],
      canciones: ["Cosas imposibles", "Karaoke", "Artefacto", "No te creo", "Amo dejarte así"],
      importancia: "Al principio no gustó tanto, pero con el tiempo se volvió uno de los más queridos."
    },
    {
      nombre: "Ahí Vamos",
      fecha: "2006",
      texto: [
        "Después de dos discos con mucha electrónica, Cerati volvió a las guitarras eléctricas y al rock.",
        "Las canciones son más directas y pensadas para tocar en vivo frente a mucho público."
      ],
      canciones: ["Crimen", "La excepción", "Adiós", "Lago en el cielo", "Me quedo aquí"],
      importancia: "«Crimen» se convirtió en una de las canciones más famosas de toda su carrera."
    },
    {
      nombre: "Fuerza Natural",
      fecha: "1 de septiembre de 2009",
      texto: [
        "Escribió gran parte de las letras en Uruguay. La canción «Fuerza natural» la compuso junto a su hijo Benito.",
        "Tiene un sonido más acústico y folk, con guitarras y mandolinas."
      ],
      canciones: ["Fuerza natural", "Déjà vu", "Magia", "Rapto", "Cactus"],
      importancia: "Fue su último disco de estudio y ganó tres premios Grammy Latinos."
    }
  ];

  const ventanaInfo = document.getElementById("ventana-info");
  const botonesDisco = document.querySelectorAll("[data-disco]");

  botonesDisco.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const numero = boton.getAttribute("data-disco");
      abrirVentana(discos[numero]);
    });
  });

  function abrirVentana(disco) {
    let html = "<h2>" + disco.nombre + "</h2>";
    html += "<p class='anio'>" + disco.fecha + "</p>";

    disco.texto.forEach(function (parrafo) {
      html += "<p>" + parrafo + "</p>";
    });

    html += "<h3>Canciones representativas</h3><ol>";
    disco.canciones.forEach(function (cancion) {
      html += "<li>" + cancion + "</li>";
    });
    html += "</ol>";

    html += "<h3>¿Por qué es importante?</h3>";
    html += "<p>" + disco.importancia + "</p>";
    html += "<a class='boton boton-azul' target='_blank' href='https://open.spotify.com/search/Cerati%20" +
      encodeURIComponent(disco.nombre) + "'>Escuchar en Spotify</a>";

    ventanaInfo.innerHTML = html;
    ventana.classList.add("abierta");
  }

  function cerrarVentana() {
    ventana.classList.remove("abierta");
  }

  document.getElementById("cerrar").addEventListener("click", cerrarVentana);

  ventana.addEventListener("click", function (e) {
    if (e.target === ventana) {
      cerrarVentana();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      cerrarVentana();
    }
  });
}


const guitarra = new Audio("assets/audio/guitarra.mp3");

function tocarGuitarra(elemento) {
  guitarra.currentTime = 0;
  guitarra.play();

  elemento.classList.remove("sonando");
  void elemento.offsetWidth;
  elemento.classList.add("sonando");
}

const cosasQueSuenan = document.querySelectorAll("#boton-guitarra, .vinilo, .disco .foto");

cosasQueSuenan.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    tocarGuitarra(elemento);
  });
});