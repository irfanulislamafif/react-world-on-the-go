import React, { useState } from "react";
import './Country.css'
const Country = ({ country, handleVisitedCountries,handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)

    const handleVisited =() => {
    // if(visited) {
    //     setVisited(false)
    // }
    // else {
    //     setVisited(true)
    // }
// 2nd system
    // setVisited(visited ? false : true)
    //  3rd system
    setVisited(!visited)
    handleVisitedCountries(country)
    }
  return (
    // <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <h4>Population: {country.population.population}</h4>
     <h4> Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country" }</h4>
     <button onClick={handleVisited}>{
        visited ? 'Visited' : 'Not Visited'
}</button>
<button onClick={() => {handleVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>
    </div>
  );
};

export default Country;
