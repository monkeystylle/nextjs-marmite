import React from 'react';
import styled from 'styled-components';

type Props = {};

const Footer = (props: Props) => {
  return <FooterWrapper>Copyright 2022 Just Add Marmite</FooterWrapper>;
};

const FooterWrapper = styled.footer`
  background: #111;
  color: #bbb;
  padding: 40px;
  text-align: center;
  margin-top: auto;
`;

export default Footer;
