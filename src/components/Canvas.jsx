import ReactFlow, {
  Background,
  Controls,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import { useStore } from "../store/useStore";

export default function Canvas() {
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    setSelectedNode,
  } = useStore();


  const onConnect = useCallback(
    (params) => {
      setEdges(addEdge(params, edges)); // 🔥 stable version (no crash)
    },
    [edges, setEdges]
  );

  return (
    <div style={{ flex: 1, height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNode(node)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}