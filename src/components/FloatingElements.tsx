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
        <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
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

            {/* Floating Sakura Flowers */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={`sakura-${i}`}
                    className="absolute opacity-30 animate-float-up"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: `-10%`,
                        width: `${32 + Math.random() * 24}px`,
                        height: `${32 + Math.random() * 24}px`,
                        animationDuration: `${14 + Math.random() * 10}s`,
                        animationDelay: `${Math.random() * 8}s`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full text-pink-300"
                    >
                        <path d="
        M12 2
        C13.5 5 16 6 19 6
        C17 8 16.5 10.5 18 13
        C15 12.5 13.5 14 12 16
        C10.5 14 9 12.5 6 13
        C7.5 10.5 7 8 5 6
        C8 6 10.5 5 12 2
        Z
      " />
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
