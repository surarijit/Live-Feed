//establishing some global variables   
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

// length of video we will record
let recordingTimeMS = 5000;
//utility funcs

// function to output text strings to a div so that we can share information with  the user
 function log(msg) {
  logElement.innerHTML += msg + "\n";
}

// promise resolves once the specified number of milliseconds have elapsed
 function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}

// this function handles the recording process

//startRecording() takes two input parameters: 
//a MediaStream to record from and the length in milliseconds of the recording to make. 
//We always record no more than the specified number of milliseconds of media, although if the media stops before that time is reached,
//MediaRecorder automatically stops recording as well
 function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
//the empty array data holds media data provided to out ondataavailable event handler
  let data = [];
 
// event handler pushes the blob onto data array
// blob is immutable raw data
  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");
 

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop()
  );
 
  return Promise.all([
    stopped,
    recorded
  ])
  .then(() => data);
}
 function stop(stream) {
  stream.getTracks().forEach(track => track.stop());
}
 startButton.addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(stream => {
    preview.srcObject = stream;
    downloadButton.href = stream;
    preview.captureStream = preview.captureStream || preview.mozCaptureStream;
    return new Promise(resolve => preview.onplaying = resolve);
  }).then(() => startRecording(preview.captureStream(), recordingTimeMS))
  .then (recordedChunks => {
    let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
    recording.src = URL.createObjectURL(recordedBlob);
    downloadButton.href = recording.src;
    downloadButton.download = "RecordedVideo.webm";
    
    log("Successfully recorded " + recordedBlob.size + " bytes of " +
        recordedBlob.type + " media.");
  })
  .catch(log);
}, false); stopButton.addEventListener("click", function() {
  stop(preview.srcObject);
}, false);
            