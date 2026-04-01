import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  HeaderContainer,
  Nav,
  TopCurtain,
  BottomCurtain,
  NavLetter,
} from "./Header.style";
import { Link } from "react-router-dom";

const Header = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCurtain(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const MotionLink = motion(Link);

  const renderLetters = (text: string) =>
    text.split("").map((letter, i) => (
      <NavLetter
        key={i}
        initial={{ opacity: 0, y: -10 }}
        animate={showNav ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.3,
          delay: i * 0.04,
        }}
      >
        {letter}
      </NavLetter>
    ));

  return (
    <>
      <AnimatePresence>
        {showCurtain && (
          <>
            <TopCurtain
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <BottomCurtain
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={() => {
                setShowCurtain(false);
                setShowNav(true);
              }}
            />
          </>
        )}
      </AnimatePresence>
      <HeaderContainer as={motion.header}>
        {showNav && (
          <Nav>
            <ul>
              <li>
                <MotionLink
                  to="/session-tracker"
                  style={{ display: "inline-block" }}
                  initial={{ x: 0, skewX: 0 }}
                  whileHover={{
                    x: 40,
                    skewX: -15,
                    transition: {
                      x: { type: "tween", duration: 0.2, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    x: 0,
                    skewX: 0,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 15 }, // bounce when returning
                      skewX: { type: "spring", stiffness: 300, damping: 20 },
                    },
                  }}
                >
                  {renderLetters("Session Tracker")}
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  to="/push-fold-chart"
                  style={{ display: "inline-block" }}
                  initial={{ x: 0, skewX: 0 }}
                  whileHover={{
                    x: 40,
                    skewX: -15,
                    transition: {
                      x: { type: "tween", duration: 0.2, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    x: 0,
                    skewX: 0,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 15 }, // bounce when returning
                      skewX: { type: "spring", stiffness: 300, damping: 20 },
                    },
                  }}
                >
                  {renderLetters("Push Fold Chart")}
                </MotionLink>
              </li>
            </ul>
          </Nav>
        )}
      </HeaderContainer>
    </>
  );
};
export default Header;
