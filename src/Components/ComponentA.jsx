import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [cendol, setCendol] = useState(2);
  return (
    <div>
      <ComponentB cendol={cendol} setCendol={setCendol} />
    </div>
  );
}

export default ComponentA;