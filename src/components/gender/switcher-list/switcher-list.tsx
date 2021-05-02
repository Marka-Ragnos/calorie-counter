import React from "react";
import SwitcherItem from "./switcher-item";
import { SwitcherData } from "../../../mock";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const SwitcherList: React.FC = () => {
  const gender = useTypedSelector((state) => state.GENDER.checkedGender);

  return (
    <ul className="switcher">
      {SwitcherData.map((genderItem, idx) => (
        <SwitcherItem key={gender + idx} gender={genderItem} checked={gender} />
      ))}
    </ul>
  );
};

export default SwitcherList;
