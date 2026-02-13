import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import "./BirthdayWish.css";
import Cake from "./Cake";
import Spinner from "./Spinner";
import Letter from "./Letter";
import Gallery from "./Gallery";

const BirthdayWish = () => {
  const ageAudioRef = useRef(null);

  const [step, setStep] = useState(1);
  const [age, setAge] = useState(1);

  useEffect(() => {
    if (step === 3 && age < 25) {
      const timer = setTimeout(() => setAge(age + 1), 80);
      return () => clearTimeout(timer);
    }
    if (age === 25) {
      if (ageAudioRef.current) {
        ageAudioRef.current.volume = 0.4;
        ageAudioRef.current.play();
        if (step >= 7) {
          ageAudioRef.current.pause();
          ageAudioRef.current.currentTime = 0;
        }
      }
      const timer = setTimeout(() => {
        if (step === 3) {
          setStep((prev) => prev + 1);
        }
      }, 3500); // 2.5s pause feels perfect

      return () => clearTimeout(timer);
    }
  }, [age, step]);


  const handleStep = (data) => {
    setStep(data)
  }

  return (
    <div className="container">
      {step === 1 && <Confetti />}
      <audio ref={ageAudioRef} src="/age.mp3" preload="auto" />

      <div className="card fade-in">
        {/* PAGE 1 – INTRO */}
        {step === 1 && (
          <>
            <h1 className="heading">A little surprise ✨</h1>
            <p className="text">
              For someone who makes life brighter,
              louder, funnier and warmer 💕
            </p>
            <button className="btn" onClick={() => setStep(2)}>
              Start 🎀
            </button>
          </>
        )}

        {/* PAGE 2 – ANIMATED CAKE */}
        {/* PAGE 2 – NEW ELEGANT CANDLE */}
        {/* PAGE 2 – SYMBOLIC FLAME */}
        {step === 2 && (
          <>
            <h1 className="heading">Make a wish 🎂</h1>

            <div className="cake">
              <div className="floating-flame"></div>

              <div className="cake-layer top" />
              <div className="cake-layer middle" />
              <div className="cake-layer bottom" />
            </div>

            <button className="btn" onClick={() => setStep(3)}>
              Next ✨
            </button>
          </>
        )}

        {/* PAGE 3 – AGE ANIMATION */}
        {step === 3 && (
          <>
            <h1 className="heading">Today you turn…</h1>
            {/*  <div className="age-box">{age < 25 ? age : "🎉"}</div> */}
            <div className={`age-box ${age === 25 ? "celebrate" : ""}`}>
              {age === 25 ? "25 🎉" : age}
              {age === 25 && <div className="age-spark" />}
            </div>

            {/* {age === 25 && <p className="text">25 years of being amazing 💃</p>} */}
            <button disabled={age !== 25} className="btn" onClick={() => setStep(4)}>
              Continue 💖
            </button>
          </>
        )}

        {/* PAGE 4 – MESSAGE */}
        {step === 4 && (
          <>
            <h1 className="heading">From my heart 💌</h1>
            <p className="text">
              You are my safe place,
              my constant,
              my favourite soul ❤️
              Life is better with you in it.
            </p>
            <button className="btn" onClick={() => setStep(5)}>
              Continue 💖
            </button>
          </>
        )}

        {/* PAGE 5 – Cake */}
        {step === 5 && (
          <>
            <h1 className="heading">Another reason to celebrate 🎂</h1>
            <Cake />
            <p className="text">
              Because today is all about you ✨
              And you deserve all the sweetness.
            </p>
            <button className="btn" onClick={() => setStep(6)}>
              Our memories 📸
            </button>
          </>
        )}

        {/* PAGE 6 – PHOTO MEMORIES */}
        {step === 6 && (
          <>
            <h1 className="heading">Us, always 💕</h1>

            <Gallery />

            <button className="btn" onClick={() => setStep(7)}>
              Open your gift 🎁
            </button>
          </>
        )}

        {/* PAGE – SPIN THE WHEEL */}
        {step === 7 && (
          <Spinner setStep={handleStep} />
        )}

        {/* FINAL PAGE – OPEN WHEN LETTER */}
        {step === 8 && (
          <>
            <Letter />
          </>
        )}
      </div>
    </div>
  );
};

export default BirthdayWish;
