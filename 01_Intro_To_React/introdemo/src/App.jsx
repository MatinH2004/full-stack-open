const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  );
}

export default App
