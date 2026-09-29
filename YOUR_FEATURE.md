# YOUR FEATURE — Soft Launch (Watchlist)

**Feature to implement.** Shelves and the up-next queue already render with seed titles. Own the persistence and UX so shelf moves and queue edits actually stick — and feel good to use.

---

## Goal

Let someone move titles between vibe-tagged shelves and maintain a reorderable **Up next** queue, both saved in `localStorage`. Resume-friendly: *“Built a cinematic watchlist with shelf management and a persisted up-next queue.”*

---

## Files to open

| Path | Why |
| --- | --- |
| `src/lib/storage.ts` | `saveShelves` / `saveUpNext` stubs; `persistShelvesNow` / `persistQueueNow` helpers |
| `src/pages/ShelvesPage.tsx` | Shelf rails — needs move controls |
| `src/pages/QueuePage.tsx` | ↑↓ / remove starter — polish + add-from-shelves |
| `src/data/titles.ts` | `ShelfId`, `shelfLabels`, `defaultShelfMap`, seed titles |

Search for `TODO(your-name)`.

---

## Step-by-step tasks

1. **Implement `saveShelves`** — In `storage.ts`, write the `ShelfMap` JSON to the `SHELVES_KEY` (same pattern as `persistShelvesNow`). Stop throwing. You can call `persistShelvesNow` from inside `saveShelves` if you want one write path.

2. **Move titles between shelves (UI)** — On `ShelvesPage`, add a control per title (select menu or buttons) to move it to another shelf. Update local state: remove the id from the source shelf array, add it to the target, then call `saveShelves`. Keep a title on **one** shelf at a time.

3. **Implement `saveUpNext`** — Persist the id array to `QUEUE_KEY`. Queue page already calls `persistQueueNow` in places — either implement `saveUpNext` properly and switch call sites to it, or make `saveUpNext` delegate to `persistQueueNow` and use it consistently.

4. **Polish the queue** — Confirm ↑↓ reorder and Remove both update state **and** storage (starter code is close). Improve UX: disable ↑ on first / ↓ on last, or add HTML5 drag-and-drop reorder.

5. **Add from shelves** — From the queue page (or shelves), let the user add a title id into the up-next list without duplicating, then save.

---

## Implementation notes

- `loadShelves()` already falls back to `defaultShelfMap` — you don’t need new seed logic.
- `ShelfId` is `"want" | "watching" | "rewatch" | "finished"`. Labels are in `shelfLabels`.
- `persistShelvesNow` / `persistQueueNow` show the exact `localStorage.setItem` shape — mirror that in the `save*` functions.
- `TitleCard` is presentational; put move actions in `ShelvesPage` (or extend the card with optional action props).
- Keys: `soft-launch-shelves` and `soft-launch-up-next`.

---

## Acceptance criteria

You're done when…

- [ ] Moving a title to another shelf updates the UI immediately
- [ ] Refreshing the browser keeps shelf membership (`localStorage`)
- [ ] Reordering up-next with ↑↓ (or drag) persists across refresh
- [ ] Removing from the queue persists across refresh
- [ ] Adding a title from shelves into up-next works and avoids duplicates
- [ ] `saveShelves` / `saveUpNext` no longer throw when called

---

## Demo script

1. “Soft Launch is my watchlist — shelves by vibe, plus an up-next queue for tonight.”
2. “I can move a title from Want to Watching; that write hits localStorage.”
3. “On Up next, I reorder what I’m actually putting on — order survives a refresh.”
4. “I can pull something from shelves into the queue, or trim what I’m done with.”
5. “Small surface area, clear persistence story — solid interview demo.”

---

## Stretch

- Custom shelves (create / rename) beyond the four built-in ids — you’ll need to extend the data model.
- Drag titles between shelf rails (not only a select menu).
