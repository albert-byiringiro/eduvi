function MyButton() {
  return (
    <button className="bg-red-300 px-2 py-2 rounded-3xl">
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div className="text-center">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
