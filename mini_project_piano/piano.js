const C4 = new Audio("piano_sounds/C4.mp3");
const Db4 = new Audio("piano_sounds/Db4.mp3");
const D4 = new Audio("piano_sounds/D4.mp3");
const Eb4 = new Audio("piano_sounds/Eb4.mp3");
const E4 = new Audio("piano_sounds/E4.mp3");
const F4 = new Audio("piano_sounds/F4.mp3");
const Gb4 = new Audio("piano_sounds/Gb4.mp3");
const G4 = new Audio("piano_sounds/G4.mp3");
const Ab4 = new Audio("piano_sounds/Ab4.mp3");
const A4 = new Audio("piano_sounds/A4.mp3");
const Bb4 = new Audio("piano_sounds/Bb4.mp3");
const B4 = new Audio("piano_sounds/B4.mp3");
const C5 = new Audio("piano_sounds/C5.mp3");
const Db5 = new Audio("piano_sounds/Db5.mp3");
const D5 = new Audio("piano_sounds/D5.mp3");
const Eb5 = new Audio("piano_sounds/Eb5.mp3");
const E5 = new Audio("piano_sounds/E5.mp3");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

//C4
const C4Key = document.querySelector(".C4");
const playC4 = () => {
    playSound(C4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 300);
}
C4Key.addEventListener("click", playC4);

//Db4
const Db4Key = document.querySelector(".Db4");
const playDb4 = () => {
    playSound(Db4);
    Db4Key.classList.add("active");
    setTimeout(() => Db4Key.classList.remove("active"), 300);
}
Db4Key.addEventListener("click", playDb4);

//D4
const D4Key = document.querySelector(".D4");
const playD4 = () => {
    playSound(D4);
    D4Key.classList.add("active");
    setTimeout(() => D4Key.classList.remove("active"), 300);
}
D4Key.addEventListener("click", playDb4);

//Eb4
const Eb4Key = document.querySelector(".Eb4");
const playEb4 = () => {
    playSound(Eb4);
    Eb4Key.classList.add("active");
    setTimeout(() => Eb4Key.classList.remove("active"), 300);
}
Eb4Key.addEventListener("click", playEb4);

//E4
const E4Key = document.querySelector(".E4");
const playE4 = () => {
    playSound(E4);
    E4Key.classList.add("active");
    setTimeout(() => E4Key.classList.remove("active"), 300);
}
E4Key.addEventListener("click", playE4);

//F4
const F4Key = document.querySelector(".F4");
const playF4 = () => {
    playSound(F4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 300);
}
F4Key.addEventListener("click", playF4);

//Gb4
const Gb4Key = document.querySelector(".Gb4");
const playGb4 = () => {
    playSound(Gb4);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 300);
}
Gb4Key.addEventListener("click", playGb4);

//G4
const G4Key = document.querySelector(".G4");
const playG4 = () => {
    playSound(G4);
    G4Key.classList.add("active");
    setTimeout(() => G4Key.classList.remove("active"), 300);
}
G4Key.addEventListener("click", playG4);

//Ab4
const Ab4Key = document.querySelector(".Ab4");
const playAb4 = () => {
    playSound(Ab4);
    Ab4Key.classList.add("active");
    setTimeout(() => Ab4Key.classList.remove("active"), 300);
}
Ab4Key.addEventListener("click", playAb4);

//A4
const A4Key = document.querySelector(".A4");
const playA4 = () => {
    playSound(A4);
    A4Key.classList.add("active");
    setTimeout(() => A4Key.classList.remove("active"), 300);
}
A4Key.addEventListener("click", playA4);

//Bb4
const Bb4Key = document.querySelector(".Bb4");
const playBb4 = () => {
    playSound(Bb4);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 300);
}
Bb4Key.addEventListener("click", playBb4);

//B4
const B4Key = document.querySelector(".B4");
const playB4 = () => {
    playSound(B4);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 300);
}
B4Key.addEventListener("click", playB4);

//C5
const C5Key = document.querySelector(".C5");
const playC5 = () => {
    playSound(C5);
    C5Key.classList.add("active");
    setTimeout(() => C5Key.classList.remove("active"), 300);
}
C5Key.addEventListener("click", playC5);

//Db5
const Db5Key = document.querySelector(".Db5");
const playDb5 = () => {
    playSound(Db5);
    Db5Key.classList.add("active");
    setTimeout(() => Db5Key.classList.remove("active"), 300);
}
Db5Key.addEventListener("click", playDb5);

//D5
const D5Key = document.querySelector(".D5");
const playD5 = () => {
    playSound(D5);
    D5Key.classList.add("active");
    setTimeout(() => D5Key.classList.remove("active"), 300);
}
D5Key.addEventListener("click", playD5);

//Eb5
const Eb5Key = document.querySelector(".Eb5");
const playEb5 = () => {
    playSound(Eb5);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 300);
}
Eb5Key.addEventListener("click", playEb5);

//E5
const E5Key = document.querySelector(".E5");
const playE5 = () => {
    playSound(E5);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 300);
}
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ key }) => {
    //  press Q
    if (key == 81) return playC4();

    //  press 2
    if (key == 50) return playDb4();

    //  press W
    if (key == 87) return playD4();

    //  press 3
    if (key == 51) return playEb4();

    //  press E
    if (key == 69) return playE4();

    //  press R
    if (key == 82) return playE4();

    //  press 5
    if (key == 53) return playGb4();

    //  press T
    if (key == 84) return playG4();

    //  press 6
    if (key == 54) return playAb4();

    //  press Y
    if (key == 89) return playA4();

    //  press 7
    if (key == 55) return playBb4();

    //  press U
    if (key == 85) return playB4();

    //  press I
    if (key == 73) return playC5();

    //  press 9
    if (key == 57) return playb5();

    //  press O
    if (key == 79) return playD5();

    //  press 0
    if (key == 48) return playEb5();

    //  press P
    if (key == 80) return playE5();
});