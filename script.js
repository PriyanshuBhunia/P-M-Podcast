document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("podcast-video");
    const playPauseButton = document.getElementById("playPause");

    playPauseButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "PLAY";
        }
    });

    // Floating Symbols Effect
    function createFloatingSymbol() {
        const symbols = ['🎵', '🎧', '⭐', '🎤', '🎼', '👗', '👠', '🕶️', '👜', '💄'];
        const symbol = document.createElement('div');
        symbol.classList.add('floating-symbol');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.position = 'absolute';
        symbol.style.fontSize = '2rem';
        symbol.style.left = Math.random() * 100 + 'vw';
        symbol.style.top = Math.random() * 100 + 'vh';
        symbol.style.opacity = '1';
        symbol.style.animation = 'floatUp 5s linear, fadeOut 5s linear forwards';

        document.body.appendChild(symbol);
        setTimeout(() => symbol.remove(), 5000);
    }

    setInterval(createFloatingSymbol, 1000);
});
