import Toolbar from "./components/Toolbar";
import SpreadsheetGrid from "./components/SpreadsheetGrid";
import BottomTabs from "./components/BottomTabs";
import HeaderBar from "./components/HeaderBar";
import SheetHeader from "./components/SheetHeader";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <Toolbar />
      <SheetHeader />
      <SpreadsheetGrid />
      <BottomTabs />
    </div>
  );
}

export default App;
