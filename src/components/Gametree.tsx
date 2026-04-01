import { generateHands } from "../gameTree";
import { GameTreeGrid, Square } from "./Gametree.style";

const GameTree = () => {
    const hands = generateHands();

    return (
        <>
        <GameTreeGrid>
            {hands.map((hand) => [
                <Square key={hand}>{hand}</Square>
            ])}
        </GameTreeGrid>
        </>
    )
};

export default GameTree;