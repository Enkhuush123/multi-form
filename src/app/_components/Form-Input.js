import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Input = (props) => {
  const { inputTag, Change, name, value, error, errorMess, Placeholder, type } =
    props;

  const [showpassword, setShowpassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="inputtext1">
      <div className="eyeslashdiv">
        <div>
          <p>
            {inputTag} <span className="span">*</span>
          </p>
        </div>
        <div className="eyeslash">
          {isPassword && (
            <span onClick={() => setShowpassword(!showpassword)}>
              {showpassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
      </div>

      <input
        onChange={Change}
        name={name}
        className={error ? "inputerr" : "input"}
        placeholder={Placeholder}
        value={value}
        type={isPassword && !showpassword ? "password" : "text"}
      ></input>

      {error && <p className="psan"> "{errorMess}" </p>}
    </div>
  );
};
