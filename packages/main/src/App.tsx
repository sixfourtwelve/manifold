import { peopleData } from "@manifold/shared";
import "./components/list";
import { List } from "./components/list";
import styles from "./styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./reducers/redux/hello";
import { helloMessageSelector } from "./selectors/hello";
import { hello } from "./reducers/saga/hello";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  const message = useSelector(helloMessageSelector);

  const setMsg = () => {
    dispatch(setMessage("Hello World!"));
  };

  const updateMessage = () => {
    dispatch(hello);
  };

  const messageOther = useSelector(helloMessageSelector);

  return (
    <div className={styles.container}>
      <h1>Main app</h1>
      {message}
      {messageOther}
      <button onClick={setMsg}>Lowercase</button>
      <button onClick={updateMessage}>Uppercase</button>
      <List data={peopleData()} />
    </div>
  );
};
export default App;
