import React from 'react';
import { createClient } from 'contentful';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import styled from 'styled-components';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton from '../../components/Skeleton';

type Props = {};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <Skeleton />;

  console.log('SLUGRECIPE:', recipe);
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;

  return (
    <RecipePageWrapper>
      <Banner>
        <Image src={'https:' + featuredImage.fields.file.url} />
        <Title>{title}</Title>
        <Info>
          <MinsToCook>Take About {cookingTime} mins to cook</MinsToCook>
          <h3>Ingredients: </h3>
          {ingredients.map(ing => (
            <span key={ing}>{ing}</span>
          ))}
        </Info>
        <MethodWrapper>
          <h3>Method:</h3>
          <Method>{documentToReactComponents(method)}</Method>
        </MethodWrapper>
      </Banner>
    </RecipePageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await client.getEntries({
    content_type: 'recipe',
  });

  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items }: any = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug,
  });

  return {
    props: {
      recipe: items[0],
    },
    revalidate: 1,
  };
};

const RecipePageWrapper = styled.div``;

const Banner = styled.div`
  width: 70%;
  margin: auto;
`;

const MinsToCook = styled.p`
  font-size: 1.2rem;
`;

const Image = styled.img`
  border: 1px solid gray;
  border-radius: 4px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  background: #fff;
  display: inline-block;
  padding: 20px;
  position: relative;
  top: -60px;
  left: -10px;
  transform: rotateZ(-1deg);
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  margin: 0;
  margin-top: -24px;

  span::after {
    content: ', ';
  }

  span:last-child::after {
    content: '.';
  }
`;

const MethodWrapper = styled.div``;
const Method = styled.div``;

export default RecipeDetails;
