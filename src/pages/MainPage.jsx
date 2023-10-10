import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getLanguages } from "../redux/action";
import Select from "react-select";
import { clearAnswer } from "../redux/translateSlice";

const MainPage = () => {
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState({
    value: "tr",
    label: "Turkish",
  });
  const [targetLang, setTargetLang] = useState({
    value: "en",
    label: "English",
  });

  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  const areaRef = useRef();

  //uygulama başladığı anda dilleri çeker
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  //state ler arası veri değişimi yapar
  const handleClick = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    dispatch(clearAnswer());
    areaRef.current.value = "";
  };

  return (
    <>
      <h1>Translate +</h1>
      <div className="container">
        <div className="left">
          <Select
            value={sourceLang}
            isLoading={store.isLoading}
            isDisabled={store.isLoading}
            onChange={(e) => setSourceLang(e)}
            className="select"
            options={store.languages}
          />
          <textarea
            ref={areaRef}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="change-btn" onClick={handleClick}>
          Change
        </button>
        <div className="right">
          <Select
            value={targetLang}
            onChange={(e) => setTargetLang(e)}
            className="select"
            options={store.languages}
          />
          <textarea disabled value={store.answer}></textarea>
        </div>
      </div>
      <button
        onClick={() => dispatch(getAnswer({ text, sourceLang, targetLang }))}
      >
        Translate
      </button>
    </>
  );
};

export default MainPage;
