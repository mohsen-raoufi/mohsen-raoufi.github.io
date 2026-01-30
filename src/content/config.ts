import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string tags to array if needed, or keep as array in frontmatter
        // Based on existing data, tags are objects. MDX frontmatter usually handles strings best,
        // but we can map them back to the detailed TAGS object in component logic.
        // For now, let's store TAG keys (strings) in frontmatter.
        tags: z.array(z.string()),
        image: z.string(),
        link: z.string().optional(),
        linkText: z.string().optional(),
        paper: z.string().optional(),
        github: z.string().optional(),
        order: z.number().default(99),
        richContent: z.object({
            heroImage: z.string().optional(),
            features: z.array(z.object({
                title: z.string(),
                description: z.string(),
                icon: z.string().optional(),
            })).optional(),
            stats: z.array(z.object({
                label: z.string(),
                value: z.string(),
            })).optional(),
            gallery: z.array(z.string()).optional(),
            challenges: z.string().optional(),
        }).optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};
