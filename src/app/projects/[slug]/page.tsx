import GithubIcon from "@/assets/icons/githubIcon";
import ProjectGalleryCarousel from "@/components/project/ProjectGalleryCarousel";
import { Button } from "@/components/ui/button";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

const getProject = cache((slug: string) =>
  projects.find((p) => p.slug === slug),
);

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

interface ProductDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const project = getProject(slug);

  if (!project) notFound();

  return {
    metadataBase: new URL("https://portfolio-hady-osman.vercel.app"),
    title: {
      absolute: `${project.title} | Project`,
    },
    description: project.brief,
    openGraph: {
      images: [
        {
          url: project.coverImage.src,
          width: 1200,
          height: 630,
          alt: "Project image",
        },
      ],
    },
  };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const slug = (await params).slug;

  const project = getProject(slug);

  if (!project) notFound();

  const {
    title,
    brief,
    coverImage,
    liveDemoUrl,
    githubRepoUrl,
    gallery,
    description,
  } = project;

  return (
    <div className="container">
      <div className="relative h-[300px]">
        <Image
          priority
          src={coverImage}
          alt={`${title} cover`}
          fill
          className="rounded-b-md object-cover object-top shadow-xs"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
      </div>

      <div className="flex flex-wrap items-start gap-x-2 gap-y-4 py-8">
        <div className="">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="mt-2 max-w-[500px] text-base text-muted-foreground md:mt-4 md:text-xl">
            {brief}
          </p>
        </div>
        <div className="ms-auto space-x-2 text-[14px] font-medium">
          <Button size="sm" asChild>
            <Link target="_blank" href={githubRepoUrl}>
              Github Repo
              <GithubIcon />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link target="_blank" href={liveDemoUrl}>
              Live Demo
              <ExternalLink size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-8 text-xl font-semibold md:text-3xl">Gallery</h2>
          <ProjectGalleryCarousel images={gallery} />
        </div>
      )}

      <article className="mt-6">
        <h2 className="mb-8 text-xl font-semibold md:text-3xl">Description</h2>
        <MarkdownRenderer content={description} />
      </article>
    </div>
  );
};

export default ProductDetailsPage;
