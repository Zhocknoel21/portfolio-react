import useTypewriter from '../hooks/useTypewriter.js';
import { terminalLines } from '../data/terminalLines.jsx';

const PROMPT = 'noel@tcgc ~ %';

export default function Terminal() {
  const { doneLines, typingText } = useTypewriter(terminalLines);

  return (
    <div className="term-wrap">
      <svg className="star" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c0 6-2 10-6 12 4 2 6 6 6 12 0-6 2-10 6-12-4-2-6-6-6-12z" />
      </svg>
      <div className="blob-1 blob" />
      <div className="blob-2 blob" />

      <div className="terminal">
        <div className="tbar">
          <span className="tdot" /><span className="tdot" /><span className="tdot" />
          <span className="tname">zsh — noel@tcgc</span>
        </div>

        <div className="tbody">
          {doneLines.map((line, i) =>
            line.type === 'prompt' ? (
              <div className="promptline" key={i}>
                <span className="p">{PROMPT}</span> {line.text}
              </div>
            ) : (
              <div className="out" key={i}>{line.content}</div>
            )
          )}
          {typingText !== null && (
            <div className="promptline">
              <span className="p">{PROMPT}</span> {typingText}
              <span className="cursor" />
            </div>
          )}
        </div>
      </div>

      <div className="badge-float">
        <span className="ping" /> open to opportunities
      </div>
    </div>
  );
}
