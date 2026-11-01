import NavDropdown from './NavDropdown.jsx';
import { navItems } from '../data/portfolio.js';

export default function Navbar({ activeId }) {
  return (
    <header className="topbar">
      <nav className="navpill">
        <span className="brand">
          <span className="dot" />noel<b>.dev</b>
        </span>

        <div className="navlinks">
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.id}
                label={item.label}
                items={item.children}
                active={activeId === item.id}
              />
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <a className="nav-cta" href="#contact">Get in touch</a>
      </nav>
    </header>
  );
}
