import { Router } from "./routing/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
