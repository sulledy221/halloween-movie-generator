import React, { useState, createContext } from "react";

export const HalloweenData = createContext();

export const HalloweenProvider = props => {
  const [ movies, setMovies ] = useState([
    {
      name: "Hocus Pocus",
      location: "Disney+",
      year: 1993,
      id: 79472,
    },
    {
      name: "Edward Scissorhands",
      location: "Hulu",
      year: 1990,
      id: 34214,
    },
    {
      name: "Practical Magic",
      location: "HBO MAX",
      year: 1998,
      id: 14145,
    },
  ]);
  return (
    <div>
      <HalloweenData.Provider value={[movies, setMovies]}>
        {props.children}
      </HalloweenData.Provider>
    </div>
  );
};
