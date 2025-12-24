export interface GalleryItem {
    id: number;
    image: string;
    caption: string;
    category: string;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        image: "/images/gallery/gallery-1.jpg",
        caption: "Buket Valentine Spesial",
        category: "Buket"
    },
    {
        id: 2,
        image: "/images/gallery/gallery-2.jpg",
        caption: "Koleksi Gantungan Kunci",
        category: "Keychain"
    },
    {
        id: 3,
        image: "/images/gallery/gallery-3.jpg",
        caption: "Dekorasi Wisuda",
        category: "Dekorasi"
    },
    {
        id: 4,
        image: "/images/gallery/gallery-4.jpg",
        caption: "Rangkaian Bunga Ulang Tahun",
        category: "Buket"
    },
    {
        id: 5,
        image: "/images/gallery/gallery-5.jpg",
        caption: "Custom Order Karakter",
        category: "Custom"
    },
    {
        id: 6,
        image: "/images/gallery/gallery-6.jpg",
        caption: "Hampers Gift Set",
        category: "Gift"
    }
];
