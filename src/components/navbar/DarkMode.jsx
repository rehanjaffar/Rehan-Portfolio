import React from "react";
const LightButton = "/assets/images/darkmode/light-mode-button.png";
const DarkButton = "/assets/images/darkmode/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"

  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative mt-2">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
