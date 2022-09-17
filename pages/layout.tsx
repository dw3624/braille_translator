import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Layout = ({children}: Props) => {
  return (
    <Wrap>
      <Nav></Nav>
      <Header>
        <Link href="./braille"><a>braille</a></Link>
      </Header>
      <SideLeft></SideLeft>
      <Main>{children}</Main>
      <SideRight></SideRight>
      <Footer></Footer>
    </Wrap>
  );
};

type Props = {
  children: JSX.Element,
};

export default Layout;

const Wrap = styled.div`
  height: 100vh;
  display: grid;
  grid-template: 64px 1fr 2fr 80px / 1fr 4fr 1fr;
  grid-template-areas:
    "nav nav nav"
    "header header header"
    "sideleft main sideright"
    "footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "header"
      "sideleft"
      "main"
      "sideright"
      "footer";
  }
  color: white;
`
const Nav = styled.div`
  background-color: #3a3adf;
  grid-area: nav;
  padding: 0.25rem;
`
const Header = styled.div`
  background-color: #3a3a55;
  grid-area: header;
  padding: 0.25rem;
`
const SideLeft = styled.div`
  background-color: #9aaab7;
  grid-area: sideleft;
  padding: 0.25rem;
`
const Main = styled.div`
  background-color: #1f2128;
  grid-area: main;
  padding: 0.25rem;
`
const SideRight = styled.div`
  background-color: #9aaab7;
  grid-area: sideright;
  padding: 0.25rem;
`
const Footer = styled.div`
  background-color: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`
