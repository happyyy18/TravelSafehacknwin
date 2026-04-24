import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./dashboard.css";

const places = [
  {
    name: "Taj Mahal",
    location: "Agra",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada"
  },
  {
    name: "Goa Beaches",
    location: "Goa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Hawa Mahal",
    location: "Jaipur",
    img: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c"
  },
  {
    name: "India Gate",
    location: "New Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5"
  },
  {
    name: "Golden Temple",
    location: "Amritsar",
    img: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16"
  }
];

function Dashboard() {

  const [query,setQuery] = useState("");
  const [results,setResults] = useState([]);

  const searchPlaces = async (text) => {

    setQuery(text);

    if(text.length < 3){
      setResults([]);
      return;
    }

    try{

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${text}+india`
      );

      const data = await res.json();

      setResults(data);

    }catch(err){
      console.log(err);
    }

  };

  return (

    <div>

      <Navbar/>

      {/* HERO */}

      <div className="hero">

        <div className="heroContent">

          <h1>🌍 Find Your Next Adventure</h1>

          <p>Discover beautiful destinations across India</p>

          <div className="searchContainer">

            <input
              className="heroSearch"
              placeholder="Search destinations like Goa, Manali..."
              value={query}
              onChange={(e)=>searchPlaces(e.target.value)}
            />

            {results.length > 0 && (

              <div className="searchResults">

                {results.slice(0,6).map((place,index)=>{

                  const name = place.display_name.split(",")[0];

                  return(

                    <div
                      key={index}
                      className="searchItem"
                      onClick={()=>{
                        window.open(
                          `https://www.google.com/maps?q=${place.lat},${place.lon}`
                        );
                      }}
                    >

                      📍 {name}

                    </div>

                  );

                })}

              </div>

            )}

          </div>

        </div>

      </div>

      {/* DESTINATIONS */}

      <div className="destinations">

        <h2>Popular Destinations</h2>

        <div className="grid">

          {places.map((place,index)=>(
            <div className="card" key={index}>

              <img src={place.img} alt={place.name}/>

              <div className="cardInfo">

                <h3>{place.name}</h3>

                <p>{place.location}</p>

                <div className="rating">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;