import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        relative fixed top-0 left-0 right-0 z-50
        h-14 border-b border-neutral-800
        bg-black/95 backdrop-blur
        flex items-center justify-center
      "
    >
      <Image
        src="/header-logo.png"
        alt="dubUlar header logo"
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full opacity-95 pointer-events-none select-none"
      />
    </header>
  );
}
