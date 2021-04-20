import styled, { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme } from "./styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';


function App() {

  return (
    <Router>
    <AppContainer>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </main>


      </ThemeProvider>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  overflow: hidden;
`;