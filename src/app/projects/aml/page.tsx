import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Detecting Money Laundering Using Network Analytics | Ivan Sostaric",
  description:
    "A portfolio case study using SQL, Python, NetworkX, and Power BI to analyze transaction networks and identify suspicious AML behavior patterns.",
};

const skills = [
  "SQL",
  "Python",
  "NetworkX",
  "Power BI",
  "Graph Analytics",
  "AML Risk Scoring",
];

function CaseImage({
  src,
  alt,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-md border border-white/10 bg-white/5 my-10`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-contain"
      />
    </div>
  );
}

export default function AmlCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased relative pb-32">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 mb-16 w-full">
        <nav className="flex justify-between items-center max-w-3xl mx-auto px-6 py-6">
          <Link href="/#projects" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-widest uppercase">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
          </Link>
          <span className="text-neutral-600 text-xs tracking-widest uppercase">Case Study</span>
        </nav>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Detecting Money Laundering Using Network Analytics
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-sm">
                {skill}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I built this project to explore how anti-money laundering patterns can be detected by treating financial transactions as a network instead of only as isolated rows in a table. I parsed and explored a large-scale transaction dataset with SQL, then modeled the relationships between accounts in Python using NetworkX so I could study connectivity, cluster behavior, and account-level risk concentration.
          </p>

          <CaseImage
            src="/project/AML/Graph.png"
            alt="Transaction network visualization showing AML behavior clusters"
            aspect="aspect-[4/3]"
            priority
          />
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Data Preparation and Network Modeling</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The first step was cleaning and shaping transaction records into an account-to-account structure. SQL was useful for filtering the raw dataset, checking transaction volume, grouping transfers by account, and preparing the fields needed for graph construction. From there, I represented accounts as nodes and transactions as edges, which made it possible to move beyond simple totals and analyze how money flowed through connected groups of entities.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            In NetworkX, I focused on graph features that are useful in financial crime analysis: degree-based connectivity, central nodes, dense clusters, repeated account interactions, and outward fund movement. Accounts with unusually high connectivity can act as hubs, while clusters with frequent internal transfers may indicate coordinated behavior. Long outward connections from a dense cluster can also suggest layering or fund dispersion, where money moves away from a central group into many downstream accounts.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Cluster Visualization</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The main network visualization revealed several distinct account communities. Each color group represents a cluster of accounts with stronger transaction relationships to each other than to the broader network. The largest clusters immediately stood out because they contained many repeated, interconnected transfers, which can be a useful starting point for AML triage.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The visualization also shows why graph analytics is valuable for this type of problem. A suspicious account might not look extreme when viewed as a single row, but its role becomes clearer when you can see how many accounts it touches, whether it sits at the center of a cluster, and whether funds are being dispersed across multiple branches of the network.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Risk Score vs. Connectivity</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            After building the graph, I created a composite risk score that combined transaction behavior with network structure. The scatter plot compares network connectivity against risk score, making it easier to separate normal account behavior from accounts that deserve deeper review. Most accounts sit in a lower-risk area, while a few outliers show both high connectivity and high risk, which is the kind of pattern analysts can prioritize.
          </p>

          <CaseImage
            src="/project/AML/Scatter.png"
            alt="Scatter plot comparing AML risk score against network connectivity"
            aspect="aspect-[4/3]"
          />

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The dashed threshold line helps distinguish accounts that cross a meaningful risk boundary. The largest bubbles represent accounts or clusters with heavier activity, so the chart communicates three dimensions at once: connectivity, risk, and relative transaction intensity. This makes it easier to identify entities that are not just active, but structurally important inside the network.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Power BI Investigation View</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            To make the analysis easier to interpret, I used Power BI to create a ranked view of the highest-risk accounts. The bar chart surfaces the top accounts by combined risk score and network connectivity, helping turn the raw graph output into an investigation queue. This kind of view is useful because analysts need to know which entities to review first, not just that suspicious behavior exists somewhere in the dataset.
          </p>

          <CaseImage
            src="/project/AML/Bar.png"
            alt="Bar chart ranking top accounts by AML risk score and network connectivity"
            aspect="aspect-[16/10]"
          />

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The top accounts show a large gap from the rest of the population, which suggests that risk is concentrated in a small number of highly connected entities. That type of concentration is important in AML work because it can point to controlling accounts, pass-through accounts, or accounts coordinating transaction activity across a wider group.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">What I Learned</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            This project helped me understand how SQL, Python, graph theory, and business intelligence tools can work together in a financial crime workflow. SQL handled the data exploration and aggregation, NetworkX exposed the relationship structure, and Power BI made the results easier to communicate. More importantly, it showed how complex financial behavior can be uncovered by combining transaction-level analysis with network-level context.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            Overall, this project strengthened my understanding of how AML analytics can be applied in real-world fraud and risk detection. Instead of only looking for single suspicious transactions, the network approach highlights patterns of coordination, centralization, transaction velocity, and fund dispersion that may not be visible through traditional tabular analysis alone.
          </p>
        </article>

        <div className="mt-24 pt-8 border-t border-white/10 flex justify-center">
          <Link href="/#projects" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border border-white/10 rounded-sm px-6 py-3 hover:bg-white/5">
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
