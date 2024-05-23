'use client';

import { Toast, Accordion, AccordionContainer } from '@/components';
import { ToastType } from '@/components/toast/Toast.Types';
import { useToast } from '@/components/toast/useToast.hook';

const data = [
  { title: 'Title 1', content: 'accordion content 1', open: true },
  {
    title: 'Title 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae officia.',
  },
  { title: 'Title 3', content: 'accordion content 3' },
  { title: 'Title 4', content: 'accordion content 4' },
];

export default function Home() {
  const { openToast, toastList } = useToast();

  return (
    <main className="min-h-screen sm:p-24 flex flex-col items-center justify-center p-5">
      <Accordion items={data}></Accordion>
      <br />
      <AccordionContainer>
        {data.map((item, index) => (
          <AccordionContainer.Item
            key={index}
            open={item.open}
            title={item.title}
            content={item.content}
          />
        ))}
      </AccordionContainer>

      <div className="flex mb-5">
        <button
          onClick={() =>
            openToast({
              type: 'warning',
              title: 'Toast Title',
              content: 'Toast Content',
              closable: true,
            })
          }
          className="bg-yellow-500 p-2 px-4 active:bg-yellow-400 rounded-lg text-white m-2"
        >
          Warning Toast
        </button>
        <button
          onClick={() =>
            openToast({
              type: 'success',
              title: 'Toast Title',
              content: 'Toast Content',
              closable: true,
            })
          }
          className="bg-green-500 p-2 px-4 active:bg-green-400 rounded-lg text-white m-2"
        >
          Sucess Toast
        </button>
        <button
          onClick={() =>
            openToast({
              type: 'danger',
              title: 'Toast Title',
              content: 'Toast Content',
              closable: false,
            })
          }
          className="bg-red-500 p-2 px-4 active:bg-red-400 rounded-lg text-white m-2"
        >
          Danger Toast
        </button>
      </div>
      {toastList.map((toast: ToastType) => (
        <Toast
          closable={toast.closable}
          onClose={() => console.log('Close Clicked')}
          type={toast.type}
        >
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Content>{toast.content}</Toast.Content>
        </Toast>
      ))}
    </main>
  );
}
