import React from "react";
import ActivityItem from "./activity-item";
import { ActivityData } from "../../../mock";

const ActivityList: React.FC = () => {
  return (
    <ul className="radios-group">
      {ActivityData.map((item, idx) => (
        <ActivityItem
          key={item.value + idx}
          title={item.title}
          value={item.value}
          description={item.description}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
