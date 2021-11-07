import React from "react";
// import { UseCallback } from './components/customHooks/useCallback/UseCallback'
// import { Input } from './components/customHooks/useState/Input'
// import { UseData } from './components/customHooks/useEffect/UseData'
// import { UseLayoutEffect } from './components/customHooks/useLayoutEffect/UseLayoutEffect'

import { UseMemo } from "./components/customHooks/useMemo/UseMemo";
const App = () => {
  return (
    <div>
      {/* <Input />    */}
      {/* <UseData /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseCallback /> */}
      <UseMemo />
    </div>
  );
};

export default App;
