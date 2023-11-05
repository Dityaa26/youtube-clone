import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import {store} from "./utils/store";

function App() {
  

  return (
    <Provider store={store}>
      <Head />
      <Body />
      {
        /* 
          Head
          Body
            Sidebar
              MenuItems
            MainContainer
              btnList
              VideoContainer
                VideoCards
        */
      }
    </Provider>
  );
}

export default App
