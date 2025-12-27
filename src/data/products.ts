export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export const products: Product[] = [
    // ===== BUKET =====
    {
        id: 1,
        name: "Buket Daisy",
        price: 15000,
        image: "/images/products/buket-daisy.jpeg",
        category: "Buket Bunga",
        description: "Buket bunga daisy handmade dari kawat bulu"
    },

    // ===== KEYCHAIN =====
    {
        id: 2,
        name: "Keychain Anggrek",
        price: 15000,
        image: "/images/products/keychain-anggrek2.jpeg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci bunga anggrek mini"
    },
    {
        id: 3,
        name: "Keychain Norigae Daisy",
        price: 5000,
        image: "/images/products/keychain-daisy.jpeg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci bunga daisy lucu"
    },
    {
        id: 4,
        name: "Keychain Daisy Mirror",
        price: 10000,
        image: "/images/products/keychain-daisymirror2.jpeg",
        category: "Gantungan Kunci",
        description: "Keychain daisy dengan aksen cermin"
    },
    {
        id: 5,
        name: "Keychain Lily",
        price: 5000,
        image: "/images/products/keychain-lily.jpeg",
        category: "Gantungan Kunci",
        description: "Gantungan kunci bunga lily pastel"
    },
    {
        id: 6,
        name: "Keychain Lollipop",
        price: 3000,
        image: "/images/products/keychain-lollipop.jpeg",
        category: "Gantungan Kunci",
        description: "Keychain lollipop warna-warni"
    },
    {
        id: 7,
        name: "Keychain Mini Ribbon",
        price: 3000,
        image: "/images/products/keychain-miniribbon.jpeg",
        category: "Gantungan Kunci",
        description: "Keychain pita mini yang imut"
    },
    {
        id: 8,
        name: "Keychain Mini Ribbon Variasi",
        price: 3000,
        image: "/images/products/keychain-miniribbon2.jpeg",
        category: "Gantungan Kunci",
        description: "Keychain pita mini dengan warna berbeda"
    },
    {
        id: 9,
        name: "Keychain Mirror Cat",
        price: 12000,
        image: "/images/products/keychain-mirrorcat.jpeg",
        category: "Gantungan Kunci",
        description: "Keychain cermin karakter kucing"
    },

    // ===== POT MINI =====
    {
        id: 10,
        name: "Pot Mini Lotus",
        price: 20000,
        image: "/images/products/potmini-lotus.jpeg",
        category: "Pot Mini",
        description: "Tanaman lotus mini dari kawat bulu"
    },
    {
        id: 11,
        name: "Pot Mini Tulip",
        price: 25000,
        image: "/images/products/potmini-tulip.jpeg",
        category: "Pot Mini",
        description: "Pot mini bunga tulip handmade"
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
        minimumFractionDigits: 0
    }).format(price);
};
