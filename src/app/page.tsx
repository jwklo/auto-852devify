'use client';
//import { Metadata } from 'next';
import { FaceDetection, FileInputForm } from './client';
import { DemoToBeImproved } from '@/samples/DemoToBeImproved';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


// export const metadata: Metadata = {

// }

function content() {
  const [showdemo, setShowdemo] = useState(false);
  function showDemoHandler(e: any, isDemo: any) {
    setShowdemo(isDemo);
  }
  if (showdemo) {
    return <main className="container space-y-4 py-4">
      <div>
        <Button onClick={(e) => { showDemoHandler(e, false) }}>FileUpload</Button>
      </div>

      <DemoToBeImproved></DemoToBeImproved>
    </main>
  } else {
    return <main className="container space-y-4 py-4">
      <div>
        <Button onClick={(e) => { showDemoHandler(e, true) }}>Demo</Button>
      </div>

      <FileInputForm />
      <FaceDetection />
    </main>
  }

}

export default function Home() {
  return <>{content()}</>
}
