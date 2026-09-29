import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { AppNav } from "../components/AppNav"
import { EmptyState, LoadingState, TitleCard } from "../components/ui"
import { siteConfig } from "../config/site"
import {
  shelfLabels,
  type ShelfId,
  titlesSeed,
  VIBES,
  type Vibe,
} from "../data/titles"
import { loadShelves, type ShelfMap } from "../lib/storage"

const SHELF_ORDER: ShelfId[] = ["want", "watching", "rewatch", "finished"]

export function ShelvesPage() {
  const [loading, setLoading] = useState(true)
  const [shelves, setShelves] = useState<ShelfMap | null>(null)
  const [vibe, setVibe] = useState<Vibe | "all">("all")

  useEffect(() => {
    const t = window.setTimeout(() => {
      setShelves(loadShelves())
      setLoading(false)
    }, 400)
    return () => window.clearTimeout(t)
  }, [])

  const byId = useMemo(
    () => Object.fromEntries(titlesSeed.map((t) => [t.id, t])),
    [],
  )

  return (
    <div className="page">
      <AppNav />
      <section className="hero">
        <div className="hero__atmosphere" aria-hidden />
        <p className="hero__brand">{siteConfig.name}</p>
        <h1 className="hero__headline">{siteConfig.tagline}</h1>
        <p className="hero__support">{siteConfig.description}</p>
        <div className="hero__cta">
          <Link className="btn btn--primary" to="/queue">
            Open up next
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Vibe-tagged shelves</h2>
          <p>Filter the catalog mood, then manage which shelf owns each title.</p>
        </div>

        <div className="filter-row">
          <button
            type="button"
            className={vibe === "all" ? "chip chip--active" : "chip"}
            onClick={() => setVibe("all")}
          >
            All vibes
          </button>
          {VIBES.map((v) => (
            <button
              key={v.id}
              type="button"
              className={vibe === v.id ? "chip chip--active" : "chip"}
              onClick={() => setVibe(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>

        {loading || !shelves ? (
          <LoadingState />
        ) : (
          <div className="shelves">
            {SHELF_ORDER.map((shelfId) => {
              const titles = shelves[shelfId]
                .map((id) => byId[id])
                .filter(Boolean)
                .filter((t) => (vibe === "all" ? true : t.vibe.includes(vibe)))

              return (
                <section key={shelfId} className="shelf">
                  <div className="shelf__head">
                    <h3>{shelfLabels[shelfId]}</h3>
                    <span>{titles.length}</span>
                  </div>
                  {/* TODO(your-name): Step 2 — move-to-shelf control per title; update state then saveShelves. */}
                  {titles.length === 0 ? (
                    <EmptyState />
                  ) : (
                    <div className="shelf__rail">
                      {titles.map((title) => (
                        <TitleCard key={title.id} title={title} />
                      ))}
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        )}

        <div className="todo-callout">
          <strong>Your feature</strong>
          <p>
            Follow <code>YOUR_FEATURE.md</code> steps 1–2 for shelves (queue is
            steps 3–5). Search <code>TODO(your-name)</code>.
          </p>
        </div>
      </section>
    </div>
  )
}
