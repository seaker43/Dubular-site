import { ReactNode } from "react";
type Props={children?:ReactNode};
export default function LiveRow({children}:Props){return(<div className="flex overflow-x-auto space-x-4 p-4">{children}</div>);} 
