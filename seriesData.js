export const seriesData = [
  {
    id: 1,
    title: "Stranger Things",
    genre: ["Sci-Fi", "Horror", "Drama"],
    poster: "🎬",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    status: "Ongoing",
    releaseDate: "2024-05-27",
    predictions: [
      {
        id: 101,
        question: "Will Eleven regain her powers completely? 🔮",
        type: "yesno",
        options: ["Yes 🙌", "No 😔"],
        deadline: "2024-06-15",
        votes: { "Yes 🙌": 45, "No 😔": 32 }
      },
      {
        id: 102,
        question: "Which character will sacrifice themselves? 💔",
        type: "multiple",
        options: ["Steve 🧔", "Nancy 🔫", "Jonathan 📸", "New Character 🤔"],
        deadline: "2024-06-20",
        votes: { "Steve 🧔": 28, "Nancy 🔫": 15, "Jonathan 📸": 12, "New Character 🤔": 22 }
      }
    ]
  },
  {
    id: 2,
    title: "House of the Dragon",
    genre: ["Fantasy", "Drama"],
    poster: "🐉",
    description: "The reign of House Targaryen begins. This series follows the beginning of the end of House Targaryen, and the events leading up to the Targaryen civil war.",
    status: "Ongoing",
    releaseDate: "2024-06-16",
    predictions: [
      {
        id: 201,
        question: "Will Rhaenyra sit on the Iron Throne? 👑",
        type: "yesno",
        options: ["Yes 🎉", "No 💀"],
        deadline: "2024-07-01",
        votes: { "Yes 🎉": 67, "No 💀": 41 }
      }
    ]
  },
  {
    id: 3,
    title: "The Boys",
    genre: ["Action", "Comedy", "Superhero"],
    poster: "🦸",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    status: "Ongoing",
    releaseDate: "2024-06-13",
    predictions: [
      {
        id: 301,
        question: "Will Homelander be defeated this season? 💥",
        type: "yesno",
        options: ["Yes 🎊", "No 😈"],
        deadline: "2024-07-10",
        votes: { "Yes 🎊": 52, "No 😈": 48 }
      }
    ]
  },
  {
    id: 4,
    title: "Dunk & Egg",
    genre: ["Fantasy", "Adventure"],
    poster: "⚔️",
    description: "The adventures of Ser Duncan the Tall and his squire, Egg, in the world of Westeros.",
    status: "Upcoming",
    releaseDate: "2024-12-01",
    predictions: [
      {
        id: 401,
        question: "How many seasons will Dunk & Egg have? 📺",
        type: "multiple",
        options: ["1 season", "2-3 seasons", "4+ seasons", "It will be a movie 🎥"],
        deadline: "2024-11-15",
        votes: { "1 season": 18, "2-3 seasons": 45, "4+ seasons": 22, "It will be a movie 🎥": 15 }
      }
    ]
  },
  {
    id: 5,
    title: "Loki",
    genre: ["Sci-Fi", "Fantasy", "Action"],
    poster: "🌀",
    description: "The mercurial villain Loki resumes his role as the God of Mischief.",
    status: "Ongoing",
    releaseDate: "2024-10-01",
    predictions: [
      {
        id: 501,
        question: "Will Loki reunite with Thor? ⚡",
        type: "yesno",
        options: ["Yes 🤝", "No 🚫"],
        deadline: "2024-10-20",
        votes: { "Yes 🤝": 78, "No 🚫": 22 }
      }
    ]
  },
  {
    id: 6,
    title: "The Witcher",
    genre: ["Fantasy", "Action", "Drama"],
    poster: "🐺",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny.",
    status: "Ongoing",
    releaseDate: "2024-07-27",
    predictions: [
      {
        id: 601,
        question: "Who will be the main villain? 😈",
        type: "multiple",
        options: ["Emhyr var Emreis 👑", "Vilgefortz 🔥", "Rience 🧙", "New Character 🎭"],
        deadline: "2024-08-15",
        votes: { "Emhyr var Emreis 👑": 25, "Vilgefortz 🔥": 40, "Rience 🧙": 20, "New Character 🎭": 15 }
      }
    ]
  },
  {
    id: 7,
    title: "Wednesday",
    genre: ["Comedy", "Horror", "Supernatural"],
    poster: "👧",
    description: "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability.",
    status: "Ongoing",
    releaseDate: "2024-11-01",
    predictions: [
      {
        id: 701,
        question: "Will Wednesday get a love interest? 💘",
        type: "yesno",
        options: ["Yes 😍", "No 🖤"],
        deadline: "2024-11-20",
        votes: { "Yes 😍": 60, "No 🖤": 40 }
      }
    ]
  },
  {
    id: 8,
    title: "The Mandalorian",
    genre: ["Sci-Fi", "Western", "Action"],
    poster: "🛸",
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy.",
    status: "Ongoing",
    releaseDate: "2024-09-01",
    predictions: [
      {
        id: 801,
        question: "Will Grogu become a Jedi? 🌟",
        type: "yesno",
        options: ["Yes ✨", "No 🔫"],
        deadline: "2024-09-25",
        votes: { "Yes ✨": 85, "No 🔫": 15 }
      }
    ]
  },
  {
    id: 9,
    title: "Bridgerton",
    genre: ["Romance", "Drama"],
    poster: "💐",
    description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
    status: "Ongoing",
    releaseDate: "2024-06-13",
    predictions: [
      {
        id: 901,
        question: "Which Bridgerton sibling will be featured next? 👨‍👩‍👧‍👦",
        type: "multiple",
        options: ["Benedict 🎨", "Colin ✈️", "Daphne 👑", "Eloise 📚"],
        deadline: "2024-07-01",
        votes: { "Benedict 🎨": 35, "Colin ✈️": 25, "Daphne 👑": 20, "Eloise 📚": 20 }
      }
    ]
  },
  {
    id: 10,
    title: "The Last of Us",
    genre: ["Drama", "Horror", "Thriller"],
    poster: "🍄",
    description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl.",
    status: "Ongoing",
    releaseDate: "2025-01-01",
    predictions: [
      {
        id: 1001,
        question: "Will Ellie find a cure? 💉",
        type: "yesno",
        options: ["Yes 🎯", "No 💔"],
        deadline: "2025-01-30",
        votes: { "Yes 🎯": 55, "No 💔": 45 }
      }
    ]
  }
];

export const leaderboardData = [
  { id: 1, name: "MovieMaster 🎬", score: 2450, avatar: "👑" },
  { id: 2, name: "SeriesSage 📺", score: 2180, avatar: "🧠" },
  { id: 3, name: "PredictorPro 🔮", score: 1950, avatar: "⭐" },
  { id: 4, name: "BingeWatcher 🍿", score: 1820, avatar: "😎" },
  { id: 5, name: "PlotTwister 🌀", score: 1670, avatar: "🎯" },
  { id: 6, name: "Cinephile 🎥", score: 1540, avatar: "🤓" },
  { id: 7, name: "ScreenSeer 👁️", score: 1420, avatar: "🔍" },
  { id: 8, name: "StorySleuth 🕵️", score: 1350, avatar: "🕵️" },
  { id: 9, name: "EpisodeExpert 📚", score: 1280, avatar: "📊" },
  { id: 10, name: "FinaleForecaster 🌪️", score: 1150, avatar: "🌪️" }
];