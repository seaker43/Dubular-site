import Image from "next/image";
type Thumb={title?:string; image?:string; href?:string};
export default function ThumbnailCard({data}:{data:Thumb}){const {title="",image="/placeholder.svg",href} = data||{}; const card=(<div className="rounded-lg overflow-hidden bg-neutral-900 shadow-[0_0_10px_#0f0] hover:ring-2 hover:ring-cyan-400 transition"><Image src={image} alt={title} width={320} height={180} className="w-full h-auto object-cover" /><div className="p-2 text-sm text-white truncate">{title}</div></div>); return href ? (<a href={href}>{card}</a>) : card;}
