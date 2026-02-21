import React from "react";
import "./VlogsSection.css";

function VlogsSection() {
  // const vlogs = [
  //   {
  //     id: 1,
  //     title: "My Music Journey",
  //     date: "2024-01-15",
  //     thumbnail: "🎬",
  //   },
  //   {
  //     id: 2,
  //     title: "Behind the Scenes",
  //     date: "2024-01-10",
  //     thumbnail: "🎬",
  //   },
  //   {
  //     id: 3,
  //     title: "Studio Life",
  //     date: "2024-01-05",
  //     thumbnail: "🎬",
  //   },
  //   {
  //     id: 4,
  //     title: "On Tour",
  //     date: "2023-12-28",
  //     thumbnail: "🎬",
  //   },
  // ];

  return (
    <section id="vlogs" className="vlogs-section">
      <div className="vlogs-container">
        <h2 className="vlogs-title">Studio Content Coming Soon</h2>

        {/* Optional subtitle (leave commented if you want) */}
        {/* <p className="vlogs-subtitle">New uploads are on the way.</p> */}

        {/* Video grid removed for now */}
      </div>
    </section>
  );
}

export default VlogsSection;
