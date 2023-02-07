import {
  CheckboxLabel,
  CheckboxText,
  FavInput,
  CheckBox,
} from './Checkbox.styled';

export const Checkbox = ({ label, onChange, name, isChecked }) => {
  return (
    <CheckBox className="checkbox-wrapper">
      <CheckboxLabel>
        <FavInput type="checkbox" name={name} onChange={onChange} />
        <CheckboxText>{label}</CheckboxText>
      </CheckboxLabel>
    </CheckBox>
  );
};
