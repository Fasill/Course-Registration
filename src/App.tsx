import { useState } from "react";
import components from "./components/index";

const App = () => {
  const [isCard,setIsCard] = useState(true);
  const [id, setId] = useState("0");

  const myState = (val: string) => {
    setIsCard(!isCard);
    setId(val);
  };

  return (
    <div className="flex items-center justify-center bg-green-400 h-[100lvh] gap-5 rootComponent">

      {isCard ? (
        <components.Cards myState={myState} />
      ) : (
        <components.RegistrationForm myState={myState} id={id} />
      )}
    </div>
  );
};

export default App;
