import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";
import SimulationPanel from "./components/SimulationPanel";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Canvas />
      <ConfigPanel />
      <SimulationPanel />
    </div>
  );
}