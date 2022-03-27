import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
//context provider
import TaskListProvider from './src/context/AddTask';
import TaskProvider from './src/context/Task';
import React from 'react';
import ContextProvider from './src/components/nested/ContextProvider';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ContextProvider>
          <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>         
        </ContextProvider>        
      </Provider>

    );
  }
};

export default App;
