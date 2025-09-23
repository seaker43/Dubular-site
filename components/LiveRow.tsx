type Props={children?:any};
export default function LiveRow({children}:Props){return(<div className="flex overflow-x-scroll space-x-4 p-4">{children}</div>);} 
