"use client";

import React from "react";

export default function Lightbox({ src, alt, caption, onClose }: { src: string; alt?: string; caption?: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="max-w-[90vw] max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || caption} className="max-w-full max-h-[80vh] rounded-md shadow-2xl" />
        {caption ? (
          <p className="mt-3 text-sm text-white/70 text-center font-mono">{caption}</p>
        ) : null}
        <button className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-2" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  );
}
