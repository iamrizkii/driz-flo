# Panduan Deploy DRIZ.FLO ke Vercel

## Persiapan

1. Pastikan project sudah di-push ke repository GitHub

## Langkah-langkah Deploy

### 1. Push ke GitHub
```bash
cd c:\laragon\www\driz
git add .
git commit -m "Initial commit: DRIZ.FLO landing page"
git remote add origin https://github.com/username/driz-flo.git
git push -u origin main
```

### 2. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"** atau **"New Project"**
3. Pilih **"Import Git Repository"**
4. Pilih repository `driz-flo` dari daftar
5. Vercel akan otomatis mendeteksi Next.js sebagai framework
6. Biarkan semua settings default (tidak perlu diubah)
7. Klik **"Deploy"**
8. Tunggu proses build selesai (~1-2 menit)
9. Setelah selesai, klik URL yang diberikan untuk melihat website live

## Konfigurasi Tambahan (Opsional)

### Custom Domain
1. Buka project di Vercel Dashboard
2. Pergi ke **Settings** > **Domains**
3. Tambahkan domain custom Anda
4. Ikuti instruksi untuk setup DNS

### Environment Variables
Website ini tidak memerlukan environment variables karena 100% statis.

## Troubleshooting

### Build Error
Jika terjadi error saat build:
```bash
npm run build
```
Pastikan tidak ada error di output.

### Lint Error
```bash
npm run lint
```
Perbaiki semua warning/error yang muncul.

## Catatan Penting

- Website ini 100% statis dan tidak memerlukan database
- Semua data produk di-hardcode di `src/data/products.ts`
- Untuk mengubah produk, edit file tersebut lalu push ulang ke GitHub
- Vercel akan otomatis re-deploy saat ada push baru
