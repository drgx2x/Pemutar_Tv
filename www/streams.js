// Daftar Live Stream (Twitch / YouTube)
// Properti 'name' bersifat opsional. Jika dikosongkan (""), aplikasi akan otomatis mendeteksinya.

const myStreams = [
    { 
        name: "", // Otomatis terdeteksi: "Shroud"
        url: "shroud" 
    },
    { 
        name: "", // Otomatis terdeteksi dari judul video YouTube
        url: "https://www.youtube.com/watch?v=jfKfPfyJRdk" 
    },
    { 
        name: "NASA Official Live", // Jika diisi manual, teks ini yang akan dipakai
        url: "https://www.youtube.com/watch?v=21X5lGlDOfg" 
    }
];
