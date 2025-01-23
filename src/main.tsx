import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import CompletionPage from './pages/CompletionPage';
import ModelSelectionPage from './pages/ModelSelectionPage';
import OptionSelectionPage from './pages/OptionSelectionPage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
import { GlobalFont, GlobalStyle, theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path='/' />
          <Route element={<VehicleSelectionPage />} path='vehicle-selection'/>
          <Route element={<ModelSelectionPage />} path='model-selection/:vehicleId' />
          <Route element={<OptionSelectionPage />} path='option-selection/:modelId' />
          <Route element={<CompletionPage />} path='completion' />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
