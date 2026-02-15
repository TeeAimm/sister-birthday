import React, { useRef, useState } from 'react'
import "./Spinner.css";
import Confetti from "react-confetti";

const outcomes = [
    "💌 You are deeply loved. Always.",
    "😂 Dare alert! 10 push-ups, no excuses!",
    "🎁 Secret hint - Your surprise arrives this evening 😉",
    "👑 Today, tomorrow, forever — Birthday Queen energy!",
    "✨ Something magical is coming your way.",
    "🥰 Unlimited hugs + biryani 😋 — lifetime subscription!"
];

const Spinner = ({ setStep }) => {
    const spinAudioRef = useRef(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState("");

    const spinWheel = () => {
        setIsSpinning(true);
        setResult("");

        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const spins = 5 * 360 + randomIndex * (360 / outcomes.length);

        if (spinAudioRef.current) {
            spinAudioRef.current.currentTime = 0;
            spinAudioRef.current.volume = 0.4;
            spinAudioRef.current.play();
        }

        setRotation(spins);

        setTimeout(() => {
            setIsSpinning(false);
            setResult(outcomes[randomIndex]);
            // 🔇 stop sound
            if (spinAudioRef.current) {
                spinAudioRef.current.pause();
            }

            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 800);
        }, 4000);
    };

    return (
        <>
            <audio ref={spinAudioRef} src="/spin.mp3" preload="auto" />
            {showConfetti && (
                <div className="spark-burst" />
            )}

            <h1 className="heading">Spin the wheel 🎡</h1>
            <p className="text">Because birthdays deserve a little drama 😄</p>

            <div className="wheel-container">
                <div
                    className={`wheel ${isSpinning ? "spinning" : ""}`}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    <span>💌 Love</span>
                    <span>😂 Dare</span>
                    <span>🎁 Gift</span>
                    <span>👑 Queen</span>
                    <span>✨ Surprise</span>
                    <span>🥰 Hug</span>
                </div>

                <div className="wheel-pointer">▼</div>
            </div>

            {/* {!result && (
                <button className="btn" onClick={spinWheel} disabled={isSpinning}>
                    Spin 🎯
                </button>
            )} */}
            {!result && <button className="btn" onClick={spinWheel} disabled={isSpinning}>
                {isSpinning ? "Spinning…" : "Spin 🎯"}
            </button>}

            {result && (
                <>
                    <p className="spin-result">{result}</p>
                    <button className="btn" onClick={() => setStep(8)}>
                        Continue 💕
                    </button>
                </>
            )}
        </>
    )
}

export default Spinner