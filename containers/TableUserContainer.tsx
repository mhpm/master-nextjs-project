'use client';

import { IColum } from '../app/types/columns';
import TableComponent from '../components/table/TableComponent';

type IUser = {
  id: string | number;
  name: string;
  last_name: string;
  email: string;
  createdAt: string;
};

const columns: IColum<IUser>[] = [
  {
    field: 'id',
    label: 'ID',
    width: '40px',
    numeric: true,
  },
  {
    field: 'name',
    label: 'First Name',
  },
  {
    field: 'last_name',
    label: 'Last Name',
  },
  {
    field: 'email',
    label: 'User Name',
  },
  {
    field: 'createdAt',
    label: 'Date',
    centered: true,
  },
];

const TableUserContainer = async () => {
  const res = await fetch('https://64ad6b17b470006a5ec5ee81.mockapi.io/users', {
    cache: 'no-cache',
  });

  const data: IUser[] = await res.json();

  return (
    <TableComponent
      checkboxSelection
      data={data}
      columns={columns}
      onRowClick={(item) => console.log(item)}
      onCheckAll={(item) => console.log(item)}
    />
  );
};

export default TableUserContainer;
