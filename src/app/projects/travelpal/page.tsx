import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TravelPal - GDSCHacks 2025 | Ivan Sostaric",
  description:
    "A full-stack AI trip planner built at GDSCHacks 2025 using Next.js, Convex, Clerk, Google Gemini, and Vapi.",
};

const skills = [
  "Next.js",
  "Convex",
  "Google Gemini",
  "Clerk",
  "Vapi",
  "Sustainable Travel",
];

export default function TravelPalCaseStudy() {
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
            TravelPal - GDSCHacks 2025
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-sm">
                {skill}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            Built at GDSCHacks 2025, TravelPal is a green AI-powered trip planner designed to help travelers create personalized and more sustainable itineraries. The product focuses on making eco-friendly travel planning feel practical: users can generate day-by-day plans, compare the environmental impact of different routes, and get suggestions that reduce the footprint of a trip without losing the quality of the experience.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-white/10 mb-8 shadow-2xl bg-white/5">
            <Image
              src="/project/TravelPal/page.jpg"
              alt="TravelPal landing page showing eco-friendly AI trip planning"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Project Goal</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The idea was to build a travel assistant that could do more than produce a generic itinerary. We wanted TravelPal to understand user preferences, generate a structured schedule, and surface the environmental cost of the plan in a way that was easy to act on. Instead of treating sustainability as a separate report, we built it directly into the trip-planning flow through Eco Mode, carbon summaries, and alternative recommendations.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Full-Stack Architecture</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            My team and I built the application with Next.js for the frontend and Convex for the backend. Convex handled the real-time data layer for saved trips, profile data, and itinerary state, which helped us move quickly during the hackathon without spending too much time on backend boilerplate. The frontend included a responsive dashboard where authenticated users could manage multiple trips and revisit previously generated plans.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            Authentication was implemented with Clerk, giving the app secure sign-in and user-specific trip storage. That made the product feel closer to a real shipped application instead of a single-use demo. Each user could create, save, and manage their own travel plans, which was important for making the project feel complete under a short build window.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">AI Itinerary Generation</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            Google Gemini powered the core itinerary generation. The app used user inputs such as destination, trip duration, and travel preferences to generate day-by-day plans focused on low-impact activities and eco-conscious choices. We structured the AI output so it could be displayed as a usable itinerary rather than a loose block of text, which made the generated plans easier to scan and refine.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            To streamline the experience, hero images were generated automatically instead of requiring manual image assets for every destination. This helped the app feel more personalized while keeping the workflow lightweight for users. It also gave each trip a stronger visual identity inside the dashboard.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Eco Mode and Carbon Awareness</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            A major part of TravelPal was Eco Mode, which calculates travel distances and estimates CO2 emissions for each leg of a trip. The goal was not just to show a number, but to help users understand which parts of the itinerary created the most impact. From there, the app could suggest greener alternatives, such as lower-impact activities, more efficient routes, or choices that reduce unnecessary travel between locations.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            This feature made the project more technically interesting because it connected AI generation with measurable trip data. The itinerary was not only creative output from a model; it became something the app could analyze, summarize, and improve based on sustainability criteria.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">Voice and Chat Interaction</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            We also implemented a live voice and chat interface using Vapi, allowing users to interact with the AI in real time. This gave TravelPal a more natural planning flow: instead of changing form fields repeatedly, users could ask follow-up questions, refine parts of the trip, and explore alternatives through conversation.
          </p>

          <h2 className="text-2xl font-semibold mt-16 mb-4 text-white">What I Learned</h2>
          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            As our first hackathon project, TravelPal taught us how to design, build, and deploy a complete end-to-end application under time constraints. We had to divide responsibilities quickly, make practical architecture decisions, and focus on the features that would make the product feel real: authentication, saved data, AI generation, voice interaction, and a polished user interface.
          </p>

          <p className="text-neutral-300 leading-relaxed font-sans mb-6">
            The project gave me hands-on experience collaborating as a team, integrating multiple AI tools into a single product, and turning an idea into a functional full-stack application. It also reinforced the importance of building around a clear user problem: helping people plan trips that are not only personalized, but also more environmentally aware.
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
