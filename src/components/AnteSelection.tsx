import { AnteContainer, AnteSquare, AnteSelectionWrapper , AnteH2 } from "./AnteSelection.style";
import { useState } from "react";

const AnteSelectionContainer = () => {
  const anteOptions = [
    { label: "No Ante", value: 0 },
    { label: "10% Ante", value: 10 },
    { label: "12.5% Ante", value: 12.5 },
  ];

  const [activeAnte, setActiveAnte] = useState<number>(0);

  return (
    <AnteSelectionWrapper>
      <AnteH2>My Ante</AnteH2>
      <AnteContainer>
      {anteOptions.map((option) => (
        <AnteSquare
          key={option.value}
          className={activeAnte === option.value ? "active-ante" : ""}
          onClick={() => setActiveAnte(option.value)}
          data-ante={option.value}
        >
          {option.label}
        </AnteSquare>
      ))}
    </AnteContainer>
    </AnteSelectionWrapper>
    
  );
};

export default AnteSelectionContainer;
