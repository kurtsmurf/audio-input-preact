import { h } from "https://cdn.skypack.dev/preact";

const audioContext = new AudioContext();

export const AudioInput = ({ onChange }) =>
  h("input", {
    type: "file",
    accept: ".mp3, .wav, .m4a",
    multiple: true,
    onChange: (e) => Promise
      .all([...e.target.files].map(audioBufferOfFile))
      .then(onChange),
  })

const audioBufferOfFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = (e) => {
      const arrayBuffer = e.target.result;
      audioContext.decodeAudioData(arrayBuffer)
        .then(audioBuffer => {
          resolve(audioBuffer);
        });
    };
    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}
