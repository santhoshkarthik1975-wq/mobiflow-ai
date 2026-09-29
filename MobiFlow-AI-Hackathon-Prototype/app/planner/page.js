 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Car, ChevronDown, CircleDollarSign, Clock3, Leaf, MapPin, Navigation, Sparkles, TrainFront, Users, Zap } from "lucide-react";

const routes = [
  {name:"Metro + Walk", tag:"AI RECOMMENDED", time:"48 min", cost:"₹35", crowd:"Low", crowdNum:42, carbon:"0.7 kg", reliability:"92%", color:"green"},
  {name:"Bus + Metro", tag:"BALANCED", time:"52 min", cost:"₹30", crowd:"Medium", crowdNum:61, carbon:"0.9 kg", reliability:"88%", color:"blue"},
  {name:"Car", tag:"FASTEST NOW", time:"72 min", cost:"₹190", crowd:"High", crowdNum:86, carbon:"4.8 kg", reliability:"63%", color:"orange"}
];

export default function Planner() {
  const [source,setSource] = useState("Avadi");
  const [destination,setDestination] = useState("Guindy");
  const [preference,setPreference] = useState("Balanced");
  const [analyzed,setAnalyzed] = useState(false);

  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand"><span className="brand-mark">M</span> MobiFlow<span className="ai">AI</span></Link>
        <div className="nav-links"><Link href="/planner">Journey Planner</Link><Link href="/dashboard">Command Center</Link></div>
        <Link href="/" className="nav-cta"><ArrowLeft size={16}/> Home</Link>
      </nav>

      <section className="page-head container">
        <div className="eyebrow"><Navigation size={15}/> AI JOURNEY PLANNER</div>
        <h1>Don't just find a route.<br/><span>Find the right moment to move.</span></h1>
        <p>Demo scenario uses Chennai locations and simulated mobility signals.</p>
      </section>

      <section className="planner-layout container">
        <div className="planner-form glass">
          <div className="form-title"><Sparkles size={18}/> Analyze your commute</div>
          <label>FROM</label>
          <div className="input-wrap"><MapPin size={17}/><select value={source} onChange={e=>setSource(e.target.value)}><option>Avadi</option><option>Anna Nagar</option><option>Porur</option><option>Tambaram</option><option>T. Nagar</option></select><ChevronDown size={16}/></div>
          <label>TO</label>
          <div className="input-wrap"><Navigation size={17}/><select value={destination} onChange={e=>setDestination(e.target.value)}><option>Guindy</option><option>T. Nagar</option><option>Anna Nagar</option><option>Porur</option><option>Tambaram</option></select><ChevronDown size={16}/></div>
          <label>YOUR PRIORITY</label>
          <div className="preference-grid">
            {["Balanced","Fastest","Cheapest","Greenest"].map(x=><button className={preference===x?"pref active":"pref"} onClick={()=>setPreference(x)} key={x}>{x}</button>)}
          </div>
          <button className="analyze-btn" onClick={()=>setAnalyzed(true)}>Analyze with MobiFlow AI <Zap size={18}/></button>
          <p className="demo-note">ⓘ Predictions are simulated for this hackathon prototype.</p>
        </div>

        <div className="results">
          {!analyzed ? <EmptyState/> : <>
            <div className="alert-card"><div className="alert-icon">!</div><div><b>Mobility warning detected</b><p>Guindy congestion probability is <strong>87%</strong> between 8:30–9:00 AM. AI recommends leaving at <strong>8:05 AM</strong>.</p></div></div>
            <div className="result-head"><div><span className="eyebrow">AI ROUTE ANALYSIS</span><h2>{source} → {destination}</h2></div><span className="confidence">87% confidence</span></div>
            {routes.map((r,i)=><RouteCard route={r} recommended={i===0} key={r.name}/>)}
          </>}
        </div>
      </section>

      <section className="container insight-banner">
        <div><div className="eyebrow">WHY MOBIFLOW?</div><h2>We optimize the <span>journey + timing</span>, not just the distance.</h2></div>
        <div className="insight-points"><span>◉ Traffic prediction</span><span>◉ Crowd prediction</span><span>◉ Cost awareness</span><span>◉ Carbon awareness</span></div>
      </section>
    </main>
  );
}

function EmptyState(){
  return <div className="empty-state"><div className="empty-icon"><TrainFront size={32}/></div><h2>Ready to predict your commute?</h2><p>Select your journey and let the AI compare time, cost, crowding and carbon.</p></div>
}

function RouteCard({route,recommended}){
  return <div className={"route-card "+(recommended?"recommended":"")}>
    <div className="route-main">
      <div className={"route-icon "+route.color}>{route.name.includes("Car")?<Car size={22}/>:<TrainFront size={22}/>}</div>
      <div><div className="route-title">{route.name} {recommended&&<span>AI RECOMMENDED</span>}</div><div className="route-sub">Reliability {route.reliability}</div></div>
    </div>
    <div className="route-metrics">
      <Metric icon={<Clock3/>} value={route.time} label="ETA"/>
      <Metric icon={<CircleDollarSign/>} value={route.cost} label="Cost"/>
      <Metric icon={<Users/>} value={route.crowd} label={`${route.crowdNum}% crowd`}/>
      <Metric icon={<Leaf/>} value={route.carbon} label="CO₂"/>
    </div>
    <button className="route-btn">{recommended?"Choose route":"View route"} <ArrowRight size={15}/></button>
  </div>
}
function Metric({icon,value,label}){return <div className="metric"><span>{icon}</span><b>{value}</b><small>{label}</small></div>}
