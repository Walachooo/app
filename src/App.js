import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends React.Component {
  render() { 
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
 
export default App;