import React, { useState } from 'react';
import { EarProvider } from './context/EarContext';
import { Layout } from './components/Layout';
import { LandingPage } from './components/landingPage';
import { EarAnatomy } from './components/EarAnatomy';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <EarProvider>
      {started ? (
        <Layout>
          <EarAnatomy />
        </Layout>
      ) : (
        <LandingPage onStart={() => setStarted(true)} />
      )}
    </EarProvider>
  );
}

export default App;
