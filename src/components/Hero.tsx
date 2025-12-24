"use client";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-pink-radial"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200/50 animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-pink-300/40 animate-float delay-200"></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-pink-200/60 animate-float delay-400"></div>
                <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-pink-300/50 animate-float delay-300"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse-soft"></span>
                        <span className="text-sm font-medium text-pink-700">Handmade with Love ❤️</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className="text-gradient">DRIZ</span>
                        <span className="text-pink-400">.</span>
                        <span className="text-gradient">FLO</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-medium mb-4 animate-fade-in-up delay-100">
                        Kreasi Cantik dari Kawat Bulu
                    </p>

                    <p className="text-base sm:text-lg text-pink-600/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                        Buket bunga, gantungan kunci, dan dekorasi unik yang dibuat dengan penuh cinta.
                        Setiap produk adalah karya seni yang tak tergantikan.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="#catalog"
                            className="btn-primary inline-flex items-center gap-2 text-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Lihat Katalog
                        </a>
                        <a
                            href="#about"
                            className="btn-secondary inline-flex items-center gap-2 text-lg"
                        >
                            Tentang Kami
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#about" className="text-pink-400 hover:text-pink-500 transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
