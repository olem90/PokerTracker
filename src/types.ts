export type Session = {
  id: string;
  date: string;
  profit?: number;
  startBankroll: number;
  endBankroll?: number;
  currentBankroll?: number;
};

export type Tab = "overview" | "sessions" | "graphs";