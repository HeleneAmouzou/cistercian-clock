import { useState } from "react";
import { CistercianNbProps } from "../../@types/cistercian-nb";

const CistercianNbComponent: CistercianNbProps() => {

  const [unite, setUnite] = useState({one: false,
      two: false,
      three: false,
      four: false,
      five: false});
  const [dizaine, setDizaine] = useState({
     one: false,
      two: false,
      three: false,
      four: false,
      five: false,
  });

  function getStates(nb: number) {
    return {
      one: [1, 5, 7, 9].includes(nb),
      two: [2, 8, 9].includes(nb),
      three: [6, 7, 8, 9].includes(nb),
      four: [3].includes(nb),
      five: [4, 5].includes(nb),
    };

  function update() {

  };
  
  }

};

export default CistercianNbComponent;