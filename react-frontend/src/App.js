import './App.css';
import Bar from './components/Bar';
import Controls from './components/Controls';
import Intro from './components/Intro';
import PageWrap from './components/PageWrap';
import Top from './components/Top';

function App() {



  return (
    <div className="App">

      <PageWrap>
        <Bar></Bar>
        <Intro></Intro>
      </PageWrap>

      <PageWrap>
        <Controls />
      </PageWrap>

      <Top></Top>

    </div>
  );
}

export default App;
