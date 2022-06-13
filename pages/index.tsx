import styled from 'styled-components';
import type { NextPage, GetStaticProps } from 'next';
import { createClient } from 'contentful';

const Home: NextPage = ({ recipes }: any) => {
  console.log('RECIPES:', recipes);

  return (
    <>
      <div>Recipe List</div>
    </>
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

const PageWrapper = styled.div``;

export default Home;
