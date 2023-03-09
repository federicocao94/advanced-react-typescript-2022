import { FC, ReactElement, useState } from 'react';
import { LabeledInput } from '../components';

type Props<TData> = {
  header: string;
  initialValues: TData;
  onSubmit: (values: TData) => void;
};


/*
  replacing any as type for initialValues to force initialValues and onSubmit param to have the same type, 
  TData is that generic type. 
  TData will be something like Record<string, string | number | undefined> which means it's basically a map with string as key
   and strings or number as values
*/

export function GenericForm<
  TData extends Record<string, string | number | undefined>
>({ header, initialValues, onSubmit }: Props<TData>): ReactElement {
  const [values, setValues] = useState(initialValues);

  return (
    <form className="mb-5" onSubmit={() => onSubmit(values)}>
      <h3 className="mb-3">{header}</h3>

      {Object.keys(values).map((key) => (
        <LabeledInput
          key={key}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        >
          <span className="text-capitalize">{key}:</span>
        </LabeledInput>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
