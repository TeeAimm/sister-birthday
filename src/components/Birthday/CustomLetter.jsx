import React, { useEffect, useRef, useState } from 'react'
import "./CustomLetter.css";

const CustomLetter = () => {
    const [open, setOpen] = useState(false);
    const [musicOn, setMusicOn] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (musicOn && audioRef.current) {
            audioRef.current.volume = 0.25;
            audioRef.current.play();
        }
    }, []);

    return (
        <div className="openwhen-page">
            <audio ref={audioRef} src="/softPiano.mp3" loop />

            <button
                className={`music-toggle ${musicOn ? "" : "muted"}`}
                onClick={() => {
                    if (musicOn) audioRef.current.pause();
                    else {
                        audioRef.current.volume = 0.25;
                        audioRef.current.play();
                    }
                    setMusicOn(!musicOn);
                }}
            >
                {musicOn ? "🔇 Mute" : "🎶 Play music"}
            </button>

            {/* CARD → LETTER */}
            {!open ? (
                <div className="letter-card" onClick={() => setOpen(true)}>
                    <p>Open when you need your sister ❤️</p>
                </div>
            ) : (
                <div className="letter letter-appear">
                    <p>My dear sister,</p>

                    <p>
                        Open this when life feels heavy, when you’re doubting yourself,
                        or when you just need to feel loved.
                    </p>

                    <p>
                        I want you to remember that you are stronger than you think,
                        kinder than you realise, and loved more than you’ll ever know.
                    </p>

                    <p>
                        No matter how old we get or how busy life becomes,
                        I’ll always be right here — cheering for you,
                        protecting you, and loving you endlessly.
                    </p>

                    <p>
                        Happy 25th, my forever baby 💕
                        The world is lucky to have you.
                    </p>

                    <p className="signature">
                        Always your sister,
                        <br />❤️
                    </p>
                </div>
            )}
        </div>
    );
}

export default CustomLetter