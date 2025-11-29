// Data for all sections - adapted for ChatBubble and Sidebar format
export const sectionData = {
  cfp: {
    chatBubbles: [
      {
        fullQuestion: "What is this workshop about?",
        answer:
          "Exploring how AI-generated interfaces will change user experiences and HCI practice.",
      },
      {
        fullQuestion: "Who should participate?",
        answer: `Researchers, designers, practitioners, and developers around genUI & dynamic UI.`,
      },
      {
        fullQuestion: "What can I submit?",
        answer: `A 2-page position paper, pictorial, or a 2-minute video.`,
      },
    ],
    sidebar: {
      title: "Call for Participation",
      summary: `We invite researchers, designers, and practitioners to explore how generative UI—interfaces created by AI models—will reshape design methods, workflows, and user experiences. 
      `,
      sections: [
        {
          heading: "What is this workshop about?",
          content: [
            {
              type: "text",
              text: "Generative UI (genUI) encompasses any interface created by an AI model—whether as design material during the design process, or as functional UI rendered at point of use.",
            },
            {
              type: "text",
              text: "This workshop asks:",
            },
            {
              type: "list",
              items: [
                "What kinds of human-centric experiences should genUI enable (from ephemeral, one-off UIs to long-lived, evolving environments)?",
                "How should HCI methods, theories, and workflows adapt when AI can generate, adapt, and evolve interfaces over time?",
                'What does "good practice" look like in a world where interfaces may be uniquely generated for each person?',
              ],
            },
          ],
        },
        {
          heading: "Who should participate?",
          content: [
            {
              type: "text",
              text: "We welcome participants who:",
            },
            {
              type: "list",
              items: [
                "Work directly on genUI or dynamic UI (e.g., adaptive interfaces, malleable software, ephemeral UI, activity-centric systems).",
                "Study or shape design and HCI practice, including methods, tools, teaching, and organizational workflows.",
                "Develop technical stacks for AI-driven interaction, such as ML-based adaptation, UI generation, or model-centric development.",
              ],
            },
            {
              type: "text",
              text: "You do not need to already build genUI systems. We are equally interested in critical, speculative, empirical, and technical perspectives that help us understand what genUI should be and how our field should respond.",
            },
          ],
        },
        {
          heading: "What can I submit?",
          content: [
            {
              type: "text",
              text: "To keep participation broad, we invite three submission formats:",
            },
            {
              type: "list",
              items: [
                "2-page position paper (ACM single-column format)",
                "2-page pictorial (ACM single-column format)",
                "2-minute video",
              ],
            },
            {
              type: "text",
              text: "Your submission should:",
            },
            {
              type: "list",
              items: [
                "Outline how you think genUI will enable new human-centric experiences, and/or",
                "Reflect on how HCI and design practice will need to evolve (methods, roles, workflows, education, technical stacks).",
              ],
            },
            {
              type: "text",
              text: "Submissions must follow SIGCHI's Accessibility Guide for Authors and will be evaluated for relevance, novelty, and diversity of perspective.",
            },
          ],
        },
        {
          heading: "How will submissions be reviewed?",
          content: [
            {
              type: "text",
              text: "Submissions will be lightly peer-reviewed by the organizing committee. We will:",
            },
            {
              type: "list",
              items: [
                "Prioritize relevance to generative UI and HCI practice.",
                "Look for novel, thought-provoking viewpoints—including speculative, critical, and early-stage work.",
                "Aim for diverse roles and backgrounds, balancing researchers, practitioners, designers, developers, and students.",
              ],
            },
            {
              type: "text",
              text: "We expect around 35 participants, including organizers. We will accept one author per accepted submission to attend the workshop in person, following CHI 2026 guidelines.",
            },
          ],
        },
        {
          heading: "What happens to accepted work?",
          content: [
            {
              type: "text",
              text: "**Proceedings:** Accepted submissions will be published as workshop proceedings via CEUR-WS, linked from this website.",
            },
            {
              type: "text",
              text: "**Workshop artefacts:** Artefacts produced during the workshop (e.g., guides, sketches, frameworks) will be curated and shared on this site.",
            },
            {
              type: "text",
              text: "**Post-workshop publication:** We aim to develop these outcomes into a position piece for Interactions or CACM, giving the broader HCI community a shared vocabulary and agenda around genUI and HCI practice.",
            },
          ],
        },
      ],
    },
  },

  program: {
    chatBubbles: [
      {
        fullQuestion: "What does the program look like?",
        answer:
          "This interactive workshop features two 90-minute sessions with a pop-up panel, creative ideation exercises, and collaborative artefact development exploring the future of generative UI in HCI practice. We'll dive deep into how generative interfaces can reshape design methods and workflows.",
      },
      {
        fullQuestion: "How will the sessions be structured?",
        answer:
          "Session 1 features a human spectrogram activity, a pop-up panel with industry and academic experts, and Crazy 8s sketching exercises. Session 2 focuses on small-group artefact creation, where you'll develop concrete guides, frameworks, or visions for genUI and HCI practice.",
      },
      {
        fullQuestion: "What will I create at the workshop?",
        answer:
          "You'll contribute to concrete artefacts like guides for using genUI in HCI practice, maps of new workflows and roles, design principles for ephemeral interfaces, visions of technical stacks, or educational materials for the next generation of HCI practitioners.",
      },
    ],
    sidebar: {
      title: "Program",
      summary:
        "The workshop runs over two 90-minute sessions and is highly interactive. We combine a human spectrogram, a pop-up panel, and fast sketching in Session 1, with small-group artefact creation in Session 2. The goal is to move from shared understanding to concrete guides, frameworks, and visions for genUI and HCI practice.",
      sections: [
        {
          heading: "What is the overall format?",
          content: [
            {
              type: "text",
              text: "**Format:** In-person only (per CHI 2026 guidelines), two 90-minute sessions with a break.",
            },
            {
              type: "text",
              text: "**Style:** Discussion-oriented, hands-on, and artefact-driven.",
            },
            {
              type: "text",
              text: "**Activities:** Human spectrogram, pop-up panel, Crazy 8s sketching, and small-group artefact creation.",
            },
            {
              type: "text",
              text: "**Materials:** We encourage participants to record discussions and use AI tools to help synthesize outcomes.",
            },
          ],
        },
        {
          heading: "What happens in Session 1?",
          content: [
            {
              type: "text",
              text: "**Session 1: Discussion & Ideation**",
            },
            {
              type: "text",
              text: "**Welcome & framing (10 min):** Introduce goals and key dimensions of dynamic & generative UI (e.g., who the UI is for, how stable/adaptive it is, who drives changes, timeframe).",
            },
            {
              type: "text",
              text: "**Human spectrogram (15 min):** Participants physically position themselves along a line (strongly agree → strongly disagree) in response to provocations such as:",
            },
            {
              type: "list",
              items: [
                '"HCI practitioners need entirely new methods."',
                '"In the future there will be no apps."',
                '"The future of design will be to craft AI models, not interfaces."',
              ],
            },
            {
              type: "text",
              text: "Each statement is followed by a short open discussion.",
            },
            {
              type: "text",
              text: "**Pop-up panel (30 min):** Pre-selected panelists from industry and academia open the conversation on emerging genUI capabilities, scenarios and implications for user experience, and implications for HCI research and design practice.",
            },
            {
              type: "text",
              text: 'In the final 10 minutes, other participants can "pop in" as panelists to broaden the discussion.',
            },
            {
              type: "text",
              text: "**Crazy 8s sketching (35 min):** Small groups rapidly sketch possible genUI futures (8 sketches in 8 minutes per group), then discuss and select key sketches to display during the break.",
            },
          ],
        },
        {
          heading: "What happens in Session 2?",
          content: [
            {
              type: "text",
              text: "**Session 2: Artefact Creation & Knowledge Building**",
            },
            {
              type: "text",
              text: "Participants work in small groups to create concrete artefacts. Example briefs include:",
            },
            {
              type: "list",
              items: [
                "**Option 1:** A guide to using genUI as part of HCI research and practice.",
                "**Option 2:** A map of new software development workflows and roles in a model-centric ecosystem.",
                "**Option 3:** Design principles for genUI experienced directly by end-users (ephemeral and longer-term interactions).",
                "**Option 4:** A vision of the engineering and technical stack for genUI, centering user needs and values.",
                "**Option 5:** A guide for educating the next generation of HCI practitioners in a genUI world.",
              ],
            },
            {
              type: "text",
              text: "Groups will frame questions and tensions, draw on prior work and their own experiences, use AI tools (if desired) for transcription and drafting, and produce artefacts that can be shared online and developed into future publications.",
            },
          ],
        },
        {
          heading: "What will I leave with?",
          content: [
            {
              type: "text",
              text: "By the end of the workshop, participants will:",
            },
            {
              type: "list",
              items: [
                "Have a shared vocabulary for talking about genUI and its dimensions (e.g., run-time vs design-time, static vs dynamic, user-driven vs system-driven change).",
                "Contribute to concrete artefacts (guides, frameworks, stacks, and educational materials) that will be published on the workshop website.",
                "Help shape a post-workshop position piece for Interactions or CACM.",
                "Build connections across roles (research, design, engineering, product) around a common agenda for genUI and HCI practice.",
              ],
            },
          ],
        },
        {
          heading: "Accessibility & logistics",
          content: [
            {
              type: "text",
              text: "**Accessibility:** Submissions must follow SIGCHI's Accessibility Guide for Authors. We will assess accessibility needs early and adapt activities like the spectrogram where needed (e.g., alternative ways to express positions).",
            },
            {
              type: "text",
              text: "**Offline materials:** The website will share the call, accepted submissions, and post-workshop summaries and artefacts.",
            },
            {
              type: "text",
              text: "**After the workshop:** Artefacts and a curated summary will be published here, and we aim to develop a position piece (e.g., Interactions or CACM) based on workshop outcomes.",
            },
          ],
        },
      ],
    },
  },

  organizers: {
    chatBubble: {
      fullQuestion: "Who is organizing this workshop?",
      answer: null, // Will be rendered specially with clickable names
    },
    sidebar: {
      title: "Organizers",
      summary:
        "The workshop is organized by a multidisciplinary team from industry and academia, with expertise in dynamic and generative UI, HCI and design practice, and human–AI interaction.",
      sections: [
        {
          heading: "Meet the Organizers",
          content: [
            {
              type: "organizer",
              name: "Siân Lindley",
              affiliation: "Microsoft Research Cambridge",
              bio: "Co-leads the People-Centric AI Research Area, focusing on principles and insights for human–AI interaction as models gain more flexibility and control over content and interfaces. Her work emphasizes situated interactions and collaborative work.",
            },
            {
              type: "organizer",
              name: "Jack Williams",
              affiliation: "Microsoft Research Cambridge",
              bio: "Principal Researcher working at the intersection of programming languages, HCI, and AI. His research develops techniques that make computation more accessible and understandable, including AI-driven tools for UI and end-user programming.",
            },
            {
              type: "organizer",
              name: "Yining (Rima) Cao",
              affiliation: "University of California, San Diego",
              bio: "Ph.D. student in the Foundation Interface Lab. Her research explores how computational structures can be generated, composed, and synchronized to support complex information activities, and how generative, malleable interfaces can evolve with users' dynamic and personal needs.",
            },
            {
              type: "organizer",
              name: "Haijun Xia",
              affiliation: "University of California, San Diego",
              bio: "Assistant Professor and director of the Foundation Interface Lab. His research develops foundational elements of human–computer interfaces that treat information and interfaces as malleable materials, enabling convivial human–AI collaboration and personal, generative interfaces.",
            },
            {
              type: "organizer",
              name: "Elizabeth F. Churchill",
              affiliation:
                "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
              bio: "Professor and founding Department Chair of HCI at MBZUAI, with a long track record of leadership roles in industry (Google, Yahoo, eBay). Her research focuses on human-centered AI systems and the design of interactive technologies.",
            },
            {
              type: "organizer",
              name: "Abigail Sellen",
              affiliation: "Microsoft Research",
              bio: "Long-time HCI researcher and former Lab Director at Microsoft Research Cambridge. Her current work focuses on societal challenges posed by AI. She brings deep experience from the early days of HCI to today's generative AI shift.",
            },
            {
              type: "organizer",
              name: "Jeffrey Nichols",
              affiliation: "Apple",
              bio: "Research Scientist in the AI/ML group working on intelligent user interfaces. His early doctoral work on automatically generating user interfaces for appliances anticipated many contemporary questions around genUI.",
            },
            {
              type: "organizer",
              name: "David Karger",
              affiliation: "MIT CSAIL",
              bio: 'Professor whose research focuses on tools to help people manage information better, combining HCI, IR, machine learning, databases, and algorithms. He brings a long history of deploying and studying tools "in the wild" to understand real-world use.',
            },
          ],
        },
        {
          heading: "What perspectives do the organizers bring?",
          content: [
            {
              type: "text",
              text: "Together, the organizers bring perspectives across:",
            },
            {
              type: "list",
              items: [
                "Dynamic and generative UI (adaptive interfaces, malleable software, genUI tooling).",
                "HCI and design practice (methods, heuristics, guidelines, and critical perspectives).",
                "Technical infrastructures for AI-driven interaction (UI generation, model-centric workflows).",
                "Activity-centric computing and information management.",
                "Education and community-building, including prior CHI workshops and leadership roles in academia and industry.",
              ],
            },
            {
              type: "text",
              text: "This mix is intended to ensure the workshop speaks to both conceptual questions about genUI and practical implications for how we design, build, deploy, and teach interactive systems.",
            },
          ],
        },
        {
          heading: "Contact",
          content: [
            {
              type: "text",
              text: "For questions about the workshop or submissions, please email:\n[insert workshop email alias]",
            },
            {
              type: "text",
              text: "You can also reach individual organizers using their institutional addresses listed above.",
            },
          ],
        },
      ],
    },
  },
};
