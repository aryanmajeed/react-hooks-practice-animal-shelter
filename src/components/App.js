import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "pets" });



  useEffect(() => {
    fetch(`http://localhost:3001/pets`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        let update = data.filter((pet) => {
          if (filters.type === 'all')
            return true
          return pet.type === filters.type
        })
        setPets(update)
      });
  }, [filters]);

  function adopt(id) {
    setPets(prev => prev.map((pet) => {
      if (pet.id === id)
        return { ...pet, isAdopted: !pet.isAdopted }
      return pet
    }))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} handleAdopted={adopt} />
          </div>
          <div className="twelve wide column">
            <PetBrowser handleAdopted={adopt} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
