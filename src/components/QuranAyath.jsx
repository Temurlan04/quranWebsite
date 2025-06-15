
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QuranAyath() {
  const [ayath, setAyath] = useState([]);
  const { suraId } = useParams();

  function getAyath() {
    axios
      .get(
        `https://api.alquran.cloud/v1/surah/${suraId}/editions/quran-uthmani`
      )
      .then((res) => {
        setAyath(res.data.data[0]); // API'dan massiv qaytadi, shuning uchun [0]
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAyath();
  }, []);

  return (
    <div className="ayath-container">
      <div className="surah-title">
        <h1>{ayath?.name}</h1>
        <h1>{ayath?.englishName}</h1>
      </div>

      <div className="bismillah">
        <h2>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>
      </div>

      <div className="controls">
        <button className="info-btn">
          <i className="fas fa-info-circle"></i>
          <span>Surah Info</span>
        </button>
        <button className="audio-btn">
          <i className="fas fa-play"></i>
          <span>Play Audio</span>
        </button>
      </div>

      <div className="quran-text">
        {ayath?.ayahs?.map((ayah, idx) => (
          <p className="verse" key={idx}>
            <span className="arabic-text">{ayah?.text}</span>
            <div className="page-number">
              <span>Page: {ayath?.ayahs?.[idx]?.page}</span>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}

export default QuranAyath;
