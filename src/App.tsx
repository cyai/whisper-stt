import "./App.css";
import Navbar from "./components/navbar";
import HeroText from "./components/hero_text";
import Upload from "./components/upload";
import TranscribedBox from "./components/transcribed_box";
import { useState } from "react";

function App() {
    const [transcription, setTranscription] = useState<string>("");

    const handleTranscription = (text: string | ((prev: string) => string)): void => {
        if (typeof text === "string") {
            setTranscription((prev) => `${prev} ${text}`);
        } else {
            setTranscription(text);
        }
    };

    const showTranscribedBox = transcription !== "";

    return (
        <div className="bg-background relative">
            <Navbar />
            <img
              src="/assets/background.svg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
          {!showTranscribedBox && (
              <div className="flex flex-row justify-between ml-32 mt-20 mr-44">
            <HeroText />
            <Upload setTranscription={handleTranscription} />
              </div>
          )}
          {showTranscribedBox && (
              <TranscribedBox
            transcription={transcription}
            setTranscription={handleTranscription}
              />
          )}
            </div>
        </div>
    );
}

export default App;
