export default function Section({ title, children }) {
 return (
 <section className="">
 <h2 className="section-title safe-px ">{title}</h2>
 <div className="grid grid-cols-1 gap-4 safe-px">{children}</div>
 </section>
 );
}
