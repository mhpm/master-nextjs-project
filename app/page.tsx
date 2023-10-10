'use client'

import { Toast } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col items-center justify-center">
      <Toast>
        <Toast.Title>Default</Toast.Title>
        <Toast.Close onClick={() => console.log('Close Clicked')} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
        illum, minima id.
      </Toast>
      <br />
      <Toast type="warning">
        <Toast.Title>Warning</Toast.Title>
        <Toast.Close onClick={() => console.log('Close Clicked')} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
        illum, minima id.
      </Toast>
      <br />
      <Toast type="info">
        <Toast.Title>Info</Toast.Title>
        <Toast.Close onClick={() => console.log('Close Clicked')} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
        illum, minima id.
      </Toast>
      <br />
      <Toast type="danger">
        <Toast.Title>Danger</Toast.Title>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic
        illum, minima id.
      </Toast>
    </main>
  );
}
