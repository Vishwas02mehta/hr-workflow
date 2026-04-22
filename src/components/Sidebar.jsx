import { v4 as uuid } from "uuid";
import { useStore } from "../store/useStore";

export default function Sidebar() {
  const { nodes, setNodes } = useStore();

  const addNode = (type) => {
    const newNode = {
      id: uuid(),
      type: "default",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: type, type },
    };
    setNodes([...nodes, newNode]);
  };

  const style = {
    padding: "10px",
    margin: "8px 0",
    background: "#333",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    textAlign: "center",
  };

  return (
    <div style={{ width: 200, background: "#eee", padding: 10 }}>
      <h3>Nodes</h3>

      <div style={style} onClick={() => addNode("start")}>Start</div>
      <div style={style} onClick={() => addNode("task")}>Task</div>
      <div style={style} onClick={() => addNode("approval")}>Approval</div>
      <div style={style} onClick={() => addNode("automated")}>Automated</div>
      <div style={style} onClick={() => addNode("end")}>End</div>
    </div>
  );
}