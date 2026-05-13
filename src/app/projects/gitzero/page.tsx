import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GitZero | Ivan Sostaric",
  description:
    "A Python CLI case study for GitZero, a repository scanner that detects signals consistent with AI-generated or AI-assisted code.",
};

const skills = [
  "Python",
  "Typer",
  "Rich",
  "PyDriller",
  "scikit-learn",
  "Static Analysis",
  "pytest",
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
    <figure className="my-10 overflow-hidden rounded-md border border-white/10 bg-[#080808] shadow-2xl shadow-black/40">
      <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-[#171717] px-4" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className={`relative ${aspect} w-full bg-black`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain"
        />
      </div>
    </figure>
  );
}

export default function GitZeroCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased relative pb-32">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 mb-16 w-full">
        <nav className="flex justify-between items-center max-w-3xl mx-auto px-6 py-6">
          <Link href="/#projects" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-widest uppercase">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
          </Link>
          <a
            href="https://github.com/Ivansost/gitzero"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-xs tracking-widest uppercase"
          >
            GitHub Repo
          </a>
        </nav>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            GitZero
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-sm">
                {skill}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I built GitZero as a Python command-line tool that scans repositories for signals consistent with AI-generated or AI-assisted code. It combines git-history analysis, static code analysis, explainable scoring, and an experimental machine-learning pipeline so the output is more useful than a simple yes-or-no result.
          </p>

          <CaseImage
            src="/project/GitZero/mainreport.png"
            alt="GitZero Rich terminal report showing scan summary, signal map, and top findings"
            aspect="aspect-[5760/2784]"
            priority
          />
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Project Goal</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The goal was to create a practical repo-auditing tool for modern software projects where AI assistance is becoming more common. Evidence of AI-assisted work is rarely contained in one obvious file, so GitZero looks across the repository as a whole and reports patterns that may deserve closer review. It also makes the limitation clear: the score is a signal report, not proof of authorship.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I wanted the tool to work well in a normal developer workflow. The terminal report needed to be readable, the scoring needed to explain itself, and the results needed to be exportable for deeper analysis. That led to three main outputs: a Rich report for interactive review, JSON for automation, and batch exports for comparing many repositories or building labeled datasets.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Signal Design</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            GitZero analyzes more than 25 signals across multiple categories. On the git-history side, it looks for patterns such as large commit bursts, single-drop histories, file creation waves, formulaic commit messages, unusually linear histories, author uniformity, and tight commit time clustering. These signals are useful because some AI-assisted projects arrive as compact drops of finished work instead of a slower trail of exploratory commits.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            On the static-analysis side, GitZero looks at the source files directly. It checks naming entropy, docstring density, type annotation coverage, complexity uniformity, structural repetition, debug residue, generic TODOs, shallow tests, dependency usage, and README-to-code alignment. It also supports Jupyter notebooks by extracting code cells from `.ipynb` files before analysis.
          </p>

          <CaseImage
            src="/project/GitZero/signal-model.png"
            alt="GitZero signal model showing git signals, static signals, hard evidence, dampeners, and output scoring"
            aspect="aspect-[16/10]"
          />

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">False-Positive Handling</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            A major part of the project was making the score fair. Many normal repositories can look suspicious for harmless reasons: generated framework files, vendor libraries, strict formatting, imported histories, solo development, squashed commits, or educational examples. GitZero includes false-positive guards that lower the risk interpretation when it finds evidence of organic development or known benign patterns.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The report separates risk-raising signals from counter-evidence so the reviewer can see both sides of the assessment. That design choice matters because the tool is meant to support review, not make an accusation. Each top signal includes a title, category, score, details, and an explanation of why it was flagged.
          </p>

          <CaseImage
            src="/project/GitZero/top-signals-dampening.png"
            alt="GitZero terminal report showing top signals and dampening signals"
            aspect="aspect-[1056/461]"
          />

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            This view is the part of the report I focused on most when shaping the user experience. It shows why a repository was flagged, but it also shows what lowers the risk interpretation. In the example above, GitZero surfaces signals like many files appearing at once, structural repetition, high docstring coverage, and large commit bursts, while also showing dampening evidence such as debug artifacts, a long project history, multiple authors, organic rework, and merge commits.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Machine-Learning Pipeline</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            Beyond the heuristic scanner, I added a full ML training pipeline. GitZero can scan a labeled corpus in batch mode, export feature rows to JSONL or CSV, and train an experimental Random Forest model with grouped cross-validation. The baseline evaluation used 129 labeled repositories and reached 0.903 ROC-AUC in ablation testing.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The ML model is optional by design. The core CLI still works without it, while the `--ml-model` flag can load a trained joblib artifact and show an experimental probability beside the heuristic score. This keeps GitZero usable as a normal CLI while still leaving room for data-driven scoring experiments.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Implementation Details</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I built the CLI with Typer for the command interface and Rich for the terminal report. PyDriller and GitPython support repository loading and git-history extraction, while radon helps with source-code complexity metrics. The project is packaged with `pyproject.toml`, exposes the `gitzero` command, and is split into typed Python modules for scoring, models, report rendering, repository loading, static signals, git signals, evaluation, fixtures, and ML utilities.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The report output was an important part of the build. Instead of only printing a number, GitZero renders a scan summary, confidence score, dampening score, signal map, top findings, highest-signal files, skipped-file summary, and optional verbose per-file details. The same scan can also be exported as JSON for automation or downstream analysis.
          </p>

          <CaseImage
            src="/project/GitZero/highest-signal-files.png"
            alt="GitZero terminal report showing the highest-signal files table"
            aspect="aspect-[1045/585]"
          />

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The highest-signal files table makes the output more actionable. Instead of only giving a repo-level score, GitZero points to the files that contributed most to the result and explains the notes behind each score. That helps a reviewer move from a broad signal to a concrete file, such as a test file with unusually high docstring coverage or repeated code windows.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Testing and Quality</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            I added focused tests across the scoring logic, static-signal extraction, git-signal extraction, evaluation helpers, and ML utilities. The current local suite has 46 tests passing, and the repo is configured with ruff for linting. Testing mattered here because small scoring changes can shift the interpretation of a repository, so the core behavior needed regression coverage.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">What I Learned</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            GitZero helped me work through a full tool-building cycle: designing a scoring system, extracting features from messy repositories, building terminal UX, handling edge cases, writing tests, and creating an ML-ready export pipeline. The biggest lesson was that detection tools need context. A useful scanner should expose evidence, confidence, and counter-evidence instead of hiding everything behind one score.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            This project also strengthened my Python engineering skills. I had to keep the CLI clean, make the reports readable, structure the scoring model clearly, and support both interactive and automated workflows. The result is a practical developer tool that combines software engineering, static analysis, data preparation, and machine-learning experimentation in one project.
          </p>
        </article>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/#projects" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border border-white/10 rounded-sm px-6 py-3 hover:bg-white/5 text-center">
            Back to Projects
          </Link>
          <a
            href="https://github.com/Ivansost/gitzero"
            target="_blank"
            rel="noreferrer"
            className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border border-white/10 rounded-sm px-6 py-3 hover:bg-white/5 text-center"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </main>
  );
}
