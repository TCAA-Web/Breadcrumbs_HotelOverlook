import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const DestinationsPage = () => {
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/destinations")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <>
      <h2>DestinationsPage</h2>
      {countryData?.map((country) => {
        return (
          <NavLink key={country.id} to={`/destinations/${country.slug}`}>
            {country.name}
          </NavLink>
        );
      })}
    </>
  );
};
