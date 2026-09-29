/**
 * YOUR FEATURE — Up Next queue
 *
 * Full checklist: YOUR_FEATURE.md (steps 3–5).
 * Starter ↑↓ / remove already call persistQueueNow — polish + wire saveUpNext.
 */

import { useEffect, useState } from "react"
import { AppNav } from "../components/AppNav"
import { EmptyState, LoadingState } from "../components/ui"
import { siteConfig } from "../config/site"
import { titlesSeed } from "../data/titles"
import { loadUpNext, persistQueueNow } from "../lib/storage"

export function QueuePage() {
  const [loading, setLoading] = useState(true)
  const [queue, setQueue] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setQueue(loadUpNext())
      setLoading(false)
    }, 350)
    return () => window.clearTimeout(t)
  }, [])

  function move(index: number, dir: -1 | 1) {
    // TODO(your-name): Step 4 — polish reorder UX; prefer saveUpNext once step 3 is done (starter uses persistQueueNow).
    setQueue((prev) => {
      const next = [...prev]
      const target = index + dir
      if (target < 0 || target >= next.length) return prev
      ;[next[index], next[target]] = [next[target], next[index]]
      try {
        // Starter: already persists — upgrade UX with drag-and-drop + disable edges.
        persistQueueNow(next)
        setError(null)
      } catch {
        setError("Could not save queue order.")
      }
      return next
    })
  }

  function removeFromQueue(id: string) {
    // TODO(your-name): Step 4–5 — remove is stubbed; add "add from shelves" UI and persist with saveUpNext.
    setQueue((prev) => {
      const next = prev.filter((x) => x !== id)
      persistQueueNow(next)
      return next
    })
  }

  const items = queue
    .map((id) => titlesSeed.find((t) => t.id === id))
    .filter(Boolean)

  return (
    <div className="page">
      <AppNav />
      <section className="section">
        <div className="section__head">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1>Up next</h1>
          <p>
            Your rewindable queue for tonight. Reorder it, trim it, make it
            yours.
          </p>
        </div>

        {loading ? (
          <LoadingState />
        ) : items.length === 0 ? (
          <EmptyState message="Queue empty — Loafy will nap until you add something." />
        ) : (
          <ol className="queue-list">
            {items.map((title, index) =>
              title ? (
                <li key={title.id} className="queue-item">
                  <span
                    className="queue-item__tone"
                    style={{ background: title.tone }}
                  />
                  <div className="queue-item__copy">
                    <strong>{title.name}</strong>
                    <span>
                      {title.kind} · {title.runtimeMins}m
                    </span>
                  </div>
                  <div className="queue-item__actions">
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => move(index, -1)}
                      aria-label="Move up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => move(index, 1)}
                      aria-label="Move down"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => removeFromQueue(title.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ) : null,
            )}
          </ol>
        )}

        {error && <p className="error-msg">{error}</p>}

        <div className="todo-callout">
          <strong>Your feature</strong>
          <p>
            Follow <code>YOUR_FEATURE.md</code> steps 3–5. Search{" "}
            <code>TODO(your-name)</code> for the exact spots.
          </p>
        </div>
      </section>
    </div>
  )
}
