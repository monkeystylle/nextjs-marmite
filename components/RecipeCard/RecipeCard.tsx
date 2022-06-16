import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type Props = {};

const RecipeCard = ({ recipe }: any) => {
  console.log('RECIPE>>>', recipe);
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <RecipeCardWrapper>
      <Featured>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={600}
          height={400}
        />
      </Featured>
      <Content>
        <Info>
          <Title>{title}</Title>
          <CookingTime>{cookingTime} mins to make</CookingTime>
        </Info>
        <Actions>
          <Link href={`/recipes/` + slug}>
            <ActionLink>Cook This</ActionLink>
          </Link>
        </Actions>
      </Content>
    </RecipeCardWrapper>
  );
};

const RecipeCardWrapper = styled.div`
  transform: rotateZ(-1deg);
`;

const Featured = styled.div``;
const Content = styled.div`
  background-color: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  position: relative;
  top: -30px;
  left: -5px;
`;
const Info = styled.div`
  padding: 16px;
`;
const Title = styled.h4`
  margin: 4px 0;
  text-transform: uppercase;
  font-size: 1.2rem;
`;
const CookingTime = styled.p`
  margin: 0;
  color: #777;
`;

const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const ActionLink = styled.a`
  color: #fff;
  background: #f01b29;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
`;

export default RecipeCard;
