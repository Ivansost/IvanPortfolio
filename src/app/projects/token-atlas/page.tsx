import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Token Atlas",
  description:
    "A full-stack case study for Token Atlas, an interactive 3D visualization of real next-token probabilities, attention, and generation from Qwen2.5-0.5B-Instruct.",
  alternates: {
    canonical: "/projects/token-atlas",
  },
  openGraph: {
    title: "Token Atlas | Ivan Sostaric",
    description:
      "Watch a real language model choose its next token inside a 3D map of its 151,665-token vocabulary.",
    type: "article",
    images: [
      {
        url: "/project/TokenAtlas/token-atlas-overview.jpg",
        width: 1920,
        height: 902,
        alt: "Token Atlas interface showing Qwen's vocabulary field and the selected token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Atlas | Ivan Sostaric",
    description:
      "An interactive 3D map of the candidates, probabilities, attention, and final token behind each step of a real language model's answer.",
    images: ["/project/TokenAtlas/token-atlas-overview.jpg"],
  },
};

const skills = [
  "Python",
  "PyTorch",
  "Qwen",
  "FastAPI",
  "WebSockets",
  "React",
  "Three.js",
  "React Three Fiber",
  "UMAP",
  "Docker",
  "Modal",
  "Vercel",
];

const bodyCopy = "text-neutral-300 leading-relaxed font-sans mb-6";
const sectionHeading = "text-2xl font-semibold mt-16 mb-4 text-white";

function CaseImage({
  src,
  alt,
  aspect,
  caption,
  preload = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  aspect: string;
  caption: string;
  preload?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-md border border-white/10 bg-[#080a0e] shadow-2xl shadow-black/40">
      <div className={`relative ${aspect} w-full`}>
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes="(max-width: 768px) 100vw, 768px"
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-neutral-500">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProjectLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`border px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 ${
        primary
          ? "border-white bg-white text-black hover:bg-neutral-200"
          : "border-white/20 text-neutral-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </a>
  );
}

export default function TokenAtlasCaseStudy() {
  return (
    <main className="relative min-h-screen bg-black pb-32 font-sans text-white antialiased selection:bg-white/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="sticky top-0 z-50 mb-16 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-6">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Projects</span>
          </Link>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest">
            <a
              href="/projects/token-atlas/demo"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 transition-colors hover:text-white"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ivansost/Token-Atlas"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <header className="mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Token Atlas
          </h1>

          <div className="mb-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mb-6 font-sans text-lg leading-8 text-neutral-300">
            Token Atlas is an interactive 3D map that shows the candidates,
            probabilities, attention, and final token behind each step of a real
            language model&rsquo;s answer.
          </p>

          <p className={bodyCopy}>
            I built it because most AI interfaces hide everything between a
            prompt and the finished response. Token Atlas runs a 494M-parameter
            Qwen model, places all 151,665 decodable vocabulary tokens in a fixed
            3D field, and streams every generation step into an interface that can
            be paused, inspected, and replayed.
          </p>

          <div className="mb-3 flex flex-col gap-3 sm:flex-row">
            <ProjectLink href="/projects/token-atlas/demo" primary>
              Open Live Demo
            </ProjectLink>
            <ProjectLink href="https://github.com/Ivansost/Token-Atlas">
              View GitHub Repo
            </ProjectLink>
          </div>
          <p className="mb-8 text-xs leading-5 text-neutral-500">
            The interactive demo is designed for a laptop or desktop with a mouse
            or trackpad, at least 900 &times; 560.
          </p>

          <CaseImage
            src="/project/TokenAtlas/token-atlas-overview.jpg"
            alt="Token Atlas interface with the Run panel, full vocabulary field, current token, attention link, and playback timeline"
            aspect="aspect-[1920/902]"
            caption="The full 151,665-token vocabulary, with the current decision highlighted in amber."
            preload
          />
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <h2 className={sectionHeading}>Project Goal</h2>
          <p className={bodyCopy}>
            I wanted to understand what a language model outputs before it turns
            that output into a word. The useful questions were concrete: how text
            becomes token IDs, how a model scores an entire vocabulary, how much
            probability belongs to the alternatives, why some decisions are
            uncertain while others are almost forced, and how the KV cache keeps
            the loop moving one token at a time.
          </p>

          <p className={bodyCopy}>
            The product goal was to make those steps visible without inventing
            data. Every probability and attention weight comes from a real model
            forward pass, and every point comes from a committed projection of
            Qwen&rsquo;s input embeddings. The map is a high-level view of the
            vocabulary, not a literal diagram of the transformer&rsquo;s internal
            computation.
          </p>

          <div className="my-10 overflow-x-auto border-y border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {[
                  ["Model", "Qwen2.5-0.5B-Instruct · 494M parameters"],
                  ["Atlas", "151,665 decodable vocabulary tokens"],
                  ["Live data", "Top 200 probabilities + five attention positions per step"],
                  ["Projection", "896 dimensions to 3 · 77.73% measured preservation"],
                  ["Selection", "Greedy argmax at temperature 1"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-white/10 last:border-b-0">
                    <th className="w-36 py-3 pr-6 font-medium text-neutral-500">
                      {label}
                    </th>
                    <td className="py-3 text-neutral-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={sectionHeading}>How One Token Is Chosen</h2>
          <p className={bodyCopy}>
            I wrote a manual autoregressive decode loop instead of calling
            <code className="mx-1 rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 text-sm text-neutral-200">
              model.generate()
            </code>
            because a completed string does not contain the intermediate data the
            visualization needs. The first pass processes the tokenized prompt.
            Every later pass receives only the token that was just chosen while
            the KV cache carries the earlier context.
          </p>

          <CaseImage
            src="/project/TokenAtlas/token-generation-flow.svg"
            alt="Five-stage diagram showing prompt input, tokenization, Qwen inference, greedy token selection, and streaming to the atlas"
            aspect="aspect-[4/1]"
            caption="One generation step. The selected token is fed back into the model until it reaches EOS or the requested limit."
            fit="contain"
          />

          <ol className="mb-8 space-y-3 pl-5 text-sm leading-7 text-neutral-300 marker:text-neutral-500">
            <li>The final logit row provides one score for every vocabulary row.</li>
            <li>Softmax at temperature 1 converts those scores into probabilities.</li>
            <li>The 200 highest decodable candidates are kept for the interface.</li>
            <li>Greedy argmax selects the highest-probability token.</li>
            <li>
              The backend averages the final layer across all 14 attention heads
              and keeps the five highest-weight context positions.
            </li>
            <li>A WebSocket event sends the decision to the browser.</li>
          </ol>

          <p className={bodyCopy}>
            The top 200 are display data, not a top-k sampling rule. The shipped
            demo is deliberately greedy so a run is reproducible. Attention is
            also presented narrowly: it shows which earlier positions received
            more weight under one stated aggregation, not why the model chose a
            token or a hidden chain of thought.
          </p>

          <h2 className={sectionHeading}>Building the 3D Atlas</h2>
          <p className={bodyCopy}>
            Each vocabulary item begins as an 896-number input-embedding vector. I
            L2-normalized the first 151,665 decodable rows and compared the token
            neighbourhoods in the original space with the neighbourhoods produced
            by several 3D projections.
          </p>

          <p className={bodyCopy}>
            The first implementation used PCA because it was deterministic and
            easy to explain. Visually it looked structured, but the measurement
            showed that it preserved only 7.2% of the relevant neighbourhoods.
            Three-dimensional UMAP reached 77.7%, so the quality gate changed the
            implementation.
          </p>

          <div className="my-10 overflow-x-auto border-y border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-neutral-500">
                  <th className="py-3 pr-6 font-medium">Projection</th>
                  <th className="py-3 text-right font-medium">Neighbourhood preservation</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6">Random placement</td>
                  <td className="py-3 text-right font-mono">1.0%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-6">PCA in 3D</td>
                  <td className="py-3 text-right font-mono">7.2%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">UMAP in 3D</td>
                  <td className="py-3 text-right font-mono text-white">77.7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={bodyCopy}>
            UMAP normally changes when it is refit, so the projection runs offline
            once with a fixed seed and the coordinates are committed. A token keeps
            the same position across prompts, sessions, deployments, and timeline
            scrubbing. The browser receives the field as a 1.8 MB little-endian
            Float32 buffer instead of parsing 151,665 coordinate objects from JSON.
          </p>

          <h2 className={sectionHeading}>Rendering 151,665 Tokens</h2>
          <p className={bodyCopy}>
            Rendering one React component or Three.js object per token was never
            practical. The static field uses one
            <code className="mx-1 rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 text-sm text-neutral-200">
              THREE.Points
            </code>
            object backed by typed arrays and buffer geometry. The measured scene
            needs roughly four to five draw calls, including the live candidate,
            attention, and path overlays.
          </p>

          <p className={bodyCopy}>
            A custom point shader turns each sprite into a shaded sphere impostor,
            writes depth so nearby points occlude distant ones, and keeps point size
            constant in screen pixels. This lets zoom reveal individual tokens
            without every node growing at the same time. Cool colour belongs to the
            static map; amber identifies the chosen token; violet carries attention;
            and the generated sequence stays warm so it remains distinct from the
            field.
          </p>

          <CaseImage
            src="/project/TokenAtlas/token-atlas-trail.jpg"
            alt="Token Atlas at the France generation step with a warm path connecting the emitted tokens"
            aspect="aspect-[1920/902]"
            caption="Each emitted token becomes the next waypoint in the answer. The pink line is attention for the current step; the warm curved line is generation order."
          />

          <h2 className={sectionHeading}>Playback and Inspection</h2>
          <p className={bodyCopy}>
            Model generation and visual playback use separate clocks. The backend
            can produce a local answer at about 32 tokens per second, but that is too
            fast to study. The browser stores every step as it arrives, then a
            playback controller reveals those events at 0.5&times;, 1&times;,
            2&times;, or 4&times;. A visitor can pause, restart, scrub to any token,
            or inspect one of the ranked alternatives without rerunning the model.
          </p>

          <p className={bodyCopy}>
            The candidate nucleus is adaptive rather than fixed. Token Atlas lights
            the smallest ranked set that reaches the selected probability coverage.
            In the recorded France example, 11 candidates hold 99% of the mass; for
            several later steps, one token is enough. That makes uncertainty visible
            instead of making every decision look equally open.
          </p>

          <CaseImage
            src="/project/TokenAtlas/token-atlas-candidates.jpg"
            alt="Token Atlas Candidates panel ranking Paris, The, London, and other next-token options with exact probabilities"
            aspect="aspect-[1920/902]"
            caption="The top 200 alternatives remain connected to their exact probabilities; tiny positive values switch to scientific notation instead of being rounded to zero."
          />

          <h2 className={sectionHeading}>Shipping the Full Stack</h2>
          <p className={bodyCopy}>
            The shipped system has three data paths: an offline projection creates
            fixed vocabulary coordinates, FastAPI runs Qwen one token at a time and
            streams events over a WebSocket, and React stores those events while
            Three.js renders the selected playback step. There is no database,
            account system, or prompt persistence. The only permanent data is the
            projection, token labels, a real recorded fallback run, and the model
            weights baked into the backend image.
          </p>

          <p className={bodyCopy}>
            The frontend is deployed on Vercel and served through the portfolio&rsquo;s
            <code className="mx-1 rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 text-sm text-neutral-200">
              /projects/token-atlas/demo
            </code>
            path. A host-neutral Docker image runs FastAPI and CPU-only PyTorch on
            Modal. Baking the 953 MB model weights into the image reduced model load
            time after boot to about 1.2 seconds. The measured release used about
            690 MB at peak and had a 15.3-second scale-to-zero cold boot.
          </p>

          <p className={bodyCopy}>
            Public inference also changed the engineering work. The repository
            includes strict request validation, exact WebSocket origin checks,
            per-client and global rate limits, queue and connection limits, and a
            hard container ceiling. The interface names connecting, waking, loading,
            and ready as separate states, while a real recorded generation keeps the
            atlas useful before the cloud model is warm.
          </p>

          <h2 className={sectionHeading}>Decisions and Limitations</h2>
          <div className="my-8 divide-y divide-white/10 border-y border-white/10">
            {[
              [
                "Static neighbour links",
                "I removed a 400,139-edge graph because lines already represented attention. Reusing that visual language made the live data harder to read.",
              ],
              [
                "Post-processing bloom",
                "The dependency produced a black canvas with the versions in use. A larger, faint copy of only the meaningful live points creates a cheaper and more controlled glow.",
              ],
              [
                "Retrieval scope",
                "I cut the planned RAG phase after generation worked end to end. Finishing one honest system was stronger than shipping two shallow ones.",
              ],
              [
                "Small-model accuracy",
                "The 494M-parameter model keeps CPU hosting practical, but it can be confidently wrong. The Mudkip preset deliberately leaves that limitation visible.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="grid gap-2 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="m-0 text-sm leading-6 text-neutral-400">{description}</p>
              </div>
            ))}
          </div>

          <p className={bodyCopy}>
            The points are vocabulary tokens, not neurons. Their positions come
            from the model&rsquo;s static input embeddings, not context-dependent
            hidden states. Three-dimensional UMAP loses some of the original
            structure, and the default radial spread intentionally changes absolute
            distance for legibility while preserving direction and radial order.
            The raw coordinates remain available at a spread setting of zero.
          </p>

          <p className={bodyCopy}>
            The interface is intentionally desktop-only, but the supported layout
            includes explicit focus states, reduced-motion behavior, named controls
            and live regions, a keyboard-navigable candidate list, and non-colour
            differences for attention weight and the current token.
          </p>

          <h2 className={sectionHeading}>Result and What I Learned</h2>
          <p className={bodyCopy}>
            Token Atlas turned concepts I had mostly understood at the API level
            into an end-to-end system I could inspect: tokenization, logits,
            probability distributions, greedy decoding, attention, embeddings, and
            KV caching. The main data-visualization lesson was that every visual
            property needs one defensible meaning. Measuring the projection before
            trusting its appearance was just as important as drawing it.
          </p>

          <p className={bodyCopy}>
            The final project combines a real open-weight model, a manual streaming
            decode loop, a measured 3D projection, GPU buffer rendering, independent
            playback, cold-start-aware product states, and public-service controls.
            Nineteen automated tests cover the event contract, projection transforms,
            precision, motion, request validation, and access controls, alongside
            frontend linting, a production build, and a zero-vulnerability runtime
            dependency audit at the project&rsquo;s August 25, 2026 check.
          </p>
        </article>

        <div className="mt-24 flex flex-col justify-center gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <Link
            href="/#projects"
            className="border border-white/10 px-6 py-3 text-center text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
          >
            Back to Projects
          </Link>
          <ProjectLink href="/projects/token-atlas/demo" primary>
            Open Live Demo
          </ProjectLink>
          <ProjectLink href="https://github.com/Ivansost/Token-Atlas">
            View GitHub Repo
          </ProjectLink>
        </div>
      </div>
    </main>
  );
}
