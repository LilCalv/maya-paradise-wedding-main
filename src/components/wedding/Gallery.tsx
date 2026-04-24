'use client';

import { useState, useCallback } from "react";
import { X } from "lucide-react";

// Generar automáticamente array de 50 fotos con fallback de extensiones
const generatePhotoArray = () => {
  // Extensiones en orden de prioridad
  const extensions = ['jpeg', 'jpg', 'png', 'webp'];
  
  return Array.from({ length: 50 }, (_, i) => {
    const photoNum = i + 1;
    // Foto 4-7 tienen .jpg, resto tienen .jpeg
    const ext = [4, 5, 6, 7].includes(photoNum) ? 'jpg' : 'jpeg';
    
    return {
      id: photoNum,
      src: `/fotos/foto${photoNum}.${ext}`,
      alt: `Momento ${photoNum} de la boda`,
    };
  });
};

// Frases místicas para descripciones
const mysticalPhrases = [
  "En Lakesh: Yo soy otro tú, tú eres otro yo.",
  "La unidad en la dualidad, como el Hunab Ku.",
  "Energía pura del amor en cada momento.",
  "Holbox: donde el cielo toca el agua.",
  "Dos almas, una sola danza cósmica.",
  "El universo celebra nuestra unión.",
];

const photos = generatePhotoArray();

// Función para asignar descripción aleatoria basada en ID
const getPhotoDescription = (id: number) => {
  return mysticalPhrases[(id - 1) % mysticalPhrases.length];
};

export function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Mostrar solo primeras 20, o todas si showAll es true
  const displayedPhotos = showAll ? photos : photos.slice(0, 20);

  const openLightbox = useCallback((id: number) => {
    setSelectedPhotoId(id);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedPhotoId(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const selectedPhoto = selectedPhotoId ? photos.find(p => p.id === selectedPhotoId) : null;

  return (
    <section id="gallery" className="relative bg-cream px-6 py-28 md:py-36 paper-grain">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-xs uppercase tracking-[0.45em] text-gold">Galería</p>
          <h2 className="mt-4 font-display text-5xl italic text-gold md:text-6xl">
            Nuestros Momentos
          </h2>
          <div className="ornament-divider mt-8 mx-auto max-w-sm" />
        </div>

        {/* Masonry Grid Layout */}
        <div className="reveal reveal-delay-1">
          <style>{`
            .masonry-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
              gap: 1rem;
              grid-auto-rows: 220px;
            }
            @media (min-width: 768px) {
              .masonry-grid {
                grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                gap: 1.25rem;
                grid-auto-rows: 260px;
              }
            }
            @media (min-width: 1024px) {
              .masonry-grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
                grid-auto-rows: 280px;
              }
            }
            .masonry-item {
              overflow: hidden;
              border-radius: 0.5rem;
              border: 1px solid rgba(212, 175, 55, 0.3);
              cursor: pointer;
              position: relative;
              background: #f5f1e8;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .masonry-item:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 50px -15px rgba(26, 60, 52, 0.15);
              border-color: rgba(212, 175, 55, 0.6);
            }
            .masonry-item:nth-child(3n) {
              grid-row: span 1.2;
            }
            .masonry-item:nth-child(5n) {
              grid-column: span 1.1;
            }
            .masonry-item img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease, filter 0.3s ease;
              filter: sepia(0.15) saturate(1.1) hue-rotate(8deg) brightness(1.05) contrast(1.02);
            }
            .masonry-item:hover img {
              transform: scale(1.05);
              filter: brightness(0.9);
            }
            .masonry-item .photo-overlay {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0);
              display: flex;
              align-items: flex-end;
              padding: 1rem;
              transition: background 0.3s ease;
            }
            .masonry-item:hover .photo-overlay {
              background: rgba(0, 0, 0, 0.4);
            }
            .masonry-item .photo-text {
              color: #f5f1e8;
              font-size: 0.875rem;
              font-style: italic;
              opacity: 0;
              transition: opacity 0.3s ease;
              text-shadow: 0 2px 4px rgba(0,0,0,0.5);
            }
            .masonry-item:hover .photo-text {
              opacity: 1;
            }
            .image-placeholder {
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #f5f1e8 0%, #ede9dd 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #d4af37;
              font-size: 0.875rem;
            }
          `}</style>

          <div className="masonry-grid">
            {displayedPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`masonry-item reveal reveal-delay-${Math.min(Math.floor(index / 4) + 1, 5)}`}
                onClick={() => openLightbox(photo.id)}
              >
                {loadedImages.has(photo.id) ? (
                  <>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      onLoad={() => handleImageLoad(photo.id)}
                      className="w-full h-full object-cover"
                    />
                    <div className="photo-overlay">
                      <p className="photo-text">{getPhotoDescription(photo.id)}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      onLoad={() => handleImageLoad(photo.id)}
                      className="w-full h-full object-cover"
                    />
                    <div className="image-placeholder">
                      Cargando...
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Botón "Ver más momentos" */}
          {!showAll && photos.length > 20 && (
            <div className="mt-12 text-center reveal">
              <button
                onClick={() => setShowAll(true)}
                className="inline-block px-8 py-3 border-2 border-gold text-gold font-display italic rounded-lg hover:bg-gold hover:text-emerald-deep transition-all duration-300 hover:scale-105 hover:shadow-gold"
              >
                Ver más momentos ({photos.length - 20} fotos)
              </button>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <style>{`
              .lightbox-container {
                animation: fadeIn 0.3s ease;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>

            <div
              className="lightbox-container relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen */}
              <div className="relative border-4 border-gold rounded-lg overflow-hidden bg-black">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Descripción y número */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-cream">
                  <p className="text-sm italic text-gold mb-2">
                    {getPhotoDescription(selectedPhoto.id)}
                  </p>
                  <p className="text-xs tracking-widest opacity-70">
                    Momento {selectedPhoto.id} de {photos.length}
                  </p>
                </div>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={closeLightbox}
                aria-label="Cerrar"
                className="absolute -top-14 right-0 p-2 text-gold hover:text-cream transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navegación */}
              <div className="flex items-center justify-between mt-6 text-cream text-sm">
                <button
                  onClick={() => {
                    const newId = selectedPhoto.id === 1 ? photos.length : selectedPhoto.id - 1;
                    setSelectedPhotoId(newId);
                  }}
                  className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all rounded"
                >
                  ← Anterior
                </button>
                <span className="tracking-wider text-gold">
                  {selectedPhoto.id} / {photos.length}
                </span>
                <button
                  onClick={() => {
                    const newId = selectedPhoto.id === photos.length ? 1 : selectedPhoto.id + 1;
                    setSelectedPhotoId(newId);
                  }}
                  className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all rounded"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
