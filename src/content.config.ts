import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        name: z.string(),
        url: z.string(),
        status: z.enum(['live', 'wip']),
        order: z.number(),
    }),
});

export const collections = { projects };
