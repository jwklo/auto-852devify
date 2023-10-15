'use client';
import { multplePhotoFaceDection } from "@/components/methods/faceDetection";
import { OutputCanvas } from "@/components/ui/OutputCanvas";

function DemoToBeImproved() {
    const tbiPhotos = [
      "./sample_images/benchmark/1_input.jpg",
      "./sample_images/benchmark/2_input.jpg",
      "./sample_images/benchmark/3_input.jpg",
      "./sample_images/benchmark/4_input.png",
      "./sample_images/benchmark/5_input.jpg",
      "./sample_images/to_be_improved/6_input.jpg",
      "./sample_images/to_be_improved/7_input.jpg",
      "./sample_images/to_be_improved/8_input.jpeg",
      "./sample_images/to_be_improved/9_input.jpg",
      "./sample_images/to_be_improved/10_input.jpeg",
    ];
    const minConfidence = 0.30;
    const maskUri = "./red160px.png";
    const maskAdjust = 1.2;
    //let canvasList:any[] = [];
  
    const detectionList = multplePhotoFaceDection(tbiPhotos, minConfidence);
  
    const canvasList = detectionList.map(d => {
      const {uri, filename, detections} = d;
      return  <OutputCanvas detections={detections}
      baseImageUri={uri} maskImageUri={maskUri} showLandmarks={false} photoTitle={filename}
      className="h-auto max-w-full" key={`${uri}`} maskAdjust = {maskAdjust }/>
    })
    
  
    return <div>
      {canvasList}
    </div>
  }
  
  export {DemoToBeImproved}