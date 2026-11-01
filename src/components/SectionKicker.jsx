// The small "~/portfolio/file.ext" label above every section.
export default function SectionKicker({ file }) {
  return (
    <div className="kicker">
      <span className="dash" />
      <span className="path">~/portfolio/</span>
      <span className="file">{file}</span>
    </div>
  );
}
