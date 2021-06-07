import { Router } from "./routing/Router";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";

let endpoint = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use(
  (request) => {
    request.url = `${endpoint}/${request.url}`;
    return request;
  },
  (err) => console.log
);

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
