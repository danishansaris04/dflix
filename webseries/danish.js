const movies = [
  {
    name: "Farzi",
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/xslXoDf49hqtDf91wOep3IyPR1X.jpg"
  },
  {
    name: "Mirzapur",
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/p0qM8hhlMF5DuxHBzl2EZR6TehX.jpg"
  },
  {
    name: "Attack on Titan",
    poster: "https://m.media-amazon.com/images/M/MV5BMjIyMzU3NzY5MV5BMl5BanBnXkFtZTgwODAxNjUyNzM@._V1_.jpg"
  }
];

const seriesData = {
  "Farzi": {
    imdb_id: "tt15477488",
    seasons: [
      {
        number: 1,
        title: "Season 1",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 }
        ]
      },
      {
        number: 2,
        title: "Season 2",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 }
        ]
      }
    ]
  },

  "Mirzapur": {
    imdb_id: "tt6473300",
    seasons: [
      {
        number: 1,
        title: "Season 1",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 },
          { name: "Episode 5", ep: 5 },
          { name: "Episode 6", ep: 6 },
          { name: "Episode 7", ep: 7 },
          { name: "Episode 8", ep: 8 },
          { name: "Episode 9", ep: 9 }
        ]
      },
      {
        number: 2,
        title: "Season 2",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 },
          { name: "Episode 5", ep: 5 },
          { name: "Episode 6", ep: 6 },
          { name: "Episode 7", ep: 7 },
          { name: "Episode 8", ep: 8 },
          { name: "Episode 9", ep: 9 },
          { name: "Episode 10", ep: 10 }
        ]
      },
      {
        number: 3,
        title: "Season 3",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 },
          { name: "Episode 5", ep: 5 },
          { name: "Episode 6", ep: 6 },
          { name: "Episode 7", ep: 7 },
          { name: "Episode 8", ep: 8 },
          { name: "Episode 9", ep: 9 },
          { name: "Episode 10", ep: 10 }
        ]
      }
    ]
  },

  "Attack on Titan": {
    imdb_id: "tt2560140",
    seasons: [
      {
        number: 1,
        title: "Season 1",
        episodes: [
          { name: "Episode 1", number: 1 },
          { name: "Episode 2", number: 2 },
          { name: "Episode 3", number: 3 },
          { name: "Episode 4", number: 4 },
          { name: "Episode 5", number: 5 },
          { name: "Episode 6", number: 6 },
          { name: "Episode 7", number: 7 },
          { name: "Episode 8", number: 8 },
          { name: "Episode 9", number: 9 },
          { name: "Episode 10", number: 10 },
          { name: "Episode 11", number: 11 },
          { name: "Episode 12", number: 12 },
          { name: "Episode 13", number: 13 },
          { name: "Episode 14", number: 14 },
          { name: "Episode 15", number: 15 },
          { name: "Episode 16", number: 16 },
          { name: "Episode 17", number: 17 },
          { name: "Episode 18", number: 18 },
          { name: "Episode 19", number: 19 },
          { name: "Episode 20", number: 20 },
          { name: "Episode 21", number: 21 },
          { name: "Episode 22", number: 22 },
          { name: "Episode 23", number: 23 },
          { name: "Episode 24", number: 24 },
          { name: "Episode 25", number: 25 }
        ]
      },
      {
        number: 2,
        title: "Season 2",
        episodes: [
          { name: "Episode 1", number: 1 },
          { name: "Episode 2", number: 2 },
          { name: "Episode 3", number: 3 },
          { name: "Episode 4", number: 4 },
          { name: "Episode 5", number: 5 },
          { name: "Episode 6", number: 6 },
          { name: "Episode 7", number: 7 },
          { name: "Episode 8", number: 8 },
          { name: "Episode 9", number: 9 },
          { name: "Episode 10", number: 10 },
          { name: "Episode 11", number: 11 },
          { name: "Episode 12", number: 12 }
        ]
      },
      {
        number: 3,
        title: "Season 3 Part 1",
        episodes: [
          { name: "Episode 1", number: 1 },
          { name: "Episode 2", number: 2 },
          { name: "Episode 3", number: 3 },
          { name: "Episode 4", number: 4 },
          { name: "Episode 5", number: 5 },
          { name: "Episode 6", number: 6 },
          { name: "Episode 7", number: 7 },
          { name: "Episode 8", number: 8 },
          { name: "Episode 9", number: 9 },
          { name: "Episode 10", number: 10 },
          { name: "Episode 11", number: 11 },
          { name: "Episode 12", number: 12 }
        ]
      },
      {
        number: 3,
        title: "Season 3 Part 2",
        episodes: [
          { name: "Episode 13", number: 13 },
          { name: "Episode 14", number: 14 },
          { name: "Episode 15", number: 15 },
          { name: "Episode 16", number: 16 },
          { name: "Episode 17", number: 17 },
          { name: "Episode 18", number: 18 },
          { name: "Episode 19", number: 19 },
          { name: "Episode 20", number: 20 },
          { name: "Episode 21", number: 21 },
          { name: "Episode 22", number: 22 }
        ]
      },
      {
        number: 4,
        title: "Season 4 Part 1",
        episodes: [
          { name: "Episode 1", number: 1 },
          { name: "Episode 2", number: 2 },
          { name: "Episode 3", number: 3 },
          { name: "Episode 4", number: 4 },
          { name: "Episode 5", number: 5 },
          { name: "Episode 6", number: 6 },
          { name: "Episode 7", number: 7 },
          { name: "Episode 8", number: 8 },
          { name: "Episode 9", number: 9 },
          { name: "Episode 10", number: 10 },
          { name: "Episode 11", number: 11 },
          { name: "Episode 12", number: 12 },
          { name: "Episode 13", number: 13 },
          { name: "Episode 14", number: 14 },
          { name: "Episode 15", number: 15 },
          { name: "Episode 16", number: 16 }
        ]
      },
      {
        number: 4,
        title: "Season 4 Part 2",
        episodes: [
          { name: "Episode 17", number: 17 },
          { name: "Episode 18", number: 18 },
          { name: "Episode 19", number: 19 },
          { name: "Episode 20", number: 20 },
          { name: "Episode 21", number: 21 },
          { name: "Episode 22", number: 22 },
          { name: "Episode 23", number: 23 },
          { name: "Episode 24", number: 24 },
          { name: "Episode 25", number: 25 },
          { name: "Episode 26", number: 26 },
          { name: "Episode 27", number: 27 },
          { name: "Episode 28", number: 28 }
        ]
      },
      {
        number: 4,
        title: "Season 4 Part 3 Specials",
        episodes: [
          { name: "Episode 29", number: 29 },
          { name: "Episode 30", number: 30 }
        ]
      },
      {
        number: 4,
        title: "Season 4 Part 4 Specials",
        episodes: [
          { name: "Episode 31", number: 31 },
          { name: "Episode 32", number: 32 },
          { name: "Episode 33", number: 33 },
          { name: "Episode 34", number: 34 }
        ]
      }
    ]
  }
};
