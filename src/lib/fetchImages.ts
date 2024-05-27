import type { ImagesResult } from "@/models/Images";
import { ImageSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(url: string): Promise<ImagesResult | undefined> {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch Images Error! \n");
        const imagesResults: ImagesResult = await res.json();
        const parsedData = ImageSchemaWithPhotos.parse(imagesResults);
        if (parsedData.total_results === 0) return undefined;
        return parsedData;
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
    }
}
