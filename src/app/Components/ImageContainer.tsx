import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
    return (
        <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
            <Image src={photo.src.large} alt={photo.alt} fill={true} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                placeholder="blur"
                blurDataURL={photo?.blurredDataUrl}
                className="object-cover group-hover:opacity-75" />
        </div>
    );
}
