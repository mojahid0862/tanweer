import { AnimatedPortfolio } from "@/components/AnimatedPortfolio";
import { profile } from "@/data/resume";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanweerul-haque.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/assets/tanweerul-haque-professional.jpg`,
  jobTitle: profile.jobTitles,
  description: profile.summary,
  email: profile.email,
  telephone: profile.phones,
  address: {
    "@type": "PostalAddress",
    streetAddress: profile.address,
    addressLocality: "New Delhi",
    addressCountry: "IN"
  },
  knowsLanguage: profile.languages.map((language) => language.name),
  knowsAbout: profile.knowsAbout,
  sameAs: [profile.linkedin],
  award: profile.awards.map((award) => `${award.title} - ${award.issuer}`),
  alumniOf: profile.education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.institution
  })),
  hasCredential: [
    ...profile.certifications.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: credential
    })),
    ...profile.certificateDocuments.map((certificate) => ({
      "@type": "EducationalOccupationalCredential",
      name: certificate.title,
      credentialCategory: "Certificate document",
      recognizedBy: certificate.issuer,
      url: `${siteUrl}${certificate.href}`
    }))
  ],
  worksFor: {
    "@type": "Organization",
    name: "Parsons International Limited"
  },
  workLocation: ["Qatar", "India", "New Delhi"]
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} - Civil Infrastructure HSE Portfolio`,
  url: siteUrl,
  mainEntity: personJsonLd,
  about: profile.knowsAbout,
  inLanguage: "en"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: profile.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnimatedPortfolio profile={profile} />
    </>
  );
}
