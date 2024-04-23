import { ThemeProvider } from "styled-components";
import { defultTheme } from "./styles/themes/defult";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />

      <GlobalStyle />
    </ThemeProvider>
  );
}
