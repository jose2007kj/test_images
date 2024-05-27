import fetchImages from "@/lib/fetchImages";
import type { ImagesResult } from "@/models/Images";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import Link from "next/link";
interface GalleryResultsProps {
    search: string;
    page?: number;
    perPage?: number;
}

export default async function Gallery({ search, page = 1, perPage = 12 }: GalleryResultsProps) {
    const url = `https://simple-pexels-proxy.onrender.com/search?query=${search}&per_page=${perPage}&page=${page}`;
    const images: ImagesResult | undefined = await fetchImages(url);
    if (!images) return <h2 className="m-4 text-2xl font-bold">No Images found</h2>;
    const photoWIthBlur = await addBlurredDataUrls(images);
    return (
        <>
            {images && <Pagination currentPage={page} totalPages={Math.ceil(images?.total_results / perPage)} search={search} />}
            <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
                {photoWIthBlur.map((photo) => (
                    <ImageContainer key={photo.id} photo={photo} />
                ))}
            </section>

            {images && <Pagination currentPage={page} totalPages={Math.ceil(images?.total_results / perPage)} search={search} />}
        </>
    );
}
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    search: string;
}

function Pagination({ currentPage, totalPages, search }: PaginationProps) {
    function generatePageLink(page: number) {
        const searchParams = new URLSearchParams({
            query: search,
            page: page.toString(),
        });

        return `/?${searchParams.toString()}`;
    }
    return (
        <div className="flex justify-between">
            <Link href={generatePageLink(Number(currentPage) - 1)} className={cn("flex items-center gap-2 font-semibold", currentPage <= 1 && "invisible")}>
                <ArrowLeft className="w-5 h-5" />
                Previous page
            </Link>
            <span className="font-semibold">
                Page {currentPage} of {totalPages}
            </span>
            <Link href={generatePageLink(Number(currentPage) + 1)} className={cn("flex items-center gap-2 font-semibold", currentPage >= totalPages && "invisible")}>
                Next page
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
    );
}
