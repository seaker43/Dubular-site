export default function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="section-title safe-px mb-3">{title}</h2>
      <div className="grid grid-cols-1 gap-4 safe-px">{children}</div>
    </section>
  );
}
