import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../../../store/activity/activity";

interface ActivityItemProps {
  title: string;
  value: string;
  description: string;
  text: string;
  checked: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  value,
  description,
  text,
  checked,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="radio">
      <div className="radio__wrapper">
        <input
          id={`activity-${title}`}
          name="activity"
          value={value}
          type="radio"
          checked={checked === value ? true : false}
          onChange={(evt) => dispatch(ActionCreator.changeActivity(evt))}
          required
        />
        <label htmlFor={`activity-${title}`}>{description}</label>
      </div>
      <p className="radio__description">{text}</p>
    </li>
  );
};

export default ActivityItem;
