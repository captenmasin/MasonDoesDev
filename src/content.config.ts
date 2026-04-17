import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        name: z.string(),
        links: z.array(z.object({
            label: z.string(),
            url: z.string(),
        })).default([]),
        status: z.enum(['live', 'wip']),
        order: z.number(),
    }),
});

export const collections = { projects };
