export const ranks = [
  "A", "K", "Q", "J", "10",
  "9", "8", "7", "6",
  "5", "4", "3", "2",
];

export const generateHands = (): string[] => {
  const hands: string[] = [];

  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let hand: string;

      if (i === j) {
        hand = ranks[j] + ranks[i]; // pairs
      } else if (i < j) {
        hand = ranks[i] + ranks[j] + "s"; // suited
      } else {
        hand = ranks[j] + ranks[i] + "o"; // offsuited
      }

      hands.push(hand);
    }
  }

  return hands;
};