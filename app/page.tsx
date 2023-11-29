'use client';

import { Toast } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col items-center justify-center">
      <Toast closable onClose={() => console.log('Close Clicked')}>
        <Toast.Title>Default</Toast.Title>
        <Toast.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
          illum, minima id.
        </Toast.Content>
      </Toast>
      <br />
      <Toast
        type="warning"
        closable
      >
        <Toast.Title>Warning</Toast.Title>
        <Toast.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
          illum, minima id.
        </Toast.Content>
      </Toast>
      <br />
      <Toast type="info" closable onClose={() => console.log('Close Clicked')}>
        <Toast.Title>Info</Toast.Title>
        <Toast.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
          illum, minima id.
        </Toast.Content>
      </Toast>
      <br />
      <Toast type="danger">
        <Toast.Title>Danger</Toast.Title>
        <Toast.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
          illum, minima id.
        </Toast.Content>
      </Toast>
    </main>
  );
}
