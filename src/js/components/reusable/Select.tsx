import * as React from 'react';
import Container from './Container';

interface Props {
  id: string;
  disabled?: boolean;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: JSX.Element[];
}

const Select = (props: Props) => (
  <Container.FlexRow className="items-center justify-between gap-12">
    <label
      htmlFor={props.id}
      className="block mb-2 text-sm font-medium text-brand"
    >
      {props.label}
    </label>
    <select
      id={props.id}
      className="bg-gray-50 border border-gray-300 text-brand text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
    ></select>
  </Container.FlexRow>
);

export default Select;
