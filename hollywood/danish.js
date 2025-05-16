const movies = [
  {
    name: "Iron Man",
    link: "https://v2.sdsp.xyz/embed/movie/1726",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    name: "The Incredible Hulk",
    link: "https://v2.sdsp.xyz/embed/movie/1724",
    poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
  },
  {
    name: "Iron Man 2",
    link: "https://v2.sdsp.xyz/embed/movie/10138",
    poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
  },
  {
    name: "Thor",
    link: "https://v2.sdsp.xyz/embed/movie/10195",
    poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
  },
  {
    name: "Captain America: The First Avenger",
    link: "https://v2.sdsp.xyz/embed/movie/1771",
    poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg"
  },
  {
    name: "The Avengers",
    link: "https://v2.sdsp.xyz/embed/movie/24428",
    poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  {
    name: "Iron Man 3",
    link: "https://v2.sdsp.xyz/embed/movie/68721",
    poster: "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg"
  },
  {
    name: "Thor: The Dark World",
    link: "https://v2.sdsp.xyz/embed/movie/76338",
    poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg"
  },
  {
    name: "Captain America: The Winter Soldier",
    link: "https://v2.sdsp.xyz/embed/movie/100402",
    poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg"
  },
  {
    name: "Guardians of the Galaxy",
    link: "https://v2.sdsp.xyz/embed/movie/118340",
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
  },
  {
    name: "Avengers: Age of Ultron",
    link: "https://v2.sdsp.xyz/embed/movie/99861",
    poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
  },
  {
    name: "Ant-Man",
    link: "https://iplayerhls.com/e/0j8oucee8zym",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg"
  },
  {
    name: "Captain America: Civil War",
    link: "https://v2.sdsp.xyz/embed/movie/271110",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"
  },
  {
    name: "Doctor Strange",
    link: "https://v2.sdsp.xyz/embed/movie/284052",
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
  },
  {
    name: "Guardians of the Galaxy Vol. 2",
    link: "https://v2.sdsp.xyz/embed/movie/283995",
    poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"
  },
  {
    name: "Spider-Man: Homecoming",
    link: "https://v2.sdsp.xyz/embed/movie/315635",
    poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
  },
  {
    name: "Thor: Ragnarok",
    link: "https://v2.sdsp.xyz/embed/movie/284053",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
  },
  {
    name: "Black Panther",
    link: "https://v2.sdsp.xyz/embed/movie/284054",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    name: "Avengers: Infinity War",
    link: "https://v2.sdsp.xyz/embed/movie/299536",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  },
  {
    name: "Ant-Man and the Wasp",
    link: "https://v2.sdsp.xyz/embed/movie/363088",
    poster: "https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg"
  },
  {
    name: "Captain Marvel",
    link: "https://v2.sdsp.xyz/embed/movie/299537",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
  },
  {
    name: "Avengers: Endgame",
    link: "https://cybervynx.com/e/cau5xegyo0vl",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    name: "Spider-Man: Far From Home",
    link: "https://v2.sdsp.xyz/embed/movie/429617",
    poster: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg"
  },
  {
    name: "Black Widow",
    link: "https://v2.sdsp.xyz/embed/movie/497698",
    poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
  },
  {
    name: "Shang-Chi and the Legend of the Ten Rings",
    link: "https://v2.sdsp.xyz/embed/movie/566525",
    poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
  },
  {
    name: "Eternals",
    link: "https://v2.sdsp.xyz/embed/movie/524434",
    poster: "https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg"
  },
  {
    name: "Spider-Man: No Way Home",
    link: "https://v2.sdsp.xyz/embed/movie/634649",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    link: "https://v2.sdsp.xyz/embed/movie/453395",
    poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
  },
  {
    name: "Thor: Love and Thunder",
    link: "https://v2.sdsp.xyz/embed/movie/616037",
    poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
  },
  {
    name: "Black Panther: Wakanda Forever",
    link: "https://v2.sdsp.xyz/embed/movie/505642",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    link: "https://v2.sdsp.xyz/embed/movie/640146",
    poster: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    link: "https://v2.sdsp.xyz/embed/movie/447365",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
  },
  {
    name: "The Marvels",
    link: "https://v2.sdsp.xyz/embed/movie/609681",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg"
  },
 
  {
    name: "Spider-Man",
    link: "https://v2.sdsp.xyz/embed/movie/557",
    poster: "https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akQEaAXL6x0.jpg"
  },
  {
    name: "Spider-Man 2",
    link: "https://v2.sdsp.xyz/embed/movie/558",
    poster: "https://image.tmdb.org/t/p/w500/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg"
  },
  {
    name: "Spider-Man 3",
    link: "https://v2.sdsp.xyz/embed/movie/559",
    poster: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg"
  },
  {
    name: "The Amazing Spider-Man",
    link: "https://v2.sdsp.xyz/embed/movie/1930",
    poster: "https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg"
  },
  {
    name: "The Amazing Spider-Man 2",
    link: "https://v2.sdsp.xyz/embed/movie/102382",
    poster: "https://image.tmdb.org/t/p/w500/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg"
  },
  
  {
    name: "Spider-Man: Into the Spider-Verse",
    link: "https://v2.sdsp.xyz/embed/movie/324857",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    link: "https://v2.sdsp.xyz/embed/movie/569094",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
  },
      
  {
    name: "Harry Potter and the Sorcerer's Stone",
    link: "https://v2.sdsp.xyz/embed/movie/671",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    link: "https://v2.sdsp.xyz/embed/movie/672",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    link: "https://v2.sdsp.xyz/embed/movie/673",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    link: "https://v2.sdsp.xyz/embed/movie/674",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg"
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    link: "https://v2.sdsp.xyz/embed/movie/675",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg"
  },
  {
    name: "Harry Potter and the Half-Blood Prince",
    link: "https://v2.sdsp.xyz/embed/movie/767",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg"
  },
  {
    name: "Harry Potter and the Deathly Hallows – Part 1",
    link: "https://v2.sdsp.xyz/embed/movie/12444",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg"
  },
  {
    name: "Harry Potter and the Deathly Hallows – Part 2",
    link: "https://v2.sdsp.xyz/embed/movie/12445",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/c54HpQmuwXjHq2C9wmoACjxoom3.jpg"
  },
  {
    name: "Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
    link: "https://v2.sdsp.xyz/embed/movie/22",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg"
  },
  {
    name: "Pirates of the Caribbean: Dead Man's Chest (2006)",
    link: "https://v2.sdsp.xyz/embed/movie/58",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lAhcKRt0ggTFkeFL95jrGQYaRXs.jpg"
  },
  {
    name: "Pirates of the Caribbean: At World's End (2007)",
    link: "https://v2.sdsp.xyz/embed/movie/285",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg"
  },
  {
    name: "Pirates of the Caribbean: On Stranger Tides (2011)",
    link: "https://v2.sdsp.xyz/embed/movie/1865",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/keGfSvCmYj7CvdRx36OdVrAEibE.jpg"
  },
  {
    name: "Pirates of the Caribbean: Dead Men Tell No Tales (2017)",
    link: "https://v2.sdsp.xyz/embed/movie/166426",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qwoGfcg6YUS55nUweKGujHE54Wy.jpg"
  },
  {
    name: "",
    link: "https://v2.sdsp.xyz/embed/movie/",
    poster: ""
  },
  {
    name: "",
    link: "https://v2.sdsp.xyz/embed/movie/",
    poster: ""
  },


]
