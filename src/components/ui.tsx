import { siteConfig } from "../config/site"
import type { Title } from "../data/titles"

export function TitleCard({ title }: { title: Title }) {
  return (
    <article className="title-card">
      <div
        className="title-card__poster"
        style={{
          background: `linear-gradient(160deg, ${title.tone}, #1c1420 120%)`,
        }}
      >
        <span>{title.kind}</span>
      </div>
      <div className="title-card__body">
        <h3>{title.name}</h3>
        <p className="title-card__meta">
          {title.year} · {title.runtimeMins}m
        </p>
        <p className="title-card__blurb">{title.blurb}</p>
        <div className="title-card__vibes">
          {title.vibe.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state__reel" aria-hidden />
      <p className="empty-state__title">Shelf is clear</p>
      <p>{message ?? siteConfig.mascots.empty}</p>
    </div>
  )
}

export function LoadingState() {
  return (
    <div className="loading-state" role="status">
      <div className="loading-state__dot" aria-hidden />
      <p>{siteConfig.mascots.loading}</p>
    </div>
  )
}
