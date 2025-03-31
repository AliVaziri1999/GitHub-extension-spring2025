import React, { useEffect, useState } from "react";
import downloadicon from "../icons/download.svg";
import refreshicon from "../icons/refresh.svg"
import editicon from "../icons/edit.svg";


const Header = () => {
  const [lastAnalyzed, setlastAnalyzed] =useState("");
  useEffect(() =>{

    const storedLogin = localStorage.getItem("lastLogin");

    if (!storedLogin) {
      const now = new Date().toISOString();
      localStorage.setItem("lastLogin", now);
      setlastAnalyzed(now);
    } else {
      setlastAnalyzed(storedLogin);
    }
  }, []);

  const lastAnalyizedTime = lastAnalyzed
    ? new Date(lastAnalyzed).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    : "Loading...";


  return (
    <header className="dashboard-header">
      <h1>Commit Pro - Repository Analysis</h1>
       <div className="header-buttons">

          <button id="download-btn" >
            <img src={downloadicon} height={24} alt="download" />
          </button>
          <button id="refresh-btn" >
            <img src={refreshicon} height={24} alt="refresh" />
          </button>
          <button id="edit-btn">
            <img src={editicon} height={24} alt="edit" />
          </button>
        </div>
      <div className="header-details">
        <span>Current Branch: main</span>
        <span>Last Analyzed:{lastAnalyizedTime}</span>
        <span className="score">Overall Repository Score: Maintainable (85)</span>
      </div>
    </header>
  );
};

export default Header;
