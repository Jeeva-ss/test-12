import React, { useCallback } from "react";
import {
	ReactFlow,
	useNodesState,
	useEdgesState,
	addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
	{ id: "1", position: { x: 0, y: 0 }, data: { label: "Fetch Api" } },
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "Response ok" } },
	{ id: "3", position: { x: 0, y: 200 }, data: { label: "Show data" } },
];
const initialEdges = [
	{ id: "e1-2", source: "1", target: "2" },
	{ id: "e1-3", source: "2", target: "3" },
];

export default function FlowCard() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			/>
		</div>
	);
}
