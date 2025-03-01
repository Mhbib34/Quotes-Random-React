import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenuPages from "../Fragments/HamburgerMenuPages";
import NavLink from "../Fragments/NavLink";
import HamburgerMenu from "../Common/HamburgerMenu";

export default function Navbar({
  Favorites,
  url,
  hamburgerHome,
  onClick,
  text,
  classHamburger,
}) {
  const [nav, setNav] = useState(false);
  function toggleMenu() {
    setNav(!nav);
  }
  return (
    <>
      <header className="flex justify-between items-center bg-linear-to-b from-secondary to-primary lg:w-[60%] py-3 mx-auto sticky top-1 z-1 px-5 lg:px-8 rounded-md">
        <a className="text-white font-medium italic lg:text-xl" href="/">
          InspireMe
        </a>
        <NavLink
          Favorites={Favorites}
          url={url}
          onClick={onClick}
          text={text}
        />
        <HamburgerMenu onClick={toggleMenu} />
      </header>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" sticky top-12 left-0 w-full bg-linear-to-b from-primary z-10 to-secondary"
          >
            <HamburgerMenuPages
              url={hamburgerHome}
              onClick={onClick}
              classHamburger={classHamburger}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
