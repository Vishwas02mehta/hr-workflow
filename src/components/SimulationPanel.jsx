import { useStore } from "../store/useStore";

export default function SimulationPanel() {
  const { nodes, edges } = useStore();

  const run = () => {
    // ❌ No nodes
    if (nodes.length === 0) {
      alert("No nodes added!");
      return;
    }

    // ❌ Start validation
    const startNodes = nodes.filter(n => n.data.type === "start");

    if (startNodes.length === 0) {
      alert("Start node missing!");
      return;
    }

    if (startNodes.length > 1) {
      alert("Only ONE start node allowed!");
      return;
    }

    // ❌ End validation
    const hasEnd = nodes.some(n => n.data.type === "end");

    if (!hasEnd) {
      alert("End node missing!");
      return;
    }

    // ❌ Connection validation
    if (edges.length === 0) {
      alert("Connect nodes first!");
      return;
    }

    // ✅ Simulation
    const result = nodes.map((n, i) => {
      const type = n.data.type;

      if (type === "task") {
        return `Step ${i + 1}: Task → ${n.data.assignee || "No assignee"}`;
      }

      if (type === "approval") {
        return `Step ${i + 1}: Approval → ${n.data.role || "No role"}`;
      }

      if (type === "automated") {
        return `Step ${i + 1}: Automated → ${n.data.action || "No action"}`;
      }

      if (type === "end") {
        return `Step ${i + 1}: End → ${n.data.message || "Completed"}`;
      }

      return `Step ${i + 1}: ${type}`;
    });

    alert(result.join("\n"));
  };

  return (
    <div style={{ padding: 10 }}>
      <button onClick={run}>Run Workflow</button>
    </div>
  );
}