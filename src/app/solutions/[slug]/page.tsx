import { notFound } from "next/navigation";
import { solutionsData } from "@/lib/solutionsData";
import SolutionDetailClient from "@/components/SolutionDetailClient";
import type { Metadata } from "next";

// Generate static routes at build time
export function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | BIT Automation`,
    description: solution.shortDescription,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const currentIndex = solutionsData.findIndex((s) => s.slug === slug);
  const prevSolution = currentIndex > 0 ? solutionsData[currentIndex - 1] : null;
  const nextSolution =
    currentIndex < solutionsData.length - 1 ? solutionsData[currentIndex + 1] : null;

  return (
    <SolutionDetailClient
      solution={solution}
      prevSolution={prevSolution}
      nextSolution={nextSolution}
    />
  );
}
