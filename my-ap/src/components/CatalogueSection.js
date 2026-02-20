import React, { useMemo } from "react";
import "./CatalogueSection.css";

function formatDate(iso) {
  // iso expected "YYYY-MM-DD"
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function CatalogueSection() {
  const releases = useMemo(
    () => [
      { id: 1, title: "Tune Up", artist: "Kenny Muney, Young Dolph", date: "2025-06-20" },
      { id: 2, title: "Marni Slides", artist: "Tre Loaded", date: "2025-04-25" },
      { id: 3, title: "Tough Love", artist: "Don Trip, Starlito", date: "2025-11-28" },
      { id: 4, title: "Ed Edd An Eddy", artist: "Trapperman Dale", date: "2024-12-06" },
      { id: 5, title: "Reefer Runs", artist: "Eddie Valero", date: "2023-09-29" },
      { id: 6, title: "Country Stepper", artist: "Big Mo", date: "2025-05-29" },
      { id: 7, title: "Tell Me Now", artist: "Trapperman Dale, Don Trip", date: "2024-12-06" },
      { id: 8, title: "Jazzy Feel", artist: "Eddie Valero", date: "2022-12-13" },
      { id: 9, title: "Plug Tko", artist: "Eddie Valero", date: "2022-12-13" },
      { id: 10, title: "Hate Opps Love Percs", artist: "Casino Jizzle", date: "2023-07-07" },
      {
        id: 11,
        title: "Momo",
        artist: "Drew Jackson, 1818Tmoney, FatBoy Bino, TweakMode, Tyree Da GunMan",
        date: "2024-09-20",
      },
      { id: 12, title: "Str8 Thru", artist: "Old Head, Casino Jizzle", date: "2023-07-07" },
      { id: 13, title: "Spin", artist: "Eddie Valero", date: "2023-04-25" },
      { id: 14, title: "Recipe", artist: "Trapperman Dale", date: "2024-12-06" },
      { id: 15, title: "Neighborhood Dealer", artist: "Eddie Valero", date: "2024-07-26" },
      { id: 16, title: "Tuxedos N Corvettes", artist: "Eddie Valero", date: "2024-03-08" },
      { id: 17, title: "Money Guns An Powder", artist: "Trapperman Dale", date: "2024-12-06" },
      { id: 18, title: "Tenn Flow", artist: "tREmaINe", date: "2023-09-29" },
      { id: 19, title: "Jalen Hurts", artist: "Mudbrudda Bo", date: "2025-06-13" },
      { id: 20, title: "On It", artist: "Ruthlezzlubaree", date: "2024-06-27" },
      { id: 21, title: "Him", artist: "Big Savage", date: "2025-10-07" },
      { id: 22, title: "OffGaurd", artist: "CHOPPA TEE, Eddie Valero", date: "2022-11-26" },
      { id: 23, title: "Wits", artist: "Big Savage, 3gxSlash", date: "2025-07-18" },
      { id: 24, title: "Rich Off P's", artist: "Abk Gatez", date: "2022-06-04" },
      { id: 25, title: "Falling Angels", artist: "tREmaINe", date: "2023-09-29" },
      { id: 26, title: "Be Cool", artist: "Boe Gunna", date: "2023-07-05" },
      {
        id: 27,
        title: "Other Side",
        artist: "2G Slim, ABK Gatez, BRF Huncho Sosa, ii Viviid, NOIG Oskie",
        date: "2023-01-22",
      },
      { id: 28, title: "LUCKY day", artist: "Hancho Keepitsolid", date: "2023-09-22" },
      { id: 29, title: "Fuckin Off", artist: "Abk Gatez", date: "2022-06-04" },
      { id: 30, title: "Hustle & Flow", artist: "Bunya Keepitsolid, Hancho Keepitsolid", date: "2023-09-22" },
      { id: 31, title: "Call Me", artist: "Young Goudie", date: "2025-04-11" },
      { id: 32, title: "Peso$", artist: "Hancho Keepitsolid", date: "2023-09-22" },
      { id: 33, title: "Tenn Talk", artist: "tREmaINe", date: "2023-09-29" },
      { id: 34, title: "Press Da Button", artist: "SMF Kelo", date: "2023-10-09" },
      { id: 35, title: "Rush Hour (Intro)", artist: "SMF Kelo", date: "2023-10-09" },
      { id: 36, title: "Expensive Lifestyle", artist: "Too Wavy Crew", date: "2022-03-07" },
      { id: 37, title: "HAWT SHIT 2", artist: "Hancho Keepitsolid", date: "2023-09-22" },
      { id: 38, title: "NOTHING in my head", artist: "Hancho Keepitsolid", date: "2023-09-22" },
      { id: 39, title: "IGHT", artist: "Hancho Keepitsolid, Big Jeston", date: "2023-09-22" },
      { id: 40, title: "Walking Legend", artist: "tREmaINe", date: "2023-08-02" },
      { id: 41, title: "One Time", artist: "Abk Gatez", date: "2022-09-02" },
      { id: 42, title: "Out the Way", artist: "Tybo", date: "2024-06-07" },
      { id: 43, title: "Tenn Talk 2", artist: "tREmaINe", date: "2023-09-29" },
      { id: 44, title: "Trackhawk", artist: "Mac Heem, Buwop", date: "2023-05-12" },
      { id: 45, title: "All I Can Say", artist: "tREmaINe, Bthergang Vonnie, Trapmoneybeni", date: "2023-09-29" },
      { id: 46, title: "He Hard", artist: "SMF Kelo", date: "2023-10-09" },
      { id: 47, title: "Harlem Nights", artist: "Boe Gunna", date: "2023-07-05" },
      { id: 48, title: "Tell Dat", artist: "tREmaINe, Abk Gatez", date: "2023-09-29" },
      { id: 49, title: "Bout it", artist: "Otg_Kevo, Bsg Glee", date: "2025-06-20" },
      { id: 50, title: "Nate Dog", artist: "tREmaINe", date: "2023-09-29" },
      { id: 51, title: "Yea Yea", artist: "Garan'teee, Last Name First", date: "2022-02-14" },
      { id: 52, title: "Forever Tricking", artist: "tREmaINe", date: "2022-10-27" },
      { id: 53, title: "Spinning Hard", artist: "JayK, Eddie Valero", date: "2022-12-09" },
      { id: 54, title: "Swiper", artist: "CG Montana", date: "2023-03-30" },
      { id: 55, title: "Holiday", artist: "D yungin", date: "2022-12-07" },
      { id: 56, title: "Chances", artist: "tREmaINe, Trapperman Dale, changotti", date: "2021-06-01" },
      { id: 57, title: "Hot Shit", artist: "Abk Gatez", date: "2022-06-04" },
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