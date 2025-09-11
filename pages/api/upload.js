export const runtime = "edge";
// Handles file uploads
export default async function handler(req, res) {
  res.status(200).json({ message: "Upload endpoint" });
}
