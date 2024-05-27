import { z } from "zod";

// Define the schema for each photo object in the 'photos' array
const PhotoSchema = z.object({
    id: z.number(), // 'id' should be a number
    width: z.number(), // 'width' should be a number
    height: z.number(), // 'height' should be a number
    url: z.string().url(), // 'url' should be a valid URL
    photographer: z.string(), // 'photographer' should be a string
    src: z.object({ large: z.string().url() }), // 'src' should conform to the srcSchema defined above
    alt: z.string(), // 'alt' should be a string
    blurredDataUrl: z.string().optional()
});

// Define the schema for the overall API response
export const BasicImageSchema = z.object({
    page: z.number(), // 'page' should be a number
    per_page: z.number(), // 'per_page' should be a number
    total_results: z.number(), // 'total_results' should be a number
    next_page: z.string().url().optional(), // 'next_page' should be a URL and is optional
    prev_page: z.string().url().optional(), // 'prev_page' should be a URL and is optional
});

export const ImageSchemaWithPhotos = BasicImageSchema.extend({
    photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>
export type ImagesResult = z.infer<typeof ImageSchemaWithPhotos>
// Example usage: Validate some data against the apiResponseSchema
const data = {
    page: 5,
    per_page: 5,
    total_results: 8000,
    next_page: "https://api.pexels.com/v1/search/?page=6&per_page=5&query=car",
    prev_page: "https://api.pexels.com/v1/search/?page=4&per_page=5&query=car",
    photos: [
        {
            id: 627678,
            width: 4387,
            height: 2722,
            url: "https://www.pexels.com/photo/red-coupe-soft-top-on-road-627678/",
            photographer: "Nordic Overdrive",
            src: {
                large: "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            alt: "Red Coupe Soft-top on Road",
        },
    ],
};

