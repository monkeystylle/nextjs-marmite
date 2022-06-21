import React from 'react';
import styled from 'styled-components';

type Props = {};

const Skeleton = (props: Props) => {
  return (
    <SkeletonWrapper>
      <SkeletonBanner></SkeletonBanner>
      <Header></Header>
      <Content></Content>
      <Content></Content>
      <Content></Content>
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  width: 70%;
  margin: auto;
  background-color: #dbcc1a;
  border-radius: 4px;
`;
const SkeletonBanner = styled.div`
  padding: 12% 0;
`;
const Header = styled.div`
  padding: 15px 0;
  max-width: 500px;
`;
const Content = styled.div`
  padding: 8px 0;
  max-width: 1000px;
`;

export default Skeleton;
