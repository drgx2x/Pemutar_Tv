# Stream Player & TV (YouTube & Twitch)

Aplikasi web pemutar streaming multi-platform (YouTube & Twitch) yang dirancang ringan, responsif, dan ramah perangkat seluler.

## Fitur Utama

- **Multi-Platform Support**: Pemutaran otomatis video/live stream YouTube dan Twitch beserta kolom live chat masing-masing platform.
- **Playlist Management & Export (`streams.js`)**:
  - Kelola daftar channel favorit dengan mudah melalui modal list.
  - **Drag & Drop / Swipe Reordering**: Menyusun ulang urutan channel cukup dengan menggeser (swipe/drag) item playlist langsung di layar HP maupun desktop.
  - **Export `streams.js`**: Tombol unduh instan untuk memperbarui file `streams.js` setiap kali ada penambahan, penghapusan, atau perubahan urutan playlist.
- **Sleep Timer**: Fitur pengatur waktu tidur otomatis (15m, 30m, 45m, 60m, atau waktu manual) yang akan menghentikan pemutaran stream saat waktu habis.
- **Auto Fullscreen & Landscape Lock**: Otomatis menyesuaikan orientasi layar saat mode fullscreen diaktifkan pada perangkat yang mendukung.

## Cara Penggunaan

1. Buka aplikasi melalui browser.
2. Masukkan URL YouTube/Twitch atau nama channel pada kolom input, lalu klik **Putar**.
3. Klik tombol **≡ List** untuk membuka daftar playlist tersimpan, menambah channel baru, menghapus, mengedit, atau menyusun ulang urutannya dengan cara menggeser (swipe).
4. Gunakan tombol **📥 Export streams.js** untuk mendownload file konfigurasi terbaru guna diperbarui ke repositori GitHub.
