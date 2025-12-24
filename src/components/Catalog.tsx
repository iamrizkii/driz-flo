"use client";

import { useState } from "react";
import Image from "next/image";
import { products, categories, formatPrice } from "@/data/products";

export default function Catalog() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredProducts =
        activeCategory === "Semua"
            ? products
            : products.filter((p) => p.category === activeCategory);

    const handleWhatsAppOrder = (productName: string) => {
        const message = encodeURIComponent(
            `Halo, saya tertarik dengan produk ${productName} dari DRIZ.FLO. Apakah masih tersedia?`
        );
        window.open(`https://wa.me/6289637180491?text=${message}`, "_blank");
    };

    return (
        <section
            id="catalog"
            className="section-padding bg-gradient-to-b from-white to-pink-50"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* ===== Header ===== */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                        Koleksi Kami
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-900 mb-6">
                        Katalog <span className="text-pink-500">Produk</span>
                    </h2>

                    <p className="text-lg text-pink-700/70 max-w-2xl mx-auto">
                        Temukan berbagai kreasi cantik dari kawat bulu yang sempurna untuk
                        hadiah, dekorasi, atau koleksi pribadi.
                    </p>
                </div>

                {/* ===== Category Filter ===== */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/30"
                                : "bg-white text-pink-700 hover:bg-pink-100 border border-pink-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* ===== Product Grid ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-lg transition-shadow"
                        >
                            {/* ===== Product Image ===== */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-medium rounded-full">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* ===== Product Info ===== */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-pink-900 mb-2 group-hover:text-pink-600 transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-pink-600/70 mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-pink-600">
                                        {formatPrice(product.price)}
                                    </span>

                                    <button
                                        onClick={() => handleWhatsAppOrder(product.name)}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
                                        </svg>
                                        Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== CTA ===== */}
                <div className="text-center mt-12">
                    <p className="text-pink-700/70 mb-4">
                        Tidak menemukan yang Anda cari? Kami bisa buatkan custom order!
                    </p>

                    <a
                        href="https://wa.me/6289637180491?text=Halo,%20saya%20ingin%20custom%20order%20produk%20DRIZ.FLO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-colors"
                    >
                        Request Custom Order
                    </a>
                </div>
            </div>
        </section>
    );
}
