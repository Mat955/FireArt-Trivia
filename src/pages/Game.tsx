import React from 'react';
import Layout from '../components/layout';
import GameContainer from '../container/gameContainer'

export default function Game() {

  return (
    <Layout select="secondary">
      <GameContainer />
    </Layout>
  )
};