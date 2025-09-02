import Layout from "../components/Layout";

export const getStaticProps = async () => {
  const wallet = {
    balance: 15420,
    recent: [
      { t: "Bet Won: Speedrunner Showdown", delta: +1200 },
      { t: "Gifted DJ Nova", delta: -300 },
      { t: "Watch Rewards", delta: +90 },
    ],
  };
  return { props: { wallet } };
};

export default function Wallet({ wallet }) {
  return (
    <Layout>
      <h1>My Wallet</h1>
      <div className="wallet">
        <div className="balance">
          <div className="label">Balance</div>
          <div className="amount">{wallet.balance.toLocaleString()} DBL</div>
        </div>

        <div className="actions">
          <button className="btn">Deposit</button>
          <button className="btn outline">Withdraw</button>
        </div>
      </div>

      <h2>Recent Activity</h2>
      <ul className="list">
        {wallet.recent.map((r, i) => (
          <li key={i} className="list-row">
            <span>{r.t}</span>
            <strong className={r.delta >= 0 ? "pos" : "neg"}>
              {r.delta >= 0 ? "+" : ""}{r.delta} DBL
            </strong>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
