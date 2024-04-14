
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from 'react-redux'
import store from './utils/store';
import cors from 'cors';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
// App.use(cors());

const appRouter = createBrowserRouter([{
  path: "/",
  element:   <Body/>,
  children:[
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },

  ],

}])
function App() {
  return (
    <Provider store={store}>
  
     <Head/>
     <RouterProvider router={appRouter}>
     <Body/>
     </RouterProvider>
    </Provider>
  );
}

export default App;
