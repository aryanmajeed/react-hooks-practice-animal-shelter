import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch(`http://localhost:3001/all`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        // let update = data.filters((type) => type !== filters.type)
        // setPets(update)
      });
  }, [filters]);

  function adopt() {

  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={adopt} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
