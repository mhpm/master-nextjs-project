'use client';

import { IColum } from '@/app/types/columns';
import styles from './table.module.scss';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import sort_icon from '@/app/static/sort.svg';

type Props<Data> = {
  data: Data[];
  columns: IColum<Data>[];
  checkboxSelection?: boolean;
  onRowClick?: (items: Data[]) => void;
  onCheckAll?: (items: Data[]) => void;
};

interface IFormatData<Data> {
  isSelected?: boolean;
}

function TableComponent<Data>({
  data,
  columns,
  checkboxSelection = false,
  onRowClick,
  onCheckAll,
}: Props<Data>) {
  const [formatData, setFormatData] = useState<IFormatData<Data>[]>(
    checkboxSelection
      ? data.map((el) => ({ ...el, isSelected: false }))
      : (data as IFormatData<Data>[])
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

      if (removedSelectedProperty.length) setCheckAll(true);
      else setCheckAll(false);

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

    if (onCheckAll)
      return checked ? onCheckAll(selectedItems as Data[]) : onCheckAll([]);
  };

  const sortData = (field: string) => {
    const sortedArray: IFormatData<Data>[] = formatData
      .sort((n1: any, n2: any) => (n1[field] < n2[field] ? -1 : 1))
      .slice(0);

    setFormatData(sortedArray);
  };

  return (
    <Table className={`w-full rounded-md ${styles.table}`}>
      <Header>
        <tr className="bg-white text-left text-neutral-600">
          {checkboxSelection && (
            <th style={{ width: 40 }}>
              <input
                onChange={handleCheckAll}
                checked={checkAll}
                type="checkbox"
                className="rounded-sm cursor-pointer"
              />
            </th>
          )}
          {columns.map((column, index) => (
            <th
              scope="col"
              key={index}
              className="p-2"
              style={{ width: column?.width ? column.width : 'auto' }}
              onClick={() => sortData(column.field.toString())}
            >
              <div className="flex">
                {column.field.toString()}
                <Image
                  className="hover:bg-neutral-200 hover:opacity-60 rounded-full p-[1px] opacity-30"
                  priority
                  src={sort_icon}
                  alt="sorting"
                  width={20}
                  height={15}
                />
              </div>
            </th>
          ))}
        </tr>
      </Header>
      <Body>
        {formatData.map((item, formatIndex) => (
          <tr
            key={formatIndex}
            className={`text-neutral-600 hover:bg-neutral-200 ${
              item.isSelected ? 'bg-neutral-100' : 'bg-white'
            }`}
          >
            {checkboxSelection && (
              <td key={`checkbox${formatIndex}`}>
                <input
                  onChange={() => handleOnRowClick(item, formatIndex)}
                  checked={item.isSelected}
                  type="checkbox"
                  className="rounded-sm cursor-pointer"
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
      </Body>
    </Table>
  );
}

const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <table className={className}>{children}</table>;
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <thead>{children}</thead>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

const Row = ({
  children,
  className,
  type = 'td',
}: {
  children: React.ReactNode;
  className: string;
  type: 'th' | 'td';
}) => {
  return <tr className={className}>{children}</tr>;
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
