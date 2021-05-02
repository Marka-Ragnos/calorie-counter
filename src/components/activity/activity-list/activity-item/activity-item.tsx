import React from "react";

interface ActivityItemProps {
  title: string;
  value: string;
  description: string;
  text: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  value,
  description,
  text,
}) => {
  return (
    <li className="radio">
      <div className="radio__wrapper">
        <input
          id={`activity-${title}`}
          name="activity"
          defaultValue={value}
          type="radio"
          defaultChecked
          required
        />
        <label htmlFor={`activity-${title}`}>{description}</label>
      </div>
      <p className="radio__description">{text}</p>
    </li>
  );
};

export default ActivityItem;
