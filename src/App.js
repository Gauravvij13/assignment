import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/styles/theme";
import { AuthGate } from "./AuthGate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AuthGate />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
