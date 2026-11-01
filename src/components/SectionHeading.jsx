// "My <accent>skills</accent>" style heading used by several sections.
export default function SectionHeading({ before, accent }) {
  return (
    <div className="sec-head">
      <h2>
        {before} <span className="accent">{accent}</span>
      </h2>
    </div>
  );
}
