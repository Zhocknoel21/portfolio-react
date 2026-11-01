import { useEffect, useRef, useState } from 'react';

// The "projects/" menu. Opens on click, closes on outside click,
// Escape, or after choosing a link.
export default function NavDropdown({ label, items, active }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className={`dropdown-toggle${active ? ' active' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label} <span className="arrow">▼</span>
      </button>
      <div className={`dropdown-menu${open ? ' show' : ''}`}>
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
