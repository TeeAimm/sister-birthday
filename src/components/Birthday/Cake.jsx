import React from 'react'
import "./Cake.css";

const Cake = () => {
    return (
        <div className="rosecake-stage">
            <svg
                className="rosecake"
                width="280"
                height="260"
                viewBox="0 0 280 260"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Shadow */}
                <ellipse
                    cx="140"
                    cy="235"
                    rx="85"
                    ry="12"
                    fill="rgba(0,0,0,0.25)"
                />

                {/* Cake base */}
                <defs>
                    <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f7b1c8" />
                        <stop offset="100%" stopColor="#e78aa7" />
                    </linearGradient>

                    <radialGradient id="petal" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ffdce8" />
                        <stop offset="100%" stopColor="#f2a4bf" />
                    </radialGradient>

                    <radialGradient id="flameGlow" cx="50%" cy="0%" r="70%">
                        <stop offset="0%" stopColor="#ffd166" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
                    </radialGradient>

                </defs>

                <path
                    d="M60 120 Q140 160 220 120 L220 190 Q140 220 60 190 Z"
                    fill="url(#cakeBase)"
                />

                {/* Rosette petals – deeper swirls */}
                <g className="rosecake-petals">
                    <path
                        d="M100 150
       C80 135, 80 170, 100 165
       C120 160, 120 140, 100 150 Z"
                        fill="url(#petal)"
                    />
                    <path
                        d="M140 145
       C110 120, 115 180, 145 175
       C175 170, 175 120, 140 145 Z"
                        fill="url(#petal)"
                    />
                    <path
                        d="M180 150
       C160 135, 160 170, 180 165
       C200 160, 200 140, 180 150 Z"
                        fill="url(#petal)"
                    />
                </g>


                {/* Wavy candles */}
                <g className="rosecake-candles">
                    {[90, 110, 130, 150, 170, 190].map((x, i) => (
                        <path
                            key={i}
                            d={`M${x} 60 C ${x - 6} 80, ${x + 6} 100, ${x} 120`}
                            stroke="#7a2f3e"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                    ))}
                </g>

                {/* Flames */}
                {[90, 110, 130, 150, 170, 190].map((x, i) => (
                    <ellipse
                        key={i}
                        cx={x}
                        cy="55"
                        rx="4"
                        ry="7"
                        fill="#ffb703"
                        className="rosecake-flame"
                    />
                ))}

                <ellipse
                    cx="140"
                    cy="90"
                    rx="90"
                    ry="28"
                    fill="url(#flameGlow)"
                    className="rosecake-glow"
                />

                {/* Pearl dust */}
                <g className="rosecake-dust">
                    <circle cx="115" cy="155" r="1.2" fill="#fff" />
                    <circle cx="135" cy="160" r="1" fill="#fff" />
                    <circle cx="155" cy="150" r="1.3" fill="#fff" />
                    <circle cx="170" cy="165" r="0.9" fill="#fff" />
                </g>

            </svg>
        </div>
    )
}

export default Cake