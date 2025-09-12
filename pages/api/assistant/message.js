import React from "react";
export const runtime = "edge";
// Message handling
export default async function handler(req, res) {
 res.status(200).json({ message: "Message API" });
}
