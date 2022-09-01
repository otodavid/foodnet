import styled, { ThemeProvider } from 'styled-components';
import Home from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useChangeTheme } from './hooks/useChangeTheme';
import ComingSoon from './pages/ComingSoon';
import { Layout } from './components';
import { ThemeModeProvider } from './context/ThemeModeContext';

function App() {
  const [theme, toggleTheme] = useChangeTheme();

  const themeConfig = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <AppContainer>
        {/* Themeprovider makes the theme object availabe to components  */}
        <ThemeProvider theme={themeConfig}>
          <GlobalStyles />
          {/* ThemeModeProvider makes the themeMode (light or dark) string available to all components */}
          <ThemeModeProvider themeMode={theme}>
            <Layout toggleTheme={toggleTheme}>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/comingsoon'>
                  <ComingSoon />
                </Route>
              </Switch>
            </Layout>
          </ThemeModeProvider>
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
