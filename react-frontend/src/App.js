import './App.css';
import BtnBack from './components/BtnBack';
import Bar from './components/Bar';
import Controls from './components/Controls';
import Intro from './components/Intro';
import PageWrap from './components/PageWrap';
import Top from './components/Top';
import About from './components/About';

function App() {



  return (
    <div className="App">

      
      <PageWrap>
        <Bar></Bar>
        <Intro></Intro>
      </PageWrap>

      <PageWrap>
        <BtnBack />
        <Controls />
      </PageWrap>

      <PageWrap>
        <About></About>
      </PageWrap>

      <Top></Top>

    </div>
  );
}

export default App;
