import { StaticImageData } from "next/image";

// Flow Jobs
import flowJobsCover from "@/../public/projects/flow-jobs/flow_jobs_cover.png";
import flowJobsGallery1 from "@/../public/projects/flow-jobs/gallery_1.png";
import flowJobsGallery2 from "@/../public/projects/flow-jobs/gallery_2.png";
import flowJobsGallery3 from "@/../public/projects/flow-jobs/gallery_3.png";

export interface Project {
  slug: string;
  title: string;
  subTitle: string;
  coverImage: StaticImageData;
  githubRepoUrl: string;
  liveDemoUrl: string;
  description: string;
  pageImages: StaticImageData[];
}

export const projects: Project[] = [
  {
    slug: "flow-jobs",
    title: "Flow Jobs",
    subTitle: "Website for job posting and applying.",
    coverImage: flowJobsCover,
    githubRepoUrl: "https://github.com/Hadyosman1/flow-jobs",
    liveDemoUrl: "https://flow-jobs-ten.vercel.app",
    description: "",
    pageImages: [flowJobsGallery1, flowJobsGallery2, flowJobsGallery3],
  },
];
