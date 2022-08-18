import styled, { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useChangeTheme } from './hooks/useChangeTheme';
import ComingSoon from './pages/ComingSoon';
import { Layout } from './components';

function App() {
  const [theme, toggleTheme] = useChangeTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <AppContainer>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Layout theme={theme} toggleTheme={toggleTheme}>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/comingsoon'>
                <ComingSoon />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  overflow: hidden;
  max-width: 1600px;
  margin: 0 auto;
`;
