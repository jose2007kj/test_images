import Gallery from "./Components/Gallery";

interface PageProps {
    searchParams: {
        query?: string;
        page?: number;
        perPage?: number;
    };
}
export default function Home({ searchParams: { query, page, perPage } }: PageProps) {
    return <Gallery search={query ?? 'car'} page={page} perPage={perPage} />;
}
