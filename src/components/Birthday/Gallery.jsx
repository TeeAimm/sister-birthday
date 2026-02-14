import React, { useRef, useState } from 'react'
import './Gallery.css'

const photos = [
    '/photos/SaritaGulmarg1.jpg',
    '/photos/weAll.jpg',
    '/photos/SaritaMaa.jpg',
    '/photos/SaritaPapa.jpg',
    '/photos/meSaritaGulmarg.jpg',
    '/photos/Style.jpg',
    '/photos/SaritaDrawing.jpg',
    '/photos/SaritaApple.jpg',
    '/photos/Sarita1.jpg',
    '/photos/SaritaBeautiful.jpg',
    '/photos/SaritaPlaying.jpg',
    '/photos/SaritaSnow.jpg',
    '/photos/saritaMeSnow.jpg',
    '/photos/SaritaMeLove.jpg'

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
                    /*  <img
                         key={i}
                         src={src}
                         alt={`Memory ${i + 1}`}
                         loading="lazy"
                         className="photo-thumb"
                         onClick={() => setActiveIndex(i)}
                         decoding="async"
                         onLoad={(e) => e.target.classList.add("loaded")}
                     /> */
                    <div className="photo-wrapper" key={i}>
                        <div className="shimmer" />
                        <img
                            src={src}
                            alt={`Memory ${i + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="photo-thumb"
                            onClick={() => setActiveIndex(i)}
                            onLoad={(e) => {
                                e.target.classList.add("loaded");
                                e.target.previousSibling.classList.add("hide");
                            }}
                        />
                    </div>

                ))}
            </div>

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