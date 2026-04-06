export type Session = {
  id: string;
  date: string;
  profit?: number;
  startBankroll: number;
  endBankroll?: number;
  currentBankroll?: number;
  rakeback?: number;
};

export type Tab = "overview" | "sessions" | "graphs";