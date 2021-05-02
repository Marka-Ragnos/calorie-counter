import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../../../store/gender/gender";

interface SwitcherItemProps {
  gender: string;
  checked: string;
}

const SwitcherItem: React.FC<SwitcherItemProps> = ({ gender, checked }) => {
  const dispatch = useDispatch();

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

export default SwitcherItem;
