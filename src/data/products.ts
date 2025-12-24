export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Buket Mawar Pink",
        price: 85000,
        image: "/images/products/buket-mawar.jpg",
        category: "Buket Bunga",
        description: "Buket mawar cantik dari kawat bulu dengan sentuhan romantis"
    },
    {
        id: 2,
        name: "Buket Tulip Pastel",
        price: 95000,
        image: "/images/products/buket-tulip.jpg",
        category: "Buket Bunga",
        description: "Rangkaian tulip pastel yang elegan dan timeless"
    },
    {
        id: 3,
        name: "Buket Sunflower",
        price: 75000,
        image: "/images/products/buket-sunflower.jpg",
        category: "Buket Bunga",
        description: "Buket bunga matahari cerah untuk momen spesial"
    },
    {
        id: 4,
        name: "Gantungan Kunci Bunga",
        price: 25000,
        image: "/images/products/keychain-bunga.jpg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci mini berbentuk bunga yang cute"
    },
    {
        id: 5,
        name: "Gantungan Kunci Hati",
        price: 20000,
        image: "/images/products/keychain-hati.jpg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci bentuk hati penuh cinta"
    },
    {
        id: 6,
        name: "Gantungan Kunci Karakter",
        price: 35000,
        image: "/images/products/keychain-karakter.jpg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci custom karakter favorit"
    },
    {
        id: 7,
        name: "Dekorasi Meja Bunga",
        price: 120000,
        image: "/images/products/dekorasi-meja.jpg",
        category: "Pot Mini",
        description: "Dekorasi meja cantik untuk ruangan Anda"
    },
    {
        id: 8,
        name: "Rangkaian Dinding",
        price: 150000,
        image: "/images/products/dekorasi-dinding.jpg",
        category: "Pot Mini",
        description: "Hiasan dinding estetik dari kawat bulu"
    }
];

export const categories = [
    "Semua",
    "Buket Bunga",
    "Gantungan Kunci",
    "Pot Mini"
];

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};
