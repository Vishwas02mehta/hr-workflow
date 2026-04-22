export const getAutomations = () => [
  { id: "send_email", label: "Send Email", params: ["to", "subject"] },
  { id: "generate_doc", label: "Generate Document", params: ["template", "recipient"] },
];

export const simulateWorkflow = (nodes) => {
  return nodes.map((n, i) => ({
    step: i + 1,
    action: n.data.type,
  }));
};