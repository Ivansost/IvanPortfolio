import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Credit Risk Analysis",
  description:
    "A machine-learning case study using SQL, Pandas, and Random Forest modeling to analyze credit-card default risk.",
};

export default function CreditRiskCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased relative pb-32">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 mb-16 w-full">
        <nav className="flex justify-between items-center max-w-3xl mx-auto px-6 py-6">
          <Link href="/#projects" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-widest uppercase">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
          </Link>
          <span className="text-neutral-600 text-xs tracking-widest uppercase">Case Study</span>
        </nav>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Credit Risk Analysis</h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {["Data Analysis", "SQL", "Random Forest", "Pandas", "Machine Learning"].map(skill => (
              <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-sm">
                {skill}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I built a credit risk scoring project using the UCI Credit Card dataset, which contains 30,000 customer records with demographic, financial, and repayment history data. The goal was to explore real-world credit behavior, uncover patterns in default risk, and build a model that can predict which customers are more likely to default on their next payment.
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 mb-8 shadow-2xl bg-white/5">
            <Image
              src="/project/creditRisk/MOSTLIKELYDEFAULT.png"
              alt="Most Likely Default Analysis"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-neutral max-w-none">
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The project began with extensive data cleaning and exploration using Pandas and SQL. Through visualization and analysis, I examined how credit limits, spending behavior, and default rates vary across education levels, marital status, age groups, and sex.
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 bg-white/5 my-10">
            <Image
              src="/project/creditRisk/SAMPLEDATA.png"
              alt="Sample Data Format"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
          
          <div className="relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden rounded-md border border-white/10 bg-white/5 mb-10">
            <Image
              src="/project/creditRisk/AVERAGELMIT.png"
              alt="Average Limits Analysis"
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-contain"
            />
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6 mt-10">
            After understanding the data, I trained a Random Forest model to classify customers as likely to default or not. The model learned from features such as credit limit, utilization ratio, age, education, marital status, and repayment history. Random Forest was chosen for its ability to capture complex patterns by combining many decision trees into a single, more stable prediction.
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 my-10 bg-white/5">
            <Image
              src="/project/creditRisk/IMPORTANCE.png"
              alt="Feature Importance"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6 mt-10">
            The model achieved an AUC score of 0.86 on the ROC curve, indicating strong performance in distinguishing higher risk customers from lower risk ones. The results highlighted clear behavioral patterns, including higher default rates among younger customers, increased risk in later age groups, and noticeable differences across education levels and gender.
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 my-10 bg-white/5">
            <Image
              src="/project/creditRisk/ROC.png"
              alt="ROC Curve"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Real-World Impact</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            This project stood out to me because of its real-world impact. Credit risk models like this can be used by financial institutions to better manage lending decisions, design adaptive credit limits, and help prevent individuals from falling into unmanageable debt. Through this work, I strengthened my skills in SQL, Pandas, data analysis, and machine learning while gaining hands-on experience turning raw data into real-world findings.
          </p>
        </article>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex justify-center">
          <Link href="/#projects" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border border-white/10 rounded-sm px-6 py-3 hover:bg-white/5">
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
