import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInput, removeInput, updateInputData } from '../../dependentForm/dependentFormSlice';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const DependentForm = () => {
  const dispatch = useDispatch();
  const formInputs = useSelector(state => state.dependentForm.formInputs);

  const handleAddInput = () => {
    dispatch(addInput({ id: Date.now().toString(), name: '', age: '' }));
  };

  const handleRemoveInput = id => {
    dispatch(removeInput(id));
  };

    const handleChange = (e) => {
    dispatch(updateInputData({ id: e.target.id, field: e.target.name, value: e.target.value }));
  };

  return (
    <div data-testid="dependent-form">
      {formInputs.map((input, index) => (
        <div key={input.id}>
          <Input
            id={input.id}
            label="Name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={input.name}
            onChange={handleChange}
            data-testid={`input-name-${input.id}`}
          />
          <Input
            id={input.id}
            label="Age"
            type="number"
            placeholder="Enter age"
            name="age"
            value={input.age}
            onChange={handleChange}
            data-testid={`input-age-${input.id}`}
          />
          {formInputs.length > 1 && index !== 0 && (
            <Button
              name={`remove_${input.id}`}
              type="button"
              onClick={() => handleRemoveInput(input.id)}
              data-testid={`remove-button-${input.id}`}
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button
        name="add-button"
        type="button"
        onClick={handleAddInput}
        data-testid="add-button"
      >
        Add
      </Button>
    </div>
  );
};

export default DependentForm;
