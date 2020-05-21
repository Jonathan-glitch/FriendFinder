// ===============================================================================
// Array of 'friend' objects that will be accessed via /api/friends route
// ===============================================================================

var friendsArray = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
  },
  {
    name: "Elie",
    photo:
      "https://media.licdn.com/mpr/mpr/shhttps://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260rinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
  },
  {
    name: "Elie",
    photo:
      "https://media.licdn.com/mpr/mpr/shhttps://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260rinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1],
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
