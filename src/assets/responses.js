/**
 * Created by guillaumetran on 07/12/2017.
 */
module.exports = [
  {
    _id: 1,
    text: "T'es la cousine de Nicolas ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [2]
  },
  {
    _id: 2,
    text: "J'ai vu un air de famille",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [3]
  },
  {
    _id: 3,
    text: "J'ai demandé à Nico ;)",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [41]
  },
  {
    _id: 4,
    text:
      "En même temps tu as passé presque toute la soirée sur ton téléphone !",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [26]
  },

  {
    _id: 6,
    text:
      "Ouai c'est ça ! T'es forte, même si tu as passé toute la soirée sur ton téléphone tu te souviens bien !",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [26]
  },
  {
    _id: 7,
    text: "Exactement ! Bravo ! :)",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [13]
  },
  {
    _id: 8,
    text: "Oh pourtant toi tu m'as tapé dans l'oeil",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 9,
    text: "Pourtant je m'étais fait beau pour toi",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 10,
    text: "Je connaissais même pas la moitié",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [42]
  },
  {
    _id: 60,
    text: "Trop de visage que tu connais pas ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [4]
  },
  {
    _id: 11,
    text: "Passes un peu moins de temps sur ton portable ça ira mieux",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [5]
  },
  {
    _id: 12,
    text: "Ca va changer t'inquiéte",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 13,
    text: "Pourtant vu ma tête aha",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [6]
  },
  {
    _id: 61,
    text: "Moi je reste toujours dormir j'ai pas ce problème",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [7]
  },
  {
    _id: 14,
    text:
      "On peut se reparler après c'est plus sûr et surtout si t'es avec tes amies",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [9]
  },
  {
    _id: 15,
    text: "D'accord, tu vas ou exactement. Sans être indiscret",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [10]
  },
  {
    _id: 16,
    text: "Bah viens me chercher",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 17,
    text: "Tant que ça parle pas trop de moi ahah",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [11]
  },
  {
    _id: 18,
    text:
      "Je commence à flipper;Eva ? Bon conduit prudemment, on se reparle après" +
      "Eva t'es rentrée ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    endNumber: 2,
    next: []
  },
  {
    _id: 21,
    text: "On s'est vu a la soirée de Guillaume",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [12]
  },
  {
    _id: 22,
    text: "Ah tu ne tiens pas beaucoup l'alcool ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [14]
  },
  {
    _id: 23,
    text: "Ah fait gaffe en ouvrant facebook alors",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [15]
  },
  {
    _id: 24,
    text: "Fragile",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [16]
  },
  {
    _id: 25,
    text: "C'est pas grave t'inquiète.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [17]
  },
  {
    _id: 26,
    text: "Mais tu te souviens vraiment de rien ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [17]
  },
  {
    _id: 27,
    text: "Tu faisais du mal à voir",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [18]
  },
  {
    _id: 28,
    text:
      "T'es grave partie en couille, je me suis occupé de toi je voulais savoir si ça allais mieux",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [19]
  },
  {
    _id: 29,
    text: "Non ça va. La soirée était pas folle non plus",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [20]
  },
  {
    _id: 30,
    text: "Un peu ! Tu m'as vomis dessus ahah",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [21]
  },
  {
    _id: 31,
    text:
      "Tu vas mieux, c'est bon. J'ai même pas pu profiter vu que ton cousin était mort merci et salut.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 32,
    text: "Tu étais la seule ça faisait bizarre",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 33,
    text: "Un peu quand-même, toi t'étais en mode zombie.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [22]
  },
  {
    _id: 34,
    text: "Il y avait ton cousin aussi aha",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [23]
  },
  {
    _id: 35,
    text: "T'es la cousine de Martin c'est normal.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [23]
  },
  {
    _id: 36,
    text: "De même pour moi.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 37,
    text: "Oui demain tu serais libre ? Le temps de décuver un peu",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [24]
  },
  {
    _id: 38,
    text: "Non merci, j'ai pas trop le temps en ce moment",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    next: []
  },
  {
    _id: 39,
    text: "Oui demain ça me va. Mais je croyais que tu buvais pas beaucoup",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [25]
  },
  {
    _id: 40,
    text: "Alors tu es toujours au bar ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [27]
  },
  {
    _id: 41,
    text:
      "T'es sure que tu peux conduire dans cet état ? C'est pas mieux que tu dormes chez quelqu'un ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [28]
  },
  {
    _id: 42,
    text: "Ok roule bien ! On se reparle après",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    endNumber: 1,
    next: []
  },
  {
    _id: 43,
    text:
      "Quand j’ai vu ton visage, je me suis toute de suite dit qu’il fallait t’ajouter",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [29]
  },
  {
    _id: 44,
    text:
      "Je t’en prie. Je suis étudiant en commerce, j’ai entendu que tu es étudiante en médecine",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [30]
  },
  {
    _id: 45,
    text:
      "Je t’en prie. Je suis étudiant en commerce, d’ailleurs ta meilleur amie Marie est avec moi en classe.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [31]
  },
  {
    _id: 46,
    text: "Je la connais ! c’est une fille très agréable.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [32]
  },
  {
    _id: 47,
    text: "Disons qu’elle ma déjà parlé beaucoup de fois de toi",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [33]
  },
  {
    _id: 48,
    text: "C’est une très bonne amie, j’aime l’écouter",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [33]
  },
  {
    _id: 49,
    text: "Moi aussi j’ai adoré, tu avais l’air d’avoir les yeux rouges aha",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [34]
  },
  {
    _id: 50,
    text:
      "Elle a toute les qualités au monde, gentille, courageuse et très jolie.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [34]
  },
  {
    _id: 51,
    text:
      "Beaucoup de bonnes choses. J’ai entendu que tu fumes du cannabis, on pourra se fumer un joint quand tu as le temps",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [35]
  },
  {
    _id: 52,
    text:
      "Beaucoup de bonnes choses. Mais une chose qui me repousse un peu, le fait que tu consommes du cannabis.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: [36]
  },
  {
    _id: 53,
    text:
      "Tu n’es pas la seule, qui n’as jamais fumé en soirée ? ça fait du bien de temps en temps",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 54,
    text: "J'aime",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 55,
    text:
      "J’accepte ta proposition ! Je te laisse en ramener alors à la soirée de Romain la semaine prochaine",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 56,
    text: "J’ai adoré aussi, j’espère te revoir bientôt",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 57,
    text:
      "J’ai adoré aussi, fait attention en prenant la route il y’a beaucoup de gendarmes !",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 58,
    text: "J’ai adoré aussi, ne prend pas la route car tu as fumé.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    next: []
  },
  {
    _id: 59,
    text: "Eva, tout va bien ???;Evaaa",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Joueur"
    },
    end: true,
    endNumber: 1,
    next: []
  }
];
