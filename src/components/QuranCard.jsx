import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuranCard() {
  const [suras, setSuras] = useState([]);

  function getSuras() {
    axios
      .get(`https://api.alquran.cloud/v1/surah`)
      .then((res) => {
        setSuras(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSuras();
  }, []);

  return (
    <div className="container">
      {suras?.map((sura) => (
        <Link to={`${sura?.number}/ayath`} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="surah-card" key={sura?.number}>
            <div className="number-badge">
              <span>{sura.number}</span>
            </div>
            <div className="surah-info">
              <h1 className="surah-name">{sura?.englishName}</h1>
              <p className="surah-translation">
                {sura?.englishNameTranslation}
              </p>
            </div>
            <div className="arabic-info">
              <h2 className="arabic-name">{sura?.name}</h2>
              <p className="ayah-count">{sura?.numberOfAyahs} Ayahs</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default QuranCard;
