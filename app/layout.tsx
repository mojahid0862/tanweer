import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/resume";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanweerul-haque.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Civil Infrastructure HSE Professional`,
    template: `%s | ${profile.name}`
  },
  description:
    "Civil infrastructure HSE portfolio for Tanweerul Haque, covering roads, drainage, tunneling, utilities, construction safety, audits, compliance, incident investigation, and worker welfare across Qatar and India.",
  keywords: [
    "Tanweerul Haque",
    "HSE Engineer",
    "Safety Engineer",
    "Civil Infrastructure Safety",
    "Road Safety",
    "Drainage Network HSE",
    "Tunneling Safety",
    "Qatar HSE Inspector",
    "OSHA",
    "NEBOSH",
    "ISO 45001 Lead Auditor",
    "GRADIOSH"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.name} | Civil Infrastructure HSE Professional`,
    description:
      "Portfolio, projects, certifications, and experience for a civil infrastructure HSE professional with 20+ years in high-risk construction environments.",
    images: [
      {
        url: "/assets/tanweerul-haque.png",
        width: 720,
        height: 720,
        alt: `${profile.name} portrait`
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Civil Infrastructure HSE Professional`,
    description:
      "Roads, drainage, tunneling, utilities, construction safety, ISO 45001, NEBOSH, OSHA, GRADIOSH.",
    images: ["/assets/tanweerul-haque.png"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/assets/tanweerul-haque.png"
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi, India",
    "geo.position": "28.7041;77.1025",
    ICBM: "28.7041, 77.1025"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
