import GithubIcon from "@/assets/icons/githubIcon";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import Zoom from "react-medium-image-zoom";

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
    title: {
      absolute: `${project.title} | Project`,
    },
    description: project.subTitle,
    openGraph: {
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
          alt:"Project image"
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
    subTitle,
    coverImage,
    liveDemoUrl,
    githubRepoUrl,
    pageImages,
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
          className="rounded-b-md object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/85" />
      </div>

      <div className="flex flex-wrap items-start gap-x-2 gap-y-4 py-8">
        <div className="">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="mt-2 max-w-[500px] text-base text-muted-foreground md:mt-4 md:text-xl">
            {subTitle}
          </p>
        </div>
        <div className="ms-auto space-x-2">
          <Button size="default" className="text-[14px] font-medium" asChild>
            <Link target="_blank" href={githubRepoUrl}>
              Github Repo
              <GithubIcon />
            </Link>
          </Button>
          <Button size="default" className="text-[14px] font-medium" asChild>
            <Link target="_blank" href={liveDemoUrl}>
              Live Demo
              <ExternalLink size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {pageImages.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-8 text-xl font-semibold md:text-3xl">Pages</h2>
          <ul className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3">
            {pageImages.map((img, idx) => (
              <li key={`page-${idx + 1}`}>
                <Zoom>
                  <Image
                    width={650}
                    height={750}
                    src={img}
                    alt={`page-${idx + 1}`}
                    className="aspect-square rounded-md object-cover object-top shadow-md"
                  />
                </Zoom>
              </li>
            ))}
          </ul>
        </div>
      )}

      <article className="prose dark:prose-invert mt-6">
        <h2 className="mb-8 text-xl font-semibold md:text-3xl">Description</h2>

        {description}
      </article>
    </div>
  );
};

export default ProductDetailsPage;
