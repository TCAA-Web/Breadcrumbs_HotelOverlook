import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RoomPage = () => {
  const [roomDetailsData, setRoomDetailsData] = useState();

  const { country, city, hotel, room } = useParams();

  useEffect(() => {
    fetch(
      `http://localhost:4000/destinations/${country}/${city}/${hotel}/${room}`
    )
      .then((res) => res.json())
      .then((data) => setRoomDetailsData(data));
  }, [country, city, hotel, room]);

  return (
    <>
      <h2>Room page</h2>
      {roomDetailsData?.cities[0].hotels[0].rooms[0].room_facilities.map(
        (facility) => {
          return <p key={facility.title}>{facility.title}</p>;
        }
      )}
    </>
  );
};
