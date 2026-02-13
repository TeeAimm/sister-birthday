import React, { useRef, useState } from 'react'
import './Gallery.css'

const photos = [
    '/photos/faceMask.jpg',
    '/photos/MeSarita.jpg',
    '/photos/meSarita1.jpg',
    '/photos/meSaritaGulmarg.jpg',
    '/photos/Sarita1.jpg',
    '/photos/SaritaApple.jpg',
    '/photos/SaritaBeautiful.jpg',
    '/photos/SaritaDrawing.jpg',
    '/photos/SaritaFunction.jpg',
    '/photos/SaritaGulmarg.jpg',
    '/photos/SaritaGulmarg1.jpg',
    '/photos/SaritaHorse.jpg',
    '/photos/SaritaMaa.jpg',
    '/photos/SaritaPapa.jpg',
    '/photos/weAll.jpg',
    '/photos/SaritaStyle.jpg',
    '/photos/SaritaSnow.jpg',
    '/photos/SaritaPlaying.jpg',
    '/photos/saritaMeSnow.jpg',
    '/photos/SaritaMePariMahal.jpg',
    '/photos/SaritaLaddu.jpg',
    '/photos/Style.jpg',
    /* "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" */
];

const Gallery = () => {
    // const [activePhoto, setActivePhoto] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const touchStartX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        // swipe threshold
        if (Math.abs(diff) < 50) return;

        if (diff > 0 && activeIndex < photos.length - 1) {
            // swipe left → next
            setActiveIndex(activeIndex + 1);
        } else if (diff < 0 && activeIndex > 0) {
            // swipe right → prev
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <>
            <div className="photo-grid">
                {photos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Memory ${i + 1}`}
                        loading="lazy"
                        className="photo-thumb"
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>

            {/* LIGHTBOX */}
            {/*  {activePhoto && (
                <div className="lightbox" onClick={() => setActivePhoto(null)}>
                    <img src={activePhoto} alt="Full view" className="lightbox-img" />
                    <span className="close-btn">×</span>
                </div>
            )} */}
            {activeIndex !== null && (
                <div className="lightbox" onClick={() => setActiveIndex(null)}>
                    <img
                        src={photos[activeIndex]}
                        className="lightbox-img"
                        alt="Memory"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    />

                    <span className="close-btn">×</span>
                </div>
            )}
        </>
    )
}

export default Gallery