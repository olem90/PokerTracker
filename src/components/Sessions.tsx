import {
  SessionsWrapper,
  SessionsInput,
  SessionsContainer,
  SessionsContent,
  DateParagraph,
  BankrollParagraph,
  EndBankrollButton,
  ResultParagraph,
  SelectSession,
  StyledDatePicker,
  CurrentSession,
  CurrentSessionData,
  CurrentSessionDate,
  CurrentSessionBankroll,
  CurrentSessionInput,
  DeleteSessionBtn,
  SessionsH2,
  StartSessionButton,
  SessionsFilter,
  SessionsFilterSelect,
  SaveSessionBtn,
  ImportSessionBtn,
  ImportExportBtnsContainer,
} from "./Sessions.style";
import { useState } from "react";
import type { Session } from "../types";
import "react-datepicker/dist/react-datepicker.css";
import ImportModal from "./ImportModal";

type Props = {
  sessions: Session[];
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
  sortType: "none" | "biggestWin" | "biggestLoss";
  setSortType: React.Dispatch<
    React.SetStateAction<"none" | "biggestWin" | "biggestLoss">
  >;
  onOpenImport: () => void;
};

const Sessions = ({
  sessions,
  setSessions,
  sortType,
  setSortType,
  onOpenImport,
}: Props) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [endInputs, setEndInputs] = useState<{ [key: string]: string }>({});
  const [showImportModal, setShowImportModal] = useState(false);

  const handleStartSession = () => {
    if (!date || !start) return;

    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    const startValue = Number(start);

    const newSession: Session = {
      id: Date.now().toString(),
      date: formattedDate,
      startBankroll: startValue,
    };

    setSessions((prev) => [newSession, ...prev]);

    setDate("");
    setStart("");
  };

  const currentSession = sessions.find((s) => s.endBankroll === undefined);
  const completedSessions = sessions.filter((s) => s.endBankroll !== undefined);

  const handleDeleteSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  const exportData = () => {
    const dataStr = JSON.stringify(sessions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sessions_backup.json";
    a.click();
  };

  const handleEndSession = (
    id: string,
    endValue: string,
    rakebackValue?: string,
  ) => {
    if (!endValue) return; // 🛑 prevent empty input

    const end = Number(endValue);
    const rakeback = rakebackValue ? Number(rakebackValue) : 0;

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;

        return {
          ...s,
          endBankroll: end,
          rakeback,
          profit: end - s.startBankroll,
        };
      }),
    );
  };

  return (
    <SessionsWrapper>
      {/* ❌ Hide start section if active session exists */}
      <ImportExportBtnsContainer>
        <ImportSessionBtn onClick={() => setShowImportModal(true)}>
          Import Sessions
        </ImportSessionBtn>
        <SaveSessionBtn onClick={exportData}>Save Sessions</SaveSessionBtn>
      </ImportExportBtnsContainer>
      {showImportModal && (
        <ImportModal
          onClose={() => setShowImportModal(false)}
          setSessions={setSessions}
        />
      )}
      {!currentSession && (
        <>
          <SessionsH2>Start Session</SessionsH2>
          <SelectSession>
            <StyledDatePicker
              selected={date ? new Date(date) : null}
              onChange={
                ((d: Date | null) => {
                  if (d) {
                    const year = d.getFullYear();
                    const month = String(d.getMonth() + 1).padStart(2, "0");
                    const day = String(d.getDate()).padStart(2, "0");
                    setDate(`${year}-${month}-${day}`);
                  } else {
                    setDate("");
                  }
                }) as any
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              minDate={new Date()}
            />

            <SessionsInput
              type="number"
              placeholder="Start bankroll"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />

            <StartSessionButton onClick={handleStartSession}>
              Start Session
            </StartSessionButton>
          </SelectSession>
        </>
      )}

      {/* ✅ Always show current session if it exists */}
      {currentSession && (
        <CurrentSession>
          <SessionsH2>Current Session</SessionsH2>

          <CurrentSessionData>
            <CurrentSessionDate>{currentSession.date}:</CurrentSessionDate>

            <CurrentSessionBankroll>
              Starting Bankroll: {currentSession.startBankroll}
            </CurrentSessionBankroll>

            <CurrentSessionInput
              type="number"
              placeholder="End Bankroll"
              value={endInputs[currentSession.id] || ""}
              onChange={(e) =>
                setEndInputs((prev) => ({
                  ...prev,
                  [currentSession.id]: e.target.value,
                }))
              }
            />

            <EndBankrollButton
              onClick={() =>
                handleEndSession(
                  currentSession.id,
                  endInputs[currentSession.id],
                )
              }
            >
              Submit
            </EndBankrollButton>
          </CurrentSessionData>
        </CurrentSession>
      )}

      {completedSessions.length > 0 && (
        <>
          <SessionsFilter>
            <SessionsFilterSelect
              value={sortType}
              onChange={(e) => setSortType(e.target.value as any)}
            >
              <option value="none">Default</option>
              <option value="biggestWin">Biggest Wins</option>
              <option value="biggestLoss">Biggest Losses</option>
            </SessionsFilterSelect>
          </SessionsFilter>
          <SessionsH2>Sessions</SessionsH2>

          <SessionsContainer>
            {completedSessions.map((s) => (
              <SessionsContent key={s.id}>
                <DateParagraph>{s.date}</DateParagraph>

                <BankrollParagraph>
                  Starting Bankroll: {s.startBankroll}$
                </BankrollParagraph>

                <BankrollParagraph>
                  Ending Bankroll: {s.endBankroll}$
                </BankrollParagraph>

                <ResultParagraph profit={s.profit!}>
                  {s.profit! > 0 ? ` +${s.profit}$` : ` ${s.profit}$`}
                </ResultParagraph>

                <DeleteSessionBtn onClick={() => handleDeleteSession(s.id)}>
                  Delete
                </DeleteSessionBtn>
              </SessionsContent>
            ))}
          </SessionsContainer>
        </>
      )}
    </SessionsWrapper>
  );
};

export default Sessions;
