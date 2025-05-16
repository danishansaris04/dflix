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
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/m4DzoiXUHRBTJjkZwayRYf05NXB.jpg"
  },
  {
    name: "Stranger Things",
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg"
  },
  {
  name: "All of Us Are Dead",
  poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg"
  },
    {
    name: "The Boys",
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"
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
        { name: "Episode 4", ep: 4 },
        { name: "Episode 5", ep: 5 },
        { name: "Episode 6", ep: 6 },
        { name: "Episode 7", ep: 7 },
        { name: "Episode 8", ep: 8 }
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
        { name: "Episode 1", ep: 1 },
        { name: "Episode 2", ep: 2 },
        { name: "Episode 3", ep: 3 },
        { name: "Episode 4", ep: 4 },
        { name: "Episode 5", ep: 5 },
        { name: "Episode 6", ep: 6 },
        { name: "Episode 7", ep: 7 },
        { name: "Episode 8", ep: 8 },
        { name: "Episode 9", ep: 9 },
        { name: "Episode 10", ep: 10 },
        { name: "Episode 11", ep: 11 },
        { name: "Episode 12", ep: 12 },
        { name: "Episode 13", ep: 13 },
        { name: "Episode 14", ep: 14 },
        { name: "Episode 15", ep: 15 },
        { name: "Episode 16", ep: 16 },
        { name: "Episode 17", ep: 17 },
        { name: "Episode 18", ep: 18 },
        { name: "Episode 19", ep: 19 },
        { name: "Episode 20", ep: 20 },
        { name: "Episode 21", ep: 21 },
        { name: "Episode 22", ep: 22 },
        { name: "Episode 23", ep: 23 },
        { name: "Episode 24", ep: 24 },
        { name: "Episode 25", ep: 25 }
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
        { name: "Episode 10", ep: 10 },
        { name: "Episode 11", ep: 11 },
        { name: "Episode 12", ep: 12 }
      ]
    },
    {
      number: 3,
      title: "Season 3 Part 1",
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
        { name: "Episode 10", ep: 10 },
        { name: "Episode 11", ep: 11 },
        { name: "Episode 12", ep: 12 }
      ]
    },
    {
      number: 3,
      title: "Season 3 Part 2",
      episodes: [
        { name: "Episode 13", ep: 13 },
        { name: "Episode 14", ep: 14 },
        { name: "Episode 15", ep: 15 },
        { name: "Episode 16", ep: 16 },
        { name: "Episode 17", ep: 17 },
        { name: "Episode 18", ep: 18 },
        { name: "Episode 19", ep: 19 },
        { name: "Episode 20", ep: 20 },
        { name: "Episode 21", ep: 21 },
        { name: "Episode 22", ep: 22 }
      ]
    },
    {
      number: 4,
      title: "Season 4 Part 1",
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
        { name: "Episode 10", ep: 10 },
        { name: "Episode 11", ep: 11 },
        { name: "Episode 12", ep: 12 },
        { name: "Episode 13", ep: 13 },
        { name: "Episode 14", ep: 14 },
        { name: "Episode 15", ep: 15 },
        { name: "Episode 16", ep: 16 }
      ]
    },
    {
      number: 4,
      title: "Season 4 Part 2",
      episodes: [
        { name: "Episode 17", ep: 17 },
        { name: "Episode 18", ep: 18 },
        { name: "Episode 19", ep: 19 },
        { name: "Episode 20", ep: 20 },
        { name: "Episode 21", ep: 21 },
        { name: "Episode 22", ep: 22 },
        { name: "Episode 23", ep: 23 },
        { name: "Episode 24", ep: 24 },
        { name: "Episode 25", ep: 25 },
        { name: "Episode 26", ep: 26 },
        { name: "Episode 27", ep: 27 },
        { name: "Episode 28", ep: 28 }
      ]
    },
    {
      number: 4,
      title: "Season 4 Part 3 Specials",
      episodes: [
        { name: "Episode 29", ep: 29 },
        { name: "Episode 30", ep: 30 }
      ]
    },
    {
      number: 4,
      title: "Season 4 Part 4 Specials",
      episodes: [
        { name: "Episode 31", ep: 31 },
        { name: "Episode 32", ep: 32 },
        { name: "Episode 33", ep: 33 },
        { name: "Episode 34", ep: 34 }
      ]
    }
  ]
},
  "Stranger Things": {
    imdb_id: "tt4574334",
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
          { name: "Episode 8", ep: 8 }
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
          { name: "Episode 9", ep: 9 }
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
          { name: "Episode 8", ep: 8 }
        ]
      },
      {
        number: 4,
        title: "Season 4",
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
        number: 5,
        title: "Season 5",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 },
          { name: "Episode 5", ep: 5 },
          { name: "Episode 6", ep: 6 },
          { name: "Episode 7", ep: 7 },
          { name: "Episode 8", ep: 8 }
        ]
      }
    ]
  },
  "All of Us Are Dead": {
  imdb_id: "tt14169960",
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
        { name: "Episode 9", ep: 9 },
        { name: "Episode 10", ep: 10 },
        { name: "Episode 11", ep: 11 },
        { name: "Episode 12", ep: 12 }
      ]
    }
  ]
 },
  "The Boys": {
    imdb_id: "tt1190634",
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
          { name: "Episode 8", ep: 8 }
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
          { name: "Episode 8", ep: 8 }
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
          { name: "Episode 8", ep: 8 }
        ]
      },
      {
        number: 4,
        title: "Season 4",
        episodes: [
          { name: "Episode 1", ep: 1 },
          { name: "Episode 2", ep: 2 },
          { name: "Episode 3", ep: 3 },
          { name: "Episode 4", ep: 4 },
          { name: "Episode 5", ep: 5 },
          { name: "Episode 6", ep: 6 },
          { name: "Episode 7", ep: 7 },
          { name: "Episode 8", ep: 8 }
        ]
      }
    ]
  }
};
