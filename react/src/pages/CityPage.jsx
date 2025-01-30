import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const CityPage = () => {
  const [hotelData, setHotelData] = useState();

  const { country, city } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}`)
      .then((res) => res.json())
      .then((data) => setHotelData(data));
  }, [country, city]);

  console.log(hotelData);

  return (
    <>
      <h2>City page</h2>
      {hotelData?.cities[0].hotels.map((hotel) => {
        return (
          <NavLink
            key={hotel.slug}
            to={`/destinations/${country}/${city}/${hotel.slug}`}
          >
            {hotel.title}
          </NavLink>
        );
      })}
    </>
  );
};
