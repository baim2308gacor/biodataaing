
document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.querySelector(".floating-hearts");
    const messageButton = document.getElementById("love-message-button");
    const secretMessage = document.getElementById("secret-message");

    // Membuat hati yang melayang
    if (heartContainer) {
        const symbols = ["♥", "♡", "❤", "✧"];

        function createHeart() {
            // Batasi jumlah elemen agar tetap ringan
            if (heartContainer.childElementCount >= 24) return;

            const heart = document.createElement("span");
            heart.className = "floating-heart";
            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left = Math.random() * 100 + "%";
            heart.style.fontSize = (12 + Math.random() * 20) + "px";
            heart.style.animationDuration = (8 + Math.random() * 8) + "s";

            heartContainer.appendChild(heart);

            heart.addEventListener("animationend", () => {
                heart.remove();
            }, { once: true });
        }

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!reducedMotion) {
            createHeart();
            const heartTimer = window.setInterval(createHeart, 700);

            // Hentikan pembuatan hati saat halaman tidak terlihat
            document.addEventListener("visibilitychange", () => {
                if (document.hidden) {
                    window.clearInterval(heartTimer);
                }
            }, { once: true });
        }
    }

    // Tombol untuk membuka pesan rahasia
    if (messageButton && secretMessage) {
        messageButton.addEventListener("click", () => {
            secretMessage.hidden = !secretMessage.hidden;

            messageButton.textContent = secretMessage.hidden
                ? "Klik untuk pesan kecil 💗"
                : "Sembunyikan pesan 💌";
				
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");
const musicDisc = document.getElementById("music-disc");

if (music && musicButton) {
    musicButton.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();
            } catch (error) {
                musicStatus.textContent =
                    "Musik gagal diputar. Periksa file audio.";
            }
        } else {
            music.pause();
        }
    });

    music.addEventListener("play", () => {
        musicButton.textContent = "❚❚";
        musicButton.setAttribute("aria-label", "Jeda musik");
        musicButton.setAttribute("aria-pressed", "true");
        musicStatus.textContent = "Musik sedang diputar ♡";
        musicDisc.classList.add("playing");
    });

    music.addEventListener("pause", () => {
        musicButton.textContent = "▶";
        musicButton.setAttribute("aria-label", "Putar musik");
        musicButton.setAttribute("aria-pressed", "false");
        musicStatus.textContent = "Musik sedang dijeda";
        musicDisc.classList.remove("playing");
    });

    music.addEventListener("error", () => {
        musicStatus.textContent = "File musik tidak ditemukan";
    });
}

       
	   });
    }
});
