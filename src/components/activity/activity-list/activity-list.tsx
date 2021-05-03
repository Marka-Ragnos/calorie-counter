import React from "react";
import ActivityItem from "./activity-item";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ActivityData } from "../../../mock";

const ActivityList: React.FC = () => {
  const { checkedActivity } = useTypedSelector((state) => state.ACTIVITY);

  return (
    <ul className="radios-group">
      {ActivityData.map((item, idx) => (
        <ActivityItem
          key={item.value + idx}
          title={item.title}
          value={item.value}
          description={item.description}
          text={item.text}
          checked={checkedActivity}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
