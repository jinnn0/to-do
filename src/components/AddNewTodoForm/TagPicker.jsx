import { useId } from 'react';
import { todoTypes } from '../../utils/todo';
import { Field, Label, Options, Pill, Dot } from './style';

// One tag per task, chosen from coloured pills (a radio group).
function TagPicker({ value, onChange }) {
  const labelId = useId();

  return (
    <Field>
      <Label id={labelId}>Tag</Label>
      <Options role="radiogroup" aria-labelledby={labelId}>
        {todoTypes.map((type) => {
          const selected = value === type.value;
          return (
            <Pill
              key={type.value}
              type="button"
              role="radio"
              aria-checked={selected}
              $selected={selected}
              $color={type.color}
              onClick={() => onChange(type.value)}
            >
              <Dot $color={type.color} aria-hidden="true" />
              {type.label}
            </Pill>
          );
        })}
      </Options>
    </Field>
  );
}

export default TagPicker;
