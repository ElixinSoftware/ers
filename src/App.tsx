import Elixin from "~/components/Elixin";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Elixin />
    </MantineProvider>
  );
}

export default App;
