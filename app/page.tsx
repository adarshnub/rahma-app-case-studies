import {
  Activity,
  Ambulance,
  ArrowRight,
  BellRing,
  Boxes,
  CircleCheck,
  Clock3,
  Droplets,
  HeartPulse,
  Home,
  MapPinned,
  Pill,
  RadioTower,
  ShieldCheck,
  Stethoscope,
  Users,
  Warehouse,
} from "lucide-react";

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  incident: string;
  icon: React.ElementType;
  accent: "flood" | "conflict";
  stats: Array<{ label: string; value: string; note: string }>;
  rahmaData: Array<{ label: string; detail: string }>;
  narrative: {
    challenge: string;
    rahmaRole: string;
    operatingModel: string;
  };
  analysisBlocks: Array<{
    title: string;
    body: string;
    bullets: string[];
  }>;
  interventions: Array<{
    title: string;
    detail: string;
    outputs: string[];
  }>;
  scenarioSteps: Array<{ title: string; detail: string; owner: string }>;
  roadmap: Array<{ phase: string; detail: string; deliverable: string }>;
  kpis: Array<{ metric: string; target: string; why: string }>;
  safeguards: string[];
  timeline: Array<{ phase: string; action: string }>;
  decisionCards: Array<{ title: string; body: string; tag: string }>;
};

const caseStudies: CaseStudy[] = [
  {
    id: "dubai-floods",
    eyebrow: "Case study 01",
    title: "Dubai flood response for elderly and People of Determination",
    subtitle:
      "How Rahma data can turn a citywide flood alert into a district-by-district care plan for evacuation, shelters, medicine, and home visits.",
    incident:
      "The April 2024 Gulf floods brought exceptional rainfall across the UAE and Oman. Roads, transport, homes, and airport operations were disrupted, with vulnerable residents at higher risk when mobility and caregiver access failed.",
    icon: Droplets,
    accent: "flood",
    stats: [
      {
        label: "Rainfall shock",
        value: "259 mm",
        note: "Up to this amount fell in the UAE between 14-17 April 2024.",
      },
      {
        label: "Historical context",
        value: "75 yrs",
        note: "The event exceeded records across the UAE rainfall archive.",
      },
      {
        label: "Mobility impact",
        value: "1,500+",
        note: "Dubai airport flights were delayed or cancelled over three days.",
      },
    ],
    rahmaData: [
      {
        label: "Care profile",
        detail:
          "Age band, disability type, mobility aid, home-care mode, chronic conditions, device dependence, language, and consented caregiver contacts.",
      },
      {
        label: "Location confidence",
        detail:
          "Live SOS location, Makani/building reference, last-known wearable ping, floor number, elevator dependence, and offline fallback source.",
      },
      {
        label: "Clinical need",
        detail:
          "Medication schedule, cold-chain medicines, oxygen or dialysis dependency, allergies, doctor visit overdue flags, and recent wearable anomalies.",
      },
      {
        label: "Response links",
        detail:
          "Caregiver acknowledgement, nearby ambulance readiness, hospital capacity lag, shelter accessibility, and dispatch packet status.",
      },
    ],
    narrative: {
      challenge:
        "Flood response usually starts with geography: blocked roads, low-lying streets, flooded parking levels, and overloaded call centers. For elderly residents and People of Determination, the operational problem is more specific. A person may be safe on a high floor but unable to use stairs when elevators stop. Another may have a caregiver outside the flooded zone who cannot reach them. A diabetic resident may have medicine at home but no cold-chain continuity. A wheelchair user may need a vehicle type that standard evacuation routes do not plan for.",
      rahmaRole:
        "Rahma can convert individual emergency-readiness profiles into a citywide care layer. The app already represents the signals that matter during floods: SOS activation, wearable non-response, caregiver acknowledgement, location confidence, hospital capacity, dispatch status, doctor-overdue flags, medicine changes, and high-risk history. In a flood, those signals become a prioritization engine for who needs contact, who needs transport, who needs medicine, and where accessible shelters should open.",
      operatingModel:
        "The recommended model is a two-layer response. The planning layer uses aggregated, de-identified counts by zone, building type, medical dependency, mobility need, and caregiver reachability. The response layer unlocks named records only when an authorized emergency case is opened, a welfare check is assigned, or a caregiver escalation fails. This lets city teams plan broadly without exposing private health data unnecessarily.",
    },
    analysisBlocks: [
      {
        title: "Primary vulnerability pattern",
        body:
          "The flood is not only a water event; it is a mobility, medicine, power, and communications event. Rahma should therefore rank risk by the combination of flood exposure and personal dependency rather than by water depth alone.",
        bullets: [
          "Residents in wheelchair, bed-bound, oxygen-dependent, dialysis, dementia, fall-risk, or live-alone groups receive higher risk weighting.",
          "Caregiver non-response and telecom fallback status change the urgency because a reachable caregiver can resolve some cases before dispatch is needed.",
          "Elevator dependence, basement parking, building access, and floor number help responders choose the correct vehicle and entry route.",
        ],
      },
      {
        title: "Data-to-decision conversion",
        body:
          "Rahma data should be translated into simple decision queues inside the admin dashboard. Operators should not read raw profiles during a crisis; they should see a ranked action list with the reason for each escalation.",
        bullets: [
          "Evacuate now: water-risk zone plus mobility/device dependency plus no caregiver acknowledgement.",
          "Deliver medicine: refill window under 72 hours, cold-chain requirement, or medicine-change flag.",
          "Send clinical visit: respiratory, cardiac, dialysis, wound-care, or doctor-overdue signal clustered in the same area.",
        ],
      },
      {
        title: "Shelter design implication",
        body:
          "A generic shelter count is not enough. Rahma can help calculate what kind of shelter capacity is needed, including accessible toilets, charging points, oxygen-safe rooms, low-stimulation areas, multilingual volunteers, and nearby pharmacy access.",
        bullets: [
          "Shelter assignment should match residents to facilities based on clinical and accessibility needs, not just distance.",
          "Each shelter should receive an anonymized demand sheet before opening so supplies and staff match expected arrivals.",
          "Family reunification and caregiver access should be built into the shelter intake process.",
        ],
      },
    ],
    interventions: [
      {
        title: "Accessible shelter planning",
        detail:
          "Rahma can aggregate high-risk residents by flood zone without exposing names to planners. Emergency teams can prioritize shelters with ramps, lift access, backup power, wheelchair toilets, quiet rooms, oxygen support, and nearby pharmacy access.",
        outputs: [
          "District heatmap of elderly, wheelchair, bed-bound, and oxygen-dependent residents.",
          "Shelter fit score based on capacity, accessibility, power continuity, and distance.",
          "Transport list for residents who cannot self-evacuate or cannot use stairs.",
        ],
      },
      {
        title: "Medicine and equipment runs",
        detail:
          "The app can convert medication and device-dependence records into supply clusters. Instead of sending generic relief kits, teams can route insulin, cardiac medication, inhalers, wound-care kits, oxygen cylinders, batteries, and mobility aids to the right neighborhoods.",
        outputs: [
          "Pharmacy route manifest grouped by building and urgency.",
          "Cold-chain alerts for insulin and temperature-sensitive medicines.",
          "Backup-power requests for ventilators, oxygen concentrators, and powered beds.",
        ],
      },
      {
        title: "Doctor and caregiver assignment",
        detail:
          "Admin dashboard signals such as doctor overdue, high-risk history, caregiver non-response, and wearable anomalies help decide where geriatric, respiratory, cardiology, diabetes, physiotherapy, and wound-care teams are needed.",
        outputs: [
          "Mobile clinic staffing plan by speciality and zone.",
          "Escalation queue for residents living alone or unreachable caregivers.",
          "Hospital pre-alerts for likely transfers before ambulances arrive.",
        ],
      },
    ],
    scenarioSteps: [
      {
        title: "Flood alert issued",
        owner: "Emergency planning cell",
        detail:
          "Rahma generates an aggregated map of high-risk residents by district, mobility limitation, life-sustaining device dependency, caregiver reachability, and medication refill window. No named records are exported at this stage.",
      },
      {
        title: "Rainfall disrupts movement",
        owner: "Dispatch supervisor",
        detail:
          "The admin console ranks buildings where SOS activations, wearable non-response, and caregiver missed calls overlap. Operators see why each case is urgent: wheelchair user, oxygen dependency, live alone, elevator outage risk, or medicine continuity risk.",
      },
      {
        title: "Shelters begin intake",
        owner: "Shelter coordinator",
        detail:
          "Accessible shelters receive expected arrival profiles: number of wheelchair users, residents requiring quiet rooms, oxygen support, cold-chain medication storage, language support, and caregiver coordination.",
      },
      {
        title: "Recovery checks start",
        owner: "Community health team",
        detail:
          "After water recedes, Rahma schedules home visits for residents whose power, equipment, medication, caregiver access, or hospital follow-up may have been interrupted.",
      },
    ],
    roadmap: [
      {
        phase: "Data readiness",
        detail:
          "Create consented emergency-care profiles during normal app onboarding and caregiver setup.",
        deliverable: "Risk registry with mobility, medicine, device, caregiver, language, and location fields.",
      },
      {
        phase: "Integration readiness",
        detail:
          "Connect flood alerts, shelter inventory, hospital capacity, ambulance dispatch, and telecom fallback channels.",
        deliverable: "Operator dashboard with status checks for each integration and fallback mode.",
      },
      {
        phase: "Playbook testing",
        detail:
          "Run quarterly flood simulations using synthetic cases and district-level shelter demand.",
        deliverable: "Validated evacuation, pharmacy, mobile-clinic, and caregiver escalation workflows.",
      },
      {
        phase: "Post-event learning",
        detail:
          "Compare response time, missed contacts, medicine deliveries, shelter suitability, and hospital transfers after each incident.",
        deliverable: "After-action report that improves triage weights and shelter scoring.",
      },
    ],
    kpis: [
      {
        metric: "High-risk contact completion",
        target: "90% within first 6 hours",
        why: "Measures whether vulnerable residents are reached before conditions worsen.",
      },
      {
        metric: "Accessible transport match rate",
        target: "95% of assigned evacuations",
        why: "Ensures wheelchair, stretcher, and caregiver-accompanied transport needs are not treated as standard trips.",
      },
      {
        metric: "Medicine continuity closure",
        target: "All critical refills under 72 hours resolved",
        why: "Prevents avoidable deterioration after pharmacies, roads, or caregivers are disrupted.",
      },
      {
        metric: "Shelter suitability",
        target: "No high-risk resident assigned to an incompatible shelter",
        why: "Validates that shelter placement considers power, accessibility, medical support, and language.",
      },
    ],
    safeguards: [
      "Use de-identified counts for planning and named records only for authorized response actions.",
      "Record every profile view, export, dispatch packet, caregiver notification, and manual override.",
      "Show operators the minimum necessary medical context for the current task.",
      "Provide Arabic, English, Urdu, Hindi, and voice-based instructions for elderly users.",
      "Keep SMS and voice fallback available when mobile data or app access fails.",
    ],
    timeline: [
      {
        phase: "72-24 hours before heavy rain",
        action:
          "Run a flood-risk overlay against Rahma care profiles; notify caregivers; pre-position accessible transport and medicine packs.",
      },
      {
        phase: "First 6 hours",
        action:
          "Use SOS, wearable non-response, and caregiver missed-call signals to triage rescue priorities by building, not only by incoming phone calls.",
      },
      {
        phase: "6-48 hours",
        action:
          "Convert the live queue into shelter placement, pharmacy delivery, doctor routing, and hospital capacity reservations.",
      },
      {
        phase: "Recovery week",
        action:
          "Schedule home checks for residents whose power, mobility equipment, medicine supply, or caregiver access was interrupted.",
      },
    ],
    decisionCards: [
      {
        title: "Who needs evacuation first?",
        body: "People above water-risk threshold with wheelchair, oxygen, dialysis, bed-bound, or caregiver-unreachable flags.",
        tag: "Priority queue",
      },
      {
        title: "Where should shelters open?",
        body: "Near clusters of high-risk residents, on dry routes, with accessible toilets, backup power, and clinical rooms.",
        tag: "Shelter fit",
      },
      {
        title: "Which doctors are needed?",
        body: "Specialities are inferred from chronic condition mix, overdue visits, active incidents, and medication dependencies.",
        tag: "Clinical staffing",
      },
    ],
  },
  {
    id: "middle-east-war",
    eyebrow: "Case study 02",
    title: "Middle East conflict continuity and humanitarian logistics",
    subtitle:
      "How Rahma can help Dubai prepare for regional escalation by protecting medically fragile residents and strengthening aid-routing decisions.",
    incident:
      "In March 2026, WHO reported that the Middle East escalation was straining health systems, displacing populations, disrupting medical access, and affecting emergency supply requests from its Dubai logistics hub. WFP also described Dubai's humanitarian hub as a rerouting point for stranded aid shipments.",
    icon: RadioTower,
    accent: "conflict",
    stats: [
      {
        label: "Health-system strain",
        value: "50+",
        note: "WHO cited emergency supply requests affected by Dubai logistics disruption.",
      },
      {
        label: "Regional displacement",
        value: "800k+",
        note: "WHO reported relocation and internal displacement across affected countries.",
      },
      {
        label: "Aid movement",
        value: "74",
        note: "WFP said Dubai hub moved assistance to this many countries in 2025.",
      },
    ],
    rahmaData: [
      {
        label: "Fragility registry",
        detail:
          "Consented medical risk tier, disability profile, dependency on daily caregivers, life-sustaining devices, and medication refill windows.",
      },
      {
        label: "Continuity status",
        detail:
          "Power risk, telecom fallback status, caregiver acknowledgement, last successful check-in, and active SOS or wearable non-response.",
      },
      {
        label: "Supply demand",
        detail:
          "Neighborhood-level counts for chronic medicines, oxygen, wound care, mobility aids, hygiene kits, baby/elder-care supplies, and nutrition support.",
      },
      {
        label: "Facility pressure",
        detail:
          "Hospital capacity feed, clinic availability, ambulance readiness, shelter medical rooms, and bottlenecks in medicine delivery.",
      },
    ],
    narrative: {
      challenge:
        "A regional conflict does not need to reach Dubai physically to create a care crisis inside Dubai. Airspace restrictions, shipping disruption, supply backlogs, price spikes, clinic pressure, anxious caregivers, and delayed medicine deliveries can all affect medically fragile residents. Elderly people and People of Determination are often harmed by continuity failures before they are harmed by direct violence: missed refills, missed dialysis, missed wound care, unreachable caregivers, transport shortages, and overwhelmed hospitals.",
      rahmaRole:
        "Rahma can act as a local continuity-of-care intelligence layer. The app can identify which residents cannot safely wait for normal services, which supplies should be staged, which caregivers are reachable, which neighborhoods may require mobile clinics, and which residents need accessible relocation if shelters are activated. It turns health and care profiles into demand forecasts while keeping named patient data inside authorized response workflows.",
      operatingModel:
        "The recommended model is a continuity command cell linked to health authorities, ambulance dispatch, pharmacies, shelters, humanitarian logistics teams, and community-care providers. Rahma should not replace those systems. It should provide the missing person-centered layer: who is medically fragile, what they depend on, where they are, who can reach them, and what action closes the risk.",
    },
    analysisBlocks: [
      {
        title: "Primary vulnerability pattern",
        body:
          "Conflict escalation creates indirect risk through system disruption. For Rahma users, the most important question is not only where incidents are happening, but which residents will deteriorate if medicine, transport, power, caregivers, or clinic access is delayed.",
        bullets: [
          "Medication refill windows reveal which residents are likely to face harm within 24, 48, or 72 hours.",
          "Device dependency and power continuity show where batteries, oxygen, and generator-backed facilities are needed.",
          "Caregiver acknowledgement separates residents with support from those who need proactive welfare checks.",
        ],
      },
      {
        title: "Local demand meets regional logistics",
        body:
          "Dubai's humanitarian logistics role means supply decisions can be informed by both regional shipment backlogs and local medical continuity demand. Rahma can help determine what should be held for local vulnerable residents versus what can move through humanitarian corridors.",
        bullets: [
          "Aggregate medicine demand can be grouped by therapeutic class, depletion date, and district.",
          "Mobility and hygiene supply needs can be separated from general relief inventory.",
          "Clinics and shelters can request staff and stock based on expected medically fragile arrivals.",
        ],
      },
      {
        title: "Operational command implication",
        body:
          "The admin dashboard should become a continuity console during escalation. Instead of waiting for SOS calls, operators should see future risk: who will run out of medicine, who has missed a check-in, whose caregiver failed to respond, and which areas need mobile clinical coverage.",
        bullets: [
          "Priority queues should include no-response, refill-risk, power-risk, and caregiver-failure categories.",
          "Supply teams should see de-identified demand clusters, not named patient lists.",
          "Named records should unlock only for dispatch, clinical follow-up, or authorized caregiver escalation.",
        ],
      },
    ],
    interventions: [
      {
        title: "Medical continuity map",
        detail:
          "If regional escalation disrupts supply chains, airspace, or hospital access, Rahma can identify residents who cannot safely miss medication, oxygen, dialysis, wound care, or caregiver visits. Planners can see de-identified demand clusters before a shortage becomes a crisis.",
        outputs: [
          "Seven-day refill risk list by neighborhood and medicine class.",
          "Oxygen, battery, and device-dependence map for backup-power allocation.",
          "Caregiver non-response queue for phone, SMS, and in-person checks.",
        ],
      },
      {
        title: "Accessible shelter and relocation",
        detail:
          "Conflict planning is not only about beds. Elderly residents and People of Determination need safe transport, sensory-friendly rooms, lifts, ramps, medication storage, family reunification, and clinical supervision.",
        outputs: [
          "Shelter assignment based on disability needs and clinical risk.",
          "Transport manifests for wheelchair vans and stretcher-capable vehicles.",
          "Family and caregiver contact workflows with language preference.",
        ],
      },
      {
        title: "Humanitarian hub intelligence",
        detail:
          "Dubai's logistics role means local demand data can inform what supplies should be staged inside the city while regional shipments are rerouted. Rahma can help separate urgent medical-care demand from general relief demand.",
        outputs: [
          "Medical stock request by need, zone, and depletion date.",
          "Clinic staffing recommendation for geriatrics, trauma support, respiratory care, and mental health.",
          "Priority corridor list for pharmacies, mobile clinics, shelters, and hospitals.",
        ],
      },
    ],
    scenarioSteps: [
      {
        title: "Regional escalation affects routes",
        owner: "Continuity command cell",
        detail:
          "Rahma models a seven-day risk forecast using refill windows, device dependency, caregiver availability, and facility pressure. Planners see district-level demand for oxygen, chronic medicines, wound care, batteries, mobility aids, and hygiene support.",
      },
      {
        title: "Caregiver channels are tested",
        owner: "Caregiver outreach team",
        detail:
          "The app sends check-ins through app, SMS, and voice. Residents with no caregiver acknowledgement, missed wearable check-ins, or high clinical risk are moved into phone follow-up or in-person welfare checks.",
      },
      {
        title: "Supply constraints appear",
        owner: "Pharmacy and logistics desk",
        detail:
          "Aggregated Rahma demand is compared with available medicine and equipment inventory. Supply runs prioritize critical refill windows, oxygen/device dependency, and residents who cannot travel independently.",
      },
      {
        title: "Shelters or clinics activate",
        owner: "Health operations lead",
        detail:
          "Accessible shelters and mobile clinics are staffed based on the expected mix of elderly, disabled, respiratory, cardiac, diabetes, wound-care, and mental-health support needs.",
      },
    ],
    roadmap: [
      {
        phase: "Continuity registry",
        detail:
          "Extend Rahma profiles to capture refill timing, device dependency, caregiver backup, preferred pharmacy, and clinic relationship.",
        deliverable: "Seven-day continuity-risk view for medically fragile residents.",
      },
      {
        phase: "Supply integration",
        detail:
          "Connect pharmacy stock, humanitarian hub inventory categories, oxygen suppliers, battery suppliers, and mobility-equipment providers.",
        deliverable: "Demand-versus-stock dashboard grouped by district and depletion date.",
      },
      {
        phase: "Care escalation workflows",
        detail:
          "Define when Rahma moves from automated check-in to caregiver call, operator call, home visit, ambulance dispatch, or shelter relocation.",
        deliverable: "Escalation rules with audit trail and authorized access controls.",
      },
      {
        phase: "Sustained-crisis governance",
        detail:
          "Create daily coordination routines across health authorities, logistics partners, shelters, pharmacies, and emergency dispatch.",
        deliverable: "Daily continuity brief: unresolved risks, stock gaps, shelter load, and specialist-staffing needs.",
      },
    ],
    kpis: [
      {
        metric: "Seven-day risk coverage",
        target: "95% of high-risk profiles refreshed daily",
        why: "Keeps the command view useful during fast-moving logistics disruption.",
      },
      {
        metric: "Critical refill resolution",
        target: "No critical medicine gap past depletion date",
        why: "Directly measures whether Rahma prevented avoidable medical deterioration.",
      },
      {
        metric: "Caregiver acknowledgement",
        target: "85% same-day acknowledgement",
        why: "Shows whether family and home-care networks are still functioning.",
      },
      {
        metric: "Supply-to-need match",
        target: "90% of staged supply matched to verified demand category",
        why: "Reduces generic stock movement and improves useful humanitarian staging.",
      },
    ],
    safeguards: [
      "Do not share named resident data with logistics partners unless they are part of an authorized care action.",
      "Separate humanitarian inventory planning from patient-level clinical records.",
      "Require role-based access for pharmacy, shelter, clinical, dispatch, and caregiver workflows.",
      "Use consented caregiver contacts and provide opt-out paths for non-emergency communications.",
      "Publish only aggregate dashboards for policy, media, or partner reporting.",
    ],
    timeline: [
      {
        phase: "Escalation watch",
        action:
          "Refresh high-risk resident registry, validate caregiver channels, and model seven-day medicine and device-continuity gaps.",
      },
      {
        phase: "First disruption",
        action:
          "Switch to telecom fallback, push check-ins, and route in-person visits to residents who are alone, non-responsive, or medically dependent.",
      },
      {
        phase: "Shelter activation",
        action:
          "Assign residents to accessible shelters by clinical need, language, caregiver proximity, mobility support, and power requirements.",
      },
      {
        phase: "Sustained crisis",
        action:
          "Feed aggregated demand to supply hubs, hospitals, pharmacies, NGOs, and mobile clinics while protecting individual privacy.",
      },
    ],
    decisionCards: [
      {
        title: "Which supplies should be staged?",
        body: "Rahma converts care profiles into demand signals for medicine, oxygen, hygiene, nutrition, batteries, mobility, and wound care.",
        tag: "Supply demand",
      },
      {
        title: "Who cannot wait for normal access?",
        body: "Residents with missed check-ins, device dependency, caregiver failure, or critical refill windows move into proactive outreach.",
        tag: "Continuity risk",
      },
      {
        title: "Which routes stay open?",
        body: "Dispatch, clinic, pharmacy, and shelter routes can be ranked by vulnerable-population density and facility readiness.",
        tag: "Route priority",
      },
    ],
  },
];

const rahmaSignals = [
  { icon: BellRing, label: "SOS and wearable alerts", value: "live case demand" },
  { icon: HeartPulse, label: "Clinical signals", value: "doctor and medicine need" },
  { icon: Users, label: "Caregiver outreach", value: "who is reachable" },
  { icon: Ambulance, label: "Dispatch readiness", value: "who can be moved" },
  { icon: Home, label: "Home-care profile", value: "who cannot self-evacuate" },
  { icon: Warehouse, label: "Shelter and stock", value: "where support should go" },
];

const sources = [
  {
    label: "Rahma prototype",
    href: "https://rahmatouch-assist.vercel.app/",
    detail: "SOS, workflow, admin dashboard, caregiver, dispatch, and clinical-signal screens.",
  },
  {
    label: "Guy Carpenter Gulf Floods report",
    href: "https://www.guycarp.com/insights/2024/04/Gulf-Floods-April-2024.html",
    detail: "Rainfall, airport disruption, infrastructure impact, and insurance context.",
  },
  {
    label: "World Weather Attribution",
    href: "https://www.worldweatherattribution.org/heavy-precipitation-hitting-vulnerable-communities-in-the-uae-and-oman-becoming-an-increasing-threat-as-the-climate-warms/",
    detail: "Vulnerability, climate signal, and flood-risk exposure findings.",
  },
  {
    label: "WHO Middle East health crisis",
    href: "https://www.who.int/news/item/11-03-2026-conflict-deepens-health-crisis-across-middle-east--who-says",
    detail: "Health-system strain, attacks on healthcare, displacement, and Dubai logistics impact.",
  },
  {
    label: "WFP Dubai humanitarian hub",
    href: "https://www.wfp.org/stories/wfp-led-hub-keeps-humanitarian-aid-moving-amid-middle-east-crisis",
    detail: "Dubai hub role in rerouting and staging humanitarian supplies.",
  },
];

function CaseVisual({ accent }: { accent: CaseStudy["accent"] }) {
  const tileConfig =
    accent === "flood"
      ? { z: 12, x: 2674, y: 1750, cols: 5, rows: 4 }
      : { z: 12, x: 2672, y: 1751, cols: 5, rows: 4 };

  const points: Array<{
    label: string;
    x: number;
    y: number;
    level: "mid" | "high" | "critical";
    count: string;
    need: string;
  }> =
    accent === "flood"
      ? [
          {
            label: "Dubai Marina",
            x: 73,
            y: 24,
            level: "high",
            count: "41",
            need: "lift access + meds",
          },
          { label: "Deira", x: 58, y: 39, level: "mid", count: "36", need: "caregiver checks" },
          { label: "Al Barsha", x: 34, y: 57, level: "high", count: "64", need: "wheelchair vans" },
          {
            label: "Business Bay",
            x: 62,
            y: 63,
            level: "critical",
            count: "89",
            need: "oxygen + evacuation",
          },
          { label: "Mirdif", x: 27, y: 33, level: "mid", count: "22", need: "home checks" },
        ]
      : [
          {
            label: "Jebel Ali",
            x: 25,
            y: 68,
            level: "critical",
            count: "7d",
            need: "aid staging",
          },
          { label: "Dubai Hub", x: 45, y: 46, level: "high", count: "50+", need: "supply requests" },
          { label: "Hospitals", x: 64, y: 31, level: "mid", count: "12", need: "capacity watch" },
          { label: "Shelters", x: 70, y: 64, level: "high", count: "18", need: "accessible rooms" },
          { label: "Pharmacies", x: 36, y: 25, level: "mid", count: "74", need: "medicine routes" },
        ];

  const tiles = Array.from({ length: tileConfig.rows }, (_, row) =>
    Array.from({ length: tileConfig.cols }, (_, col) => ({
      key: `${row}-${col}`,
      src: `https://tile.openstreetmap.org/${tileConfig.z}/${tileConfig.x + col}/${
        tileConfig.y + row
      }.png`,
    })),
  ).flat();

  return (
    <div className={`case-visual ${accent}`} aria-label={`${accent} realistic operational map image`}>
      <div className="real-map-base" aria-hidden="true">
        <div className="real-map-tiles">
          {tiles.map((tile) => (
            <img alt="" decoding="async" draggable={false} key={tile.key} src={tile.src} />
          ))}
        </div>
        <div className="satellite-depth" />
        <div className="map-vignette" />
      </div>

      <svg className="map-overlay" viewBox="0 0 900 620" role="img" aria-hidden="true">
        <defs>
          <radialGradient id={`risk-${accent}`} cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={accent === "flood" ? "#d93c36" : "#d4aa42"}
              stopOpacity="0.52"
            />
            <stop
              offset="56%"
              stopColor={accent === "flood" ? "#d93c36" : "#d4aa42"}
              stopOpacity="0.18"
            />
            <stop
              offset="100%"
              stopColor={accent === "flood" ? "#d93c36" : "#d4aa42"}
              stopOpacity="0"
            />
          </radialGradient>
          <filter id={`soft-${accent}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {accent === "flood" ? (
          <>
            <path
              className="risk-zone critical-zone"
              d="M458 300 C526 254 614 270 690 322 C760 370 798 444 740 502 C682 560 574 542 506 492 C438 440 392 348 458 300 Z"
            />
            <path
              className="risk-zone high-zone"
              d="M210 352 C274 306 370 308 430 360 C486 408 482 502 416 540 C340 584 226 552 184 482 C154 430 166 384 210 352 Z"
            />
            <path className="main-corridor active" d="M118 430 C248 382 372 342 504 300 C622 262 708 222 804 160" />
            <path className="support-corridor" d="M244 518 C374 474 496 472 620 510 C696 534 764 560 832 574" />
            <path className="evac-corridor" d="M154 246 C304 206 426 174 560 138 C646 116 720 94 792 64" />
            <path className="flood-depth-line" d="M24 302 C128 284 208 306 316 286 C452 260 552 280 686 250 C782 228 844 240 896 224" />
            <path className="flood-depth-line secondary" d="M18 402 C150 370 300 402 450 374 C590 348 738 362 900 410" />
          </>
        ) : (
          <>
            <path
              className="risk-zone critical-zone"
              d="M135 390 C220 322 322 342 382 424 C442 506 392 584 286 596 C188 608 92 560 72 480 C62 442 86 414 135 390 Z"
            />
            <path
              className="risk-zone high-zone"
              d="M410 220 C510 172 618 208 662 306 C700 392 638 470 530 460 C440 452 368 386 368 306 C368 268 382 240 410 220 Z"
            />
            <path className="main-corridor active" d="M138 518 C260 480 366 426 462 354 C550 288 646 248 790 220" />
            <path className="support-corridor" d="M182 236 C300 256 402 286 520 330 C626 370 730 426 830 500" />
            <path className="evac-corridor" d="M224 112 C340 150 438 166 542 148 C646 130 724 88 822 82" />
            <path className="flood-depth-line" d="M84 454 C180 420 276 396 366 338 C470 270 596 230 820 198" />
            <path className="flood-depth-line secondary" d="M84 230 C224 250 356 300 474 346 C622 404 734 456 852 514" />
          </>
        )}

        <g className="facility-layer">
          <rect x="694" y="392" width="112" height="68" rx="10" />
          <path d="M750 408 V444 M730 426 H770" />
          <rect x="96" y="286" width="118" height="54" rx="10" />
          <path d="M114 314 H198" />
          <rect x="560" y="494" width="118" height="54" rx="10" />
          <path d="M584 520 H654" />
        </g>
      </svg>

      <div className="map-photo-label">
        Map data OpenStreetMap
      </div>

      <div className="map-title-strip">
        <span>{accent === "flood" ? "Dubai flood care map" : "Continuity logistics map"}</span>
        <strong>{accent === "flood" ? "Live preparedness layer" : "Regional escalation layer"}</strong>
      </div>

      {points.map((point) => (
        <div className={`map-pin ${point.level}`} key={point.label} style={{ left: `${point.x}%`, top: `${point.y}%` }}>
          <span>{point.count}</span>
          <strong>{point.label}</strong>
          <small>{point.need}</small>
        </div>
      ))}

      <div className="map-legend">
        <div>
          <i className="critical" />
          Critical cluster
        </div>
        <div>
          <i className="high" />
          High support load
        </div>
        <div>
          <i className="route" />
          Priority route
        </div>
      </div>

      <div className="map-callouts">
        <div>
          <Ambulance size={16} />
          <span>{accent === "flood" ? "3 wheelchair vans staged" : "2 medical convoys queued"}</span>
        </div>
        <div>
          <Warehouse size={16} />
          <span>{accent === "flood" ? "Shelter fit score active" : "Aid stock split by depletion date"}</span>
        </div>
      </div>

      <div className="visual-panel">
        <div className="tiny-label">Rahma live layer</div>
        <div className="visual-metric">
          {accent === "flood" ? "312 high-risk residents" : "7-day continuity risk"}
        </div>
        <div className="visual-note">
          Illustrative planning view based on aggregated app signals.
        </div>
      </div>
    </div>
  );
}

function PhoneSnapshot() {
  return (
    <div className="phone" aria-label="Rahma SOS mobile screen preview">
      <div className="phone-notch" />
      <div className="phone-status">
        <span>9:41</span>
        <span>5G</span>
      </div>
      <div className="phone-body">
        <div className="ready-icon">
          <CircleCheck size={28} />
        </div>
        <p className="status-copy">Ready</p>
        <h3>Emergency help</h3>
        <p>Hold the red button for help.</p>
        <div className="sos-button">
          <BellRing size={42} />
          <strong>SOS</strong>
          <span>Hold</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <nav className="topbar">
          <a className="brand" href="https://rahmatouch-assist.vercel.app/">
            <span className="brand-mark">
              <HeartPulse size={22} />
            </span>
            <span>
              <strong>Rahma</strong>
              <small>Emergency data case studies</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#dubai-floods">Dubai floods</a>
            <a href="#middle-east-war">Middle East crisis</a>
            <a href="#sources">Sources</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="kicker">From emergency app data to field decisions</div>
            <h1>How Rahma data can protect elderly and disabled residents in the next crisis.</h1>
            <p>
              These two case studies show how Rahma&apos;s SOS flow, wearable check-ins,
              caregiver outreach, clinical signals, dispatch readiness, and admin dashboard can
              support floods, regional conflict continuity, shelters, medicine delivery, and
              specialist-care deployment.
            </p>
            <div className="hero-actions">
              <a href="#dubai-floods">
                Read flood case <ArrowRight size={17} />
              </a>
              <a href="#middle-east-war">
                Read conflict case <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-ops">
            <PhoneSnapshot />
            <div className="ops-card">
              <div className="ops-head">
                <span className="pulse" />
                Admin view
              </div>
              <div className="ops-row critical">
                <strong>Critical cases</strong>
                <span>4</span>
              </div>
              <div className="ops-row">
                <strong>Units ready</strong>
                <span>12</span>
              </div>
              <div className="ops-row">
                <strong>Location precision</strong>
                <span>96%</span>
              </div>
              <div className="mini-bars">
                {[28, 42, 35, 62, 76, 69, 88, 71].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band" aria-label="Rahma data signals">
        {rahmaSignals.map((signal) => {
          const Icon = signal.icon;
          return (
            <div className="signal" key={signal.label}>
              <Icon size={20} />
              <strong>{signal.label}</strong>
              <span>{signal.value}</span>
            </div>
          );
        })}
      </section>

      {caseStudies.map((study) => {
        const Icon = study.icon;
        return (
          <article className={`case-section ${study.accent}`} id={study.id} key={study.id}>
            <div className="case-heading">
              <div>
                <div className="kicker">
                  <Icon size={16} />
                  {study.eyebrow}
                </div>
                <h2>{study.title}</h2>
                <p>{study.subtitle}</p>
              </div>
              <div className="incident-card">
                <div className="tiny-label">Incident context</div>
                <p>{study.incident}</p>
              </div>
            </div>

            <div className="stats-grid">
              {study.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.note}</p>
                </div>
              ))}
            </div>

            <section className="case-narrative">
              <div>
                <span>Challenge</span>
                <p>{study.narrative.challenge}</p>
              </div>
              <div>
                <span>Rahma role</span>
                <p>{study.narrative.rahmaRole}</p>
              </div>
              <div>
                <span>Operating model</span>
                <p>{study.narrative.operatingModel}</p>
              </div>
            </section>

            <div className="case-layout">
              <CaseVisual accent={study.accent} />
              <section className="data-card">
                <div className="section-title">
                  <ShieldCheck size={19} />
                  Data Rahma contributes
                </div>
                <div className="data-list">
                  {study.rahmaData.map((item) => (
                    <div key={item.label}>
                      <strong>{item.label}</strong>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="deep-analysis">
              <div className="section-title">
                <Activity size={19} />
                Case analysis
              </div>
              <div className="analysis-grid">
                {study.analysisBlocks.map((block) => (
                  <div className="analysis-card" key={block.title}>
                    <h3>{block.title}</h3>
                    <p>{block.body}</p>
                    <ul>
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <div className="interventions">
              {study.interventions.map((item, index) => (
                <section className="intervention" key={item.title}>
                  <div className="number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <ul>
                    {item.outputs.map((output) => (
                      <li key={output}>
                        <CircleCheck size={16} />
                        {output}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <section className="scenario-wrap">
              <div className="section-title">
                <MapPinned size={19} />
                Scenario walkthrough
              </div>
              <div className="scenario-grid">
                {study.scenarioSteps.map((step, index) => (
                  <div className="scenario-step" key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                    <strong>{step.owner}</strong>
                  </div>
                ))}
              </div>
            </section>

            <div className="timeline-wrap">
              <div className="section-title">
                <Clock3 size={19} />
                Response timeline
              </div>
              <div className="timeline">
                {study.timeline.map((step) => (
                  <div className="timeline-step" key={step.phase}>
                    <strong>{step.phase}</strong>
                    <p>{step.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <section className="roadmap-wrap">
              <div className="section-title">
                <Boxes size={19} />
                Implementation roadmap
              </div>
              <div className="roadmap-list">
                {study.roadmap.map((item) => (
                  <div className="roadmap-item" key={item.phase}>
                    <div>
                      <strong>{item.phase}</strong>
                      <p>{item.detail}</p>
                    </div>
                    <span>{item.deliverable}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="measurement-grid">
              <section className="kpi-panel">
                <div className="section-title">
                  <Stethoscope size={19} />
                  Success measures
                </div>
                <div className="kpi-list">
                  {study.kpis.map((kpi) => (
                    <div key={kpi.metric}>
                      <strong>{kpi.metric}</strong>
                      <span>{kpi.target}</span>
                      <p>{kpi.why}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="safeguard-panel">
                <div className="section-title">
                  <ShieldCheck size={19} />
                  Safeguards
                </div>
                <ul>
                  {study.safeguards.map((item) => (
                    <li key={item}>
                      <CircleCheck size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="decision-grid">
              {study.decisionCards.map((card) => (
                <div className="decision-card" key={card.title}>
                  <span>{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </article>
        );
      })}

      <section className="governance">
        <div>
          <div className="kicker">
            <ShieldCheck size={16} />
            Privacy and operating model
          </div>
          <h2>Use aggregate data for planning, named data only for authorized response.</h2>
          <p>
            Rahma&apos;s strongest disaster value comes from separating planning intelligence from
            emergency case handling. City teams can receive de-identified counts and heatmaps for
            shelters, doctors, supplies, and route planning. Named profiles should be available only
            to authorized dispatch, medical, and caregiver workflows with audit trails.
          </p>
        </div>
        <div className="governance-list">
          <div>
            <MapPinned size={20} />
            <strong>Aggregate planning</strong>
            <span>District counts, shelter demand, stock needs, and transport pressure.</span>
          </div>
          <div>
            <Stethoscope size={20} />
            <strong>Authorized clinical use</strong>
            <span>Patient-specific medicine, allergies, device dependency, and doctor notes.</span>
          </div>
          <div>
            <Activity size={20} />
            <strong>Operational audit</strong>
            <span>Who viewed, exported, dispatched, notified, or changed a case.</span>
          </div>
        </div>
      </section>

      <section className="sources" id="sources">
        <div className="section-title">
          <Boxes size={19} />
          Source base
        </div>
        <div className="source-grid">
          {sources.map((source) => (
            <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
              <strong>{source.label}</strong>
              <p>{source.detail}</p>
              <span>
                Open source <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <Pill size={18} />
        <span>
          All Rahma metrics shown inside the case-study visuals are illustrative planning examples,
          not production exports.
        </span>
      </footer>
    </main>
  );
}
