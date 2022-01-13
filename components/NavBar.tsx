import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const NavLogo = styled.img`
  width: 30px;

  margin: 0px auto;
`;

const NavItemWrap = styled.div`
  display: flex;
  margin: 0px auto;
  column-gap: 10px;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavLogo src="./favicon.ico" />
      <NavItemWrap>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </NavItemWrap>
    </NavContainer>
  );
};

export default NavBar;
