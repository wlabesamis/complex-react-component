import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DependentForm from './features/dependentForm/components/DependentForm';

const App = () => {
  console.log('API URL:', process.env.REACT_APP_API_URL);
  console.log('Environment:', process.env.REACT_APP_ENV);
  
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
