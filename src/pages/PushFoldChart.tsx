import AnteSelectionContainer from "../components/AnteSelection";
import BigBlindSelector from "../components/BigBlindSelection";
import PositionSelector from "../components/PositionSelection";

import {
  PushFoldChartWrapper,
  ContentContainer,
  SelectorsContainer,
  PushFoldChartH1,
} from "./PushFoldChart.style";
import GameTree from "../components/Gametree";

const PushFoldChart = () => {
  return (
    <PushFoldChartWrapper>
      <PushFoldChartH1>Push Fold Chart</PushFoldChartH1>
      <ContentContainer>
        <GameTree />
        <SelectorsContainer>
          <BigBlindSelector />
          <PositionSelector />
          <AnteSelectionContainer />
        </SelectorsContainer>
      </ContentContainer>
    </PushFoldChartWrapper>
  );
};

export default PushFoldChart;
