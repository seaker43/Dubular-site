"use client";
import {useEffect,useState} from "react";

type Status = "idle"|"saving"|"saved"|"error"|"unauth";

export default function Settings(){
  const [dark,setDark]=useState(false);
  const [email,setEmail]=useState(true);
  const [push,setPush]=useState(false);
  const [status,setStatus]=useState<Status>("idle");

  // Load existing settings (silently skip if signed out)
  useEffect(()=>{(async()=>{try{
    const r=await fetch("/api/settings",{credentials:'include'});
    if(r.status===401||!r.ok) return;
    const j=await r.json();
    setDark(!!j.dark); setEmail(!!j.email); setPush(!!j.push);
  }catch{}})();},[]);

  async function save(){
    setStatus("saving");
    try{
      const r=await fetch("/api/settings",{
        method:"POST",
        headers:{"content-type":"application/json"},
        credentials:'include',
        body:JSON.stringify({dark,email,push})
      });
      if(r.status===401){ setStatus("unauth"); return; }
      setStatus(r.ok?"saved":"error");
    }catch{ setStatus("error"); }
  }

  return (
    <div className="mx-auto max-w-3xl p-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)} />
          <span>Dark theme</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={email} onChange={e=>setEmail(e.target.checked)} />
          <span>Email notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={push} onChange={e=>setPush(e.target.checked)} />
          <span>Push notifications</span>
        </label>
        <button onClick={save} disabled={status==="saving"} className="rounded-lg border px-4 py-2">
          {status==="saving"?"Saving…":"Save"}
        </button>
        <div className="text-sm mt-2 text-neutral-400">
          {status==="saved" && "Saved!"}
          {status==="error" && "Error saving settings."}
          {status==="unauth" && <>Sign in required. <a className="underline" href="/sign-in">Sign in</a></>}
        </div>
      </div>
    </div>
  );
}
