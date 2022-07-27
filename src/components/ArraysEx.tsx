import { stringify } from "querystring";
import { useState } from "react";
import "./ArraysEx.css";

function ArraysEx() {
  const [colors, setColors] = useState([
    { color: "red" },
    { color: "orange" },
    { color: "yellow" },
  ]);

  interface Pets {
    name: string;
    type: string;
    id: number;
  }

  const [pets, setPets] = useState([
    { name: "Crash", type: "Dog", id: 123 },
    { name: "Beemo", type: "Cat", id: 456 },
    { name: "Beezlebub", type: "Corn Snake", id: 534 },
  ]);

  let addColor = (color: string): void => {
    let newColor;

    //     if (color) {
    //       if (color === "green") {
    //         newColor = {
    //           color: "green",
    //         };
    //         return setColors({ ...colors, ...newColor });
    //       }
    //     }
  };

  //   const newColorBlue = {
  //     color: "Blue",
  //   };

  //   const newColorViolet = {
  //     color: "Violet",
  //   };

  let addColorGreen = (color: string): void => {
    let newColorGreen = {
      color: "green",
    };

    setColors([...colors, newColorGreen]);
  };

  let addColorBlue = (color: string): void => {
    let newColorBlue = {
      color: "blue",
    };

    setColors([...colors, newColorBlue]);
  };

  let addColorViolet = (color: string): void => {
    let newColorViolet = {
      color: "violet",
    };

    setColors([...colors, newColorViolet]);
  };

  return (
    <div>
      <h1>Arrays Exercise</h1>
      <h3>Colors</h3>
      <ol>
        {colors.map((index) => (
          <li key={index.color}>{index.color}</li>
        ))}
      </ol>

      <div>
        <button
          onClick={() => {
            addColorGreen("green");
          }}
        >
          Add Green
        </button>
        <button
          onClick={() => {
            addColorBlue("");
          }}
        >
          Add Blue
        </button>
        <button
          onClick={() => {
            addColorViolet("");
          }}
        >
          Add Violet
        </button>
      </div>
      <h3>Pets</h3>

      <ul>
        <h4>Name - Type</h4>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArraysEx;
