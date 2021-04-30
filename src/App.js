import styled, { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from "./styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { useChangeTheme } from './hooks/useChangeTheme';
import ComingSoon from './pages/ComingSoon';

function App() {
  const [ theme, toggleTheme ] = useChangeTheme();  

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
    <AppContainer>
      <ThemeProvider
       theme={themeMode}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />

        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/comingsoon">
              <ComingSoon />
            </Route>
          </Switch>
        </main>

        <Footer id="contact" />

      </ThemeProvider>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  overflow: hidden;
  max-width: 1440px;
  margin: 0 auto;
`;