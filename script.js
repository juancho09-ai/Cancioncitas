const frases = [
{
    frase: "Lograste comprender lo que ni yo entendí.",
    autor: "Milo J",
    cancion: "M.A.I."
  },
  {
    frase: "Contigo todo pesa menos.",
    autor: "Mora",
    cancion: "Memorias"
  },
  {
    frase: "Me diste vida, mucha más vida que el vino",
    autor: "Manuel Medrano",
    cancion: "Bajo el Agua"
  },

  {
    frase: "Te quiero más que ayer, y mucho menos que mañana",
    autor: "Eladio Carrión",
    cancion: "TQMQA"
  },
  {
    frase: "Con vos nunca hubo nada que dudar.",
    autor: "Milo J",
    cancion: "Carencias de cordura"
  },
  {
    frase: "Tus vueltas cautivaban las miradas de unos cuantos, tal vez, yo era uno más, pero deseé que fueras mía",
    autor: "Milo J",
    cancion: "TUS VUELTAS"
  },
  {
    frase: "Porque algún día te miraré a los ojos y sabremos que a pesar de la distancia, es como si entre nosotros, nada fuera a terminar.",
    autor: "Manuel Medrano",
    cancion: "La Distancia"
  },

  {
    frase: "Darling, you look perfect tonight.",
    autor: "Ed Sheeran",
    cancion: "Perfect"
  },
  {
    frase: "Oh, yeah, your skin and bones, turn into something beautiful.",
    autor: "Coldplay",
    cancion: "Yellow"
  },
  {
    frase: "Love your curves and all your edges, all your perfect imperfections.",
    autor: "John Legend",
    cancion: "All of Me"
  },
    {
    frase: "Y me gusta esa cara tierna que pones cuando te frustras.",
    autor: "Milo J",
    cancion: "Morocha"
  },
    {
    frase: "Can we always be this close, forever and ever?.",
    autor: "Taylor Swift",
    cancion: "Lover"
  },
    {
    frase: "Y ya tú sabe' que lo mío es tuyo, oh-oh-oh, porque contigo es que yo fluyo, oh-oh-oh.",
    autor: "Mora",
    cancion: "Tuyo"
  },
    {
    frase: "Contigo to' es una aventura y a mí me gusta el peligro.",
    autor: "Mora",
    cancion: "Reina"
  },
    {
    frase: "Nada e' normal contigo, baby, tú eres especial,To's mis dolores cómo los supiste anestesiar.",
    autor: "Eladio Carrión",
    cancion: "Especial"
  },
    {
    frase: "Tal vez seas vos, quien me ayudará, si pierdo el control, y no puedo más.",
    autor: "Milo J",
    cancion: "Tu Manta"
  },
    {
    frase: "Y lo peor es que yo te conozco tanto, que podría recordarte quien eres por si lo olvidas, y lo peor del caso es que de ti sé tanto, que podría dictar clases intensivas de tu vida.",
    autor: "Canserbero",
    cancion: "Maquiavélico"
  },
    {
    frase: "Algo tan simple como que yo voy en ti y tú vas en mí.",
    autor: "Canserbero",
    cancion: "Querer Querernos"
  },
    {
    frase: "Miras con tanta dulzura, hermosa criatura, tú, mi bello ángel que cayó del cielo.",
    autor: "Natanael Cano",
    cancion: "Mi bello ángel"
  },
    {
    frase: "Y también yo ando solo, y soy solo pa' ti, corazón.",
    autor: "Tito Double P",
    cancion: "La Loba"
  },
    {
    frase: "Por esos ojos, yo robo y mato.",
    autor: "Fuerza Regida",
    cancion: "Por esos ojos"
  },
    {
    frase: "Tú, el aire que respiro yo, y la luz de la Luna en el mar, la garganta que ansio mojar, que temo ahogar de amor.",
    autor: "Rodrigo Amarante",
    cancion: "Tuyo(Narcos Theme)"
  },
    {
    frase: "Prefiero tus labio' a cualquier premio, prefiero tu boca que un número uno.",
    autor: "Alvaro Díaz",
    cancion: "YOKO"
  },
    {
    frase: "Y si pudiera escoger mis sueño', yo soñaría contigo, ná' más.",
    autor: "Alvaro Díaz",
    cancion: "NO PODEMOS SER AMIGOS."
  },
    {
    frase: "Si estoy cerca de ti, se me acelera el pulso, siempre caigo easy.",
    autor: "Mora",
    cancion: "AURORA"
  },
    {
    frase: "En tus brazos, siempre en tus brazos.",
    autor: "Milo J",
    cancion: "Ama de mi sol"
  },
    {
    frase: "I don't wanna look at anything else now that I saw you.",
    autor: "Taylor Swift",
    cancion: "Daylight"
  },
    {
    frase: "And you've got a smile that could light up this whole town.",
    autor: "Taylor Swift",
    cancion: "You Belong With Me"
  },
    {
    frase: "Eres la mujer, (eres la mujer) que tiene todo el derecho sobre mí.",
    autor: "Manuel Medrano",
    cancion: "La Mujer Que Bota Fuego"
  },
    {
    frase: "Eres la única que me pone a bailar, que me pone a sudar, la única que me pone la cabeza a andar, el corazón a palpitar.",
    autor: "Manuel Medrano",
    cancion: "Donde Nadie Pueda Ir"
  },
    {
    frase: "Eres mi canción favoritaYo quisiera darte las constelaciones, Más millones de caricias en un manantial.",
    autor: "Micro TDH",
    cancion: "Cafuné"
  },
    {
    frase: "Soy capaz de lo incapaz por ti mi cielo.",
    autor: "Romeo Santos",
    cancion: "Mi Santa"
  },
    {
    frase: "Si yo fuera El Hombre Araña por un beso, cien pies de altura escalo sin esfuerzo a tu balcón.",
    autor: "Romeo Santos",
    cancion: "Héroe Favorito"
  }
];

const abrirBtn = document.getElementById("abrirBtn");
const otraBtn = document.getElementById("otraBtn");
const cerrarBtn = document.getElementById("cerrarBtn");

const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");

const fraseTexto = document.getElementById("frase");
const autorTexto = document.getElementById("autor");
const cancionTexto = document.getElementById("cancion");

const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

let galaxyActive = false;
let stars = [];
let particles = [];
let angle = 0;
let animationId = null;

function mostrarFrase() {
  const random = Math.floor(Math.random() * frases.length);
  fraseTexto.textContent = `"${frases[random].frase}"`;
  autorTexto.textContent = `— ${frases[random].autor}`;
  cancionTexto.textContent = frases[random].cancion;
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speed = Math.random() * 0.35 + 0.1;
    this.alpha = Math.random();
  }

  update() {
    this.y += this.speed;
    this.alpha += 0.025;

    if (this.y > canvas.height) {
      this.reset();
      this.y = 0;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.abs(Math.sin(this.alpha));
    ctx.fillStyle = "white";
    ctx.shadowBlur = 14;
    ctx.shadowColor = "#ffffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function heartPoint(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );

  return { x, y };
}

function crearGalaxia() {
  stars = [];
  particles = [];

  for (let i = 0; i < 120; i++) {
    stars.push(new Star());
  }

  for (let i = 0; i < 1500; i++) {
    const t = (Math.PI * 2 * i) / 420;
    const p = heartPoint(t);

    particles.push({
      x: p.x,
      y: p.y,
      size: Math.random() * 2.8 + 1.6,
      offset: Math.random() * 100,
      color: Math.random() > 0.5 ? "#ff1744" : "#b517ff"
    });
  }
}

function fondoGalaxia() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, "rgba(27, 11, 46, 0.55)");
  grad.addColorStop(0.45, "rgba(75, 18, 72, 0.45)");
  grad.addColorStop(1, "rgba(247, 37, 133, 0.45)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
} 
function dibujarCorazonNota() {
  const cx = canvas.width / 2;
  const cy = window.innerWidth <= 600 
  ? canvas.height * 0.43 
  : canvas.height / 2 - 45;
  const isMobile = window.innerWidth <= 600;
  const cardWidth = Math.min(650, window.innerWidth - 32);
  const scale = isMobile ? cardWidth / 18 : cardWidth / 20;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(Math.sin(angle * 0.7) * 0.025);

  particles.forEach((p) => {
    const pulse = Math.sin(angle * 3 + p.offset) * 2;

    ctx.save();
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 20;
    ctx.shadowColor = p.color;
    ctx.globalAlpha = 0.75 + Math.sin(angle + p.offset) * 0.2;

    ctx.beginPath();
    ctx.arc(p.x * scale, p.y * scale + pulse, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  ctx.save();
  const glow = ctx.createRadialGradient(0, 0, 20, 0, 0, cardWidth * 0.75);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.16)");
  glow.addColorStop(0.45, "rgba(255, 0, 160, 0.16)");
  glow.addColorStop(1, "rgba(255, 0, 160, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, cardWidth * 1.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

function animarGalaxia() {
  if (!galaxyActive) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fondoGalaxia();

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  dibujarCorazonNota();

  angle += 0.018;
  animationId = requestAnimationFrame(animarGalaxia);
}

function iniciarGalaxia() {
  resizeCanvas();
  canvas.classList.remove("hidden");
  galaxyActive = true;
  crearGalaxia();

  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  animarGalaxia();
}

function detenerGalaxia() {
  galaxyActive = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  canvas.classList.add("hidden");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

abrirBtn.addEventListener("click", () => {
  sobre.classList.add("hidden");
  carta.classList.remove("hidden");
  mostrarFrase();
  iniciarGalaxia();
});

otraBtn.addEventListener("click", mostrarFrase);

cerrarBtn.addEventListener("click", () => {
  carta.classList.add("hidden");
  sobre.classList.remove("hidden");
  detenerGalaxia();
});