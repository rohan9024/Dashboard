import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

function App() {
  return (
    <div className="flex">
      <First />
      <div className='ml-10 w-[1px] h-screen bg-gray-200 drop-shadow-md' />


      <Second />
      <Third />
    </div>
  );
}

export default App;
