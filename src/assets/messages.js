/**
 * Created by guillaumetran on 07/12/2017.
 */
module.exports = [
  {
    _id: 1,
    text: "Yes, and I use Gifted Chat!",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Are you building a chat app?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    }
  },
  {
    _id: 4,
    text: "OKI",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Emilie Gueth",
      avatar: require("./images/eva.jpg")
    }
  }
];