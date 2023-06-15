import { useState } from "react";
import "./PanelStyles.css";
import Estadisticas from "../estadisticas/estadisticas";
import Inicio from "../inicio/Inicio";
import Productos from "../productos/Productos";

function Panel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabsData = [
    {
      label: "Inicio",
      content: <Inicio />,
    },
    {
      label: "Estadisticas",
      content: <Estadisticas />,
    },
    {
      label: "Productos",
      content: <Productos />,
    },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default Panel;
