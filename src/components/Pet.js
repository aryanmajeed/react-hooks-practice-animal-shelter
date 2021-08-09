import React from "react";

function Pet({ name, isAdopted, type, weight, age, handleAdopted, id }) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          PET NAME:{name}
        </span>
        <div className="meta">
          <span className="date">PET TYPE:{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={isAdopted ? "ui primary button" : "ui disabled button"} onClick={() => handleAdopted(id)}> Already adopted</button>
        <button className={isAdopted ? "ui disabled button" : "ui primary button"} onClick={() => handleAdopted(id)}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
