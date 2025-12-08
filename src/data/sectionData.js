// Data for all sections
export const sectionData = {
  cfp: {
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
              text: "In this workshop we will explore how HCI practice could and should change as AI models become increasingly capable of generating UI. ",
            },
            {
              type: "text",
              text: "Our goals are to:",
            },
            {
              type: "list",
              items: [
                "Envision how genUI can underpin innovative human-centric experiences ",
                "Reflect on how HCI and design practice could and should evolve to meet the challenges this presents",
              ],
            },
          ],
        },
        {
          heading: "How can I participate in?",
          content: [
            {
              type: "h1",
              text: "Submit Your Proposal to Participate",
            },
            {
              type: "text",
              text: "We welcome submissions from scholars and practitioners working on dynamic or generative UI, as well as those with expertise in related areas. ",
            },
            {
              type: "h2",
              text: "Submission formats (choose one):",
            },
            {
              type: "list",
              items: [
                "A two-page position paper (ACM single column format)",
                "A two-page pictorial",
                "A two-minute video",
              ],
            },
            {
              type: "text",
              text: "Your submission should outline how you think genUI will enable new human-centric experiences, and how HCI and design practice will need to change to support this. Submissions must follow SIGCHI's Accessibility Guide for Authors.",
            },
            {
              type: "h2",
              text: "Submission deadline:",
            },
            {
              type: "text",
              text: "Thursday, February 12, 2026 (AOE)",
            },
            {
              type: "button",
              text: "Submission Form",
              url: "https://forms.office.com/r/F84grr6bV1",
              newTab: true,
            },
          ],
        },
        {
          heading: "How will submissions be reviewed?",
          content: [
            {
              type: "text",
              text: "Submissions will be lightly peer-reviewed by the organizing committee. We will evaluate by its relevance and novelty.",
            },
            {
              type: "text",
              text: "We expect around **35** participants, including organizers. We will accept one author per accepted submission to attend the workshop in person, following CHI 2026 guidelines.",
            },
          ],
        },
        {
          heading: "What happens to accepted work?",
          content: [
            {
              type: "h1",
              text: "Participation & Publication ",
            },
            {
              type: "text",
              text: "**Attend the Workshop:** One author per submission must register for and attend the workshop in person.",
            },
            {
              type: "text",
              text: "**Proceedings:** All accepted submissions will be will be published in CEUR-WS proceedings and featured on this workshop website",
            },
          ],
        },
      ],
    },
  },

  program: {
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
              text: "This workshop will be **in-person only**. It will consist of **two 90-minute sessions** with a break, designed to build shared understanding and create tangible artifacts for the HCI community.",
            },
          ],
        },
        {
          heading: "What's in Session 1?",
          content: [
            {
              type: "h1",
              text: "Session 1: Discussion & Ideation",
            },
            {
              type: "text",
              text: "Develop a shared understanding of how genUI may shape the future of interactions with technologies.",
            },
            {
              type: "timeline",
              items: [
                {
                  time: "10 min",
                  title: "Welcome & Framing",
                  description:
                    "Introduce goals and key dimensions of dynamic & generative UI (e.g., who the UI is for, how stable/adaptive it is, who drives changes, timeframe).",
                },
                {
                  time: "15 min",
                  title: "Human Spectrogram",
                  description:
                    "Participants physically position themselves along a line (strongly agree → strongly disagree) in response to provocations. Each statement is followed by a short open discussion.",
                  details: [
                    '"HCI practitioners need entirely new methods."',
                    '"In the future there will be no apps."',
                    '"The future of design will be to craft AI models, not interfaces."',
                  ],
                },
                {
                  time: "30 min",
                  title: "Pop-up Panel",
                  description:
                    'Pre-selected panelists from industry and academia open the conversation on emerging genUI capabilities, scenarios and implications for user experience, and implications for HCI research and design practice. In the final 10 minutes, other participants can "pop in" as panelists to broaden the discussion.',
                },
                {
                  time: "35 min",
                  title: "Crazy 8s Sketching",
                  description:
                    "Small groups rapidly sketch possible genUI futures (8 sketches in 8 minutes per group), then discuss and select key sketches to display during the break.",
                },
              ],
            },
          ],
        },
        {
          heading: "What's in Session 2?",
          content: [
            {
              type: "h1",
              text: "Session 2: Development of Artefacts & Support Dissemination",
            },
            {
              type: "text",
              text: `Build on the shared understanding and creativity developed in Session 1 to think more deeply about how HCI practice could and should evolve as AI models 
              and systems become increasingly capable of generating UI.`,
            },
            {
              type: "text",
              text: "Participants will work together in small groups to produce artefacts that build and externalize knowledge of what it means to evolve HCI practice. Artefacts will both frame discussion and be used to disseminate knowledge beyond the workshop. ",
            },
            {
              type: "h2",
              text: "Artifact Options:",
            },
            {
              type: "list",
              items: [
                "**Guide to using genUI in HCI practice** — How will research and practice change as genUI tools emerge?.",
                "**New software development workflows** — What roles will HCI practitioners play in model-centric ecosystems?",
                "**Designing genUI for end-users** — What theories, principles, and methods apply to ephemeral or adaptive interfaces?",
                "**Engineering stack for genUI** — How can technical approaches center user needs and values?",
                "**Educating the next generation** — What knowledge will future HCI researchers and practitioners need?",
              ],
            },
          ],
        },
      ],
    },
  },

  organizers: {
    sidebar: {
      title: "Organizers",
      summary:
        "The workshop is organized by a multidisciplinary team from industry and academia, with expertise in dynamic and generative UI, HCI and design practice, and human–AI interaction.",
      sections: [
        {
          heading: "Who are we?",
          content: [
            {
              type: "text",
              text: "We are a multidisciplinary team from industry and academia, with deep expertise including dynamic and generative UI, HCI and design practice, and the inclusion of AI capabilities in software. ",
            },
            {
              type: "organizer",
              name: "Siân Lindley",
              title: "Microsoft Research",
              image: "organizers/sian.png",
              website: "https://www.microsoft.com/en-us/research/people/sianl/",
              email: "sianl@microsoft.com",
              researchFocus:
                "Co-leads the People-Centric AI Research Area at MSR Cambridge, focusing on principles and insights for human–AI interaction as models gain more flexibility and control over content and interfaces. Her work emphasizes situated interactions and collaborative work.",
            },
            {
              type: "organizer",
              name: "Jack Williams",
              title: "Microsoft Research",
              image: "organizers/jack.png",
              website:
                "https://www.microsoft.com/en-us/research/people/johnwilliams/",
              email: "jack.williams@microsoft.com",
              researchFocus:
                "Principal Researcher at MSR Cambridge, working at the intersection of programming languages, HCI, and AI. His research develops techniques that make computation more accessible and understandable, including AI-driven tools for UI and end-user programming.",
            },
            {
              type: "organizer",
              name: "Yining 'Rima' Cao",
              title: "University of California, San Diego",
              image: "organizers/yining.png",
              website: "https://rrrima.me",
              email: "yic069@ucsd.edu",
              researchFocus:
                "Ph.D. student in the Foundation Interface Lab at UCSD. Her research explores how computational structures can be generated, composed, and synchronized to support complex information activities, and how generative, malleable interfaces can evolve with users' dynamic and personal needs.",
            },
            {
              type: "organizer",
              name: "Haijun Xia",
              title: "University of California, San Diego",
              image: "organizers/haijun.png",
              website: "https://hci.ucsd.edu/",
              email: "haijunxia@ucsd.edu",
              researchFocus:
                "Assistant Professor and director of the Foundation Interface Lab at UCSD. His research develops foundational elements of human–computer interfaces that treat information and interfaces as malleable materials, enabling convivial human–AI collaboration and personal, generative interfaces.",
            },
            {
              type: "organizer",
              name: "Elizabeth F. Churchill",
              title:
                "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
              image: "organizers/elizabeth.png",
              website: "https://elizabethchurchill.com/",
              email: "churchill@acm.org",
              researchFocus:
                "Professor and founding Department Chair of HCI at MBZUAI, with a long track record of leadership roles in industry (Google, Yahoo, eBay). Her research focuses on human-centered AI systems and the design of interactive technologies.",
            },
            {
              type: "organizer",
              name: "Abigail Sellen",
              title: "Microsoft Research",
              image: "organizers/abigail.png",
              website:
                "https://www.microsoft.com/en-us/research/people/asellen/",
              email: "asellen@microsoft.com",
              researchFocus:
                "Lab Director of MSR Cambridge, focusing on some of the most important challenges AI is creating for society. She has been involved in the field of HCI since its inception, and sees generative AI as one of the most disruptive changes to both the theory and practice of HCI.",
            },
            {
              type: "organizer",
              name: "Jeffrey Nichols",
              title: "Apple",
              image: "organizers/jeff.png",
              website: "http://www.jeffreynichols.com/",
              email: "jeff@jeffreynichols.com",
              researchFocus:
                "Research Scientist in the AI/ML group at Apple working on intelligent user interfaces. His early doctoral work on automatically generating user interfaces for appliances anticipated many contemporary questions around genUI.",
            },
            {
              type: "organizer",
              name: "David Karger",
              title: "MIT CSAIL",
              image: "organizers/david.png",
              website: "https://people.csail.mit.edu/karger/",
              email: "karger@mit.edu",
              researchFocus:
                'Professor at MIT CSAIL whose research focuses on tools to help people manage information better, combining HCI, IR, machine learning, databases, and algorithms. He brings a long history of deploying and studying tools "in the wild" to understand real-world use.',
            },
          ],
        },
      ],
    },
  },
};
