import { useInput } from "./hooks/useInput";

const App = () => {
  const maxLength = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLength);
  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default App;