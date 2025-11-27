import React from "react";

function OrganizersContent({ highlightedOrganizer, onOrganizerHover }) {
  const organizers = [
    {
      id: "sian",
      name: "Siân Lindley",
      affiliation: "Microsoft Research Cambridge",
      description:
        "Co-leads the People-Centric AI Research Area at Microsoft Research Cambridge. Her research focuses on establishing principles and insights to guide human-AI interaction, particularly as models are given increased flexibility and control over the content and interfaces they generate.",
    },
    {
      id: "jack",
      name: "Jack Williams",
      affiliation: "Microsoft Research Cambridge",
      description:
        "Principal Researcher whose work spans programming languages, HCI, and AI, with a core focus on developing techniques that make computation more accessible to non-experts. His recent work includes generative AI as a new form of computation and AI code-generation.",
    },
    {
      id: "yining",
      name: "Yining Cao",
      affiliation: "UC San Diego",
      description:
        "Ph.D. student in the Foundation Interface Lab. Her research focuses on how computational structures can be generated, composed, and synchronized to support complex information activities and create responsive information that evolves with users' dynamic needs.",
    },
    {
      id: "haijun",
      name: "Haijun Xia",
      affiliation: "UC San Diego",
      description:
        "Assistant Professor who directs the Foundation Interface Lab. His research develops foundational elements of human-computer interfaces to seamlessly bridge human cognition and digital computation, treating information and interfaces as malleable materials for human-AI collaboration.",
    },
    {
      id: "elizabeth",
      name: "Elizabeth Churchill",
      affiliation: "MBZUAI",
      description:
        "Professor and founding Department Chair of HCI at the Mohamed bin Zayed University of Artificial Intelligence. An ACM Fellow whose research focuses on the design of human-centered AI systems, with previous senior roles at Google, Yahoo, and eBay.",
    },
    {
      id: "abigail",
      name: "Abigail Sellen",
      affiliation: "Microsoft Research Cambridge",
      description:
        "Former Lab Director of Microsoft Research Cambridge, now focused on research addressing the most important challenges AI is creating for society. Involved in HCI since its inception, she sees generative AI as one of the most disruptive changes to both theory and practice of HCI.",
    },
    {
      id: "jeffrey",
      name: "Jeffrey Nichols",
      affiliation: "Apple",
      description:
        "Research Scientist in the AI/ML group working on intelligent user interfaces. His recent work focuses on UI understanding and automatic UI navigation. His doctoral research on Automatically Generating High-Quality User Interfaces was among the earliest explorations of generative UIs.",
    },
    {
      id: "david",
      name: "David Karger",
      affiliation: "MIT CSAIL",
      description:
        "Professor whose primary interest is in developing tools that help individuals manage information better. He draws on information retrieval, machine learning, databases, and algorithms, but most often human computer interaction, to create and evaluate tools for better information management.",
    },
  ];

  return (
    <div className="sidebar-content">
      {/* <p className="organizers-intro">
        We are a multidisciplinary team from industry and academia with
        expertise in HCI, AI, and generative UI design.
      </p> */}
      <div className="organizers-grid">
        {organizers.map((organizer) => (
          <div
            key={organizer.id}
            className={`organizer-card ${
              highlightedOrganizer === organizer.id ? "highlighted" : ""
            }`}
            onMouseEnter={() => onOrganizerHover(organizer.id)}
            onMouseLeave={() => onOrganizerHover(null)}
          >
            <div className="organizer-photo-placeholder">
              <span>
                {organizer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="organizer-info">
              <h3 className="organizer-card-name">{organizer.name}</h3>
              <p className="organizer-affiliation">{organizer.affiliation}</p>
              <p className="organizer-description">{organizer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizersContent;
