import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projectURL: z.string().url(),
    github: z
      .string()
      .regex(/^[a-zA-Z0-9._-]+(\/[a-zA-Z0-9._-]+)?$/)
      .optional(),
    logoImage: z.string().optional(),
    logoImageDark: z.string().optional(),
    iconImage: z.string(),
    iconImageDark: z.string().optional(),
    noIconPadding: z.boolean().optional(),
    heroImage: z.string().optional(),
    personal: z.boolean().optional(),
    archived: z.boolean().optional(),
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
    online: z.boolean(),
    location: z.string().optional(),
    countryFlag: z.string().optional(),
    type: z.enum(["Talk", "Invited speaker", "Conference talk", "Workshop"]),
    keynote: z.boolean().optional(),
    eventURLs: z.array(z.string().url()).optional(),
    pdfURLs: z.array(z.string()).optional(),
    youtubeIDs: z.array(z.string().length(11)).optional(),
    heroImage: z.string().optional(),
    logoImage: z.string().optional(),
    logoImageDark: z.string().optional(),
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
    logoImageDark: z.string().optional(),
    iconImage: z.string(),
    iconImageDark: z.string().optional(),
    countryFlag: z.string(),
    heroImage: z.string().optional(),
    numPositions: z.number(),
    startDate: z.date(),
    endDate: z.date().optional(),
    hideOnHomepage: z.boolean().optional(),
  }),
});
const educationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    location: z.string(),
    URL: z.string().url(),
    logoImage: z.string().optional(),
    logoImageDark: z.string().optional(),
    iconImage: z.string(),
    iconImageDark: z.string().optional(),
    countryFlag: z.string(),
    heroImage: z.string().optional(),
    startDate: z.date(),

    hideOnHomepage: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  publications: publicationsCollection,
  talks: talksCollection,
  workplaces: workplaceCollection,
  education: educationCollection,
};
