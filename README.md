# auto-852devify
Inspired by `auto-nounify`, an open source tool by 852dev.xyz to anonymize event participants by adding a specific graphic to cover their faces

## Installation
- npm i 
## Build 
- npm run build
## Run development mode
- npm run dev

## Settings
- Image files should be placed in "public" folder
- Updating the settings file settings/masks.ts
- Setting structure
    - {maskKey: {widthAdjust, uri}}
    - widthAdjust: Width ratio to resize the mask.
    - uri: path of mask image file.
### Examples  
```
{
    noggles1: {widthAdjust: 1.2, uri: './red160px.png'},
    noggles2: {widthAdjust: 1.2, uri: './grey-light160px.png'},
    noggles3: {widthAdjust: 1.2, uri: './frog-green160px.png'},
}
```
    

# Usage
## Face Detecction API
```
import { singlePhotoFaceDetection, multplePhotoFaceDection } from '@/components/methods/faceDetection';
```

### singlePhotoFaceDetection(uri, minConfidence)
- uri: target photo uri
- minConfidence: minimum confidence from face detection. Suggest the better min. confidence should be between 3 - 3.5
- return:
```
faceapi.WithFaceLandmarks<{detection: faceapi.FaceDetection;}>[]
```


### multplePhotoFaceDection(photoList: string[], minConfidence:number = 0.35)
- uri: Array of target photo uri
- minConfidence: minimum confidence from face detection. Suggest the better min. confidence should be between 3 - 3.5
- return 
```
{
    uri: string; 
    filename: string;
    detections: faceapi.WithFaceLandmarks<{
    detection: faceapi.FaceDetection;
    }>[] | undefined;
}[]
```
## Position calculation API
```
import { calcuateMaskPosition, getMaskDimension } from '@/components/methods/calculateMaskPosition'
```
### getMaskDimension(mask: HTMLImageElement, widthAdjust: number = 1)
- Getting mask dimension for calculation use.
- mask: HTMLImageElement object from mask uri
- return
```
{width, height, widthAdjust}
```

### calcuateMaskPosition(landmarks: faceapi.FaceLandmarks68, maskDimension: any)
- Landmarks from detections
- maskDimension from getMaskDimension {width, height, widthAdjust}
- return
```
[midX , midY, width, height, angle, hscale]
```

## OutputCanvas
```
import { OutputCanvas } from '@/components/ui/OutputCanvas';
```
- baseImageUri: Target Photo uri
- maskImageUri: Mask Image uri
- detections: Detections from singlePhotoFaceDetection / multplePhotoFaceDection
- showLandmarks: Show landmarks points in the result canvas if set to true, default false
- showMask: Show mask in the result canvas if set to true, default true
- photoTitle: Card Head title for the result canvas container
- maskSize: ratio of resizing the mask width e.g. adjust the mask size to cover the face,
- maskAdjust: additional ratio of reszing mask e.g. additional adjust for the ratio of noggles holder
- Return HTMLCanvasElement


