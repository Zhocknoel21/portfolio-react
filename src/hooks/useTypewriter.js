import { useEffect, useState } from 'react';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Runs the terminal "typing" animation.
// Returns { doneLines, typingText }:
//   doneLines  – lines that are fully shown
//   typingText – the partially typed prompt (or null when nothing is being typed)
export default function useTypewriter(lines) {
  const [doneLines, setDoneLines] = useState([]);
  const [typingText, setTypingText] = useState(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDoneLines(lines);
      return;
    }

    let cancelled = false;

    async function run() {
      for (const line of lines) {
        if (cancelled) return;

        if (line.type === 'prompt') {
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return;
            setTypingText(line.text.slice(0, i));
            await sleep(38);
          }
          if (cancelled) return;
          setTypingText(null);
          setDoneLines((prev) => [...prev, line]);
          await sleep(220);
        } else {
          setDoneLines((prev) => [...prev, line]);
          await sleep(260);
        }
      }
    }

    run();

    // cleanup: stop the loop and reset (also keeps React StrictMode happy)
    return () => {
      cancelled = true;
      setDoneLines([]);
      setTypingText(null);
    };
  }, [lines]);

  return { doneLines, typingText };
}
