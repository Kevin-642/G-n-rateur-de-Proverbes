const proverbes = [
  "La sagesse commence dans l'émerveillement. – Socrate",
  "Celui qui connaît les autres est instruit. Celui qui se connaît est sage. – Lao Tseu",
  "La seule vraie sagesse est de savoir que tu ne sais rien. – Socrate",
  "La patience est la clé de la joie. – Rumi",
  "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles. – Oscar Wilde",
  "Ce que vous pensez, vous le devenez. – Bouddha",
  "Celui qui déplace une montagne commence par déplacer de petites pierres. – Confucius",
  "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions. – Dalaï Lama",
  "Ne juge pas chaque jour à la récolte que tu fais mais aux graines que tu sèmes. – Robert Louis Stevenson",
  "L'expérience est une lanterne accrochée dans le dos, qui n’éclaire que le chemin parcouru. – Confucius",
  "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre. – Albert Einstein",
  "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles. – Sénèque",
  "Agis toujours de façon à maximiser le nombre de choix possibles. – Heinz von Foerster",
  "Le cœur a ses raisons que la raison ne connaît point. – Blaise Pascal",
  "L’arbre qui tombe fait plus de bruit que la forêt qui pousse. – Proverbe africain",
  "Quand les racines sont profondes, il n’y a aucune raison de craindre le vent. – Proverbe africain",
  "La plus longue marche commence par un premier pas. – Proverbe chinois",
  "On ne peut pas remplir une tasse déjà pleine. – Proverbe zen",
  "Celui qui a planté un arbre avant de mourir n’a pas vécu inutilement. – Proverbe indien",
  "Connais-toi toi-même. – Platon",
  "Ce n’est pas la mort que l’on doit craindre, mais de ne jamais commencer à vivre. – Marc Aurèle",
  "Le désir est l’essence de l’homme. – Spinoza",
  "L’homme est condamné à être libre. – Jean-Paul Sartre",
  "Penser, c’est dire non. – Alain",
  "L’homme est la mesure de toutes choses. – Protagoras",
  "Il n’y a de richesse que d’hommes. – Jean Bodin",
  "La liberté, c’est l’indépendance de la volonté. – Kant",
  "La vie heureuse est celle qui est en accord avec sa propre nature. – Sénèque",
  "Le doute est le commencement de la sagesse. – Aristote",
  "L’homme est né libre, et partout il est dans les fers. – Jean-Jacques Rousseau",
  "La culture, c’est ce qui demeure dans l’homme lorsqu’il a tout oublié. – Édouard Herriot",
  "La vie est un mystère qu’il faut vivre, et non un problème à résoudre. – Mahatma Gandhi",
  "La conscience est la lumière de l’intelligence pour distinguer le bien du mal. – Confucius",
  "Le plaisir est le commencement et la fin de la vie heureuse. – Épicure",
  "Il n’y a pas de faits, seulement des interprétations. – Friedrich Nietzsche",
  "Je pense, donc je suis. – René Descartes",
  "L’homme est un loup pour l’homme. – Thomas Hobbes",
  "La liberté des uns s’arrête là où commence celle des autres. – John Stuart Mill",
  "Le bonheur n’est pas un but à atteindre, mais une façon de voyager. – Margaret Lee Runbeck",
  "Tout flatteur vit aux dépens de celui qui l’écoute. – Jean de La Fontaine",
  "La raison du plus fort est toujours la meilleure. – Jean de La Fontaine",
  "Si ce n’est toi, c'est donc ton frère. – Jean de La Fontaine",
  "Plutôt souffrir que mourir, c’est la devise des hommes. – Jean de La Fontaine",
  "Garde toi, tant que tu vivras, de juger les gens sur la mine. – Jean de La Fontaine",
  "Je plie et ne romps pas. – Jean de La Fontaine",
  "On a souvent besoin d’un plus petit que soi. – Jean de La Fontaine",
  "Patience et longueur de temps font plus que force ni que rage. – Jean de La Fontaine",
  "Est bien fou du cerveau qui prétend contenter tout le monde et son père. – Jean de La Fontaine",
  "Ils sont trop verts, dit-il, et bons pour des goujats. – Jean de La Fontaine",
  "La méfiance est mère de la sûreté. – Jean de La Fontaine",
  "Petit poisson deviendra grand. – Jean de La Fontaine",
  "Un tiens vaut, ce dit-on, mieux que deux tu l’auras. – Jean de La Fontaine",
  "Le travail est un trésor. – Jean de La Fontaine",
  "Rien ne sert de courir ; il faut partir à point. – Jean de La Fontaine",
  "Aide-toi, le Ciel t’aidera. – Jean de La Fontaine",
  "Selon que vous serez puissant ou misérable, les jugements de cour vous rendront blanc ou noir. – Jean de La Fontaine",
  "Tel est pris qui croyait prendre. – Jean de La Fontaine",
  "Amour, Amour, quand tu nous tiens, on peut bien dire : Adieu prudence. – Jean de La Fontaine",
  "Mais les ouvrages les plus courts sont toujours les meilleurs. – Jean de La Fontaine",
  "Que de tout inconnu le sage se méfie. – Jean de La Fontaine",
  "Il ne faut jamais vendre la peau de l’ours qu’on ne l’ait mis par terre. – Jean de La Fontaine",
  "Ventre affamé n'a point d'oreilles. – Jean de La Fontaine",
  "À l’œuvre on connaît l'artisan. – Jean de La Fontaine",
  "Qui sème le vent récolte la tempête. – Proverbe français",
  "Qui ne risque rien n’a rien. – Proverbe français",
  "C’est en forgeant qu’on devient forgeron. – Proverbe français",
  "On ne fait pas d’omelette sans casser des œufs. – Proverbe français",
  "Mieux vaut prévenir que guérir. – Proverbe français",
  "L’union fait la force. – Proverbe français",
  "L’habit ne fait pas le moine. – Proverbe français",
  "Chacun voit midi à sa porte. – Proverbe français",
  "Tant va la cruche à l’eau qu’à la fin elle se casse. – Proverbe français",
  "La parole est d’argent, mais le silence est d’or. – Proverbe français",
  "On ne change pas une équipe qui gagne. – Proverbe français",
  "Tout ce qui brille n’est pas or. – Proverbe français",
  "Quand on parle du loup, on en voit la queue. – Proverbe français",
  "Il faut avoir deux cordes à son arc. – Charles de Bovelles",
  "La volonté est réputée pour le fait. – Antoine Loisel",
  "Le plus lent à promettre est toujours le plus fidèle à tenir. – Jean-Jacques Rousseau",
  "Petit à petit l’oiseau fait son nid. – Philibert-Joseph Le Roux",
  "Les lois sont des toiles d’araignées à travers lesquelles passent les grosses mouches et où restent les petites. – Honoré de Balzac",
  "Derrière chaque grande fortune se cache un crime. – Honoré de Balzac",
  "Gouverner, c’est faire croire. – Nicolas Machiavel",
  "Les hommes oublient plus facilement la mort de leur père que la perte de leur patrimoine. – Nicolas Machiavel",
  "La vie ressemble à un conte, ce qui importe ce n’est pas la longueur, mais sa valeur. – Sénèque",
  "Si vous voulez que l’on garde votre secret, le plus sûr est de le garder vous-même. – Sénèque",
  "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire. – Albert Einstein",
  "L’imagination est plus importante que la connaissance. – Albert Einstein",
  "Le bonheur ne se trouve pas au sommet de la montagne, mais dans la façon de la gravir. – Confucius",
  "On ne naît pas femme, on le devient. – Simone de Beauvoir",
  "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme. – Winston Churchill",
  "La beauté est dans les yeux de celui qui regarde. – Oscar Wilde",
  "Vivre, c’est choisir. Mais choisir, c’est renoncer. – André Gide",
  "Le cœur humain est un instrument de plusieurs cordes ; le parfait connaisseur des hommes sait faire vibrer tous, comme un bon musicien. – Charles Dickens",
  "Le secret de l'existence n'est pas seulement de vivre, mais de savoir pour quoi tu vis. – Fiodor Dostoïevski",
  "Un cœur est une richesse qui n'est ni vendue ni achetée, mais qui est donnée. – Gustave Flaubert",
  "Si nous exagérons nos joies, comme nous le faisons avec nos peines, nos problèmes perdraient de leur importance. – Anatole France"
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