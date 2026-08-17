# One address, two doors: AINOW v0.94 is out

For two years the AINOW platform answered a single question: how does a teacher who has never used AI start using it well? The answer was a guide, a prompt bank, a glossary and a set of classroom tools — free, offline, in Macedonian, English and Albanian.

That question has not gone away. But another one kept arriving in our inbox, from school directors, from municipal offices, from the small companies that employ the students our teachers are preparing: *what about the rest of us?*

Version 0.94 answers both. Opening [edu.ainow.mk](https://edu.ainow.mk) now presents a choice between two products that share one design, one type system, and one promise about your data.

## Education stays exactly what it was

The education app has moved to `/edu/`. Nothing else about it changed, and that was the point of the whole release.

It holds a 19-chapter guide from first principles through prompt engineering, retrieval, performance and safety. It holds 1,106 prompts written for the work teachers actually do — a flipped-classroom plan, a difficult parent conference, an individual education plan, a departmental self-evaluation — organised by school level, administrative role and higher-education function. A 60-term glossary. A directory of 57 classroom tools with honest pricing badges.

It is free. It has no accounts, no sign-up, no analytics, and it will stay that way. We say this plainly because in this category it is unusual, and because the people using it work with children.

This release deepened one part of it. **Higher Education** now stands beside Teachers and Administration as a full third category: 60 prompts per language across six evenly weighted areas — lecturers, researchers, doctoral supervision, student services, quality assurance and leadership. Universities were the group asking us most persistently, and they were the group we had served least.

## Business is the new door

`/biz/` is the AINOW Prompt Library, built for professional work rather than the classroom.

It carries 3,270 prompts across 33 areas — coding, law, medicine, finance, agriculture, journalism, public health, logistics and more. Alongside them sit 2,190 ready-made agent definitions, eight guided situations for moments like a difficult negotiation or an incident response, step-by-step playbooks, and a builder that composes a custom agent from plain answers to plain questions, no technical knowledge required.

It is also free to use. Where money changes hands, it is for services delivered by our technology partner CTRLab — consultancy, training, adoption programmes — and those are named openly on the site rather than hidden behind the free tool.

## Both run with no internet and no installation

This is the part we are most stubborn about.

Neither app has a build step. Neither needs a server. Copy the folder onto a USB stick, double-click `index.html`, and the whole thing works — offline, on a school laptop from 2014, with no administrator password and no software to install.

Getting there for the business app meant unwinding it. It had been built as a React application with a modern bundler, which is a reasonable way to build software and a terrible way to reach a classroom in a village with intermittent connectivity. We converted its modules to plain scripts and vendored every dependency locally. React is still under the hood; the difference is that nothing phones home to fetch it.

The same applies to type. The platform now self-hosts its typeface rather than requesting it from a font service, so no page load reports anything about a reader to a third party.

## What privacy-first actually means here

It is an easy phrase to print and a harder one to hold.

For us it means there is no server to send anything to. No account system exists. Your favourites, your scratchpad and your language preference live in your own browser. When you copy a prompt, it goes to your clipboard and nowhere else. There is no telemetry, no error reporting, no embedded pixel.

We cannot leak what we never collect.

## An honest note about this release

A large share of the work in 0.94 was not new features. It was correcting things that had drifted.

The landing page advertised 3,370 prompts across 34 areas when the real figures were 3,270 across 33. Help text in all three languages still described tools that had been removed. An entire subsystem's translations — nearly 1,800 keys — sat in the Macedonian and Albanian files months after the feature itself was deleted. Forty form placeholders had never been translated at all and were quietly showing English to Macedonian and Albanian users. The education home screen counted 20 guide chapters where the landing page counted 19; the landing page was right.

None of that would have appeared in a changelog under a heading anyone finds exciting. All of it was a promise we were accidentally breaking. Macedonian and Albanian now resolve exactly the same 901 interface strings as English, with nothing missing and nothing orphaned, and every number the site prints is a number we can defend.

An open-source project earns trust in the boring parts. We would rather publish the correction than let the figure flatter us.

## Where to start

- **Teachers, school staff, university faculty** — [edu.ainow.mk](https://edu.ainow.mk), choose Education. Start with the guide if AI is new to you, or go straight to Prompts if it is not.
- **Professionals and organisations** — choose Business. The Situations tool is the fastest way in: describe the moment you are facing and it assembles the prompt.
- **Schools with poor connectivity** — download the release archive from [GitHub](https://github.com/AINOW-Society/edu/releases), put it on a USB stick, and pass it around. That is a supported way to use this, not a workaround.
- **Developers** — the whole platform is GPLv3 and deliberately framework-light so that anyone with basic web skills can contribute. Issues and pull requests are welcome.

## Thank you

AINOW Society is a small team: Suad Seferi, Sead Dzigal, Bojan Stojkovski, Biljana Dimovska, Aleksandra Todorovikj, and our regional partner Maja Mirkovic. The platform exists because teachers told us what they needed and then told us, patiently, when we got it wrong.

Keep doing that.

> "The real magic of AI is making it work for people."
