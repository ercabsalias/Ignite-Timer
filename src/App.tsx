import { ThemeProvider } from "styled-components";
import { defultTheme } from "./themes/defult";
import { Button } from "./components/Button";

export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
    </ThemeProvider>
  );
}
