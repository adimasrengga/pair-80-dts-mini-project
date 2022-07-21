import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './themes/themes';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar></NavBar>
      <Outlet/>
    </div>
    </ThemeProvider>
   
    
  );
}

export default App;
