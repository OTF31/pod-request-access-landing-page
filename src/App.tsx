import Home from '@/pages/Home';
import { theme } from '@/theme';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Home />
    </MantineProvider>
  );
};

export default App;
