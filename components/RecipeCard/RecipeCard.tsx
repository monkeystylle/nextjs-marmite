import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type Props = {};

const RecipeCard = ({ recipe }: any) => {
  console.log('RECIPE>>>', recipe);
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <RecipeCardWrapper>
      <Featured>{/* image - thumbnail */}</Featured>
      <Content>
        <Info>
          <Title>{title}</Title>
          <CookingTime>{cookingTime} mins to make</CookingTime>
        </Info>
        <Actions>
          <Link href={`/recipes/` + slug}>
            <a>Cook This</a>
          </Link>
        </Actions>
      </Content>
    </RecipeCardWrapper>
  );
};

const RecipeCardWrapper = styled.div``;

const Featured = styled.div``;
const Content = styled.div``;
const Info = styled.div``;
const Title = styled.h4``;
const CookingTime = styled.p``;

const Actions = styled.div``;

export default RecipeCard;
