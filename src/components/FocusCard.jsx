export default function FocusCard({ icon, title, text }) {
  return (
    <div className="focus-card">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <div className="rule" />
      <p>{text}</p>
    </div>
  );
}
