import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed left-0 bottom-0 w-full py-5 border-t border-neutral-700 rounded-t-2xl z-50 bg-neutral-950">
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "text-yellow-500 font-semibold" : "text-white") +
              " hover:text-yellow-500 transition-all duration-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              (isActive ? "text-yellow-500 font-semibold" : "text-white") +
              " hover:text-yellow-500 transition-all duration-300"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              (isActive ? "text-yellow-500 font-semibold" : "text-white") +
              " hover:text-yellow-500 transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
