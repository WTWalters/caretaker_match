import type { Metadata } from "next";
import ContactForm from "@/components/site/ContactForm";
import HomeIconSprite from "@/components/site/HomeIconSprite";
import "@/styles/ctm-home.css";

export const metadata: Metadata = {
  title: "CaretakerMatch — Connecting Healthcare and Communities",
  description:
    "CaretakerMatch connects health systems with trusted community organizations and Community Care Partners to help more patients recover safely at home.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CaretakerMatch — Connecting Healthcare and Communities",
    description:
      "Digital infrastructure and a community ecosystem that help more patients recover safely at home after surgery.",
    type: "website",
    url: "https://caretakermatch.com",
  },
};

export default function HomePage() {
  return (
    <div className="ctm-home">
      <HomeIconSprite />

      <section id="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Healthcare + Community</div>
            <h1>Connecting Healthcare and Communities to Make Recovery at Home Possible.</h1>
            <div className="hero-tagline">No Patient Heals Alone.</div>
            <p className="sub">CaretakerMatch is building the digital infrastructure and community ecosystem that enables health systems to connect patients with trusted community organizations and Community Care Partners — helping more people recover safely at home.</p>
            <p className="ccp-note">Community Care Partners provide practical, non-clinical support such as transportation, meal preparation, grocery shopping, companionship, and wellness check-ins.</p>
            <p className="ortho-note">Beginning with orthopedic surgery and expanding to additional high-volume procedures where caregiver support can enable safe recovery at home.</p>
            <p className="traction-line"><span className="dot"></span><span>Preparing for our first orthopedic pilot and building regional community partnerships.</span></p>
          </div>

          <div className="hero-illo">
            <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" aria-label="CaretakerMatch ecosystem diagram">
              <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" fill="none">
                <path className="eco-line" d="M320 210 L320 65"/>
                <path className="eco-line" d="M320 210 L450 285"/>
                <path className="eco-line" d="M320 210 L450 135"/>
                <path className="eco-line" d="M320 210 L320 355"/>
                <path className="eco-line" d="M320 210 L190 285"/>
                <path className="eco-line" d="M320 210 L190 135"/>
              </g>

              <g className="eco-node n0">
                <circle cx="320" cy="210" r="46" fill="#B9862E"/>
                <circle cx="320" cy="210" r="30" fill="#fff"/>
                <image href="/site/logo.png" x="296" y="186" width="48" height="48"/>
                <text x="320" y="273" textAnchor="middle" fill="#fff" fontFamily="Fraunces, serif" fontWeight="650" fontSize="15">CaretakerMatch</text>
                <text x="320" y="289" textAnchor="middle" fill="#E7CFA0" fontFamily="Inter, sans-serif" fontSize="10">connects &amp; coordinates</text>
              </g>

              <g className="eco-node n1">
                <circle cx="320" cy="65" r="32" fill="#fff"/>
                <use href="#i-hospital" x="305" y="50" width="30" height="30" color="#164430"/>
                <text x="320" y="113" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Health Systems</text>
              </g>

              <g className="eco-node n2">
                <circle cx="450" cy="135" r="32" fill="#fff"/>
                <use href="#i-physician" x="435" y="120" width="30" height="30" color="#164430"/>
                <text x="450" y="183" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Physicians</text>
              </g>

              <g className="eco-node n3">
                <circle cx="450" cy="285" r="32" fill="#fff"/>
                <use href="#i-home" x="435" y="270" width="30" height="30" color="#164430"/>
                <text x="450" y="333" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Patients &amp; Families</text>
              </g>

              <g className="eco-node n4">
                <circle cx="320" cy="355" r="32" fill="#fff"/>
                <use href="#i-homecare" x="305" y="340" width="30" height="30" color="#164430"/>
                <text x="320" y="403" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Home Care Providers</text>
              </g>

              <g className="eco-node n5">
                <circle cx="190" cy="285" r="32" fill="#fff"/>
                <use href="#i-partner" x="175" y="270" width="30" height="30" color="#164430"/>
                <text x="190" y="333" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Care Partners</text>
              </g>

              <g className="eco-node n6">
                <circle cx="190" cy="135" r="32" fill="#fff"/>
                <use href="#i-org" x="175" y="120" width="30" height="30" color="#164430"/>
                <text x="190" y="183" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="#fff">Community Orgs</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="challenge">
        <div className="wrap">
          <div className="eyebrow center">The Challenge</div>
          <h2 className="center">Recovery Shouldn't Depend on Having Someone at Home.</h2>
          <p className="challenge-lead">Every year, millions of patients are medically ready to recover at home after surgery. Yet many lack the practical, non-clinical support needed for a successful recovery.</p>
          <p className="challenge-lead">The result isn't just a personal challenge — it affects patients, families, health systems, and the cost of care.</p>

          <div className="challenge-grid">
            <div className="challenge-card">
              <div className="cc-emoji">🏥</div>
              <h3>Unnecessary Post-Acute Utilization</h3>
              <p>Patients who could recover safely at home may instead be discharged to higher-cost post-acute settings because caregiver support isn't available.</p>
            </div>
            <div className="challenge-card">
              <div className="cc-emoji">💰</div>
              <h3>Higher Cost of Care</h3>
              <p>Skilled nursing facility care is significantly more expensive than home-based recovery for appropriate patients, increasing episode costs and creating financial pressure under value-based payment models.</p>
            </div>
            <div className="challenge-card">
              <div className="cc-emoji">❤️</div>
              <h3>Patient &amp; Family Well-Being</h3>
              <p>Most patients prefer to recover in the comfort of their own home. Without practical support, recovery can become more stressful for both patients and family caregivers.</p>
            </div>
            <div className="challenge-card">
              <div className="cc-emoji">⏳</div>
              <h3>Delayed Hospital Discharges</h3>
              <p>Patients without adequate support may experience discharge delays while care teams search for safe post-acute options, contributing to hospital capacity and throughput challenges.</p>
            </div>
            <div className="challenge-card">
              <div className="cc-emoji">📊</div>
              <h3>Value-Based Care Performance</h3>
              <p>Under CMS TEAM and other episode-based payment models, hospitals are increasingly accountable for the quality, cost, and coordination of care during the 30 days after discharge, making effective recovery planning more important than ever.</p>
            </div>
            <div className="challenge-card">
              <div className="cc-emoji">🤝</div>
              <h3>An Untapped Community Resource</h3>
              <p>Communities already have people willing to help. What's missing is the trusted digital infrastructure to safely identify, prepare, match, and coordinate Community Care Partners at scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="tight" style={{ background: "var(--paper-deep)" }}>
        <div className="wrap">
          <div className="eyebrow center">How The Platform Works</div>
          <h2 className="center">Technology + Community = Better Recovery at Home</h2>
          <div className="steps4">
            <div className="step4">
              <div className="s4-emoji">📋</div>
              <h3>Assess</h3>
              <p>Patients are enrolled through a guided non-clinical support assessment that helps identify practical recovery needs following discharge.</p>
            </div>
            <div className="step4">
              <div className="s4-emoji">🧠</div>
              <h3>Smart Matching</h3>
              <p>Our platform intelligently matches patients with trained Community Care Partners based on support needs, preferences, availability, location, and compatibility.</p>
            </div>
            <div className="step4">
              <div className="s4-emoji">📱</div>
              <h3>Coordinate &amp; Monitor</h3>
              <p>CaretakerMatch securely coordinates communication, scheduling, task management, recovery monitoring, and oversight — supported by alerts and escalation protocols when additional attention is needed.</p>
            </div>
            <div className="step4">
              <div className="s4-emoji">❤️</div>
              <h3>Support Recovery</h3>
              <p>Community Care Partners provide practical, non-clinical support during the critical first 30 days after discharge — helping patients recover safely, confidently, and with dignity.</p>
            </div>
          </div>
          <div className="pilot-note">Starting with orthopedic surgery at select partner health systems, with plans to expand to other high-volume, high-cost procedures where community-supported recovery helps more patients recover safely at home.</div>
        </div>
      </section>

      <section id="why-ctm" className="tight">
        <div className="wrap">
          <div className="eyebrow center">Why CaretakerMatch</div>
          <h2 className="center">Purpose-Built for Recovery at Home</h2>
          <div className="why-ctm-grid">
            <div className="why-ctm-card">
              <div className="s4-emoji">🧠</div>
              <h3>Smart Matching</h3>
              <p>Matching patients and Community Care Partners using multiple criteria to create trusted, compatible relationships.</p>
            </div>
            <div className="why-ctm-card">
              <div className="s4-emoji">📱</div>
              <h3>Digital Care Coordination</h3>
              <p>Secure enrollment, communication, scheduling, task coordination, and recovery monitoring through one platform.</p>
            </div>
            <div className="why-ctm-card">
              <div className="s4-emoji">🛡</div>
              <h3>Trust &amp; Safety</h3>
              <p>Identity verification, background checks, standardized training, oversight, and escalation protocols.</p>
            </div>
            <div className="why-ctm-card">
              <div className="s4-emoji">🤝</div>
              <h3>Community Ecosystem</h3>
              <p>Building regional partnerships with trusted community organizations that recruit and prepare Community Care Partners.</p>
            </div>
            <div className="why-ctm-card">
              <div className="s4-emoji">📊</div>
              <h3>Outcome Reporting</h3>
              <p>Supporting improved patient experiences, better care transitions, and value-based care initiatives.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="story">
        <div className="wrap">
          <div className="eyebrow center">Our Story</div>
          <h2 className="center">Why we started CaretakerMatch</h2>
          <p className="story-quote">"Patients were medically ready to go home — but had no one to help them get there safely."</p>
          <div className="body-copy">
            <p>CaretakerMatch was co-founded by two practicing orthopedic surgeons, a healthcare executive, and a healthcare technology leader after repeatedly seeing patients who were medically ready to recover at home but lacked caregiver support. We built CaretakerMatch so the answer is never "no one."</p>
          </div>
          <div className="team-strip">
            <div className="founder"><img className="photo" src="/site/founders/hamid-sabet.jpg" alt="Hamid Sabet" width={78} height={78} loading="lazy" /><h4>Hamid Sabet</h4><div className="role">CEO &amp; Co-Founder</div></div>
            <div className="founder"><img className="photo" src="/site/founders/tom-eickmann.jpg" alt="Dr. Tom Eickmann" width={78} height={78} loading="lazy" /><h4>Dr. Tom Eickmann</h4><div className="role">Co-Founder &amp; CMO</div></div>
            <div className="founder"><img className="photo" src="/site/founders/vivek-mohan.jpg" alt="Dr. Vivek Mohan" width={78} height={78} loading="lazy" /><h4>Dr. Vivek Mohan</h4><div className="role">Co-Founder</div></div>
            <div className="founder"><img className="photo" src="/site/founders/whit-walters.jpg" alt="Whit Walters" width={78} height={78} loading="lazy" /><h4>Whit Walters</h4><div className="role">Co-Founder</div></div>
          </div>
        </div>
      </section>

      <section id="value">
        <div className="wrap">
          <div className="eyebrow center">Our Value Proposition</div>
          <h2 className="center">Built for everyone in the ecosystem</h2>
          <div className="vp-grid">

            <div className="vp-card" id="health-systems">
              <div className="vp-emoji">🏥</div>
              <h3>Health Systems &amp; Payers</h3>
              <p className="vp-tag">Supporting better recovery while advancing value-based care.</p>
              <ul className="vp-list">
                <li>Improve care transitions</li>
                <li>Activate community resources</li>
                <li>Support value-based care</li>
              </ul>
              <a href="#contact" className="btn btn-primary to-contact" data-type="Health System / Physician">Explore a Pilot</a>
            </div>

            <div className="vp-card" id="patients">
              <div className="vp-emoji">❤️</div>
              <h3>Patients &amp; Families</h3>
              <p className="vp-tag">Helping more patients recover safely at home.</p>
              <ul className="vp-list">
                <li>Practical, non-clinical support during recovery</li>
                <li>Greater confidence after discharge</li>
                <li>Recovery with dignity and independence</li>
              </ul>
              <a href="#contact" className="btn btn-ghost to-contact" data-type="Patient / Family Member">Learn More</a>
            </div>

            <div className="vp-card" id="community-orgs">
              <div className="vp-emoji">🤝</div>
              <h3>Community Organizations</h3>
              <p className="vp-tag">Expanding community impact through healthcare partnerships.</p>
              <ul className="vp-list">
                <li>Meaningful volunteer opportunities</li>
                <li>Collaborate with local health systems</li>
                <li>Become part of a growing regional ecosystem</li>
              </ul>
              <a href="#contact" className="btn btn-gold to-contact" data-type="Community Organization">Become a Community Partner</a>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "var(--paper-deep)" }}>
        <div className="wrap">
          <div className="eyebrow center">Contact</div>
          <h2 className="center">Let's build this together</h2>
          <div className="lead-copy" style={{ maxWidth: "560px", margin: "0 auto 36px", textAlign: "center" }}>
            <p style={{ color: "var(--ink-soft)" }}>Health system, physician, community organization, or investor — tell us a bit about yourself.</p>
          </div>

          <ContactForm />
        </div>
      </section>

    </div>
  );
}
