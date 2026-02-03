let coins = 0;

function collectCoin() {
    coins++;
    playCoinSound();
    document.getElementById("coinCount").innerHTML = "Coins: " + coins + " / 5";

    if (coins >= 5) {
        document.getElementById("message").classList.remove("hidden");
    }
}

function playCoinSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.15);
}

function sayYes() {
    document.getElementById("loveMessage").classList.remove("hidden");
}

function shakeNo() {
    const btn = document.querySelector(".no-btn");
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 300);
}
