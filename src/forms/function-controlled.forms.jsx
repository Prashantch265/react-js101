import { useState } from 'react';

/**
 * Controlled form example using function component
 * @returns 
 */
export default function ControlledFromFunctionExample() {
    const [selectedOption, setSelectedOption] = useState();

    const [selectedRadioBtn, setSelectedRadioBtn] = useState();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      }

    const handleRadioChange = (event) => {
        setSelectedRadioBtn(event.target.value);
    }

  return (
    <>
    Options
    <div>
    <label>
        Choose an option:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>

    Gender
    <div>
      <label>
        <input type="radio" value="male" checked={selectedRadioBtn === 'male'} onChange={handleRadioChange} />
        Male
      </label>
      <label>
        <input type="radio" value="female" checked={selectedRadioBtn === 'female'} onChange={handleRadioChange} />
        Female
      </label>
      <label>
        <input type="radio" value="others" checked={selectedRadioBtn === 'others'} onChange={handleRadioChange} />
        Others
      </label>
      <p>Selected option: {selectedRadioBtn}</p>
    </div>
    </>
  );
}
