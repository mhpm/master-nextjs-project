// import { ComponentPropsWithoutRef } from 'react';

import CheckListContainer from "./CheckListContainer";

export default function TodoListPage(){
  return (
    <div>TodoListPage
      <CheckListContainer />
    </div>
  )
}

// rest props patter
// type Props = {
//   label: string;
//   labelProps: ComponentPropsWithoutRef<'label'>;
// } & ComponentPropsWithoutRef<'input'>;
// const Field = ({ label, labelProps, ...inputProps }: Props) => {
//   return (
//     <>
//       <label {...labelProps}>{label}</label>
//       <input {...inputProps} />
//     </>
//   );
// };
