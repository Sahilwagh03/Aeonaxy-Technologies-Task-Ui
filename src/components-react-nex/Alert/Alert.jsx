import React from 'react';
import { getAlertTypeStyle, getPositionClasses, getIconComponent } from './utils';
import classNames from 'classnames';
import { RxCross2 } from "react-icons/rx";
const Alert = ({
  type = '',
  title,
  message,
  titleStyle = '',
  messageStyle = '',
  alertContainerStyle = '',
  position = 'top-left',
  showiIcon = true,
  color,
  onClick
}) => {
  const IconComponent = getIconComponent(type, color); // Get the icon component based on the type

  return (
    <div
      className={classNames(
        'rounded-md px-5 py-3 shadow-md min-w-[300px] h-auto flex  gap-2 flex-row',
        getAlertTypeStyle(type),
        alertContainerStyle,
        getPositionClasses(position),
      )}
    >
      <div>
        {showiIcon &&
          IconComponent
        }
      </div>
      <div className="">
        {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
        <p className={`text-sm ${messageStyle}`}>{message}</p>
      </div>
      <div onClick={onClick} className=' cursor-pointer'>
        <RxCross2 className="text-lg" />
      </div>
    </div>
  );
};

export default Alert;
