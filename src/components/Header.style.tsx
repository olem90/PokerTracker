import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.header)`
  background: #0f0f0f;
  color: #fff;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 50%;
  height: 20rem;
  font-size: 8rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255,255,255,0.2);
  display: flex;
  align-items: center;

  ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 80px;
  }

  li {
    white-space: nowrap;
  }

  li:last-child {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  
`;

export const NavLetter = styled(motion.span)`
  display: inline-block;
  color: #fff;
  
`;

export const TopCurtain = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  z-index: 999;
  background: #000;
  transform-origin: bottom;
`;

export const BottomCurtain = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50vh;
  z-index: 999;
  background: #000;
  transform-origin: top;
`;