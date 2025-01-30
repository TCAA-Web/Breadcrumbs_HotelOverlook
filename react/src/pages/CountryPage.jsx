import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const CountryPage = () => {
  const [cityData, setCityData] = useState();

  const { country } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}`)
      .then((res) => res.json())
      .then((data) => setCityData(data));
  }, [country]);

  return (
    <>
      <h2>Country page</h2>
      {cityData?.cities.map((city) => {
        return (
          <NavLink key={city.slug} to={`/destinations/${country}/${city.slug}`}>
            {city.name}
          </NavLink>
        );
      })}
    </>
  );
};
