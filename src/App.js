import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DependentForm from './features/dependentForm/components/DependentForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Dynamic Form</h1>
        <DependentForm />
      </div>
    </Provider>
  );
};

export default App;
