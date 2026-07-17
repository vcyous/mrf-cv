const contact = {
  email: "rizkifani11@gmail.com",
  linkedin: "https://www.linkedin.com/in/rizki-fani/",
  location: "Cikarang, Jawa Barat",
};

const skills = [
  {
    group: "Backend",
    items: [
      "Java 17",
      "Spring Boot",
      "Spring WebFlux",
      "Spring Security",
      "Spring Cloud",
      "JPA / Hibernate",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "Prometheus / Micrometer",
    ],
  },
  {
    group: "Frontend & Mobile",
    items: [
      "Angular 15 – 18",
      "TypeScript",
      "RxJS",
      "Bootstrap 5",
      "ng-zorro-antd",
      "Chart.js",
      "Flutter (Dart)",
      "React (Vite)",
    ],
  },
  {
    group: "DevOps & Quality",
    items: [
      "Docker",
      "Helm",
      "Kubernetes",
      "JUnit 5",
      "Testcontainers",
      "SonarQube",
      "JaCoCo",
      "Allure",
    ],
  },
];

const dokuProjects = [
  {
    title: "Bill Collection Platform",
    description:
      "End-to-end bill collection system — from core domain logic, to REST APIs, to an operator dashboard for invoicing, payment tracking, and collection workflows at scale.",
    impact:
      "Streamlined collection operations, reduced manual reconciliation effort, and provided real-time visibility into collection status.",
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "MongoDB", "Kafka", "Angular 18"],
  },
  {
    title: "Biller Checkout System",
    description:
      "Customer-facing payment checkout — real-time payment processing, biller selection, amount validation, and secure transaction submission. The backbone of the company's checkout experience.",
    impact:
      "Directly supports revenue flow; improved checkout reliability and reduced transaction failures through WebFlux-based non-blocking I/O.",
    tech: ["Java 17", "Spring WebFlux", "PostgreSQL", "Redis", "Angular 18"],
  },
  {
    title: "Biller Management Portal (BoBill)",
    description:
      "Internal biller management platform — middleware orchestrating messages between biller partners, with a feature-rich Angular back-office with charting, data export, and role-based access.",
    impact:
      "Centralized biller partner management, enabling faster partner onboarding and real-time operational monitoring.",
    tech: ["Java 17", "Spring Cloud", "Kafka", "Angular 15", "ng-zorro-antd", "Chart.js"],
  },
  {
    title: "Biller Webview",
    description:
      "Embeddable webview components for biller interfaces — renders payment forms and status pages inside partner apps and mobile SDKs, with a core service handling payment state and event streaming.",
    impact:
      "Extended payment reach by enabling biller UIs to be embedded in third-party apps, increasing transaction volume.",
    tech: ["Java 17", "Spring Boot", "Kafka", "Angular 16", "Bootstrap 5"],
  },
  {
    title: "DOKU Billers Webview",
    description:
      "Secure webview application for DOKU biller integrations — supports SOAP-based legacy billers alongside modern REST APIs, with Spring Security authentication and Redis session management.",
    impact:
      "Bridged legacy SOAP biller systems into the modern platform while migrating toward REST-based architecture.",
    tech: ["Java 17", "Spring Security", "SOAP (spring-ws)", "Redis", "Kafka"],
  },
  {
    title: "Auto-Debit Platform",
    description:
      "Full auto-debit solution — recurring payment scheduling with JWT-secured APIs, an operations back-office with charting and export, and a customer-facing enrollment webview.",
    impact:
      "Enabled recurring revenue streams for billers and reduced payment churn through automated debiting.",
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "JWT", "Angular 18", "Chart.js"],
  },
  {
    title: "BPJS Installment System",
    description:
      "Installment payment system for BPJS, Indonesia's national health insurance — installment scheduling, Kafka event processing, and partner integration.",
    impact:
      "Opened a new payment channel for BPJS customers, increasing payment completion rates for a nationally critical service.",
    tech: ["Java 17", "Spring WebFlux", "PostgreSQL", "Kafka", "Angular 18"],
  },
  {
    title: "BPJS Direct Integration Microservices",
    description:
      "Direct integration layer with BPJS SIMPEL (government system) — real-time SOAP/REST microservices plus a simulator for end-to-end testing without hitting production endpoints.",
    impact:
      "Enabled reliable, real-time BPJS premium inquiries and payments; the simulator drastically reduced integration testing cycle time.",
    tech: ["Java 17", "Spring WebFlux", "SOAP", "PostgreSQL", "Redis"],
  },
  {
    title: "Message-as-a-Service",
    description:
      "Internal messaging and notification platform — event-driven email, SMS, and push delivery via Kafka, with a UI for template management, campaign monitoring, and analytics.",
    impact:
      "Centralized all outbound communications and gave marketing/ops teams self-service tools for notifications and campaigns.",
    tech: ["Java 17", "Spring Boot", "Kafka", "Redis", "Angular 15", "TinyMCE"],
  },
];

const freelanceProjects = [
  {
    title: "FC HRIS",
    client: "Forcastle",
    description:
      "Mobile HRIS application covering employee data management, attendance tracking, geolocation-based check-in/out, and HR workflows. Cross-platform Flutter app with BLoC state management and RESTful backend integration.",
    tech: ["Flutter", "BLoC", "Dio", "Geolocator"],
  },
  {
    title: "PJPD Mobile Apps",
    client: "Patra Jasa Property & Development",
    description:
      "Feature-rich Flutter application for booking management, user accounts, and data-driven dashboards with charts and calendar views. Built with Riverpod, reactive forms, and Go Router for deep-linked navigation.",
    tech: ["Flutter", "Riverpod", "Go Router", "fl_chart"],
  },
  {
    title: "Asri Web Service",
    client: "Web Application",
    description:
      "Modern, modular web application with data management, infinite scroll content feeds, and responsive UI components. Server state handled with TanStack Query and JWT authentication.",
    tech: ["React", "Vite", "Ant Design", "TanStack Query"],
  },
];

function SectionTitle({ children }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {children}
    </h2>
  );
}

function TechTags({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-[11px] text-zinc-600"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-white text-zinc-800">
      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {/* Hero */}
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Muhammad Rizki Fani
          </h1>
          <p className="mt-2 text-lg text-zinc-500">Full-Stack Engineer</p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            I design and deliver end-to-end payment systems at DOKU, Indonesia&apos;s
            leading payment technology company — Java/Spring Boot microservices on
            the backend, Angular on the frontend, deployed on Kubernetes. I own the
            full development lifecycle, from domain modeling and REST/reactive API
            design to containerized deployments.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950"
            >
              LinkedIn
            </a>
            <span className="text-zinc-400">{contact.location}</span>
          </div>
        </header>

        {/* Skills */}
        <section className="mt-20">
          <SectionTitle>Core Skills</SectionTitle>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <h3 className="text-sm font-medium text-zinc-950">{group}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-20">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-950">
                Full-Stack Engineer · DOKU
              </h3>
              <span className="text-sm text-zinc-400">Payment Technology</span>
            </div>
            <p className="mt-3 leading-relaxed text-zinc-600">
              Led end-to-end development of 9 payment platform modules covering 21
              private repositories — spanning reactive microservices, back-office
              dashboards, customer-facing checkout, and embedded webviews. All
              systems are containerized and deployed on Kubernetes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {dokuProjects.map(({ title, description, impact, tech }, i) => (
              <article
                key={title}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-zinc-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-medium text-zinc-950">{title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  <span className="font-medium text-zinc-700">Impact:</span>{" "}
                  {impact}
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <TechTags items={tech} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Freelance */}
        <section className="mt-20">
          <SectionTitle>Freelance Projects</SectionTitle>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Alongside professional employment, I independently deliver mobile and
            web projects for external clients — taking full ownership of
            architecture, development, and delivery.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {freelanceProjects.map(({ title, client, description, tech }) => (
              <article
                key={title}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <h4 className="font-medium text-zinc-950">{title}</h4>
                <span className="mt-0.5 text-xs text-zinc-400">{client}</span>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {description}
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <TechTags items={tech} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-zinc-100 pt-8 text-sm text-zinc-400">
          <p>
            © {new Date().getFullYear()} Muhammad Rizki Fani ·{" "}
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-zinc-950"
            >
              {contact.email}
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
