import React from "react";
import Layout from "../components/Layout";

export const getStaticProps = async () => {
  // Mock seasonal snapshot
  const data = {
    streamers: [
      { name: "DJ Nova", tokens: 58230, wins: 12 },
      { name: "LumaBeats", tokens: 54110, wins: 10 },
      { name: "SpeedyJay", tokens: 40780, wins: 8 },
    ],
    viewers: [
      { name: "crypt0fan", earned: 9200, streak: 14 },
      { name: "viewerX", earned: 8800, streak: 11 },
      { name: "dub_diego", earned: 7700, streak: 9 },
    ],
  };
  return { props: { data } };
};

export default function Leaderboards({ data }) {
  return (
    <Layout>
      <h1>Leaderboards</h1>
      <p className="muted">Seasonal rankings reset monthly.</p>

      <div className="boards">
        <div className="board">
          <h2>Top Streamers</h2>
          <table>
            <thead>
              <tr>
                <th>Streamer</th>
                <th>Tokens</th>
                <th>Pool Wins</th>
              </tr>
            </thead>
            <tbody>
              {data.streamers.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.tokens.toLocaleString()}</td>
                  <td>{s.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="board">
          <h2>Top Viewers</h2>
          <table>
            <thead>
              <tr>
                <th>Viewer</th>
                <th>Earned</th>
                <th>Streak</th>
              </tr>
            </thead>
            <tbody>
              {data.viewers.map((v, i) => (
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.earned.toLocaleString()}</td>
                  <td>{v.streak} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
