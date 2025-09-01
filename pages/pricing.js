// pages/pricing.js
import styles from "../styles/Pricing.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing – Dubular</title>
        <meta name="description" content="Simple plans for creators and teams." />
      </Head>

      <section className={styles.hero}>
        <h1>Simple pricing for every creator</h1>
        <p>Start free. Upgrade when you’re ready.</p>
      </section>

      <main className={styles.grid}>
        <Plan
          name="Free"
          price="$0"
          period="/mo"
          features={[
            "2 videos / month",
            "Up to 5 minutes each",
            "Basic captions (SRT)",
            "Community support",
          ]}
          href="/signup?plan=free"
        />
        <Plan
          name="Pro"
          price="$19"
          period="/mo"
          highlighted
          features={[
            "30 videos / month",
            "Up to 30 minutes each",
            "Voice cloning (1 voice)",
            "Burned-in or sidecar captions",
            "Priority queue",
          ]}
          href="/signup?plan=pro"
        />
        <Plan
          name="Team"
          price="$49"
          period="/seat/mo"
          features={[
            "Unlimited projects",
            "Shared workspaces",
            "3 cloned voices",
            "Review & approve workflow",
            "Email support",
          ]}
          href="/contact?plan=team"
        />
      </main>
    </>
  );
}

function Plan({ name, price, period, features, href, highlighted }) {
  return (
    <div className={styles.card} style={highlighted ? { borderColor: "#2ac1ff99" } : undefined}>
      <h3>{name}</h3>
      <div className={styles.price}>{price}<span style={{fontSize:14, opacity:.8}}>{period}</span></div>
      <ul className={styles.ul}>
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <Link className={styles.cta} href={href}>Choose {name}</Link>
    </div>
  );
}
