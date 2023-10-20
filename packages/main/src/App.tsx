import { peopleData } from "@manifold/shared";
import "./components/list";
import { List } from "./components/list";
import styles from "./styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./redux/reducers/message";
import { messageSelector } from "./redux/selectors/message";
import { messageUpdate } from "./redux/sagas/message";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  const message = useSelector(messageSelector);

  const resetMsg = () => {
    dispatch(setMessage("Hello World!"));
  };

  const updateMessage = () => {
    dispatch(messageUpdate);
  };

  const messageOther = useSelector(messageSelector);

  return (
    <div className={styles.container}>
      <h1>Main app</h1>
      {message}
      {messageOther}
      <button onClick={resetMsg}>Lowercase</button>
      <button onClick={updateMessage}>Uppercase</button>
      <List data={peopleData()} />
    </div>
  );
};
export default App;
