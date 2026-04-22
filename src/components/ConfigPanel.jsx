import { useStore } from "../store/useStore";

export default function ConfigPanel() {
  const { selectedNode, nodes, setNodes } = useStore();

  if (!selectedNode) {
    return <div style={{ width: 250, padding: 10 }}>Select a node</div>;
  }

  const handleChange = (key, value) => {
    const updatedNodes = nodes.map((n) => {
      if (n.id === selectedNode.id) {
        return {
          ...n,
          data: {
            ...n.data,
            [key]: value,
          },
        };
      }
      return n;
    });

    setNodes(updatedNodes);
  };

  return (
    <div style={{ width: 250, padding: 10 }}>
      <h3>{selectedNode.data.type} Config</h3>

      {/* TASK NODE */}
      {selectedNode.data.type === "task" && (
        <>
          <input
            placeholder="Title"
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <input
            placeholder="Assignee"
            onChange={(e) => handleChange("assignee", e.target.value)}
          />
        </>
      )}

      {/* APPROVAL NODE */}
      {selectedNode.data.type === "approval" && (
        <input
          placeholder="Role (Manager)"
          onChange={(e) => handleChange("role", e.target.value)}
        />
      )}

      {/* AUTOMATED NODE */}
      {selectedNode.data.type === "automated" && (
        <>
          <select onChange={(e) => handleChange("action", e.target.value)}>
            <option>Select Action</option>
            <option value="send_email">Send Email</option>
            <option value="generate_doc">Generate Document</option>
          </select>

          <input
            placeholder="Param 1"
            onChange={(e) => handleChange("param1", e.target.value)}
          />
          <input
            placeholder="Param 2"
            onChange={(e) => handleChange("param2", e.target.value)}
          />
        </>
      )}

      {/* END NODE */}
      {selectedNode.data.type === "end" && (
        <input
          placeholder="Message"
          onChange={(e) => handleChange("message", e.target.value)}
        />
      )}
    </div>
  );
}