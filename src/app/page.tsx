import { Metadata } from 'next';
import { FaceDetection, FileInputForm } from './client';
import { DemoToBeImproved } from '@/samples/DemoToBeImproved';


export const metadata: Metadata = {

}
export default function Home() {
  /*
  return (
    <main className="container space-y-4 py-4">
      <DemoToBeImproved></DemoToBeImproved>
    </main>

  )
  */
  
  return (
    <main className="container space-y-4 py-4">
      <FileInputForm />
      <FaceDetection />
    </main>
  );
  
}
