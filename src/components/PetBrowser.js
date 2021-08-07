import React from "react";
import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {

  const Pets = pets.map((pet => {
    return ( <Pet onAdopt = {onAdoptPet} /> )
  }))
  return (
    <div className="ui cards">
    {Pets}
    </div>);
}

export default PetBrowser;
