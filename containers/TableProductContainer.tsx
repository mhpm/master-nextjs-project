import { IColum } from '../app/types/columns';
import TableComponent from '../components/table/TableComponent';

type IProduct = {
  id: string | number;
  title: string;
  description: string;
};

const columns: IColum<IProduct>[] = [
  {
    field: 'id',
    label: 'ID',
    width: '40px',
    numeric: true,
  },
  {
    field: 'title',
    label: 'Title',
  },
  {
    field: 'description',
    label: 'Description',
    width: '70%',
  },
];

const TableProductoContainer = async () => {
  const res = await fetch('https://64ad6b17b470006a5ec5ee81.mockapi.io/todos', {
    cache: 'no-cache',
  });

  const data: IProduct[] = await res.json();
  
  return <TableComponent data={data} columns={columns} />;
};

export default TableProductoContainer;
