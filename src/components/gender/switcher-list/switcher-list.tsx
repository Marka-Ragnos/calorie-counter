import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { SwitcherData } from "../../../mock";
import SwitcherItem from "./switcher-item";

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
