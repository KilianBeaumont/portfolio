const input = document.querySelector("input");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

const toggleThemeMode = () => {
    body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;
