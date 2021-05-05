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
        value={gender}
        type="radio"
        checked={checked === gender ? true : false}
        onChange={(evt) => dispatch(ActionCreator.changeGender(evt))}
        required
      />
      <label htmlFor={`gender-${gender}`}>
        {gender === "male" ? "Мужчина" : "Женщина"}
      </label>
    </li>
  );
};

export default SwitcherItem;
