import React from "react";
import Tetris from "./Letter";
import "./App.css";
import TetrisCanvas from "./LetterCanvas";

function ThemeSong() {
  return (
    <div className="absolute bottom-0 flex flex-col items-center justify-center w-full">
      <h1
        className="text-4xl m-10"
        style={{
          textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
          animation: "0.1s infinite alternate ease-in-out SPOOON",
        }}
      >
        THEM SONG
      </h1>
      <audio controls>
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg"
          type="audio/ogg"
        />
      </audio>
    </div>
  );
}

// function Tailwind() {
//   React.useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "//unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     const font = document.createElement("link");
//     font.href =
//       "//db.onlinewebfonts.com/c/3e7c57c84a6f04a49ea78efd381d6f13?family=Tetris+Blocks";
//     font.rel = "stylesheet";
//     document.head.appendChild(font);
//   });
//   return null;
// }

function App() {
  return (
    <div className="App">
      <TetrisCanvas>
        {"TRU".split("").map((l, i) => (
          <Tetris key={`${l} ${i}`} letter={l} delay={750 * i} />
        ))}
        {/* <ThemeSong /> */}
        {/* <Tailwind /> */}
      </TetrisCanvas>
    </div>
  );
}

export default App;
