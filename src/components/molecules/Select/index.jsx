import React from 'react';
import { components } from 'react-select';
import { debounce } from 'lodash';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { StyledSelect, StyledSelectAsync } from './Select.styles';
import InputIcon from '../InputIcon';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Error, InputHolder } from '../../atoms/Field/Field.styles';
import arrow from '../../../assets/select-arrow.svg';
const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <InputIcon $suffix>
        <img src={arrow} alt="arrow" width={10} height={10} />
        {/* <IoMdArrowDropdown size={20} /> */}
      </InputIcon>
    </components.DropdownIndicator>
  );

function Select({
  prefix,
  suffix,
  disabled,
  invalid,
  options,
  label,
  noMargin,
  error,
  rules,
  clear,
  async,
  labelIcon,
  ...props
}) {
  const debouncedRef = React.useRef(0);
  const loadOptions = async __ => {
    const _options = await new Promise(resolve => {
      debounce(value => {
        debouncedRef.current += 1;
        const LocalRef = debouncedRef.current;
        setTimeout(() => {
          if (LocalRef === debouncedRef.current) {
            props.loadOptions(value).then(response => {
              resolve(response);
            });
          }
        }, 300);
      }, 300)(__);
    });
    return _options;
  };

  return (
    <StyledFormGroup $invalid={invalid || error} noMargin={noMargin}>
      <InputHolder>
        {prefix && (
          <InputIcon disabled={disabled} prefix={prefix} invalid={invalid || error}>
            {prefix}
          </InputIcon>
        )}
        {async ? (
          <StyledSelectAsync
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            disabled={disabled}
            classNamePrefix="react-select"
            loadOptions={loadOptions}
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onChange={value => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
          />
        ) : (
          <StyledSelect
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            classNamePrefix="react-select"
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            menuPosition="fixed"
            onChange={value => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
          />
        )}
      </InputHolder>

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}
export default Select;
