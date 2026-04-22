import { create } from "zustand";

export const useStore = create((set) => ({
  nodes: [],
  edges: [],
  selectedNode: null,

  setNodes: (nodes) => set({ nodes }),

  setEdges: (edges) => set({ edges }),

  addEdge: (edge) =>
    set((state) => ({
      edges: [...state.edges, edge],
    })),

  setSelectedNode: (node) => set({ selectedNode: node }),
}));