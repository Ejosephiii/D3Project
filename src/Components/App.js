import React from "react";
import Histogram from "./Histogram";

const data = [
  {
    year: 1980,
    rating: 10,
    name: "Space Invaders",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Space_Invaders_flyer%2C_1978.jpg",
  },
  {
    year: 1981,
    rating: 15,
    name: "Warlords",
    image: "https://i.ebayimg.com/images/g/PoEAAOSw2gphOWSt/s-l1600.jpg",
  },
  {
    year: 1982,
    rating: 64,
    name: "Dance Dance Revolution",
    image: "https://i.ebayimg.com/images/g/PoEAAOSw2gphOWSt/s-l1600.jpg",
  },
  {
    year: 1983,
    rating: 56,
    name: "Cyberpunk 2077",
    image: "https://i.ebayimg.com/images/g/PoEAAOSw2gphOWSt/s-l1600.jpg",
  },
  {
    year: 1984,
    rating: 100,
    name: "Borderlands",
    image: "https://i.ebayimg.com/images/g/PoEAAOSw2gphOWSt/s-l1600.jpg",
  },
];

const App = () => {
  return <Histogram data={data} />;
};

export default App;
