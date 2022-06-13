import styled from 'styled-components';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <div className="recipe-list">Recipe List</div>
    </>
  );
};

const PageWrapper = styled.div``;

export default Home;
