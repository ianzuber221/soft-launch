export type Vibe =
  | "cozy"
  | "thriller"
  | "romance"
  | "spectacular"
  | "comfort-rewatch"

export type MediaKind = "movie" | "show"

export type Title = {
  id: string
  name: string
  kind: MediaKind
  year: number
  vibe: Vibe[]
  runtimeMins: number
  blurb: string
  tone: string
}

export type ShelfId = "want" | "watching" | "rewatch" | "finished"

export const VIBES: { id: Vibe; label: string }[] = [
  { id: "cozy", label: "Cozy night" },
  { id: "thriller", label: "Edge-of-seat" },
  { id: "romance", label: "Soft romance" },
  { id: "spectacular", label: "Big screen energy" },
  { id: "comfort-rewatch", label: "Comfort rewatch" },
]

export const titlesSeed: Title[] = [
  {
    id: "t-01",
    name: "Past Lives",
    kind: "movie",
    year: 2023,
    vibe: ["romance", "cozy"],
    runtimeMins: 105,
    blurb: "Quiet almosts and the cities that hold them.",
    tone: "#E8B4BC",
  },
  {
    id: "t-02",
    name: "The Bear",
    kind: "show",
    year: 2022,
    vibe: ["thriller", "comfort-rewatch"],
    runtimeMins: 30,
    blurb: "Kitchen chaos, found family, perfect plates.",
    tone: "#C45C26",
  },
  {
    id: "t-03",
    name: "Everything Everywhere All at Once",
    kind: "movie",
    year: 2022,
    vibe: ["spectacular", "romance"],
    runtimeMins: 139,
    blurb: "Multiverse mess, laundry, and love.",
    tone: "#F2C14E",
  },
  {
    id: "t-04",
    name: "Spider-Man: Across the Spider-Verse",
    kind: "movie",
    year: 2023,
    vibe: ["spectacular"],
    runtimeMins: 140,
    blurb: "Ink-splashed timelines and a kid trying to get home.",
    tone: "#6C63FF",
  },
  {
    id: "t-05",
    name: "Guardians of the Galaxy Vol. 3",
    kind: "movie",
    year: 2023,
    vibe: ["spectacular", "comfort-rewatch"],
    runtimeMins: 150,
    blurb: "Found family, mixtapes, and one last mission.",
    tone: "#D64550",
  },
  {
    id: "t-06",
    name: "Normal People",
    kind: "show",
    year: 2020,
    vibe: ["romance", "cozy"],
    runtimeMins: 30,
    blurb: "Soft voices, hard feelings, Irish light.",
    tone: "#A8C5B8",
  },
  {
    id: "t-07",
    name: "Poor Things",
    kind: "movie",
    year: 2023,
    vibe: ["spectacular", "romance"],
    runtimeMins: 141,
    blurb: "Candy-colored rebellion and becoming someone.",
    tone: "#F7A1C4",
  },
  {
    id: "t-08",
    name: "Severance",
    kind: "show",
    year: 2022,
    vibe: ["thriller"],
    runtimeMins: 50,
    blurb: "Office dread with perfect carpet geometry.",
    tone: "#5B6C7A",
  },
  {
    id: "t-09",
    name: "Before Sunrise",
    kind: "movie",
    year: 1995,
    vibe: ["romance", "cozy"],
    runtimeMins: 101,
    blurb: "One night in Vienna, walking forever.",
    tone: "#D4A574",
  },
  {
    id: "t-10",
    name: "Heartstopper",
    kind: "show",
    year: 2022,
    vibe: ["romance", "comfort-rewatch", "cozy"],
    runtimeMins: 30,
    blurb: "Leaves, soft hoodies, and being seen.",
    tone: "#8FBF9F",
  },
  {
    id: "t-11",
    name: "Challengers",
    kind: "movie",
    year: 2024,
    vibe: ["thriller", "romance"],
    runtimeMins: 131,
    blurb: "Sweat, scoreboards, and triangular tension.",
    tone: "#E85D04",
  },
  {
    id: "t-12",
    name: "Studio Ghibli comfort stack",
    kind: "movie",
    year: 2001,
    vibe: ["cozy", "comfort-rewatch"],
    runtimeMins: 125,
    blurb: "Wind, soup, and skies that feel like home.",
    tone: "#7EB6D9",
  },
]

export const defaultShelfMap: Record<ShelfId, string[]> = {
  want: ["t-01", "t-04", "t-08", "t-11"],
  watching: ["t-02", "t-06"],
  rewatch: ["t-05", "t-10", "t-12"],
  finished: ["t-03", "t-09"],
}

export const shelfLabels: Record<ShelfId, string> = {
  want: "Want to watch",
  watching: "Currently watching",
  rewatch: "Rewatch shelf",
  finished: "Finished",
}
