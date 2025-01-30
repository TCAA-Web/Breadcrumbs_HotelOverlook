import { NavLink, useParams } from "react-router-dom";

export const Breadcrumbs = () => {
  // Hent alle query params ud fra URL´en
  const { country, city, hotel, room } = useParams();

  return (
    <div style={{ color: "white" }}>
      {/* Hvis country params findes så render et navlink til /destinations/country  */}
      {country && (
        <>
          <NavLink to="/destinations">Destinations</NavLink>
          <span>&gt;</span>
          <NavLink to={`/destinations/${country}`}>{country}</NavLink>
        </>
      )}
      {/* Hvis city params findes så render et navlink til /destinations/country/city  */}
      {city && (
        <>
          <span>&gt;</span>
          <NavLink to={`/destinations/${country}/${city}`}>{city}</NavLink>
        </>
      )}
      {/* Hvis hotel params findes så render et navlink til /destinations/country/city  */}
      {hotel && (
        <>
          <span>&gt;</span>
          <NavLink to={`/destinations/${country}/${city}/${hotel}`}>
            {hotel}
          </NavLink>
        </>
      )}
      {/* Hvis room params findes så render et navlink til /destinations/country/city/hotel  */}
      {room && (
        <>
          <span>&gt;</span>
          <NavLink to={`/destinations/${country}/${city}/${hotel}/${room}`}>
            {room}
          </NavLink>
        </>
      )}
    </div>
  );
};
