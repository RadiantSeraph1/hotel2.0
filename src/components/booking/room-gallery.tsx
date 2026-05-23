"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function RoomGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const activeImage = images[index] ?? images[0];

  function previous() {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function next() {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="room-gallery">
      <div className="room-gallery-main">
        <Image src={activeImage} alt={title} width={1400} height={820} priority />
        {images.length > 1 ? (
          <>
            <button className="gallery-arrow gallery-arrow-left focus-ring" onClick={previous} type="button" aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <button className="gallery-arrow gallery-arrow-right focus-ring" onClick={next} type="button" aria-label="Next image">
              <ChevronRight size={24} />
            </button>
            <span className="gallery-count">
              {index + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>
      <div className="room-thumbs">
        {images.map((image, thumbIndex) => (
          <button
            className={thumbIndex === index ? "active focus-ring" : "focus-ring"}
            key={image}
            onClick={() => setIndex(thumbIndex)}
            type="button"
          >
            <Image src={image} alt={`${title} ${thumbIndex + 1}`} width={160} height={110} />
          </button>
        ))}
      </div>
    </div>
  );
}
