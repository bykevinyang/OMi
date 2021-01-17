import './App.css';
import Bar from './components/Bar';
import Controls from './components/Controls';
import PageWrap from './components/PageWrap';

function App() {



  return (
    <div className="App">

      <PageWrap>
        <Bar></Bar>
      </PageWrap>

      <PageWrap>
        <Controls />
      </PageWrap>

    </div>
  );
}

export default App;
