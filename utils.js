let lightMode = true;
export function useTheme(node) {
  const setThemeMode = () => {
    let root = document.body;
    lightMode ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
    root.classList.toggle("darkMode");
    lightMode = !lightMode;
  };

  node.addEventListener("click", () => setThemeMode());
  setThemeMode(lightMode);
}
