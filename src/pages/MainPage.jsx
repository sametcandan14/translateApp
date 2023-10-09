import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "../redux/action";
import Select from "react-select";

const MainPage = () => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);
  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <>
      <h1>Translate +</h1>
      <div className="container">
        <div className="left">
          <Select options={store.languages} />
          <textarea></textarea>
        </div>
        <button className="change-btn">Change</button>
        <div className="right">
          <Select options={store.languages} />
          <textarea></textarea>
        </div>
      </div>
      <button>Translate</button>
    </>
  );
};

export default MainPage;
