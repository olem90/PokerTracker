import { useState, useEffect } from "react";
import type { Session, Tab } from "../types";
import Overview from "../components/Overview";
import Sessions from "../components/Sessions";
import {
  PokerTrackerWrapper,
  Content,
  Sidebar,
  PageHeader,
  ContentContainer,
} from "./SessionTracker.style";
import Dashboard from "../components/Dashboard";

export default function SessionTrackerPage() {
  const [dateRange, setDateRange] = useState<"3d" | "7d" | "1m" | "3m" | "all">(
    "7d",
  );

  const getSessionsFromStorage = (): Session[] => {
    const raw = localStorage.getItem("sessions");
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  };

  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [sortType, setSortType] = useState<
    "none" | "biggestWin" | "biggestLoss"
  >("none");

  console.log("SESSIONS STATE:", sessions);

  useEffect(() => {
    const raw = localStorage.getItem("sessions");

    if (!raw) {
      setIsLoaded(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        setSessions(parsed);
      }
    } catch (e) {
      console.error("Bad localStorage data");
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions, isLoaded]);

  const [activeTab, setActiveTab] = useState<
    "overview" | "sessions" | "graphs"
  >("overview");
  const [showAll, setShowAll] = useState(false);

  const now = new Date();

  const currentBankroll =
    sessions.length > 0
      ? (sessions[0].endBankroll ?? sessions[0].startBankroll)
      : 0;

  let filteredSessions = sessions.filter((session) => {
    if (dateRange === "all") return true;

    const [day, month, year] = session.date.split("/");
    const sessionDate = new Date(`${year}-${month}-${day}`);

    const diffInDays =
      (now.getTime() - sessionDate.getTime()) / (1000 * 60 * 60 * 24);

    if (dateRange === "3d") return diffInDays <= 3;
    if (dateRange === "7d") return diffInDays <= 7;
    if (dateRange === "1m") return diffInDays <= 30;
    if (dateRange === "3m") return diffInDays <= 90;

    return true;
  });

  if (sortType === "biggestWin") {
    filteredSessions = [...filteredSessions].sort(
      (a, b) => (b.profit ?? 0) - (a.profit ?? 0),
    );
  }

  if (sortType === "biggestLoss") {
    filteredSessions = [...filteredSessions].sort(
      (a, b) => (a.profit ?? 0) - (b.profit ?? 0),
    );
  }

  return (
    <PokerTrackerWrapper>
      <h1>Session Tracker</h1>
      <h2>Current Bankroll: ${currentBankroll}</h2>
      <ContentContainer>
        <Sidebar>
          <Dashboard activeTab={activeTab} onChangeTab={setActiveTab} />
        </Sidebar>

        <Content>
          {activeTab === "overview" && <Overview sessions={filteredSessions} />}

          {activeTab === "sessions" && (
            <Sessions
              sessions={sessions}
              setSessions={setSessions}
              sortType={sortType}
              setSortType={setSortType}
              onOpenImport={() => setShowImportModal(true)}
            />
          )}

          {activeTab === "graphs" && <div>Graphs coming soon</div>}
        </Content>
      </ContentContainer>
    </PokerTrackerWrapper>
  );
}
