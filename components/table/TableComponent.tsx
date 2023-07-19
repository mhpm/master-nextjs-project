'use client';

import { IColum } from '@/app/types/columns';
import styles from './table.module.scss';
import { ChangeEvent, useState } from 'react';

type Props<Data> = {
  data: Data[];
  columns: IColum<Data>[];
  checkboxSelection?: boolean;
  onRowClick?: (items: Data[]) => void;
  onCheckAll?: (items: Data[]) => void;
};

interface IFormatData<Data> {
  isSelected: boolean;
}

function TableComponent<Data>({
  data,
  columns,
  checkboxSelection = false,
  onRowClick,
  onCheckAll,
}: Props<Data>) {
  const [formatData, setFormatData] = useState<IFormatData<Data>[]>(
    data.map((el) => ({ ...el, isSelected: false }))
  );
  const [checkAll, setCheckAll] = useState(false);

  const handleOnRowClick = (
    item: IFormatData<Data>,
    index: string | number
  ) => {
    if (onRowClick) {
      const updateData = formatData.map((el, indx) =>
        index === indx
          ? {
              ...el,
              isSelected: !el.isSelected,
            }
          : el
      );

      const selectedItems = updateData.filter((el) => el.isSelected);

      const removedSelectedProperty = selectedItems.map((el) => {
        const { isSelected, ...rest } = el;
        return { ...rest };
      });

      setFormatData(updateData);

      return onRowClick(removedSelectedProperty as Data[]);
    }
  };

  const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    const selectedItems = formatData.map((el) => ({
      ...el,
      isSelected: checked,
    }));

    setFormatData(selectedItems);
    setCheckAll(checked);

    if(onCheckAll)
      return checked ? onCheckAll(selectedItems as Data[]) : onCheckAll([])
  };

  return (
    <table className={`w-full rounded-md ${styles.table}`}>
      <thead>
        <tr className="bg-white text-left text-neutral-600">
          {checkboxSelection && (
            <th style={{ width: 40 }}>
              <input
                onChange={handleCheckAll}
                defaultChecked={checkAll}
                type="checkbox"
                name=""
                id=""
                className="rounded-sm"
              />
            </th>
          )}
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
        {formatData.map((item, formatIndex) => (
          <tr key={formatIndex} className={`text-neutral-600 hover:bg-neutral-200 ${item.isSelected ? 'bg-neutral-200': 'bg-white'}`}>
            {checkboxSelection && (
              <td key={`checkbox${formatIndex}`}>
                <input
                  onChange={() => handleOnRowClick(item, formatIndex)}
                  checked={item.isSelected}
                  type="checkbox"
                  className="rounded-sm"
                />
              </td>
            )}
            {columns.map((column, index) => {
              return (
                <td
                  data-label={column.field.toString()}
                  key={index}
                  onClick={() => handleOnRowClick(item, formatIndex)}
                >
                  {item[column.field as keyof unknown]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
