import React from 'react';
import { ToggleSwitchStyle } from './Switch.styles';

const Switch = ({ value, label, className, ...props }) => {
  return (
    <>
      <ToggleSwitchStyle className={className}>
        {label && (
          <label className="checkbox-label-title" htmlFor={label}>
            {label}
          </label>
        )}

        <input
          type="checkbox"
          checked={value}
          // name={label}
          onChange={({ target: { checked } }) => {
            props.onChange({
              target: { value: checked },
            });
          }}
          id={label}
        />
        <label className="switch" htmlFor={label}></label>
      </ToggleSwitchStyle>
    </>
  );
};

export default Switch;
