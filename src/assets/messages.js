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
    next: [4]
  },

  {
    _id: 41,
    text:
      "D'accord. Ha oui je me souviens de toi, enfin je crois.. Martin c'est ça ?",
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
      "Oui c'est vrai que j'ai pas trop profité de la soirée.. Mais j'aime pas trop les soirées où il y a trop de monde en général",
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
    text: "Toi déjà aha",
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
      "Ouais enfin j'ai pas envie de me mettre mal avec des inconus, surtout si je dois conduire le lendemain",
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
    end: true,
    endNumber: 2,
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
    end: true,
    endNumber: 2
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
    text: "Ah d'accord pas très sympa !",
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
    text: "Désolé j'espère que je ne t'ai pas gâché ta soirée..",
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
      "Je suis désolé, c'est vraiment sympa de t'être occupé de moi",
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
      "Oh non ! C'est peut-être mieux si on en parle en vrai.",
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
      "C'est sympa, pour me faire pardonner on pourrait boire une verre demain",
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
    text: "Ouais c'est ça ! à demain du coup :)",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [1]
  },

  {
    _id: 25,
    text: "Un verre n'a jamais tué personne",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    next: [40]
  },

  {
    _id: 27,
    text: "Ouai !!! Je vais pas tarder à partir",
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
      "Oui.. Tu as peut être raison je vais demander si je peux dormir chez ma pote",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    },
    end: true,
    next: []
  }
];
