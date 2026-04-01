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
} from "./Sessions.style";
import { useState } from "react";
import type { Session } from "../types";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  sessions: Session[];
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
};

const Sessions = ({ sessions, setSessions }: Props) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [endInputs, setEndInputs] = useState<{ [key: string]: string }>({});

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

  const handleEndSession = (id: string, endValue: string) => {
    if (!endValue) return; // 🛑 prevent empty input

    const end = Number(endValue);

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;

        return {
          ...s,
          endBankroll: end,
          profit: end - s.startBankroll,
        };
      }),
    );
  };

  return (
    <SessionsWrapper>
      {/* ❌ Hide start section if active session exists */}
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
