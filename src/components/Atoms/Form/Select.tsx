import React, { useEffect } from 'react';
import Select from 'react-select';

import { SelectProps } from '../../../types/props';

export default function CustomSelect(props: SelectProps) {
  const handleChangeLocally = (e: any) => {
    if (props.isMulti) {
      let options: string[] = [];
      for (let i = 0; i < e.length; i++) {
        // @tsc-ignore
        options.push(e[i].value);
      }
      props.handleChange({ value: options, name: props.name });
    } else props.handleChange({ ...e, name: props.name });
  };

  useEffect(() => {
    if (props.defaultValue)
      handleChangeLocally({ name: props.name, value: props.defaultValue.value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/*@tsc-ignore*/}
      <Select
        isDisabled={props.disabled || false}
        name={props.name}
        options={props.options}
        placeholder={props.placeholder || `Select ${props.name}`}
        onChange={(e: any) => handleChangeLocally(e)}
        className={`w-${props.width || 'full md:w-80'} select ${props.className || ''}`}
        isMulti={props.isMulti}
        isSearchable={props.searchable}
        defaultValue={props.defaultValue || null}
        getOptionLabel={props.getOptionLabel}
        getOptionValue={props.getOptionValue}
        noOptionsMessage={(_query: any) =>
          props.loading ? 'loading ...' : `No options avalaible`
        }
        closeMenuOnSelect={!props.isMulti}
        menuPlacement="auto"
        styles={{
          control: (base: any, _state: any) => ({
            ...base,
            backgroundColor: '#EEF1F4',
            borderColor: props.hasError ? 'rgb(238,64,64)' : 'rgb(240, 241, 241)',
            borderWidth: 2,
            cursor: 'pointer',
            fontSize: 14,
            minHeight: props.height || 30,
            height: 'auto',
            paddingRight: props.padding || 8,
            paddingLeft: props.padding || 8,
          }),
          clearIndicator: (_base: any, _state: any) => ({
            display: 'none',
          }),
          valueContainer: (base: any, _state: any) => ({
            ...base,
            maxHeight: 150,
            overflow: 'auto',
          }),
          container: (base: any, _state: any) => ({
            ...base,
            height: 'auto',
          }),
        }}
      />
    </>
  );
}
