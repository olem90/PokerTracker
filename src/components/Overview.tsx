import type { Session } from "../types";
import { OverviewWrapper, OverviewContainer } from "./Overview.style";

type OverviewProps = {
  sessions: Session[];
};

export default function Overview({ sessions }: OverviewProps) {
  // ✅ Only completed sessions
  const completed = sessions.filter((s) => s.profit !== undefined);

  const profits = completed.map((s) => s.profit!);

  const totalProfit = profits.reduce((sum, p) => sum + p, 0);

  const avgProfit =
    profits.length > 0 ? totalProfit / profits.length : 0;

  const biggestWin =
    profits.length > 0 ? Math.max(...profits) : 0;

  const biggestLoss =
    profits.length > 0 ? Math.min(...profits) : 0;

  // ✅ Nice formatting
  const format = (num: number) =>
    num > 0 ? `+${num}$` : `${num}$`;

  return (
    <OverviewWrapper>
      <OverviewContainer>
        <h2>Overview</h2>

        <p>Total Profit: {format(totalProfit)}</p>

        <p>
          Average Profit: {format(Number(avgProfit.toFixed(2)))}
        </p>

        <p>Biggest Win: {format(biggestWin)}</p>

        <p>Biggest Loss: {format(biggestLoss)}</p>
      </OverviewContainer>
    </OverviewWrapper>
  );
}