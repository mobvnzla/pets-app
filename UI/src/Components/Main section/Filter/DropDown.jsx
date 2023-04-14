import { useRef } from 'react';

export default function DropDown({ whatFor, labelText, populationJSX, options, setValue }) {
  const selectRef = useRef(null);

  return (
    <>
      <label htmlFor={whatFor} className='filter__key'>
        {labelText}{' '}
        <select
          className='filter__value'
          id={whatFor}
          name={whatFor}
          ref={selectRef}
          onChange={() => {
            setValue(options.find((option) => option.name == selectRef.current.value));
          }}
        >
          {populationJSX ?? <option value=''>{'loading'}</option>}
        </select>
      </label>
    </>
  );
}
