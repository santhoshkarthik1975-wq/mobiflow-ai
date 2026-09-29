 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BusFront, CarFront, ChevronRight, Gauge, MapPinned, Radio, ShieldAlert, Sparkles, TrainFront, Users, Zap } from "lucide-react";

export default function Dashboard(){
  const [capacity,setCapacity]=useState(15);
  const before=82;
  const after=Math.max(42,82-Math.round(capacity*1.2));
  const delay=Math.max(7,24-Math.round(capacity*.7));
  const emissions=Math.round(capacity*1.2);

  return <main>
    <nav className="nav">
      <Link href="/" className="brand"><span className="brand-mark">M</span> MobiFlow<span className="ai">AI</span></Link>
      <div className="nav-links"><Link href="/planner">Journey Planner</Link><Link href="/dashboard">Command Center</Link></div>
      <Link href="/" className="nav-cta"><ArrowLeft size={16}/> Home</Link>
    </nav>

    <section className="dashboard-head container">
      <div><div className="eyebrow"><Radio size={14}/> CITY COMMAND CENTER · DEMO</div><h1>Mobility Crisis Radar</h1><p>Predict → detect → simulate → intervene.</p></div>
      <div className="system-status"><i/> AI SYSTEM ONLINE <span>Updated 10 sec ago</span></div>
    </section>

    <section className="kpi-grid container">
      <Kpi icon={<Users/>} value="82,430" label="Active commuters" trend="+8.4%" />
      <Kpi icon={<ShieldAlert/>} value="4" label="Crisis zones" trend="2 new" danger/>
      <Kpi icon={<BusFront/>} value="17" label="Overcrowded routes" trend="+3" />
      <Kpi icon={<Gauge/>} value="87%" label="Prediction confidence" trend="+4.2%" />
    </section>

    <section className="dashboard-grid container">
      <div className="dash-card map-card">
        <div className="dash-card-head"><div><b>LIVE MOBILITY MAP</b><small>Chennai urban mobility simulation</small></div><span className="map-legend"><i className="lg green"></i>Normal <i className="lg orange"></i>Heavy <i className="lg red"></i>Crisis</span></div>
        <div className="big-map">
          <div className="water"></div>
          <div className="map-road a"></div><div className="map-road b"></div><div className="map-road c"></div><div className="map-road d"></div><div className="map-road e"></div><div className="map-road f"></div>
          <div className="map-label l1">AVADI</div><div className="map-label l2">ANNA NAGAR</div><div className="map-label l3">T. NAGAR</div><div className="map-label l4">GUINDY</div><div className="map-label l5">PORUR</div><div className="map-label l6">TAMBARAM</div>
          <div className="hotspot h1"><span></span><b>GUINDY</b><small>91% crisis</small></div>
          <div className="hotspot h2"><span></span><b>T. NAGAR</b><small>74% heavy</small></div>
          <div className="hotspot h3"><span></span><b>PORUR</b><small>62% heavy</small></div>
          <div className="route-line"></div>
        </div>
      </div>

      <div className="dash-card crisis-card">
        <div className="dash-card-head"><div><b>CRISIS FEED</b><small>AI-detected mobility events</small></div><span className="live"><i/> LIVE</span></div>
        <Crisis title="Guindy corridor" text="Congestion probability reached 91%" time="2 min ago" level="critical"/>
        <Crisis title="Metro crowding" text="Predicted platform load: 96%" time="5 min ago" level="warning"/>
        <Crisis title="T. Nagar" text="Average speed fell by 28%" time="8 min ago" level="warning"/>
        <Crisis title="Porur junction" text="Flow returning to normal" time="12 min ago" level="normal"/>
      </div>
    </section>

    <section className="container simulation-section">
      <div className="simulation-copy">
        <div className="eyebrow"><Sparkles size={14}/> WHAT-IF AI SIMULATOR</div>
        <h2>What if we increase public transport capacity?</h2>
        <p>Move the slider to simulate how an intervention could change city mobility. Values are modeled for the prototype.</p>
        <div className="slider-row"><span>0%</span><input type="range" min="0" max="30" value={capacity} onChange={e=>setCapacity(Number(e.target.value))}/><span>30%</span></div>
        <div className="capacity-value">+{capacity}% capacity</div>
      </div>
      <div className="impact-card">
        <div className="impact-title">PROJECTED IMPACT <ArrowUpRight size={16}/></div>
        <Impact label="Congestion" from={`${before}%`} to={`${after}%`} positive />
        <Impact label="Average delay" from="24 min" to={`${delay} min`} positive />
        <Impact label="CO₂ emissions" from="100%" to={`${Math.max(64,100-emissions)}%`} positive />
      </div>
    </section>

    <section className="container intervention-grid">
      <div className="intervention-card"><TrainFront/><div><b>Increase metro frequency</b><p>Guindy · predicted demand +22%</p></div><ChevronRight/></div>
      <div className="intervention-card"><BusFront/><div><b>Deploy shuttle fleet</b><p>T. Nagar → Guindy corridor</p></div><ChevronRight/></div>
      <div className="intervention-card"><CarFront/><div><b>Reroute private traffic</b><p>Porur junction · temporary diversion</p></div><ChevronRight/></div>
    </section>
  </main>
}

function Kpi({icon,value,label,trend,danger}) {return <div className="kpi"><div className="kpi-icon">{icon}</div><div><b>{value}</b><span>{label}</span></div><small className={danger?"danger-text":""}>{trend}</small></div>}
function Crisis({title,text,time,level}){return <div className="crisis-row"><span className={"crisis-dot "+level}></span><div><b>{title}</b><p>{text}</p><small>{time}</small></div><ChevronRight size={16}/></div>}
function Impact({label,from,to}){return <div className="impact-row"><span>{label}</span><b>{from}</b><ArrowUpRight size={15}/><strong>{to}</strong></div>}
