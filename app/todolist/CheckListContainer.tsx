import ChecklistItem from "./CheckListItem";

export interface Todo {
    id?: number;
    title: string;
    description: string;
  }

export default async function CheckListContainer() {

    const res = await fetch('https://64ad6b17b470006a5ec5ee81.mockapi.io/todos', {
      cache: 'no-cache'
    })
  
    const data: Todo[] = await res.json()
  
    return (
      <div className="p-10">
        <ChecklistItem
          data={data}
          id="id"
          primary="title"
          secondary="description"
          // checkedIds={checkedId === null ? [] : [checkedId]}
          // onCheckedIdsChange={handleCheckedIdsChange}
          // renderItem={(item) => (
          //   <li key={item.id} className="bg-white p-4 border-b-2 rounded">
          //     <div className="text-xl text-slate-800 pb-1">{item.name}</div>
          //     <div className="text-slate-500">{item.role}</div>
          //   </li>
          // )}
        />
      </div>
    );
  }