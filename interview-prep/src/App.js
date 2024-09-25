import './App.css';
import { Provider } from "react-redux";
// import ReduxWithConnect from './ReduxWithConnect/Redux.js';
// import ReduxWithHooks from './ReduxWithHooks/Redux.js';
// import ReduxThunkAndLoggerWithHooks from './ReduxThunkAndLoggerWithHooks/Redux.js';
// import ReduxThunkAndLoggerWithConnect from './ReduxThunkAndLoggerWithConnect/Redux.js';
// import ReduxToolkit from './ReduxToolkit/Redux.js';
// import ReduxToolkitWithThunkMiddlewares from './ReduxToolkitWithThunkMiddlewares/Redux.js';
// import ReduxSagaWithHooks from "./ReduxSagaWithHooks/Redux.js";
import ReduxToolkitwithSagaAndHooks from "./ReduxToolkitwithSagaAndHooks/Redux.js"
// import { store } from './ReduxWithConnect/store.js'; // normal redux with connect
// import { store } from './ReduxWithHooks/store.js'; // redux with useDispatch and useSelector
// import { store } from './ReduxThunkAndLoggerWithHooks/store.js'; // Redux Thunk and Logger Middleware with hooks
// import { store } from './ReduxThunkAndLoggerWithConnect/store.js'; // Redux Thunk and Logger Middleware with connect
// import { store } from './ReduxToolkit/store.js'
// import { store } from "./ReduxToolkitWithMiddlewares/store.js"
// import { store } from "./ReduxSagaWithHooks/store.js"
import { store } from './ReduxToolkitwithSagaAndHooks/store.js';

function App() {
  return (
    <Provider store={store}>
      {/* <ReduxWithConnect /> */}
      {/* <ReduxWithHooks /> */}
      {/* <ReduxThunkAndLoggerWithHooks /> */}
      {/* <ReduxThunkAndLoggerWithConnect /> */}
      {/* <ReduxToolkit /> */}
      {/* <ReduxToolkitWithMiddlewares /> */}
      {/* <ReduxSagaWithHooks /> */}
      <ReduxToolkitwithSagaAndHooks />
    </Provider>
  );
}

export default App;
