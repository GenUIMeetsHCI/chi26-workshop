// Data for all sections
export const sectionData = {
  cfp: {
    sidebar: {
      title: "Call for Participation",
      sections: [
        {
          heading: "What is this workshop about?",
          content: [
            {
              type: "text",
              text: "In this workshop we will explore how HCI practice could and should change as AI models become increasingly capable of generating UI.",
            },
            {
              type: "text",
              text: "Our goals are to:",
            },
            {
              type: "list",
              items: [
                "Envision how genUI can underpin innovative human-centric experiences",
                "Reflect on how HCI and design practice could and should evolve to meet the challenges this presents",
              ],
            },
          ],
        },
        {
          heading: "Submissions",
          content: [
            {
              type: "h1",
              text: "Submissions Are Now Closed",
            },
            {
              type: "text",
              text: "Thank you to everyone who submitted a proposal. We received a strong set of submissions from scholars and practitioners working on dynamic or generative UI, as well as those with expertise in related areas.",
            },
            {
              type: "text",
              text: "Submissions were lightly peer-reviewed by the organizing committee, evaluated by relevance and novelty.",
            },
            {
              type: "h2",
              text: "Accepted formats included:",
            },
            {
              type: "list",
              items: [
                "A two-page position paper (ACM single column format, page limit does not include references)",
                "A two-page pictorial",
                "A two-minute video",
              ],
            },
          ],
        },
        {
          heading: "Participation & Publication",
          content: [
            {
              type: "text",
              text: "**Attend the Workshop:** One author per submission must register for and attend the workshop in person, following CHI 2026 guidelines.",
            },
            {
              type: "text",
              text: "**Publication:** All accepted submissions are featured on this workshop website.",
            },
          ],
        },
      ],
    },
  },

  submissions: {
    sidebar: {
      title: "Accepted Proposals",
      sections: [
        {
          heading: "Accepted Submissions",
          content: [
            {
              type: "text",
              text: "We received an excellent set of position papers exploring how generative UI will reshape HCI practice. The accepted submissions are listed below (in alphabetical order).",
            },
            {
              type: "paperList",
              items: [
                {
                  title:
                    "A Taxonomy and Research Agenda for Generative User Interfaces",
                  authors:
                    "Katja Pott, Roman Rietsche, Matthias Söllner, Thiemo Wambsganss",
                  pdf: "proposals/taxonomy_research_agenda_genui_chi26_workshop.pdf",
                },
                {
                  title:
                    "Accessible by Construction: Human-Centered Guardrails for Generative User Interfaces",
                  authors: "Niharika Pramod Pujari",
                  pdf: "proposals/accessible_by_construction_guardrails_chi26_workshop.pdf",
                },
                {
                  title: "Back to the Future: Opening The Hood Of Everything",
                  authors: "Hendrik Heuer",
                  pdf: "proposals/back_to_the_future_opening_the_hood_chi26_workshop.pdf",
                },
                {
                  title:
                    "Beyond Interface Generation: GenUI as Interpretive Runtime",
                  authors: "Mattias Rost",
                  pdf: "proposals/beyond_interface_generation_interpretive_runtime_chi26_workshop.pdf",
                },
                {
                  title:
                    "Causeway: Generative UI for Just-in-Time Experiential Learning",
                  authors: "Audrey Ostrom",
                  video: "https://youtu.be/7sjMvdRsruw",
                },
                {
                  title:
                    "Deepening, Redirecting, Expanding: A Design Space for Generative Interfaces with Qualitative Inquiry",
                  authors: "Jungwoo Rhee",
                  pdf: "proposals/design_space_genui_qualitative_inquiry_chi26_workshop.pdf",
                },
                {
                  title:
                    "Evaluating Personalised Generative User Interfaces on an AI Mediated Web",
                  authors: "Joseph O'Hagan",
                  pdf: "proposals/evaluating_personalised_genui_ai_mediated_web_chi26_workshop.pdf",
                },
                {
                  title:
                    "From Automation to Scaffolding: Rethinking Generative UI for Design Upskilling",
                  authors:
                    "Jiayu Yuki Yin, Veronica Vasquez Hernandez, Audrey Moon, Jing Yao Yang, David T. Lee",
                  pdf: "proposals/automation_to_scaffolding_genui_upskilling_chi26_workshop.pdf",
                },
                {
                  title: "Generative Transcoding of Communicative UI Cues",
                  authors: "Chen Liang, Anhong Guo",
                  pdf: "proposals/generative_transcoding_communicative_cues_chi26_workshop.pdf",
                },
                {
                  title: "Generative UI Alone Won't Make Software Malleable",
                  authors: "Bryan Min",
                  pdf: "proposals/genui_wont_make_software_malleable_chi26_workshop.pdf",
                },
                {
                  title:
                    "Generative UI and the Reconfiguration of Design Practice",
                  authors: "Pavel Okopnyi, Frode Guribye",
                  pdf: "proposals/genui_reconfiguration_design_practice_chi26_workshop.pdf",
                },
                {
                  title:
                    "Generative UI as an Accessibility Bridge: Lessons from C2C E-Commerce",
                  authors: "Bektur Ryskeldiev",
                  pdf: "proposals/genui_accessibility_bridge_c2c_chi26_workshop.pdf",
                },
                {
                  title:
                    "Generative UI Reshapes Design Practice, Not Design Relevance",
                  authors: "Rachel Eardley, Emma L. Tonkin",
                  pdf: "proposals/genui_reshapes_design_practice_chi26_workshop.pdf",
                },
                {
                  title:
                    "Generative UI–Enabled Experience Design: Learnings from Early Practitioners",
                  authors: "Bradley McGraw, Guillermo Barquero, Samuel Martin",
                  pdf: "proposals/genui_experience_design_practitioners_chi26_workshop.pdf",
                },
                {
                  title:
                    "Hidden Technical Debt in Generative (GenUI) and Malleable User Interfaces",
                  authors: "Besjon Cifliku",
                  pdf: "proposals/hidden_technical_debt_genui_chi26_workshop.pdf",
                },
                {
                  title:
                    "MAGUS: an LLM Multi-Agent Tool for Generative Accessibility of GUIs from User Stories",
                  authors: "",
                  pdf: "proposals/magus_multiagent_accessible_gui_chi26_workshop.pdf",
                },
                {
                  title: "Maintenance of Personal Generative User Interfaces",
                  authors: "Zhicheng Huang, Haijun Xia",
                  pdf: "proposals/maintenance_personal_genui_chi26_workshop.pdf",
                },
                {
                  title: "Negotiated Agency in Generative User Interfaces",
                  authors: "Eryue Xu, Mengke Wu",
                  pdf: "proposals/negotiated_agency_genui_chi26_workshop.pdf",
                },
                {
                  title:
                    "Not Another EHR: Reimagining Physician Information Needs with Generative AI Technology",
                  authors:
                    "Ruican Zhong, Jicahen Li, Gary Hsieh, David W. McDonald, Selin S. Everett, Alyssa Unell, Jonathan Carlson, Katie Claveau, Noel Codella, Khalil Malik, Scott Mackie, Eduardo Olvera, Scott Saponas, Eric Horvitz, David Rhew, Jim Weinstein, Jacob Gross, Amanda K. Hall",
                  pdf: "proposals/not_another_ehr_physician_genai_chi26_workshop.pdf",
                },
                {
                  title:
                    "Situated and Dynamic Human-AI Communication through Generative Interaction-Augmented Instruction at Runtime",
                  authors: "Haotian Li, Leixian Shen, Yifang Wang",
                  pdf: "proposals/situated_dynamic_geniai_runtime_chi26_workshop.pdf",
                },
                {
                  title:
                    "User Agency in Runtime Malleable Software Under Change Aversion",
                  authors:
                    "Xinqi Zhang, Bryan Min, Shizhao (Lawrence) Liu, Kai Lukoff",
                  pdf: "proposals/user_agency_runtime_malleable_chi26_workshop.pdf",
                },
                {
                  title:
                    "User-Constructed Information Architecture as a Persistence Layer for GenUI",
                  authors:
                    "Eunhye Kim, DaEun Choi, Hyunjung Yi, Bryan Min, Yue Jiang, Juho Kim",
                  pdf: "proposals/user_constructed_ia_persistence_genui_chi26_workshop.pdf",
                },
              ],
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
        "The workshop will run over two 90-minute sessions and is highly interactive. We will combine a human spectrogram, a pop-up panel, and fast sketching in Session 1, with small-group artefact creation in Session 2. The goal is to move from shared understanding to concrete guides, frameworks, and visions for genUI and HCI practice.",
      sections: [
        {
          heading: "What is the overall format?",
          content: [
            {
              type: "text",
              text: "This workshop will be **in-person only** on **Wednesday, April 15, 2026**. It will consist of **two 90-minute sessions** with a break, designed to build shared understanding and create tangible artifacts for the HCI community.",
            },
            {
              type: "text",
              text: "**Session 1:** 14:15 - 15:45 CEST",
            },
            {
              type: "text",
              text: "**Session 2:** 16:30 - 18:00 CEST",
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
                "**Designing genUI for end-users** — What theories, principles, and methods apply to generative interfaces?",
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
              text: "We are from industry and academia, with deep expertise including dynamic and generative UI, HCI and design practice, and the inclusion of AI capabilities in software. ",
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
        {
          heading: "Contact us",
          content: [
            {
              type: "h1",
              text: "Contact Us",
            },
            {
              type: "contactEmail",
              text: "If you have any questions, please contact us at",
              email: "GenUImeetsHCI@microsoft.com",
            },
          ],
        },
      ],
    },
  },
};
