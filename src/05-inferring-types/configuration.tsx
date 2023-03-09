import { FC } from 'react';
import { LabeledInput } from '../components';

/*
  using generic types (with extends) to configure getConfigItem function so that it could be called safely to get items from config object through config[key1][key2]

  TSection type to be defined wich extends current keys of the object
  TItem must be a key wich is present in config[smt] objects, such as street, houseNumber... 

  typescript can infer valid keys from existing objects not only object shape
*/
function getConfigItem<
  TSection extends keyof typeof config, 
  TItem extends keyof typeof config[TSection]
>(section: TSection, item: TItem) {
  const config = {
    user: {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: new Date(1990, 6, 10),
    },
    address: {
      street: 'Main St',
      houseNumber: 123,
      city: 'New York',
    },
  };

  return config[section][item];
}

export const Configuration: FC = () => {
  const firstName = getConfigItem('user', 'firstName');
  const lastName = getConfigItem('user', 'lastName');
  const birthDate = getConfigItem('user', 'birthDate').toDateString();

  //const employer = getConfigItem('employer', 'name');

  const street = getConfigItem('address', 'street');
  const houseNumber = getConfigItem('address', 'houseNumber');
  const city = getConfigItem('address', 'city').toUpperCase();

  return (
    <div>
      <h3>Configuration</h3>
      <div className="row gap-2">
        <LabeledInput value={firstName} readOnly>
          First name:
        </LabeledInput>
        <LabeledInput value={lastName} readOnly>
          Last name:
        </LabeledInput>
        <LabeledInput value={birthDate} readOnly>
          Birth date:
        </LabeledInput>
        <LabeledInput value={`${street} ${houseNumber}, ${city}`} readOnly>
          Address:
        </LabeledInput>
      </div>
    </div>
  );
};
