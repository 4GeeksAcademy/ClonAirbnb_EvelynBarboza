"use client";

import Image from "next/image";
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

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? normalizedImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === normalizedImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="space-y-3">
      <div className="grid gap-2 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2">
        <button
          type="button"
          className="h-[250px] overflow-hidden rounded-2xl bg-zinc-200 md:row-span-2 md:h-[390px] md:rounded-l-2xl"
          aria-label={`${title} imagen principal`}
          onClick={() => handlePick(currentIndex)}
        >
          <Image
            src={featuredImage}
            alt={`${title} imagen principal`}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </button>

        {sideImages.map((image, idx) => {
          const imageIndex = (currentIndex + idx + 1) % normalizedImages.length;
          const isLast = idx === sideImages.length - 1;

          return (
            <button
              key={`${image}-${idx}`}
              type="button"
              className={`relative hidden h-[194px] overflow-hidden bg-zinc-200 md:block ${
                idx === 1 ? "rounded-tr-2xl" : ""
              } ${isLast ? "rounded-br-2xl" : ""}`}
              aria-label={`${title} imagen ${imageIndex + 1}`}
              onClick={() => handlePick(imageIndex)}
            >
              <Image
                src={image}
                alt={`${title} imagen ${imageIndex + 1}`}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
              {isLast ? (
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow">
                  ▦ Mostrar todas las fotos
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-600">
          Imagen {currentIndex + 1} de {normalizedImages.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm font-semibold text-zinc-700"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm font-semibold text-zinc-700"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
