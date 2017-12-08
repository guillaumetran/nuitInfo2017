/** 
 * Created by guillaumetran on 07/12/2017.
 */

module.exports = [
  {
    _id: 1,
    text: "On se connait ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [1, 21]
  },

  {
    _id: 2,
    text: "Oui. Comment tu sais ça ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [2, 3]
  },
  {
    _id: 3,
    text:
      "Oui on se ressemble un peu. Mais pourquoi tu m'as ajouté ? Je ne me rappelle plus trop de toi.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [4, 5]
  },
  {
    _id: 41,
    text:
      "D'accord. Ha oui je me souviens de toi Enfin je crois.. Martin c'est ça ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [6, 7]
  },

  {
    _id: 26,
    text:
      "Oui c'est vrai que j'ai pas trop profité de la soirée... Mais j'aime pas trop les soirées ou il y a trop de monde en général",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [11, 60]
  },

  {
    _id: 13,
    text:
      "Ouais désolé je me souviens plus trop de toi, il y avait trop de monde hier soir.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [8, 9, 10]
  },

  {
    _id: 4,
    text: "Toi dejà aha",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [12, 13]
  },

  {
    _id: 5,
    text:
      "Ouais enfin j'ai pas envie de me mettre mal avec des inconnus, surtout si je dois conduire le lendemain",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [61]
  },

  {
    _id: 6,
    text:
      "C'est clair que c'est pas la même chose que sur ta photo de profile ; Bon faut que j'aille chercher des potes en ville. On peut continuer à parler si tu veux ^^",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [14, 15, 16]
  },

  {
    _id: 7,
    text:
      "Bon faut que j'aille chercher des potes en ville. On peut continuer à parler si tu veux ^^",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [14, 15, 16]
  },

  {
    _id: 8,
    text: "Une prochaine fois peut être",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    end: true,
    next: []
  },

  {
    _id: 9,
    text: "Oui je pense que c'est mieux ^^ A toute !",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: []
  },

  {
    _id: 10,
    text:
      "Oh juste boire un café et un peu parler de tout ce qui c'est passé hier aha",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [17]
  },

  {
    _id: 11,
    text: "Je garantie rien ",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [18]
  },

  {
    _id: 12,
    text:
      "Ah possible, je vais pas te mentir je me souviens pas de grand chose",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [22, 23, 24]
  },

  {
    _id: 14,
    text: "J'ai pas trop l'habitude en vrai, c'est pas mon genre",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [25, 26]
  },

  {
    _id: 15,
    text: "Oh non qu'est ce qui c'est passé ? Me dit pas que c'était moi",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [27, 28]
  },

  {
    _id: 16,
    text: "Ok cool à plus",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [],
    end: true
  },

  {
    _id: 17,
    text: "Mais j'ai fait quoi encore ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [27, 28]
  },

  {
    _id: 18,
    text: "Ah d'accord donc tu veux juste des nudes ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [],
    end: true
  },

  {
    _id: 19,
    text: "Désolé j'espère que je t'ai pas gâché ta soirée du coup...",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [29, 30, 31]
  },

  {
    _id: 20,
    text:
      "Je peux pas trop te dire aha, merci du coup, j'étais pas la seule au moins ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [32, 33, 34]
  },

  {
    _id: 21,
    text:
      "Oh merde je suis désolé, c'est vraiment sympa de t'être occupé de moi après ça alors",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [35, 36]
  },

  {
    _id: 22,
    text:
      "Oh nan c'est tendu, là après c'est peut-être mieux si on en parle en vrai.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [37, 38]
  },

  {
    _id: 23,
    text:
      "Même c'est sympa, pour me faire pardonner on pourrait boire une verre disons demain",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [38, 39]
  },

  {
    _id: 24,
    text: "Ouais c'est ça ahah à demain du coup",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: []
  },

  {
    _id: 25,
    text: "Un verre à jamais tuer personne",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: []
  },

  {
    _id: 27,
    text: "Ouai !!!! Je vasi pas tardé àpartir",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [41, 42]
  },

  {
    _id: 28,
    text:
      "Oui.. Tu as peu tètre raison jvais demander a ma copinee si je peu dormir chez ellle",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: []
  },

  {
    _id: 29,
    text:
      "Trop mignon de ta part, je vois que tu es très charmeur. Dis-moi, que fais-tu dans la vie ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [44, 45]
  },

  {
    _id: 30,
    text:
      "Oui exactement, je suis en 3 ème année de médecine. Tu ne connaitrais pas ma meilleur amie Marie ? Elle fait également du commerce.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [46]
  },

  {
    _id: 31,
    text:
      "C’est intéressant, bien sûr que oui mais comment sais-tu que c’est ma meilleure amie ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [47, 48]
  },

  {
    _id: 32,
    text:
      "C’est ma meilleur amie ☺ j’ai adoré passé du temps avec toi hier soir à la soirée de Guillaume.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [49, 50]
  },

  {
    _id: 33,
    text: "J’espère qu’elle t’a raconté de bonnes choses sur moi.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [51, 52]
  },

  {
    _id: 34,
    text: "Désolé ... j’aime bien fumé en soirée",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [53]
  },

  {
    _id: 35,
    text: "Avec grand plaisir, on en fume un à notre prochaine soirée ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [54, 55]
  },

  {
    _id: 36,
    text: "Pourquoi tu es venu me parlé pour me dire ça ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [],
    end: true
  },

  {
    _id: 37,
    text: "On se reverra vite, ça te dit un cinéma mardi prochain ?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [59]
  },

  {
    _id: 38,
    text:
      "Ne t’inquiète pas j’ai l’habitude, je ne me suis jamais fait attraper par les policiers.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [59]
  },

  {
    _id: 39,
    text: "Non je ne peux pas, je dois emmener ma mère chez le médecin demain",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [59]
  },

  {
    _id: 40,
    text:
      "Bonjour, je suis la maman d’Eva. Eva est décédé dans un accident de voiture, impliquant également une famille et enfants de 3 et 7 ans également décédé. Les autopsies ont révélé des traces de drogue … Des amies à ma fille m’ont déclaré que vous avez consommé de la drogue avec elle durant la soirée d’hier. C’est de votre faute si notre fille chérie est morte…",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [],
    end: true
  }
];
