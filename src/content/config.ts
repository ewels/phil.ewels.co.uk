import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projectURL: z.string().url(),
    iconImage: z.string(),
    iconImageDark: z.string().optional(),
    heroImage: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});
const publicationsCollection = defineCollection({
  type: "content",
  schema: z.object({
    doi: z.string(),
    title: z.string(),
    journal: z.string(),
    pubDate: z.date(),
  }),
});
const talksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.enum(["Online", "In person"]),
    type: z.enum(["Talk", "Invited speaker", "Conference talk", "Workshop"]),
    tags: z.array(z.string()).optional(),
    eventURLs: z.array(z.string().url()).optional(),
    pdfURLs: z.array(z.string()).optional(),
    youtubeURLs: z.array(z.string().url()).optional(),
    heroImage: z.string().optional(),
    iconImage: z.string().optional(),
    iconImageDark: z.string().optional(),
    date: z.date(),
  }),
});
const workplaceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    URL: z.string().url(),
    logoImage: z.string().optional(),
    iconImage: z.string(),
    iconImageDark: z.string().optional(),
    countryFlag: z.string(),
    heroImage: z.string(),
    numPositions: z.number(),
    startDate: z.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  publications: publicationsCollection,
  talks: talksCollection,
  workplaces: workplaceCollection,
};
