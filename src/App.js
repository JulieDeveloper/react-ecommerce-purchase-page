// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// -----------------------------------------------  以上是create react app 初始版



import Header from './components/Header'
import Main from './components/Main/index'
import Footer from './components/Footer'

import './styles/reset.module.css'
import './styles/base.module.css';
import './styles/color.module.css';

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
