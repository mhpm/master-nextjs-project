import { IColum } from '../types/columns';
import TableComponent from './TableComponent';

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

  return <TableComponent data={data} columns={columns} />;
};

export default TableUserContainer;
