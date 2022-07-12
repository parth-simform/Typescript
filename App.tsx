import React from 'react';
import Router from './app/router';
import AppType from './app/type_example/AppType';

const App = () => {
  const type = 'navigation';
  return type === 'navigation' ? <Router /> : <AppType />;
};

export default App;
