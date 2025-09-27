export const normalizeHandle=(h:string)=>h.toLowerCase().replace(/[^a-z0-9_]/g,"").slice(0,20); export const isValidHandle=(h:string)=>/^[a-z0-9_]{3,20}$/.test(h);
