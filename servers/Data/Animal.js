const Animal = [
  // owner: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "user",
  // },
  // category: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "category",
  // },
  {
    title: "Chow Chow",
    gender: "male",
    city: "Sousse",
    price: " 850dt",
    description: "hello",
    image:
      "https://static.wamiz.com/images/contrib/content/CHIEN%20CHOW%20CHOW-content-60180e3057edd.jpg",
    category: "60ca1bad35cbcd344c56363b",
    owner: "60b776d69198121ba43bd8c7",
  },
  {
    title: "Husky",
    gender: "male",
    city: "Tunis",
    price: "650dt",
    description: "hello",
    image:
      "https://i.pinimg.com/564x/31/00/c2/3100c2dc9261d233d0cd8f1676b756de.jpg",
    category: "60ca1bad35cbcd344c56363b",
    owner: "60b776d69198121ba43bd8c7",
  },
];
module.exports = Animal;
