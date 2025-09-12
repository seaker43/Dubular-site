import React from "react";
export const runtime = "edge";
// Fetch from D1
export default async function handler(req, res) {
 res.status(200).json({ message: "Fetch from DB" });
}
