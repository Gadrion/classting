import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from 'store';
import { MainPage, QuizPage } from 'pages';

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route
          path="*"
          element={<Navigate to="/quiz" />}
        />
      </Routes>
    </Provider>
  </HashRouter>
);

export default App;
