import React from 'react';
import "./styles/app.scss";
import ToolBar from './components/ToolBar/ToolBar';
import SettingsBar from './components/SettingsBar/SettingsBar';
import Canvas from './components/Canvas/Canvas';

const App = () => {
  return (
    <div className="app">
      <ToolBar />
      <SettingsBar />
      <Canvas />
    </div>
  );
}

export default App;
