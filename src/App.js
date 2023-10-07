import React from "react";
import { Mon } from "./components/Mon";
import './components/common.css'
function App() {
  return (
    <div className="main">
      <Mon title="Taj Mahal" city="Agra" url="p6" />
      <Mon title="Char Meenar" city="Hyderabad" url="p1" />
      <Mon title="Lal Quila" city="Delhi" url="p5" />
      <Mon title="India Gate" city="Delhi" url="p3" />
      <Mon title="Parliment" city="Delhi" url="p4" />
      <Mon title="Mysore Palace" city="Mysore" url="p2" />
      <Mon title="Victoria Palace" city="Calcutta" url="p7" />
      <Mon title="Makka Masjid" city="Hyderabad" url="p8" />
      <Mon title="Khutub Minar" city="Delhi" url="p9" />
    </div>
  );
}

export default App;
