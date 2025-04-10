import { StaticImageData } from "next/image";

// Flow Jobs
import flowJobsCover from "@/../public/projects/flow-jobs/cover.png";
import flowJobsGallery1 from "@/../public/projects/flow-jobs/gallery_1.png";
import flowJobsGallery2 from "@/../public/projects/flow-jobs/gallery_2.png";
import flowJobsGallery3 from "@/../public/projects/flow-jobs/gallery_3.png";

// Flow shop
import flowShopCover from "@/../public/projects/flow-shop/cover.png";
import flowShopGallery1 from "@/../public/projects/flow-shop/gallery_1.png";
import flowShopGallery2 from "@/../public/projects/flow-shop/gallery_2.png";
import flowShopGallery3 from "@/../public/projects/flow-shop/gallery_3.png";
import flowShopGallery4 from "@/../public/projects/flow-shop/gallery_4.png";
import flowShopGallery5 from "@/../public/projects/flow-shop/gallery_5.png";
import flowShopGallery6 from "@/../public/projects/flow-shop/gallery_6.png";

// Devo
import devoCover from "@/../public/projects/devo/cover.png";
import devoGallery1 from "@/../public/projects/devo/gallery_1.png";
import devoGallery2 from "@/../public/projects/devo/gallery_2.png";
import devoGallery3 from "@/../public/projects/devo/gallery_3.png";
import devoGallery4 from "@/../public/projects/devo/gallery_4.png";
import devoGallery5 from "@/../public/projects/devo/gallery_5.png";
import devoGallery6 from "@/../public/projects/devo/gallery_6.png";
import devoGallery7 from "@/../public/projects/devo/gallery_7.png";
import devoGallery8 from "@/../public/projects/devo/gallery_8.png";
import devoGallery9 from "@/../public/projects/devo/gallery_9.png";

// Tanstack Store
import tanstackStoreCover from "@/../public/projects/tanstack-store/cover.png";
import tanstackStoreGallery1 from "@/../public/projects/tanstack-store/gallery_1.png";
import tanstackStoreGallery2 from "@/../public/projects/tanstack-store/gallery_2.png";
import tanstackStoreGallery3 from "@/../public/projects/tanstack-store/gallery_3.png";
import tanstackStoreGallery4 from "@/../public/projects/tanstack-store/gallery_4.png";
import tanstackStoreGallery5 from "@/../public/projects/tanstack-store/gallery_5.png";
import tanstackStoreGallery6 from "@/../public/projects/tanstack-store/gallery_6.png";
import tanstackStoreGallery7 from "@/../public/projects/tanstack-store/gallery_7.png";
import tanstackStoreGallery8 from "@/../public/projects/tanstack-store/gallery_8.png";
import tanstackStoreGallery9 from "@/../public/projects/tanstack-store/gallery_9.png";
import tanstackStoreGallery10 from "@/../public/projects/tanstack-store/gallery_10.png";

// Almazaq Alasyawi
import almazaqAlasyawiCover from "@/../public/projects/almazaq-alasyawi/cover.png";
import almazaqAlasyawiGallery1 from "@/../public/projects/almazaq-alasyawi/gallery_1.png";
import almazaqAlasyawiGallery2 from "@/../public/projects/almazaq-alasyawi/gallery_2.png";
import almazaqAlasyawiGallery3 from "@/../public/projects/almazaq-alasyawi/gallery_3.png";
import almazaqAlasyawiGallery4 from "@/../public/projects/almazaq-alasyawi/gallery_4.png";
import almazaqAlasyawiGallery5 from "@/../public/projects/almazaq-alasyawi/gallery_5.png";
import almazaqAlasyawiGallery6 from "@/../public/projects/almazaq-alasyawi/gallery_6.png";
import almazaqAlasyawiGallery7 from "@/../public/projects/almazaq-alasyawi/gallery_7.png";

// Weather App
import weatherAppCover from "@/../public/projects/weather-app/cover.png";
import weatherAppGallery1 from "@/../public/projects/weather-app/gallery_1.png";
import weatherAppGallery2 from "@/../public/projects/weather-app/gallery_2.png";
import weatherAppGallery3 from "@/../public/projects/weather-app/gallery_3.png";
import weatherAppGallery4 from "@/../public/projects/weather-app/gallery_4.png";

// Todo App
import todoAppCover from "@/../public/projects/todo-app/cover.png";
import todoAppGallery1 from "@/../public/projects/todo-app/gallery_1.png";
import todoAppGallery2 from "@/../public/projects/todo-app/gallery_2.png";
import todoAppGallery3 from "@/../public/projects/todo-app/gallery_3.png";
import todoAppGallery4 from "@/../public/projects/todo-app/gallery_4.png";
import todoAppGallery5 from "@/../public/projects/todo-app/gallery_5.png";
import todoAppGallery6 from "@/../public/projects/todo-app/gallery_6.png";
import todoAppGallery7 from "@/../public/projects/todo-app/gallery_7.png";

export interface Project {
  slug: string;
  title: string;
  brief: string;
  coverImage: StaticImageData;
  githubRepoUrl: string;
  liveDemoUrl: string;
  description: string;
  gallery: StaticImageData[];
}

export const projects: Project[] = [
  {
    slug: "flow-shop",
    title: "Flow Shop",
    brief:
      "A modern e-commerce platform offering a seamless shopping experience with a responsive design.",
    coverImage: flowShopCover,
    githubRepoUrl: "https://github.com/Hadyosman1/flow-shop",
    liveDemoUrl: "https://flow-shop-blush.vercel.app",
    description: `
Flow Shop is a cutting-edge e-commerce platform built to provide users with a seamless and enjoyable shopping experience. It features advanced functionalities for both sellers and buyers.

**Key Features:**
- Well-structured product categories for easy navigation.
- High-quality images and detailed product descriptions.
- Real-time search functionality to quickly find products.
- Responsive design ensuring compatibility across various devices.

**Technologies Used:**
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Wix (integrated)
- **Deployment:** Vercel
    `,
    gallery: [
      flowShopGallery1,
      flowShopGallery2,
      flowShopGallery3,
      flowShopGallery4,
      flowShopGallery5,
      flowShopGallery6,
    ],
  },
  {
    slug: "flow-jobs",
    title: "Flow Jobs",
    brief:
      "A dynamic job portal connecting employers with qualified candidates through an intuitive platform.",
    coverImage: flowJobsCover,
    githubRepoUrl: "https://github.com/Hadyosman1/flow-jobs",
    liveDemoUrl: "https://flow-jobs-ten.vercel.app",
    description: `
Flow Jobs is a feature-rich job portal designed to connect employers with qualified candidates quickly and efficiently. It simplifies the job application process with real-time search and filtering options.

**Key Features:**
- Advanced job search and filtering system.
- Clean, user-friendly interface for easy navigation.
- Real-time search functionality for jobs.
- Responsive design for a seamless experience on various devices.

**Technologies Used:**
- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Deployment:** Vercel
    `,
    gallery: [flowJobsGallery1, flowJobsGallery2, flowJobsGallery3],
  },
  {
    slug: "tanstack-store",
    title: "Tanstack Store",
    brief: `An advanced e-commerce platform built with TanStack Query and modern React tools, enabling smooth product browsing, filtering, and infinite scrolling.`,
    coverImage: tanstackStoreCover,
    githubRepoUrl: "https://github.com/Hadyosman1/tanstack-store",
    liveDemoUrl: "https://tanstack-store.vercel.app",
    description: `
Tanstack Store is a modern and responsive e-commerce platform designed to showcase the power of React Query (TanStack Query) in managing remote data efficiently. The app offers a clean UI, robust product browsing experience, and advanced features like infinite scrolling and dynamic filters.

**Key Features:**
- **Infinite Scrolling:** Automatically loads more products as users scroll down the page.
- **Product Filtering:** Dynamic filters by category and price for better UX.
- **Product Details Page:** Displays high-quality images, description, price, and metadata.
- **Loading & Error States:** Seamless loading indicators and error handling using React Query.
- **Responsive Design:** Optimized layout for mobile, tablet, and desktop users.

**Technologies Used:**
- **Frontend:** Next.js 15, React, Tailwind CSS, TypeScript
- **Data Fetching & Caching:** TanStack Query (React Query)
- **State Management:** TanStack Query, Zustand
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

This project showcases how to use React Query effectively for pagination, caching, and syncing data in the background, making it a solid example for modern web apps.
`,

    gallery: [
      tanstackStoreGallery1,
      tanstackStoreGallery2,
      tanstackStoreGallery3,
      tanstackStoreGallery4,
      tanstackStoreGallery5,
      tanstackStoreGallery6,
      tanstackStoreGallery7,
      tanstackStoreGallery8,
      tanstackStoreGallery9,
      tanstackStoreGallery10,
    ],
  },
  {
    slug: "devo",
    title: "Devo social media app",
    brief:
      "A social media app that allows you to connect with friends and family.",
    coverImage: devoCover,
    githubRepoUrl: "https://github.com/Hadyosman1/Next.js-Social-Media-App",
    liveDemoUrl: "https://learn-next-js-pied-eight.vercel.app",
    description: `
Devo is a comprehensive social media application designed to facilitate connections between friends and family. The app offers a variety of features that enhance the social networking experience, making it easy to share moments, and stay updated with loved ones.

**Key Features:**
- **User Profiles:** Create and customize personal profiles with photos and articles.
- **News Feed:** Stay updated with posts from friends and family in a dynamic news feed.
- **Post Creation:** Share text updates and photos with your network.
- **Comments:** Engage with posts through comments fostering interaction.
- **Responsive Design:** Enjoy a consistent experience across various devices, including mobile and desktop.

**Technologies Used:**
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js APIs
- **Database:** PostgreSQL
- **File Uploads:** Firebase
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Vercel

Devo combines a clean and intuitive interface with powerful social networking features, making it a go-to platform for staying connected with your social circle. Whether you're sharing life updates, engaging with friends' posts, Devo provides a comprehensive and enjoyable social media experience.
    `,
    gallery: [
      devoGallery1,
      devoGallery2,
      devoGallery3,
      devoGallery4,
      devoGallery5,
      devoGallery6,
      devoGallery7,
      devoGallery8,
      devoGallery9,
    ],
  },

  {
    slug: "almazaq-alasyawi",
    title: "Almazaq Alasyawi",
    brief:
      "Almazaq Alasyawi is an Arabic restaurant landing page that showcases the restaurant's menu and offers a seamless dining experience.",
    coverImage: almazaqAlasyawiCover,
    githubRepoUrl:
      "https://github.com/Hadyosman1/arabic-restaurant-landing-page",
    liveDemoUrl: "https://arabic-restaurant.vercel.app",
    description: `
Almazaq Alasyawi is an Arabic restaurant landing page designed to showcase the restaurant's menu and offer a seamless dining experience. The page features a visually appealing layout, showcasing the restaurant's ambiance and menu items.

**Key Features:**
- **Menu Display:** The landing page features a visually appealing layout showcasing the restaurant's menu items.
- **Responsive Design:** The page is designed to be responsive, ensuring a seamless experience across various devices.
- **Interactive Elements:** The page includes interactive elements such as buttons and links for easy navigation.
- **Content Organization:**
- **Menu:** The menu section showcases a variety of dishes with detailed descriptions and prices.
- **About Us:** A brief introduction to the restaurant's story and mission.
- **Contact Information:** Contact details for inquiries and reservations.
- **Footer:** Includes social media links and copyright information.
**Technologies Used:**
- **Frontend:** 
  - HTML
  - CSS
  - JavaScript
  - Next.js
  - Tailwind CSS
  
**Deployment:** Vercel

is landing page serves as a gateway to the restaurant's offerings, providing a visually appealing and user-friendly experience for potential diners.
    `,
    gallery: [
      almazaqAlasyawiGallery1,
      almazaqAlasyawiGallery2,
      almazaqAlasyawiGallery3,
      almazaqAlasyawiGallery4,
      almazaqAlasyawiGallery5,
      almazaqAlasyawiGallery6,
      almazaqAlasyawiGallery7,
    ],
  },
  {
    slug: "weather-app",
    title: "Weather App",
    brief:
      "A weather app that provides real-time weather information for any location with hourly and 10 days forecast.",
    coverImage: weatherAppCover,
    githubRepoUrl: "https://github.com/Hadyosman1/weather-app",
    liveDemoUrl: "https://weather-app-hady-osman.vercel.app",
    description: `
Weather App is a modern weather application that provides comprehensive weather information with a clean and intuitive interface. The app delivers accurate, real-time weather data for any location worldwide.

**Key Features:**
- Real-time weather data with detailed current conditions
- Hourly forecast for the next 24 hours
- 10-day weather forecast with daily high/low temperatures
- Location search functionality with autocomplete
- Dynamic weather icons and backgrounds based on conditions
- Detailed weather metrics including humidity, wind speed, and UV index
- Responsive design that works seamlessly on all devices

**Technologies Used:**
- **Frontend:** React, Next.js 15, Tailwind CSS, shadcn/ui
- **API Integration:** WeatherAPI.com
- **Deployment:** Vercel
- **Location Services:** Geolocation API

The app features a modern, minimalist design that prioritizes user experience while providing comprehensive weather information at a glance. The interface automatically adjusts its theme based on the current time of day and weather conditions, creating an immersive experience for users.
    `,
    gallery: [
      weatherAppGallery1,
      weatherAppGallery2,
      weatherAppGallery3,
      weatherAppGallery4,
    ],
  },
  {
    slug: "todo-app",
    title: "Todo App",
    brief:
      "A simple todo app that allows you to add, edit, and delete tasks with a clean and intuitive interface.",
    coverImage: todoAppCover,
    githubRepoUrl: "https://github.com/Hadyosman1/Next.Js-Todo-App",
    liveDemoUrl: "https://next-js-todo-app-umber.vercel.app",
    description: `
A simple yet powerful todo application designed to help users manage their tasks efficiently. The app provides a clean and intuitive interface for adding, editing, and deleting tasks, making it easy to stay organized.

**Key Features:**
- **Task Management:** Add, edit, and delete tasks with ease.
- **User-Friendly Interface:** Clean and minimalistic design for a seamless user experience.
- **Responsive Design:** Works flawlessly on both desktop and mobile devices.
- **Real-Time Updates:** Changes to tasks are reflected instantly.
- **Dark Mode Support:** Includes a dark mode option for comfortable usage in low-light environments.

**Technologies Used:**
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** PostgreSQL, Prisma ORM
- **State Management:** React Context API
- **Deployment:** Vercel, Railway for postgres database

The Todo App is a perfect blend of simplicity and functionality, designed to help users stay organized and productive. With its intuitive interface, responsive design, and robust features, it caters to both casual users and productivity enthusiasts alike. Whether you're managing daily chores or tracking important deadlines, this app ensures a seamless and enjoyable task management experience.
`,
    gallery: [
      todoAppGallery1,
      todoAppGallery2,
      todoAppGallery3,
      todoAppGallery4,
      todoAppGallery5,
      todoAppGallery6,
      todoAppGallery7,
    ],
  },
];
