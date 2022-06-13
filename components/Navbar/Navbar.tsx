import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Link href="/">
        <LinkWrapper>
          <h1>
            <Span1>Just Add</Span1>
            <Span2>Marmite</Span2>
          </h1>
          <Subtitle>Spread The Joy</Subtitle>
        </LinkWrapper>
      </Link>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  text-align: center;
  margin: 60px 0;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  display: inline-block;
`;

const Span1 = styled.span`
  display: block;
  line-height: 1em;
  font-weight: 400;
  font-size: 2rem;
`;
const Span2 = styled.span`
  display: block;
  line-height: 1em;
  font-weight: 900;
  font-size: 4rem;
`;

const Subtitle = styled.h2`
  display: block;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1em;
`;

export default Navbar;
