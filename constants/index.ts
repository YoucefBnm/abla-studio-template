import {
  CodeIcon,
  FingerprintPatternIcon,
  SearchCheckIcon,
  SplineIcon,
  TableOfContentsIcon,
  UsersRoundIcon,
} from "lucide-react";

export interface Client {
  client: string;
  imageUrl: string;
  service: string;
  year: string;
}
export interface Service {
  title: string;
  icon: React.ElementType;
  href: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    title: "Branding",
    icon: FingerprintPatternIcon,
    href: "/services/branding",
    description:
      "Starting your brand journey with a clear and compelling brand identity, and a cohesive message that resonates with your target audience.",
  },
  {
    title: "Web Design",
    icon: SplineIcon,
    href: "/services/web_design",
    description:
      "Creating websites that are user-friendly, visually appealing, and optimized for conversions.",
  },
  {
    title: "Development",
    icon: CodeIcon,
    href: "/services/development",
    description:
      "Building and maintaining high-quality websites and web applications.",
  },
  {
    title: "SEO",
    icon: SearchCheckIcon,
    href: "/services/seo",
    description:
      "Optimizing your website for search engines to improve your online visibility and attract more organic traffic.",
  },
  {
    title: "Marketing",
    icon: UsersRoundIcon,
    href: "/services/marketing",
    description:
      "Creating effective marketing campaigns to promote your brand and drive leads and conversions.",
  },
  {
    title: "Content Creation",
    icon: TableOfContentsIcon,
    href: "/services/content_creation",
    description:
      "Creating engaging and informative content that resonates with your target audience.",
  },
];

export const HERO_IMAGES: string[] = [
  "/video-1.png",
  "/video-3.png",
  "/video-2.png",
  "/video-4.png",
  "/video-5.png",
];

export const CLIENTS: Client[] = [
  {
    client: "Enera Corporate",
    imageUrl: "/enera-hero.png",
    service: "Web Design & Development",
    year: "2025",
  },
  {
    client: "Bizadvizor B2B",
    imageUrl: "/video-3.png",
    service: "Branding & Design",
    year: "2024",
  },
  {
    client: "Carecover Healthcare",
    imageUrl: "/carecover-hero.png",
    service: "Web Design & Development",
    year: "2025",
  },
  {
    client: "Cognify AI",
    imageUrl: "/dashboard-3.png",
    service: "Web Design & Development",
    year: "2025",
  },
];
