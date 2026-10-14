import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/what-is-bolnivo", priority: 0.9 },
  { path: "/faq", priority: 0.8 },
  { path: "/product", priority: 0.9 },
  { path: "/features", priority: 0.8 },
  { path: "/pricing", priority: 0.9 },
  // Channels
  { path: "/whatsapp-auto-reply", priority: 0.8 },
  { path: "/instagram-auto-reply", priority: 0.8 },
  { path: "/messenger-auto-reply", priority: 0.8 },
  // Language and Nepal
  { path: "/nepali-chatbot", priority: 0.8 },
  { path: "/ai-receptionist-nepal", priority: 0.8 },
  // Problems and intents
  { path: "/appointment-booking-bot", priority: 0.8 },
  { path: "/after-hours-auto-reply", priority: 0.7 },
  { path: "/human-handoff", priority: 0.7 },
  // Use cases
  ...["salons", "clinics", "hotels", "consultancies", "trekking", "restaurants", "gyms"].map((slug) => ({
    path: `/use-cases/${slug}`,
    priority: 0.7,
  })),
  // Comparisons
  ...[
    "bolnivo-vs-whatsapp-business-auto-reply",
    "bolnivo-vs-manychat",
    "ai-assistant-vs-human-receptionist",
    "chatbot-vs-ai-front-desk",
  ].map((slug) => ({ path: `/compare/${slug}`, priority: 0.6 })),
  { path: "/team", priority: 0.6 },
  { path: "/trust", priority: 0.7 },
  { path: "/changelog", priority: 0.5 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
  }));
}
