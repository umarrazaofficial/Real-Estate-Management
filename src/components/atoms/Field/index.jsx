import React, { forwardRef, useState } from 'react';
import InputIcon from '../../molecules/InputIcon';
import FakeLabel from '../../molecules/FakeLabel';
import FakeInput from '../../molecules/FakeInput';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Error, InputHolder } from './Field.styles';
// import { FaEye } from 'react-icons/fa';
// import { FaEyeSlash } from 'react-icons/fa';
import { TbCheck } from 'react-icons/tb';
import Label from '../../molecules/Label';
import Input from '../../molecules/Input';
import DatePicker from 'react-datepicker';
import Select from '../../molecules/Select';
import PhoneNumberInput from '../../molecules/PhoneNumberInput';
import UploadFile from '../../molecules/UploadFile';
import showPassword from '../../../assets/show-password.svg';
import hidePass from '../../../assets/hidePass.svg';
const defaultProps = {
  type: 'text',
};

const Field = forwardRef(
  (
    {
      inputSm,
      rules,
      error,
      name,
      invalid,
      label,
      type,
      prefix,
      suffix,
      rounded,
      noMargin,
      margin,
      button,
      searchField,
      onlyRead,
      labelIcon,
      labelSm,
      disabled,
      datePicker,
      clear,
      labelReverse,
      radioBorder,
      labelColor,
      ...props
    },
    ref,
  ) => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const inputProps = {
      id: props.id ?? name,
      name,
      type,
      invalid,
      'aria-describedby': `${name}Error`,
      ...props,
    };
    const renderInputFirst = type === 'checkbox' || type === 'radio';

    return (
      <StyledFormGroup
        $invalid={invalid || error}
        noMargin={noMargin}
        css={`
          margin-bottom: ${margin};
        `}>
        {renderInputFirst && label && (
          <Label
            htmlFor={inputProps.id}
            labelIcon={labelIcon}
            labelSm={labelSm}
            onlyRead={onlyRead}
            clear={clear}
            labelReverse={labelReverse}
            css="display: flex !important; align-items:center; margin-bottom:0 !important;">
            <Input
              inputSm={inputSm}
              {...inputProps}
              ref={ref}
              disabled={disabled}
              $invalid={invalid || error}
              checked={inputProps?.value}
              // eslint-disable-next-line no-shadow
              onChange={({ target: { name, checked } }) => inputProps?.onChange?.({ target: { name, value: checked } })}
            />
            <FakeInput $radioBorder={radioBorder} $labelReverse={labelReverse}>
              {type === 'checkbox' && <TbCheck color="var(--white)" />}
            </FakeInput>
            <FakeLabel $labelColor={labelColor} required={rules?.filter(({ required }) => required).length}>
              {label}
            </FakeLabel>
          </Label>
        )}

        {renderInputFirst || (
          <>
            {label && (
              <Label
                onClear={() =>
                  inputProps?.onChange?.({
                    target: {
                      name,
                      value: type === 'datepicker' ? [null, null] : '',
                    },
                  })
                }
                clear={clear}
                labelIcon={labelIcon}
                labelSm={labelSm}
                htmlFor={inputProps.id}
                required={rules?.filter(({ required }) => required).length}>
                {label}
              </Label>
            )}
            <InputHolder $searchField={searchField}>
              {/* input left icon */}
              {prefix && (
                <InputIcon
                  disabled={disabled}
                  // as={type === 'search' && 'button'}
                  // type={type === 'search' ? 'button' : undefined}
                  prefix={prefix}
                  invalid={invalid || error}
                  css={type === 'search' && 'color: var(--primary); font-size: 25px; left: 11px;'}>
                  {prefix}
                </InputIcon>
              )}
              {suffix && (
                <InputIcon suffix={suffix} disabled={disabled} invalid={invalid || error}>
                  {suffix}
                </InputIcon>
              )}
              {/* {datePicker && <DatePicker inputProps={inputProps} />} */}
              {/* password field */}
              {type === 'password' ? (
                <>
                  <Input
                    inputSm={inputSm}
                    ref={ref}
                    {...inputProps}
                    $prefix={prefix}
                    $suffix={suffix}
                    $invalid={invalid || error}
                    type={isRevealPwd ? 'text' : 'password'}
                    $rounded={rounded}
                    disabled={disabled}
                    $button={button && true}
                    // autoComplete="off"
                    autoComplete="new-password"
                  />
                  <InputIcon
                    disabled={disabled}
                    suffix
                    css="cursor: pointer"
                    onClick={() => setIsRevealPwd(prevState => !prevState)}>
                    {isRevealPwd ? (
                      <img src={showPassword} alt="showPassword" />
                    ) : (
                      <img src={hidePass} alt="showPassword" />
                    )}
                  </InputIcon>
                </>
              ) : type === 'phone' ? (
                <PhoneNumberInput
                  {...inputProps}
                  prefix={prefix}
                  disabled={disabled}
                  $invalid={invalid || error}
                  noMargin
                />
              ) : type === 'datepicker' ? (
                <DatePicker {...inputProps} prefix={prefix} $invalid={invalid || error} />
              ) : type === 'file' ? (
                <UploadFile {...inputProps} $invalid={invalid || error} />
              ) : type === 'img' ? (
                <UploadFile {...inputProps} $invalid={invalid || error} />
              ) : type === 'select' ? (
                <Select {...inputProps} $invalid={invalid || error} noMargin />
              ) : (
                <>
                  {/* any other input type */}
                  <Input
                    inputSm={inputSm}
                    ref={ref}
                    {...inputProps}
                    $prefix={prefix}
                    disabled={disabled}
                    $suffix={suffix}
                    $invalid={invalid || error}
                    $rounded={rounded}
                    $button={button && true}
                  />
                  {/* input right icon */}
                  {suffix && (
                    <InputIcon suffix={suffix} disabled={disabled} invalid={invalid || error}>
                      {suffix}
                    </InputIcon>
                  )}
                  {button && (
                    <div
                      css={`
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 10px;
                      `}>
                      {button}
                    </div>
                  )}
                </>
              )}
            </InputHolder>
          </>
        )}
        {invalid ||
          (error && (
            <Error id={`${name}Error`} role="alert">
              {error}
            </Error>
          ))}
      </StyledFormGroup>
    );
  },
);

Field.defaultProps = defaultProps;

export default Field;
