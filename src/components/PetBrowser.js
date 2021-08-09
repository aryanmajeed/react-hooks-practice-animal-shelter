import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, handleAdopted }) {

  const Pets = pets.map((pet => {
    return (<Pet {...pet} key={pet.id} handleAdopted={handleAdopted} />)
  }))
  return (
    <div className="ui cards">
      {Pets}
    </div>);
}

export default PetBrowser;
