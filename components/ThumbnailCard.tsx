type Props={data:any};
export default function ThumbnailCard({data}:Props){const {title="",image}=data||{};return(<div className="rounded-lg shadow-[0_0_10px_#0f0] hover:ring-2 hover:ring-cyan-400 transition overflow-hidden bg-neutral-900"><img src={image||"/placeholder.svg"} alt={title} className="w-full aspect-video object-cover"/><div className="p-2 text-sm text-white">{title}</div></div>);} 
