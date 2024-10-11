import reactLogo from "./assets/react.svg"; // the way we import from assets folder
import viteLogo from "/vite.svg"; // the way we import from public folder
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Button>Click me</Button>
    </>
  );
}

export default App;
