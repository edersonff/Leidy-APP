import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './Navigator';
import { store } from './Context/context';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </PaperProvider>
    </SafeAreaView>
  );
}
