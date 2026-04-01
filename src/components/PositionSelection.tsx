import {
  PositionSelectionWrapper,
  PositionSelection,
  PositionSquare,
  PositionH2,
} from "./PositionSelection.style";
import { useState } from "react";

const PositionSelector = () => {
  type Position = {
    label: string;
    value: PositionValue;
  };

  const positions: Position[] = [
    { label: "SB", value: "sb" },
    { label: "BB", value: "bb" },
    { label: "UTG1", value: "utg1" },
    { label: "UTG2", value: "utg2" },
    { label: "UTG3", value: "utg3" },
    { label: "LJ", value: "lj" },
    { label: "HJ", value: "hj" },
    { label: "CO", value: "co" },
    { label: "BTN", value: "btn" },
  ];

  type PositionValue =
    | "sb"
    | "bb"
    | "utg1"
    | "utg2"
    | "utg3"
    | "lj"
    | "hj"
    | "co"
    | "btn";

  const [selectedPosition, setSelectedPosition] =
    useState<PositionValue | null>(null);

  return (
    <PositionSelectionWrapper>
      <PositionH2>My Position</PositionH2>
      <PositionSelection>
        {positions.map((pos) => (
          <PositionSquare
            key={pos.value}
            data-position={pos.value}
            className={selectedPosition === pos.value ? "active-pos" : ""}
            onClick={() => setSelectedPosition(pos.value)}
          >
            {pos.label}
          </PositionSquare>
        ))}
      </PositionSelection>
    </PositionSelectionWrapper>
  );
};

export default PositionSelector;
