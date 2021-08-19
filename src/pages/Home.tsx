import React from 'react';
import Header from '../components/header';
import StartForm from '../components/startForm';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout select="main">
      <Header />
      <StartForm />
    </Layout>
  )
}