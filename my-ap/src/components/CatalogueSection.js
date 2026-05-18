import React, { useMemo } from "react";
import "./CatalogueSection.css";

function formatDate(iso) {
  // iso expected "YYYY-MM-DD"
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function CatalogueSection() {
  // TODO: Add your track data here. Each entry requires: id (number), title (string), artist (string), date ("YYYY-MM-DD").
  // Entries are automatically sorted by date descending. Add as many entries as needed.
  const releases = useMemo(
    () => [
      { id: 1, title: "Song Title 1", artist: "Artist Name", date: "2025-01-01" },
      { id: 2, title: "Song Title 2", artist: "Artist Name, Featured Artist", date: "2024-06-15" },
      { id: 3, title: "Song Title 3", artist: "Artist Name", date: "2024-03-20" },
      { id: 4, title: "Song Title 4", artist: "Artist Name", date: "2023-11-10" },
      { id: 5, title: "Song Title 5", artist: "Artist Name, Featured Artist", date: "2023-07-04" },
    ],
    []
  );

   const sorted = useMemo(() => {
    return [...releases].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [releases]);

  return (
    <section id="catalogue" className="catalogue-section">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Production Credits</h2>
        <p className="catalogue-subtitle">
          Selected production work and collaborations.
        </p>

        <div className="credits-list">
          {sorted.map((release) => (
            <div key={release.id} className="credit-row">
              <div className="credit-title">
                <h3>{release.title}</h3>
                <p className="credit-artist">{release.artist}</p>
              </div>

              <div className="credit-date">
                {formatDate(release.date)}
              </div>

              {/*
              Future feature:
              <button className="listen-button">Listen Now</button>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogueSection;
