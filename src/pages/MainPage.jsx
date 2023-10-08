import { useEffect } from "react";
import { useDispatch } from "react-redux";
const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <h1>Translate +</h1>
      <div className="container">
        <div className="left">
          <select name="" id=""></select>
          <textarea></textarea>
        </div>
        <button className="change-btn">Change</button>
        <div className="right">
          <select name="" id=""></select>
          <textarea></textarea>
        </div>
      </div>
      <button>Translate</button>
    </>
  );
};

export default MainPage;
