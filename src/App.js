import './styles/reset.module.css'
import './styles/base.module.css';
import './styles/color.module.css';

import Header from './components/Header'
import Main from './components/Main/index'
import Footer from './components/Footer'


function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
