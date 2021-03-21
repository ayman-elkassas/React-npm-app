import summation,{x,y} from './module'

import Child from './components/child'

//todo:parent component that render in root div
function App() {
  return (
    <div className="App">
    {summation(x,y)}
    <Child/>
    </div>
  );
}

export default App;
