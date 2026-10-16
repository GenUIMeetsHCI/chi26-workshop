// Workshop report. Each section has an optional heading and a list of paragraphs.
export const report = {
  title: "Designing for Change: What Generative UI Means for HCI",
  subtitle:
    "Reflections from the CHI 2026 workshop “What does Generative UI mean for HCI Practice?”",
  sections: [
    {
      paragraphs: [
        "For much of its history, HCI has worked with a relatively stable interface, which has been designed, implemented, shipped, and then encountered by users. Even when interfaces adapt or are configurable, designers and developers ultimately decided what users would see. Generative UI unsettles that assumption. When interfaces can be created or reshaped at run time by AI systems, the interface is no longer an artefact. It becomes a space of possibilities.",
        "In this article, we posit that generative UI changes what HCI is responsible for. The challenge no longer is to design interactions, but to foreground the conditions under which interfaces change. This view builds on discussion at the CHI 2026 workshop *What does Generative UI mean for HCI Practice?*, which brought together researchers, designers, and practitioners. The discussion ranged from near-term possibilities for adaptive and AI-generated interfaces, to longer-term questions about collaboration, evaluation, and responsibility. A dominant theme was the emphasis on HCI needing to take on the task of actively shaping systems that change, whilst having those systems remain intelligible, trustworthy, and human-centred.",
        "In this article, we reflect on and develop several of the topics that emerged in those conversations. Rather than treating generative UI as a single technique or design trend, we focus on how it reshapes the object of HCI practice itself: from the design of finished artefacts to the design of systems that change. We examine what this shift implies for personalisation and common ground, for evaluation and governance, and for how HCI engages with infrastructure, organisations, and education. Our aim is not to offer definitive answers, but to articulate the questions and design tensions that will matter most as generative interfaces move from novelty to everyday practice.",
      ],
    },
    {
      heading: "From finished artefacts to bounded adaptiveness",
      paragraphs: [
        "While generative UI could enable interfaces that adapt to each person, moment, or preference, in practice, people rely on stable landmarks to orient themselves, remember how things work, and coordinate with others. This suggests instead a notion of bounded adaptiveness. Some aspects of an interface can change usefully – layout density, recommended actions, emphasis – while others benefit from staying put. Navigation, core workflows, and shared conventions often need stability. The design task must therefore shift from specifying every detail to negotiating and encoding what is allowed to vary, what must remain stable, and how those boundaries are made intelligible to users and teams.",
        "This requires designers to craft rules, ranges, and constraints. A generative interface that adapts responsibly does not simply optimise for relevance or efficiency. It preserves orientation and trust by making change legible and reversible. Responsiveness and delay also need to be considered here. Generation time, pauses, and moments of uncertainty shape users’ sense of agency and confidence, and should be treated as interaction design concerns rather than invisible technical artefacts.",
      ],
    },
    {
      heading: "Personalisation without losing common ground",
      paragraphs: [
        "Generative UI opens the door to rich personalisation: interfaces that fit individual goals, expertise, or context. But personalisation has a social cost. When everyone sees a different interface, collaboration becomes harder. Helping a colleague, teaching a newcomer, or documenting a workflow all rely on shared reference points. The question for HCI is therefore not whether to personalise, but how to do so without fragmenting shared understanding.",
        "One response is to design for multiple views. A system might offer personalised modes alongside canonical or shared views that make collaboration and support possible. Another is to stabilise certain elements – labels, structures, workflows – while allowing variation elsewhere. These are not technical afterthoughts; they are interaction design decisions that shape how people work together.",
        "The challenge is not to maximise fluidity, but to preserve common ground alongside individual fit – so that adaptation supports use without undermining collective legibility.",
      ],
    },
    {
      heading: "Designing the system behind the interface",
      paragraphs: [
        "If interfaces are generated rather than fixed, many interaction qualities depend on decisions made well beyond the visible surface. What data does the system use to adapt? How are tasks represented? Which components are reusable, and which are off-limits? How are accessibility or safety requirements enforced when layouts are composed dynamically?",
        "These questions point to a broader reframing of HCI practice. Design knowledge increasingly lives in systems: design systems, component libraries, intermediate representations, policy layers, and evaluation pipelines. The interface a user sees is the result of these structures interacting with models and context.",
        "This pulls HCI work both “up” and “down” the stack. Upwards, toward organisational questions about governance, accountability, and values. Downwards, toward technical decisions about abstractions, constraints, and infrastructure. Engaging with these layers means recognising that those concerns are now realised through system design as much as through visual or interaction design.",
        "Importantly, generative systems also surface conflicts between design principles – such as accessibility versus density, or creativity versus consistency – that were previously resolved implicitly through human judgement. Designing how such conflicts are detected, prioritised, and resolved becomes a first-class HCI concern.",
      ],
    },
    {
      heading: "Rethinking evaluation",
      paragraphs: [
        "Evaluation has always been central to HCI, but generative UI complicates familiar methods. If an interface changes across users and over time, evaluating a single configuration tells us little. What matters instead is the space of interfaces a system can produce, and the trajectories users experience as those interfaces evolve.",
        "This suggests layered approaches to evaluation. Qualitative studies remain essential for understanding lived experience. But they may need to be complemented by simulation, synthetic testing, telemetry, and rule-based checks that explore variability, edge cases, and long-term effects. Evaluation shifts from asking “Is this interface usable?” to “Does this system generate usable, fair, and comprehensible interfaces across contexts?”",
        "This is not an argument for replacing human judgement with metrics. On the contrary, as systems become more autonomous, the need for human interpretation, value judgements, and critical reflection increases. Evaluation becomes as much about governance as about measurement.",
        "Beyond isolated failures, generative interfaces may also drift gradually over time as models, data, and constraints evolve. Detecting and managing this cumulative change becomes as important as identifying immediate usability problems.",
      ],
    },
    {
      heading: "New relationships with infrastructure and organisations",
      paragraphs: [
        "Generative UI also reshapes how HCI relates to software development and organisational structure. Decisions about modularity, APIs, data schemas, and platforms increasingly determine what kinds of interfaces can exist at all. If HCI only enters the process after those decisions are made, its influence is limited.",
        "This means that HCI needs to engage earlier, developing enough architectural literacy to participate meaningfully in shaping the infrastructures that enable – or constrain – adaptive interfaces. It also means paying attention to organisational arrangements: who owns design constraints, who reviews generated behaviour, and how responsibility is distributed when interfaces are produced by systems rather than individuals.",
      ],
    },
    {
      heading: "What remains the same",
      paragraphs: [
        "Amid all this change, it is worth noting what does not disappear: human perception, cognition, motor capabilities, and social practices. People still need to understand what a system is doing, why it changed, and how to recover when it behaves unexpectedly. Accessibility, ethics, and trust do not become optional because interfaces are generated. HCI’s enduring concerns – agency, comprehension, collaboration, fairness – become constraints that must be encoded into systems.",
      ],
    },
    {
      heading: "Designing for change as a first-class concern",
      paragraphs: [
        "Generative UI invites HCI to shift its focus. The primary design object is no longer only the interface as a static artefact, but the system of allowable change that produces interfaces over time. That system includes models, constraints, evaluation practices, organisational processes, and values.",
        "This reframing opens new questions for research and practice. How do people understand and trust systems that change? How much variation is helpful before it becomes disorienting? How should design principles be represented so that machines can act on them? And how can HCI help organisations govern generative systems responsibly?",
        "These are not questions about replacing designers with AI, but about where judgement, accountability, and care should reside in systems that increasingly act on HCI’s behalf. They are questions about how to design with generative systems in ways that remain human-centred. If HCI takes up that challenge, generative UI may turn out not to be a threat to the field, but a catalyst for its next phase.",
      ],
    },
  ],
};
