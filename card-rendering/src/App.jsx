import React from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=1";

  const { loading, error } = useFetch(API_URL);

  const cardData = [
    { id: 1, color: "#ff6b6b", title: "Red Container" },
    { id: 2, color: "#4ecdc4", title: "Green Container" },
    { id: 3, color: "#6c63ff", title: "Blue Container" },
    { id: 4, color: "#f7b731", title: "Yellow Container" },
    { id: 5, color: "#a55eea", title: "Purple Container" },
    { id: 6, color: "#20bf6b", title: "Green Container" },
    { id: 7, color: "#fa8231", title: "Orange Container" },
    { id: 8, color: "#45aaf2", title: "Sky Blue Container" },
    { id: 9, color: "#eb3b5a", title: "Pink Container" },
    { id: 10, color: "#3867d6", title: "Dark Blue Container" },
    { id: 11, color: "#8854d0", title: "Violet Container" },
    { id: 12, color: "#2bcbba", title: "Turquoise Container" },
    { id: 13, color: "#fd9644", title: "Peach Container" },
    { id: 14, color: "#a5b1c2", title: "Grey Container" },
    { id: 15, color: "#fc5c65", title: "Coral Container" },
    { id: 16, color: "#26de81", title: "Mint Container" },
    { id: 17, color: "#4b6584", title: "Steel Blue Container" },
    { id: 18, color: "#fed330", title: "Gold Container" }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">My Gallery</div>
        <div className="nav-sticker">Photos</div>
      </nav>

      <main className="main-container">
        <h1>My Card Gallery</h1>

        {loading ? (
          <div className="status-message">
            Loading...
          </div>
        ) : error ? (
          <div className="status-message error-message">
            Error: failed to fetch
          </div>
        ) : (
          <div className="card-grid">
            {cardData.map((item) => (
              <div className="card" key={item.id}>
                <div
                  className="image-container"
                  style={{ backgroundColor: item.color }}
                >
                  <h2>600 × 600</h2>
                </div>

                <p>{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
