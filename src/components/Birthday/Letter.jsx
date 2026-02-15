import React, { useEffect, useRef, useState } from 'react'
import "./Letter.css";

const Letter = () => {
    const [musicOn, setMusicOn] = useState(true);
    const audioRef = useRef(null);
    const [showLetter, setShowLetter] = useState(false);

    const openEnvelope = () => {
        setIsLetterOpen(true);
        setTimeout(() => setShowLetter(true), 700);
    };

    useEffect(() => {
        if (musicOn) {
            audioRef.current.volume = 0.25;
            audioRef.current.play();
        }
    }, [])

    const [isLetterOpen, setIsLetterOpen] = useState(false);
    return (
        <div className="openwhen-page">
            {/*  <h1 className="heading">Open when… 💌</h1> */}
            <audio
                ref={audioRef}
                src="/softPiano.mp3"
                loop
            />

            <button
                className={`music-toggle ${musicOn ? "" : "muted"}`}
                onClick={() => {
                    if (!musicOn) {
                        audioRef.current.volume = 0.25;
                        audioRef.current.play();
                    } else {
                        audioRef.current.pause();
                    }
                    setMusicOn(!musicOn);
                }}
            >
                {musicOn ? "🔇 Mute" : "🎶 Play music"}
            </button>

            <div className="letter-stage">
                {/*  <div className={`envelope-wrapper `}> */}
                {!showLetter && (
                    <div
                        className={`envelope ${isLetterOpen ? "open fade-out" : ""}`}
                        onClick={!isLetterOpen ? openEnvelope : undefined}
                    /*  onAnimationEnd={() => {
                        
                         if (isLetterOpen) {
                             setShowEnvelope(false);
                         }
                     }} */
                    >
                        <div className="envelope-flap"></div>
                        <div className="envelope-body">
                            <p className="envelope-text">
                                Open when you need your sister ❤️
                            </p>
                        </div>
                    </div>
                )}
                {/* </div> */}
                {showLetter && (
                    <div className="letter-slot">
                        <div className="letter letter-from-envelope">
                            <p>My Dearest Sister Sarita,</p>
                            <p>
                                Wishing you a very Happy Birthday! May Allah shower you with endless happiness, success, and peace, and may He always protect you from every harm and hardship.
                            </p>
                            <p>
                                You are my most cherished person. No matter how old we get or how busy life becomes, I'll always be right here — cheering for you, standing by you, protecting you, and loving you endlessly.
                            </p>
                            <p>
                                Never doubt your strength, or your worth. You are stronger than you think, kinder than you realise, and loved more than you’ll ever know. You truly are an amazing soul.
                            </p>
                            <p>
                                Happy 25th, my forever baby 💕
                                The world is lucky to have you.
                            </p>
                            <p className="signature">
                                Always your Aapamoni,
                                <br />Tania
                                <div className='heart-letter'>❤️</div>
                            </p>
                            {/* <img
                                src="/gold-wax-seal.webp"
                                alt="Wax seal"
                                className="wax-seal"
                            /> */}

                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Letter