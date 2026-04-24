import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./destinations.css";

function Destinations() {

  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);

  const searchPlaces = async () => {

    if (!query) return;

    try {

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );

      const data = await res.json();

      setPlaces(data);

    } catch (err) {
      console.log(err);
    }

  };

  return (

    <div className="destPage">

      <Navbar />

      {/* HERO */}

      <div className="destHero">

        <h1>🌍 Explore Destinations</h1>

        <p>Search and discover beautiful places across India</p>

        <div className="searchBox">

          <input
            className="searchInput"
            placeholder="Search Goa, Taj Mahal, Manali..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="searchButton"
            onClick={searchPlaces}
          >
            Search
          </button>

        </div>

      </div>

      {/* RESULTS */}

      <div className="results">

        {places.length === 0 && (
          <p className="emptyText">
            Search for a place to explore
          </p>
        )}

        {places.map((place, index) => {

          if (!place.display_name) return null;

          const name = place.display_name.split(",")[0];

          return (

            <div className="resultCard" key={index}>

              <h3>{name}</h3>

              <p>{place.display_name}</p>

              <a
                className="mapLink"
                href={`https://www.google.com/maps?q=${place.lat},${place.lon}`}
                target="_blank"
                rel="noreferrer"
              >
                📍 View on Map
              </a>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Destinations;