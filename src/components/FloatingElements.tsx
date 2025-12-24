"use client";

import { useEffect, useState } from "react";

interface FloatingPetal {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
    rotateAmount: number;
    swayAmount: number;
}

interface Sparkle {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
}

export default function FloatingElements() {
    const [petals, setPetals] = useState<FloatingPetal[]>([]);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        // Generate falling petals
        const petalColors = [
            "text-pink-200",
            "text-pink-300",
            "text-pink-400",
            "text-rose-200",
            "text-rose-300",
            "text-fuchsia-200",
            "text-fuchsia-300",
        ];

        const newPetals: FloatingPetal[] = [];
        for (let i = 0; i < 15; i++) {
            newPetals.push({
                id: i,
                left: Math.random() * 100,
                size: 12 + Math.random() * 12,
                duration: 12 + Math.random() * 10,
                delay: Math.random() * 15,
                color: petalColors[Math.floor(Math.random() * petalColors.length)],
                rotateAmount: Math.random() * 360,
                swayAmount: 50 + Math.random() * 100,
            });
        }
        setPetals(newPetals);

        // Generate sparkles
        const newSparkles: Sparkle[] = [];
        for (let i = 0; i < 20; i++) {
            newSparkles.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 3 + Math.random() * 5,
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 5,
            });
        }
        setSparkles(newSparkles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Falling Petals */}
            {petals.map((petal) => (
                <div
                    key={`petal-${petal.id}`}
                    className={`absolute ${petal.color} opacity-50 animate-fall`}
                    style={{
                        left: `${petal.left}%`,
                        top: `-5%`,
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        animationDuration: `${petal.duration}s`,
                        animationDelay: `${petal.delay}s`,
                        ["--sway-amount" as string]: `${petal.swayAmount}px`,
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full"
                    >
                        <ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(45 12 12)" />
                    </svg>
                </div>
            ))}

            {/* Floating Hearts */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={`heart-${i}`}
                    className="absolute text-pink-300 opacity-30 animate-float-up"
                    style={{
                        left: `${10 + i * 12}%`,
                        bottom: `-10%`,
                        fontSize: `${14 + Math.random() * 10}px`,
                        animationDuration: `${15 + Math.random() * 10}s`,
                        animationDelay: `${Math.random() * 10}s`,
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            ))}

            {/* Sparkles */}
            {sparkles.map((sparkle) => (
                <div
                    key={`sparkle-${sparkle.id}`}
                    className="absolute bg-pink-400 rounded-full animate-sparkle opacity-60"
                    style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        animationDuration: `${sparkle.duration}s`,
                        animationDelay: `${sparkle.delay}s`,
                    }}
                />
            ))}

            {/* Floating Dots/Bubbles */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={`bubble-${i}`}
                    className="absolute rounded-full animate-float opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${20 + Math.random() * 40}px`,
                        height: `${20 + Math.random() * 40}px`,
                        background: `linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(219, 39, 119, 0.1))`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
}
