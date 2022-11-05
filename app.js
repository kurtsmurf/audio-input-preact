import { h, render, Fragment } from "https://cdn.skypack.dev/preact";
import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { AudioInput } from "./AudioInput";

const audioContext = new AudioContext();

const App = () => {
  const [nodes, setNodes] = useState([]);

  const onChange = buffers =>
    setNodes(buffers.map(bufferSourceOfBuffer))

  return h(
    Fragment,
    {},
    h(AudioInput, { onChange }),
    nodes.map(node => h("p", {}, node.buffer.length))
  )
}

render(h(App), document.body);

const bufferSourceOfBuffer = buffer => {
  const bufferSource = audioContext.createBufferSource();
  bufferSource.buffer = buffer;
  return bufferSource
}