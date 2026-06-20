"use client";

import { useState } from "react";

interface RoomGalleryProps {
  images: string[];
  title: string;
}

export function RoomGallery({ images, title }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images.length > 0;
  const fallback = "https://picsum.photos/seed/fallback/1200/800";
  const normalizedImages = hasImages ? images : [fallback];

  const featuredImage = normalizedImages[currentIndex] ?? fallback;

  const sideImages = Array.from({ length: 4 }, (_, idx) => {
    const nextIndex = (currentIndex + idx + 1) % normalizedImages.length;
    return normalizedImages[nextIndex] ?? fallback;
  });

  const handlePick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <div className="grid gap-2 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2">
        <button
          type="button"
          className="md:row-span-2 h-[360px] rounded-l-2xl bg-zinc-200 bg-cover bg-center md:h-[390px]"
          style={{ backgroundImage: `url(${featuredImage})` }}
          aria-label={`${title} imagen principal`}
          onClick={() => handlePick(currentIndex)}
        />

        {sideImages.map((image, idx) => {
          const imageIndex = (currentIndex + idx + 1) % normalizedImages.length;
          const isLast = idx === sideImages.length - 1;

          return (
            <button
              key={`${image}-${idx}`}
              type="button"
              className={`relative h-[176px] bg-zinc-200 bg-cover bg-center md:h-[194px] ${
                idx === 1 ? "rounded-tr-2xl" : ""
              } ${isLast ? "rounded-br-2xl" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
              aria-label={`${title} imagen ${imageIndex + 1}`}
              onClick={() => handlePick(imageIndex)}
            >
              {isLast ? (
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow">
                  ▦ Mostrar todas las fotos
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
