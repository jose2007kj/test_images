"use client";
import { useDebouncedCallback } from "use-debounce";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
            params.set("page","1")
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <div className="flex justify-center md:justify-between">
            <input
                type="text"
                className="bg-white p-2  w-[260px] sm:w-80 text-xl rounded-xl text-black"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    );
}
