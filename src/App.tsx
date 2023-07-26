import { useState } from "react";

// Components
import { CustomizeIcon } from "./components/CustomizeIcon/CustomizeIcon";

function App() {
  const [count, setCount] = useState(0);

  //  Tasks:
  //  Logo/Thumbnail Picker
  // Card UI

  return (
    <div className="ml-5" style={{ width: "1000px" }}>
      <CustomizeIcon />
    </div>
  );
}

export default App;
