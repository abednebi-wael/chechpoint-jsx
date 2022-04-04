import "./App.css";
import Wael from "./R.png";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">Your name here</h1>

        <br />

        <img src={Wael} alt="" />

        <br />

        <img src="img1.jpg" alt="" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
