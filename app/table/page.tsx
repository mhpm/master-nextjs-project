import TableProductoContainer from '@/containers/TableProductContainer';
import TableUserContainer from '@/containers/TableUserContainer';

const TablePage = () => {
  return (
    <div className="flex justify-center items-center flex-col p-4">
      <h1 className="p-4">Reusable Tables Page</h1>
      <div className="w-full p-4">
        <h2>Users Table</h2>
        <TableUserContainer />
      </div>
      <div className="w-full p-4">
        <h2>Products Table</h2>
        <TableProductoContainer />
      </div>
    </div>
  );
};

export default TablePage;
