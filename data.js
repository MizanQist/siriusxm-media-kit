/* Every figure below is transcribed from "SiriusXM Media Kit 2025.pdf" (26 pages).
   pg = page in the PDF. src = the kit's own footnote number (see KIT.sources).
   Nothing is rounded, updated or inferred. Edit here and the page updates. */
window.KIT = {

  /* ---------- Page 3: ecosystem headline numbers ---------- */
  headline: [
    { n: 160, suffix: "M", label: "monthly listeners", who: "SiriusXM Media", pg: 3, src: 1 },
    { text: "1 of 2", label: "cars on the road", who: "SiriusXM", pg: 3, src: 2 },
    { n: 87, suffix: "%", label: "ad-supported", who: "SiriusXM Streaming Network", pg: 3, src: 3 },
    { n: 2500, suffix: "+", label: "shows", who: "SiriusXM Podcast Network", pg: 3, src: 4 },
    { n: 8, label: "of the top 30 most popular podcasts", who: "SiriusXM Podcast Network", pg: 3, src: 4 }
  ],
  streaming: {
    listeners: { v: "92M", label: "monthly digital audio listeners", who: "SiriusXM Streaming Network", pg: 8, src: 9 },
    partners: { v: "+30M", label: "additional monthly listeners", who: "curated audio marketplace (partner publishers)", pg: 11, src: 15 }
  },

  /* ---------- Page 5: listening moments (all footnote 5: SiriusXM Media, Edison Research, Custom Audio Study, 2023) ---------- */
  moments: [
    { m: "In the car",      v: 86, who: "SiriusXM" },
    { m: "Getting ready",   v: 82, who: "Pandora" },
    { m: "Working",         v: 74, who: "SoundCloud" },
    { m: "Cooking",         v: 66, who: "SiriusXM Podcast" },
    { m: "Gaming",          v: 75, who: "SoundCloud" },
    { m: "Exercising",      v: 84, who: "SoundCloud" },
    { m: "Running errands", v: 55, who: "SiriusXM" }
  ],

  /* ---------- Pages 7, 9, 10, 12: platform pages ---------- */
  platforms: {
    siriusxm: {
      name: "SiriusXM", pg: 7,
      tagline: "Capturing pivotal moments as they unfold across sports, talk, news, and music",
      hero: [ { v: "33 million", l: "subscribers", src: 6 }, { v: "83%", l: "penetration in car", src: 2 } ],
      demo: { gender: "51% female / 49% male", income: "$114K median household income", age: "54 average", education: "71% attended college or have advanced degrees", src: 7 },
      engagement: [
        { v: "3 hours+", l: "spent in their vehicle daily. Over 70% of that time they are listening to SiriusXM", src: 11 },
        { v: "41%", l: "listen to the same SiriusXM channel for 20mins or more", src: 11 }
      ],
      receptivity: [
        { v: "80%", l: "trust the content on SiriusXM", src: 11 },
        { v: "28%", l: "are likely to purchase or use a product they heard about on SiriusXM", src: 11 }
      ]
    },
    pandora: {
      name: "Pandora", pg: 9, network: "SiriusXM Streaming Network",
      tagline: "Effortless, personalized listening for everyone",
      hero: [ { v: "#1", l: "in 202 US Markets", src: 8 }, { v: "7 hours", l: "per user, per week", src: 3 } ],
      demo: { gender: "55% female / 45% male", income: "$88K median household income", age: "38% 25–44 · 47 average age", education: "61% attended college or have advanced degrees", src: 7 },
      engagement: [
        { v: "25:30 hrs", l: "of monthly listening", src: 3 },
        { v: "73%", l: "listen weekly or more often", src: 3 },
        { v: "243M", l: "monthly songs thumbed", src: 3 }
        /* "25M monthly station ads" appears on p9 but reads like a typo for "adds"; left out. */
      ],
      receptivity: [
        { v: "+8%", l: "lift in ad awareness from Pandora audio ads", src: 12 },
        { v: "+5%", l: "lift in message association from Pandora audio ads", src: 12 }
      ]
    },
    soundcloud: {
      name: "SoundCloud", pg: 10, network: "SiriusXM Streaming Network",
      tagline: "A music community powered by deep connections between artists and fans",
      hero: [
        { v: "80%", l: "of SoundCloud listeners 18-24 consider themselves content creators", src: 10 },
        { v: "74%", l: "of SoundCloud listeners 13-17 enjoy belonging to a digital music community", src: 3 }
      ],
      demo: { gender: "44% female / 56% male", income: "$73K median household income", age: "40% 18–24 · 41% 25–44", education: null, src: 7 },
      engagement: [
        { v: "50%", l: "of SoundCloud Gen Z users spend more than 2+ hours a day listening to music", src: 14 },
        { v: "8 years", l: "younger than the average internet user", src: 14 }
      ],
      receptivity: [
        { v: "57%", l: "more likely to have visited a brand website within the last month", src: 13 },
        { v: "1.5x", l: "more likely to buy brands advertised", src: 13 }
      ]
    },
    podcasts: {
      name: "SiriusXM Podcast Network", pg: 12,
      tagline: "Top podcasts, beloved creators, and premium networks",
      hero: [ { v: "60 million", l: "monthly US podcast listeners", src: 21 }, { v: "#1", l: "podcast network among women", src: 22 } ],
      demo: { gender: "57% female / 43% male", income: "44% earn $75k or more per household", age: "63% 25–54", education: null, src: 23 },
      engagement: [
        { v: "66%", l: "say they have a routine of listening to the same podcast shows each week", src: 21 },
        { v: "62%", l: "say they never miss an episode of their favorite podcast", src: 21 }
      ],
      receptivity: [
        { v: "1 in 2", l: "say they pay more attention to podcast ads vs. ads on radio, TV, print or online", src: 25 },
        { v: "68%", l: "say they are more willing to consider products and services they learn about on podcasts vs. online video, social media, live TV or radio", src: 26 }
      ]
    }
  },

  /* ---------- Page 11: partner publishers ---------- */
  partners: {
    sbs:         { name: "SBS",         pos: "A leader in Hispanic audio",                 v: "80%", l: "Spanish language content",              src: 16 },
    audiomack:   { name: "Audiomack",   pos: "Youth-driven, artist-first, on-demand music", v: "75%", l: "Black/African American audience",       src: 17 },
    idobi:       { name: "idobi",       pos: "The premier alternative music destination",   v: "76%", l: "of listeners under the age of 34",      src: 18 },
    sonos:       { name: "Sonos",       pos: "Expert music curation for the whole family",  v: "57%", l: "of listeners are parents with kids under 18", src: 19 },
    dailymotion: { name: "Dailymotion", pos: "Premium video platform for the biggest publishers", v: "77%", l: "of listeners employed full time", src: 20 }
  },

  /* ---------- Page 6: the kit's own audience → publisher pairings ---------- */
  kitPairings: { Affluent: "SiriusXM", Diverse: "Pandora", Young: "SoundCloud", Hispanic: "SBS", Black: "Audiomack", Parents: "Sonos", Men: "Locked On", Women: "Audiochuck", Educated: "Freakonomics" },

  /* ---------- Pages 17–21: ad solutions (category → publisher card) ---------- */
  solutions: {
    Scaled:   { line: "Reach your desired audience at scale across our entire network",
      siriusxm: { t: "Run cross-platform spots on SiriusXM", d: "Get your message across selected SiriusXM channels", o: ["30-second audio", "60-second audio"] },
      streaming: { t: "Follow streaming listeners everywhere", d: "Reach listeners across our suite of streaming publishers, devices, and formats", o: ["Audio", "Video", "Display", "Rewarded"] },
      podcasts: { t: "Activate across thousands of podcasts", d: "Access our network of 2500+ shows with announcer-read ads, all in one buy", o: ["Announcer reads", "Video"] } },
    Targeted: { line: "Chose who, where, and how you want to message your customers",
      siriusxm: { t: "Target a specific daypart", d: "Choose the time and place for your ad on SiriusXM", o: ["30-second audio", "60-second audio"] },
      streaming: { t: "Select your ideal audience or streaming platform", d: "Access our suite of standard and advanced targeting controls across streaming", o: ["Audio", "Video", "Display"] },
      podcasts: { t: "Zero in on your desired podcast listener and environment", d: "Choose the best audience, context, or most suitable podcast environment for your brand", o: ["Announcer reads"] } },
    Content:  { line: "Align with top-tier content and hosts",
      siriusxm: { t: "Sponsor a show", d: "Get a trusted host to deliver your :60s brand message", o: [":60s live reads"] },
      streaming: { t: "Sponsor a station", d: "Align with an existing station and developed audience base", o: ["Audio", "Video", "Display"] },
      podcasts: { t: "Sponsor a podcast", d: "Choose any of our 300+ exclusive podcasts", o: ["Announcer reads", "Host reads"] } },
    Custom:   { line: "Drive deeper engagement with experiences for your brand",
      siriusxm: { t: "Integrate your brand into a show", d: "Leverage show hosts for short-form content inspired by your brand", o: ["Sponsorships", "Segments", "Vignettes"] },
      streaming: { t: "Design engaging ad experiences", d: "Create engaging ad units across our leading streaming apps", o: ["Audio", "Video", "Display", "Rich media", "Takeovers"] },
      podcasts: { t: "Tell your extended brand story", d: "Get extended exposure and narrative integration with our premium hosts and shows", o: ["Presenting sponsorships", "Segments", "Vignettes", "Bonus episodes", "Podcast series"] } },
    Events:   { line: "Connect with passionate audiences in an IRL environment",
      siriusxm: { t: "Elevate your branding", d: "Weave your brand's identity and messaging into any of our experiences", o: ["Swag giveaways", "Logo placements"] },
      streaming: { t: "Create memorable experiences", d: "Interact with thousands of passionate fans at any of our popular events", o: ["Custom activation"] },
      podcasts: { t: "Engage beyond events", d: "Expand your footprint beyond event day across our network", o: ["Event show & station sponsorships", "Sweepstakes"] } }
  },

  /* ---------- Page 23: targeting menu proof points ---------- */
  targeting: [
    { v: "73%+", l: "Validation rate for our activity and mood targeting", src: 24 },
    { v: "93%+", l: "Higher conversion rate for a finance brand using a lookalike from CRM", src: 25 },
    { v: "95%+", l: "Accuracy rate for our transcription targeting", src: 25 }
  ],
  targetingMenu: {
    Advanced: ["Lookalike modeling", "Retargeting"],
    Inventory: ["Inventory source*", "Show level*", "Ad break*", "Daypart**"],
    Contextual: ["Language", "Content category", "Activity", "Mood", "Mindset", "Brand suitability*", "Transcription*"],
    Audience: ["Demo", "Geography", "Behavior", "Multicultural affinity", "Predictive audiences", "Database matching", "Hundreds of proprietary segments"],
    notes: "*Podcasts only  **SiriusXM only (no additional targeting available on Satellite)"
  },
  dataset: { v: "3.8x", l: "Pandora's first-party data is measured 3.8x more accurate than other publishers", pg: 22, src: 29 },
  measurement: { v: "50+", l: "data partners", pg: 25 },

  /* ---------- Pages 13–16: services ---------- */
  services: {
    insights: {
      title: "Insights panels",
      items: [
        "SiriusXM Media's exclusive streaming audio research panel: 90,000 opted-in listeners",
        "Surveys and studies for demographic and psychographic insights",
        "The largest and longest-running podcast research panel: 50K opted-in highly engaged participants",
        "In-depth listener demographics across our slate of exclusive podcasts"
      ], pg: 14
    },
    cultural: {
      title: "Cultural marketing practice",
      lead: "Connecting brands, people, and their communities",
      items: [
        "Audience Insights: thought leadership studies, audience deep dives",
        "Cultural Intelligence: trendspotting, music & podcast trends and predictions",
        "Campaign Strategy: campaign ideation and recommendations, support through execution and measurement"
      ], pg: 15
    },
    creative: {
      title: "Creative services",
      lead: "Our audio-first, award-winning creative agency will help you develop your culturally relevant ad creative",
      items: ["Audio creative strategy", "Audio production", "Experiential audio", "Copywriting", "Voiceover and casting", "Music composition", "Multicultural creative", "Custom podcasts", "Live activation", "Rich media development"], pg: 16
    },
    events: {
      title: "Live events",
      lead: "Live experiences for the most passionate fans",
      stats: [ { v: "62%", l: "of listeners enjoy attending in-person live music events/concerts", src: 27 }, { v: "+107%", l: "lift in consideration for event sponsors", src: 28 } ],
      lineup: {
        "For the music lover": ["SiriusXM Small Stage Series", "Music Row Happy Hour", "End of Year Celebration"],
        "For the sports fan": ["The Big Game", "Race Weekend Kick-Off"],
        "For the culture": ["El Pulso", "HBCU Homecoming"],
        "For the podcast fan": ["Live podcast shows"]
      }, pg: 13
    }
  },

  /* ---------- Audience → platform mapping (the picker). ---------- */
  /* Platform keys: siriusxm, pandora, soundcloud, podcasts, streaming (= SiriusXM Streaming Network umbrella), sbs, audiomack, idobi, sonos.
     "why" per platform is the one-line reason shown in the ranked list. Each stat carries its platform (who). */
  platformNames: {
    siriusxm: "SiriusXM", pandora: "Pandora", soundcloud: "SoundCloud", podcasts: "SiriusXM Podcast Network",
    streaming: "SiriusXM Streaming Network", sbs: "SBS · partner publisher", audiomack: "Audiomack · partner publisher",
    idobi: "idobi · partner publisher", sonos: "Sonos · partner publisher"
  },
  audiences: {
    genz: {
      label: "Gen Z",
      platforms: [
        { p: "soundcloud", why: "40% of listeners are 18–24 and the audience is 8 years younger than the average internet user." },
        { p: "idobi",      why: "76% of listeners are under 34 on the premier alternative music destination." },
        { p: "audiomack",  why: "Youth-driven, artist-first, on-demand music." }
      ],
      stats: [
        { v: "40%",  l: "of SoundCloud listeners are 18–24", who: "SoundCloud" },
        { v: "80%",  l: "of SoundCloud listeners 18-24 consider themselves content creators", who: "SoundCloud" },
        { v: "50%",  l: "of SoundCloud Gen Z users spend more than 2+ hours a day listening to music", who: "SoundCloud" },
        { v: "1.5x", l: "more likely to buy brands advertised", who: "SoundCloud" }
      ],
      solutions: [
        { cat: "Scaled",   card: "streaming", pick: "Rewarded video and display across the streaming suite" },
        { cat: "Custom",   card: "streaming", pick: "Rich media and takeovers in the apps they live in" },
        { cat: "Targeted", card: "streaming", pick: "Demo, behavior and mood targeting across streaming" }
      ],
      why: "Gen Z on SoundCloud is not background listening: half spend more than two hours a day with music, and 80% of 18–24s see themselves as creators."
    },
    affluent: {
      label: "Affluent commuters",
      platforms: [
        { p: "siriusxm", why: "$114K median household income, 83% penetration in car and 3 hours+ a day in the vehicle." },
        { p: "pandora",  why: "$88K median household income and 7 hours per user, per week." },
        { p: "podcasts", why: "44% earn $75k or more per household." }
      ],
      stats: [
        { v: "$114K",    l: "median household income", who: "SiriusXM" },
        { v: "3 hours+", l: "spent in their vehicle daily. Over 70% of that time they are listening to SiriusXM", who: "SiriusXM" },
        { v: "83%",      l: "penetration in car", who: "SiriusXM" },
        { v: "28%",      l: "are likely to purchase or use a product they heard about on SiriusXM", who: "SiriusXM" }
      ],
      solutions: [
        { cat: "Targeted", card: "siriusxm", pick: "Own the drive-time daypart with :30 and :60 audio" },
        { cat: "Content",  card: "siriusxm", pick: "A trusted host delivers your :60 brand message" },
        { cat: "Scaled",   card: "siriusxm", pick: "Cross-platform spots on selected SiriusXM channels" }
      ],
      why: "The commute is a captive, screen-free hour: 80% of SiriusXM listeners trust the content, and 41% stay on one channel for 20 minutes or more."
    },
    parents: {
      label: "Parents",
      platforms: [
        { p: "sonos",    why: "57% of listeners are parents with kids under 18; expert music curation for the whole family." },
        { p: "pandora",  why: "38% of listeners are 25–44 and 82% listen while getting ready." },
        { p: "podcasts", why: "63% of listeners are 25–54 and 66% keep a weekly listening routine." }
      ],
      stats: [
        { v: "57%", l: "of listeners are parents with kids under 18", who: "Sonos" },
        { v: "82%", l: "of Pandora listeners listen while getting ready", who: "Pandora" },
        { v: "66%", l: "of SiriusXM Podcast listeners listen while cooking", who: "SiriusXM Podcast Network" },
        { v: "55%", l: "of SiriusXM listeners listen while running errands", who: "SiriusXM" }
      ],
      solutions: [
        { cat: "Targeted", card: "streaming", pick: "Activity and daypart-led targeting around the family routine" },
        { cat: "Content",  card: "podcasts",  pick: "Host reads on the shows they never miss" },
        { cat: "Custom",   card: "streaming", pick: "Audio, video and display units in the streaming apps" }
      ],
      why: "Parents listen inside routines, getting ready, cooking, running errands, and audio rides along in the moments a screen cannot."
    },
    hispanic: {
      label: "Hispanic audiences",
      platforms: [
        { p: "sbs",       why: "A leader in Hispanic audio with 80% Spanish language content." },
        { p: "pandora",   why: "The kit pairs its “Diverse” audience with Pandora, #1 in 202 US markets." },
        { p: "streaming", why: "Language and multicultural affinity are targeting controls across streaming." }
      ],
      stats: [
        { v: "80%",   l: "Spanish language content", who: "SBS" },
        { v: "+30M",  l: "additional monthly listeners across the curated audio marketplace", who: "partner publishers" },
        { v: "62%",   l: "of listeners enjoy attending in-person live music events/concerts", who: "SiriusXM Media" },
        { v: "+107%", l: "lift in consideration for event sponsors", who: "SiriusXM Media events" }
      ],
      solutions: [
        { cat: "Targeted", card: "streaming", pick: "Language and multicultural affinity targeting" },
        { cat: "Events",   card: "streaming", pick: "El Pulso: custom activation for the culture" },
        { cat: "Custom",   card: "streaming", pick: "Multicultural creative from the in-house agency" }
      ],
      why: "Language is a targeting control here, not a translation afterthought: SBS carries 80% Spanish-language content and the in-house agency builds multicultural creative."
    },
    black: {
      label: "Black audiences",
      platforms: [
        { p: "audiomack", why: "75% Black/African American audience; youth-driven, artist-first, on-demand music." },
        { p: "pandora",   why: "The kit pairs its “Diverse” audience with Pandora, with 243M songs thumbed a month." },
        { p: "streaming", why: "Multicultural affinity and predictive audiences are targeting controls across streaming." }
      ],
      stats: [
        { v: "75%",   l: "Black/African American audience", who: "Audiomack" },
        { v: "+30M",  l: "additional monthly listeners across the curated audio marketplace", who: "partner publishers" },
        { v: "+107%", l: "lift in consideration for event sponsors", who: "SiriusXM Media events" },
        { v: "62%",   l: "of listeners enjoy attending in-person live music events/concerts", who: "SiriusXM Media" }
      ],
      solutions: [
        { cat: "Targeted", card: "streaming", pick: "Multicultural affinity and predictive audiences" },
        { cat: "Events",   card: "streaming", pick: "HBCU Homecoming: be in the room" },
        { cat: "Custom",   card: "siriusxm",  pick: "Cultural marketing practice shapes the campaign" }
      ],
      why: "Culture-first reach: Audiomack's audience is 75% Black/African American, and HBCU Homecoming takes the brand into the room."
    },
    women: {
      label: "Women",
      platforms: [
        { p: "podcasts", why: "#1 podcast network among women; 57% of listeners are female." },
        { p: "pandora",  why: "55% of listeners are female; #1 in 202 US markets." },
        { p: "siriusxm", why: "51% of listeners are female with a $114K median household income." }
      ],
      stats: [
        { v: "#1",     l: "podcast network among women", who: "SiriusXM Podcast Network" },
        { v: "57%",    l: "of listeners are female", who: "SiriusXM Podcast Network" },
        { v: "55%",    l: "of listeners are female", who: "Pandora" },
        { v: "1 in 2", l: "say they pay more attention to podcast ads vs. ads on radio, TV, print or online", who: "SiriusXM Podcast Network" }
      ],
      solutions: [
        { cat: "Content",  card: "podcasts",  pick: "Host reads across 300+ exclusive podcasts" },
        { cat: "Scaled",   card: "podcasts",  pick: "Announcer reads across 2,500+ shows in one buy" },
        { cat: "Targeted", card: "streaming", pick: "Demo and behavior targeting across streaming" }
      ],
      why: "The #1 podcast network among women puts a trusted host between the brand and the listener, and 68% are more willing to consider what they hear there."
    },
    podcast: {
      label: "Podcast fans",
      platforms: [
        { p: "podcasts", why: "60 million monthly US podcast listeners, 2,500+ shows and 8 of the top 30 most popular podcasts." },
        { p: "siriusxm", why: "Talk and news alongside music; 41% stay on one channel for 20 minutes or more." }
      ],
      stats: [
        { v: "60 million", l: "monthly US podcast listeners", who: "SiriusXM Podcast Network" },
        { v: "66%", l: "say they have a routine of listening to the same podcast shows each week", who: "SiriusXM Podcast Network" },
        { v: "62%", l: "say they never miss an episode of their favorite podcast", who: "SiriusXM Podcast Network" },
        { v: "68%", l: "say they are more willing to consider products and services they learn about on podcasts vs. online video, social media, live TV or radio", who: "SiriusXM Podcast Network" }
      ],
      solutions: [
        { cat: "Content",  card: "podcasts", pick: "Sponsor any of 300+ exclusive podcasts with host reads" },
        { cat: "Custom",   card: "podcasts", pick: "Presenting sponsorships, bonus episodes, podcast series" },
        { cat: "Targeted", card: "podcasts", pick: "Show-level, ad-break and transcription targeting" },
        { cat: "Events",   card: "podcasts", pick: "Live podcast shows" }
      ],
      why: "Podcast fans show up on schedule: 66% keep a weekly routine, 62% never miss an episode, and 1 in 2 pay more attention to podcast ads than to radio, TV, print or online."
    },
    sports: {
      label: "Sports fans",
      platforms: [
        { p: "siriusxm", why: "Captures pivotal moments as they unfold across sports, talk, news, and music; 83% penetration in car." },
        { p: "podcasts", why: "2,500+ shows with host reads and :60 brand messages from trusted voices." }
      ],
      stats: [
        { v: "41%",        l: "listen to the same SiriusXM channel for 20mins or more", who: "SiriusXM" },
        { v: "80%",        l: "trust the content on SiriusXM", who: "SiriusXM" },
        { v: "+107%",      l: "lift in consideration for event sponsors", who: "SiriusXM Media events" },
        { v: "33 million", l: "subscribers", who: "SiriusXM" }
      ],
      solutions: [
        { cat: "Content",  card: "siriusxm",  pick: "A :60 live read from the host, inside the broadcast" },
        { cat: "Events",   card: "streaming", pick: "The Big Game and Race Weekend Kick-Off activations" },
        { cat: "Targeted", card: "siriusxm",  pick: "Game-day dayparts with :30 and :60 audio" }
      ],
      why: "Live sports is appointment listening, and a :60 live read from the host lands inside the moment fans tuned in for."
    }
  },

  /* ---------- Page 26: sources, verbatim ---------- */
  sources: [
    "Comscore Media Metrix, Nov 2024; Edison Podcast Metrics, Oct 2024; Edison Research SiriusXM Measurement, 2024; Edison Research Custom Overlap Study 2024 (National Survey, Edison Podcast Metrics, Infinite Dial)",
    "Sirius XM Holdings Inc., Q4 2022 Year-end Shareholders Report",
    "SiriusXM Media Internal Metrics Q4 2024",
    "Edison Podcast Metrics Q4 2024",
    "SiriusXM Media, Edison Research, Custom Audio Study, 2023",
    "SiriusXM Holdings Inc., Q4 2024 Shareholders Report",
    "MRI Simmons Spring 2024 Doublebase",
    "MRI-Simmons Local Studies Spring 2024 (Published 12/06/2024)",
    "Comscore Media Metrix, November 2024",
    "SiriusXM Media Gen Z & Millennial Study A18-24, March 2022",
    "Nielsen Custom Qualitative Study for SiriusXM, 2022",
    "Results are for Q1 '24 and back 3 years.",
    "Comscore media matrix, May 2024",
    "Global Web Index, 2024; SoundCloud 1P Reporting, 2024.",
    "Q4 2024 AdsWizz Internal Metrics (Audio Network General)",
    "SBS internal data; Currently available for Programmatic & Streaming Everywhere",
    "Audiomack internal data; Currently available for Programmatic & Streaming Everywhere",
    "idobi Media Kit; Currently available for Programmatic & Streaming Everywhere",
    "Sonos Internal Metrics; Currently available for Programmatic & Streaming Everywhere",
    "DailyMotion, Kantar 2024 2. Dailymotion Internal Metrics",
    "Q4 2024 Internal Metrics from Podcast User Logs",
    "Edison Podcast Metrics Q4 2024 W13+",
    "Edison Podcast Metrics, Q4 2024",
    "Podsurvey 2024 listener data",
    "SiriusXM Media, Signal Hill Research and Publicis Media \"Podcast Consumer Journey\", Q4 2021",
    "Sounds Profitable & Signal Hill Insights, The Medium Moves the Message, February 2023, n=2,002, Adults 18+",
    "SiriusXM Media 2024 User Study",
    "Blinded CRM Client Case Study 2017",
    "September 2023 Neustar AdAdvisor, PlacedIQ, Epsilon, 84.51, IRI, LiveRamp"
  ]
};
