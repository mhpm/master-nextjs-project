'use client';

import { IColum } from '../types/columns';
import styles from './table.module.css';

type Props<Data> = {
  data: Data[];
  columns: IColum<Data>[];
};

function TableComponent<Data>({ data, columns }: Props<Data>){
  return (
    <table className={`w-full rounded-md  ${styles.table}`}>
      <thead className="">
        <tr className="bg-blue-400 text-left">
          {columns.map((column, index) => (
            <th
              scope="col"
              key={index}
              className="p-2"
              style={{ width: column?.width ? column.width : 'auto' }}
            >
              {column.field.toString()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="bg-white text-neutral-500">
          {columns.map((column, index) => (
            <td data-label={column.field.toString()} key={index}>
              {item[column.field as keyof unknown]}
            </td>
          ))}
        </tr>
        ))}
      </tbody>
    </table>
  );
};

// const Row = ({ item, columns }: { item: Data; columns: IColum<typeof item>[] }) => {
//   return (
//     <tr className="bg-white text-neutral-500">
//       {columns.map((column, index) => (
//         <td data-label={column.field.toString()} key={index}>
//           {item[column.field as keyof typeof item]}
//         </td>
//       ))}
//     </tr>
//   );
// };

export default TableComponent;
