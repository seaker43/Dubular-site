export const runtime ="experimental-edge";

// Narration logic
export default async function handler(req, res) {
 res.status(200).json({ message:"Narrate API" });
}
