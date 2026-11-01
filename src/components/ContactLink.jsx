import { asset } from '../utils/asset.js';

export default function ContactLink({ label, icon, alt, href, text }) {
  return (
    <div className="link-row">
      <span className="ic"><img src={asset(icon)} alt={alt} /></span>
      <span className="label">{label}</span>
      <a className="val" href={href} target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
  );
}
