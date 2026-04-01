import { useState } from "react";
import {
  BigBlindSelectionWrapper,
  BigBlindContainer,
  BigBlindSquare,
  BigBlindH2,
} from "./BigBlindSelection.style";

const BigBlindSelector = () => {
  const [selectedBigBlind, setSelectedBigBlind] = useState<number | null>(null);

  const bigBlindNumbers: number[] = [];

  for (let i = 1; i <= 20; i++) {
    bigBlindNumbers.push(i);
  }

  return (
    <BigBlindSelectionWrapper>
      <BigBlindH2>My Big Blinds</BigBlindH2>
      <BigBlindContainer>
        {bigBlindNumbers.map((num) => (
          <BigBlindSquare
            key={num}
            data-bbs={num}
            className={selectedBigBlind === num ? "active-bb" : ""}
            onClick={() => setSelectedBigBlind(num)}
          >
            {num}
          </BigBlindSquare>
        ))}
      </BigBlindContainer>
    </BigBlindSelectionWrapper>
  );
};

export default BigBlindSelector;
