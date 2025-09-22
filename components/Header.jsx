import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center" style={{height:88}}>
      <div className="relative h-full w-full max-w-none overflow-hidden">
        <img
          src="/Dubular2.v2.png"
          alt="Dubular"
          className="h-full w-full object-cover object-top select-none pointer-events-none"
          draggable="false"
        />
      </div>
    </header>
  );
}
