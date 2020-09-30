import React from "react";
import ReactPlayer from "react-player";
import "./Style.css";
import camera from "./camera.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 3px black", width: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={camera} alt={"phonCamera"} />
        <br />

        <img src={"/phone.jpg"} alt={"phone"} />
      </div>
      <div className="videos">
        <ReactPlayer
          width={320}
          height={240}
          url={"https://youtu.be/C5oxqKY6HA0"}
        />

        <video width={320} height={240} controls={"controls"}>
          <source src={"myVideo.mp4"} type={"video/mp4"} />
        </video>
      </div>
    </div>
  );
}

export default App;
