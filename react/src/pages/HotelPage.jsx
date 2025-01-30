import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const HotelPage = () => {
  const [roomData, setRoomData] = useState();

  const { country, city, hotel } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}/${hotel}`)
      .then((res) => res.json())
      .then((data) => setRoomData(data));
  }, [country, city, hotel]);

  return (
    <>
      <h2>Hotel page</h2>
      {roomData?.cities[0].hotels[0].rooms.map((room) => {
        return (
          <NavLink
            key={room.slug}
            to={`/destinations/${country}/${city}/${hotel}/${room.slug}`}
          >
            {room.title}
          </NavLink>
        );
      })}
    </>
  );
};
