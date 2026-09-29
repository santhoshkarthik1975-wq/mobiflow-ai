import Link from "next/link";
import { ArrowRight, BrainCircuit, Gauge, MapPinned, ShieldAlert, Sparkles, TrainFront, Zap } from "lucide-react";

const stats = [
  ["82,430", "Active commuters"],
  ["87%", "Prediction confidence"],
  ["24 min", "Avg. delay avoided"],
  ["18%", "Potential CO₂ reduction"]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Link href="/" className="brand"><span className="brand-mark">M</span> MobiFlow<span className="ai">AI</span></Link>
        <div className="nav-links">
          <Link href="/planner">Journey Planner</Link>
          <Link href="/dashboard">Command Center</Link>
        </div>
        <Link className="nav-cta" href="/planner">Try Demo <ArrowRight size={16}/></Link>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> PREDICTIVE URBAN MOBILITY</div>
          <h1>Move smarter.<br/><span>Before traffic moves.</span></h1>
          <p>MobiFlow AI predicts congestion and crowding before they happen, then recommends the best route for time, cost, comfort and carbon.</p>
          <div className="hero-actions">
            <Link href="/planner" className="primary-btn">Plan my journey <ArrowRight size={18}/></Link>
            <Link href="/dashboard" className="secondary-btn">Open city command center</Link>
          </div>
          <div className="trust-row">
            <span><span className="dot green"></span> AI prediction engine</span>
            <span><span className="dot blue"></span> Multi-modal routing</span>
            <span><span className="dot orange"></span> Crisis radar</span>
          </div>
        </div>

        <div className="hero-card glass">
          <div className="card-top">
            <span>LIVE MOBILITY PULSE</span><span className="live"><i/> DEMO DATA</span>
          </div>
          <div className="city-map mini-map">
            <div className="road r1"></div><div className="road r2"></div><div className="road r3"></div>
            <div className="road r4"></div><div className="road r5"></div>
            <div className="zone z1">GUINDY</div><div className="zone z2">T. NAGAR</div><div className="zone z3">PORUR</div>
            <div className="pulse p1"></div><div className="pulse p2"></div><div className="pulse p3"></div>
          </div>
          <div className="prediction-strip">
            <div><span className="danger">●</span><b>87%</b><small>Guindy congestion</small></div>
            <div><span className="warn">●</span><b>94%</b><small>Metro crowding</small></div>
            <div><span className="good">●</span><b>−24m</b><small>Delay avoided</small></div>
          </div>
        </div>
      </section>

      <section className="stats container">
        {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="feature-section container">
        <div className="section-heading">
          <div className="eyebrow">ONE PLATFORM · TWO SIDES</div>
          <h2>From commuter decisions to city decisions.</h2>
          <p>The prototype demonstrates a complete loop: predict the mobility crisis, recommend an action, and simulate its city-wide impact.</p>
        </div>
        <div className="feature-grid">
          <Feature icon={<BrainCircuit/>} title="Predictive AI" text="Forecast congestion and crowd levels for the next 60 minutes using simulated historical patterns."/>
          <Feature icon={<MapPinned/>} title="Multi-modal routing" text="Compare routes across time, cost, crowding, reliability and estimated carbon impact."/>
          <Feature icon={<ShieldAlert/>} title="Crisis radar" text="Detect mobility hotspots and surface recommended interventions for transport planners."/>
          <Feature icon={<Gauge/>} title="What-if simulation" text="Test interventions such as increased public transport capacity and instantly see projected impact."/>
        </div>
      </section>

      <footer className="footer container">
        <div><span className="brand"><span className="brand-mark">M</span> MobiFlow<span className="ai">AI</span></span><p>Predict. Optimize. Move.</p></div>
        <span>Hackathon prototype · Chennai mobility scenario</span>
      </footer>
    </main>
  );
}

function Feature({icon,title,text}) {
  return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}