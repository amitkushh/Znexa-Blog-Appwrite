function App() {
  console.log(import.meta.env.VITE_APPWRITE_ENDPOINT_URL);
  return (
    <>
      <div className="cursor-pointer h-60 w-60 bg-pink-600 text-white flex justify-center items-center text-4xl rounded-full hover:bg-pink-800">
        Hello
      </div>
    </>
  );
}

export default App;
