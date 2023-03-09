import { ChangeEventHandler, ComponentProps, FC, ReactNode, useId } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

/*
  instead of listing all checkbox options in this component props to set them in parent component,
  it gets the options from the Checkbox component and expose them(you don't need to know and specify all of them)
  for instance disabled, checked, onChange and readonly opt for checkbox will be available to the parent component
*/
type Props = ComponentProps<typeof Checkbox>;

export const LabeledCheckbox: FC<Props> = ({ children, id, ...props }) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox id={id ?? internalId} {...props} />
      <Label htmlFor={id ?? internalId}>{children}</Label>
    </div>
  );
};
