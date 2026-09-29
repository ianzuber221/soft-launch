import type { ShelfId } from "../data/titles"
import { defaultShelfMap } from "../data/titles"

const SHELVES_KEY = "soft-launch-shelves"
const QUEUE_KEY = "soft-launch-up-next"

export type ShelfMap = Record<ShelfId, string[]>

export function loadShelves(): ShelfMap {
  try {
    const raw = localStorage.getItem(SHELVES_KEY)
    if (!raw) return structuredClone(defaultShelfMap)
    return JSON.parse(raw) as ShelfMap
  } catch {
    return structuredClone(defaultShelfMap)
  }
}

export function saveShelves(_shelves: ShelfMap): void {
  // TODO(your-name): Step 1 — persist ShelfMap to SHELVES_KEY (mirror persistShelvesNow below).
  throw new Error("Not implemented — saveShelves is YOUR_FEATURE.md step 1")
}

export function loadUpNext(): string[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY)
    if (!raw) return ["t-02", "t-01", "t-11"]
    return JSON.parse(raw) as string[]
  } catch {
    return ["t-02", "t-01", "t-11"]
  }
}

export function saveUpNext(_ids: string[]): void {
  // TODO(your-name): Step 3 — persist id[] to QUEUE_KEY (mirror persistQueueNow); use it from QueuePage.
  throw new Error("Not implemented — saveUpNext is YOUR_FEATURE.md step 3")
}

export function persistShelvesNow(shelves: ShelfMap): void {
  localStorage.setItem(SHELVES_KEY, JSON.stringify(shelves))
}

export function persistQueueNow(ids: string[]): void {
  localStorage.setItem(QUEUE_KEY, JSON.stringify(ids))
}
