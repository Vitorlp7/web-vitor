import { Link, useLocation } from "react-router-dom";
import styles from "./menuLink.module.css";

export default function MenuLink({children, to}) {
  const localização = useLocation();

  return (
    <Link
      to={to}
      className={`${styles.link} ${
        localização.pathname === to ? styles.linkDestacado : ""
      }`}
    >
        {children}
    </Link>
  );
}
