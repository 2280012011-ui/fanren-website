import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';
import MusicPlayer from './MusicPlayer';
import styles from './Header.module.css';

const MOBILE_QUERY = '(max-width: 1200px)';

function getIsMobile() {
  return typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(getIsMobile);
  const showDesktopNav = !isMobile;
  const showMobileNav = isMobile && menuOpen;

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const updateIsMobile = () => {
      setIsMobile(query.matches);
      if (!query.matches) {
        setMenuOpen(false);
      }
    };

    updateIsMobile();
    query.addEventListener('change', updateIsMobile);

    return () => query.removeEventListener('change', updateIsMobile);
  }, []);

  const navContent = (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          <span className={styles.navLabel}>{item.label}</span>
          <span className={styles.navDot} />
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ''}`}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoText}>凡人修仙传</span>
            <span className={styles.logoSub}>人界篇</span>
          </NavLink>
          {showDesktopNav && <nav className={styles.nav}>{navContent}</nav>}
          <MusicPlayer />
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="菜单"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {showMobileNav && (
        <nav className={`${styles.nav} ${styles.navOpen}`}>{navContent}</nav>
      )}
    </>
  );
}
