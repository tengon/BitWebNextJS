import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

// Generate static routes at build time
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <ServiceDetailClient
      service={service}
      prevService={prevService}
      nextService={nextService}
    />
  );
}
