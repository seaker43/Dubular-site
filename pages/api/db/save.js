export const runtime = "edge";
export const runtime = 'edge';
// Save to D1
export default async function handler(req, res) {
  res.status(200).json({ message: 'Save to DB' });
}
