import React from "react";
import SwitcherItem from "./switcher-item";
import { SwitcherData } from "../../../mock";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const SwitcherList: React.FC = () => {
  const { checkedGender } = useTypedSelector((state) => state.GENDER);

  return (
    <ul className="switcher">
      {SwitcherData.map((genderItem, idx) => (
        <SwitcherItem
          key={genderItem + idx}
          gender={genderItem}
          checked={checkedGender}
        />
      ))}
    </ul>
  );
};

export default SwitcherList;
