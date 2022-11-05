import { h, render } from "https://cdn.skypack.dev/preact";
import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { AudioInput } from "./AudioInput";

const App = () => {
  const [buffers, setBuffers] = useState([]);

  return h(
    "div",
    {},
    h(AudioInput, { onChange: setBuffers }),
    buffers.map(buffer => h("p", {}, buffer.length))
  )
}

render(h(App), document.getElementById("app"));
