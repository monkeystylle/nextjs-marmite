import styled from 'styled-components';
import type { NextPage, GetStaticProps } from 'next';
import { createClient } from 'contentful';
import RecipeCard from '../components/RecipeCard';

const Home: NextPage = ({ recipes }: any) => {
  console.log('RECIPES::', recipes);

  return (
    <ContentWrapper>
      <RecipeList>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </RecipeList>
    </ContentWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'recipe',
  });

  return {
    props: {
      recipes: res.items,
    },
  };
};

const ContentWrapper = styled.div``;
const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

export default Home;
