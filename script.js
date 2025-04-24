const proverbes = [
  "La sagesse commence dans l'émerveillement. – Socrate",
  "Celui qui connaît les autres est instruit. Celui qui se connaît est sage. – Lao Tseu",
  "La seule vraie sagesse est de savoir que tu ne sais rien. – Socrate",
  "La patience est la clé de la joie. – Rumi",
  "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles. – Oscar Wilde",
  "Ce que vous pensez, vous le devenez. – Bouddha",
  "Celui qui déplace une montagne commence par déplacer de petites pierres. – Confucius"
];

function formatDate(date) {
  const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  return `${jours[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}`;
}

function citationDuJour() {
  const index = new Date().getDate() % proverbes.length;
  const citation = proverbes[index];
  document.getElementById('citationDuJour').innerText = citation;
  const date = new Date();
  document.getElementById('date-citation').innerText = `Citation du ${formatDate(date)} : ${citation}`;
}

function nouveauProverbe() {
  const index = Math.floor(Math.random() * proverbes.length);
  document.getElementById('citationDuJour').innerText = proverbes[index];
}

function partagerX() {
  const citation = document.getElementById('citationDuJour').innerText;
  const url = encodeURIComponent(window.location.href);
  const texte = encodeURIComponent(citation);
  const partageUrl = `https://twitter.com/intent/tweet?text=${texte}&url=${url}`;
  window.open(partageUrl, '_blank');
}

function partagerFacebook() {
  const citation = document.getElementById('citationDuJour').innerText;
  const partageUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(citation)}`;
  window.open(partageUrl, '_blank');
}

function telechargerImage() {
  const citation = document.getElementById("citationDuJour").innerText;
  const zone = document.getElementById("citationDuJour");

  html2canvas(zone).then(canvas => {
    const link = document.createElement('a');
    link.download = 'citation-inspirante.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  citationDuJour();
});