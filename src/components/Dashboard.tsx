import type { Tab } from "../types";
import { DashboardWrapper, DashboardNav } from "./Dashboard.style";

type DashboardProps = {
  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;
};

const Dashboard = ({ activeTab, onChangeTab }: DashboardProps) => {

  return (
    <DashboardWrapper>
    <DashboardNav>
      <ul>
        <li>
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => onChangeTab("overview")}
          >
            Overview
          </button>
        </li>
        <li>
          <button
            className={activeTab === "sessions" ? "active" : ""}
            onClick={() => onChangeTab("sessions")}
          >
            Sessions
          </button>
        </li>
        <li>
           <button
            className={activeTab === "graphs" ? "active" : ""}
            onClick={() => onChangeTab("graphs")}
          >
            Graphs
          </button>
        </li>
      </ul>
    </DashboardNav>
  </DashboardWrapper>
  );
};

export default Dashboard;