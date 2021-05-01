import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../../store/gender/gender";

interface SwitcherProps {
  gender: string;
  checked: string;
}

const Switcher: React.FC<SwitcherProps> = ({ gender = "", checked }) => {
  const dispatch = useDispatch();

  console.log(`стейт ${gender}`, `выбран ${checked}`);

  return (
    <li className="switcher__item">
      <input
        id={`gender-${gender}`}
        name="gender"
        defaultValue={gender}
        type="radio"
        defaultChecked={checked === gender ? true : false}
        onClick={(evt) => dispatch(ActionCreator.changeGender(evt))}
        required
      />
      <label htmlFor={`gender-${gender}`}>
        {gender === "male" ? "Мужчина" : "Женщина"}
      </label>
    </li>
  );
};

export default Switcher;
