import './App.css';
import './collect.css';
import './album.css';
import Header from './components/Cheader';
import Playbar from './components/Playbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Index from './components/Index';
import Album from './components/Album';
import Collections from './components/Collections';
import Burgermenu from './components/Burger-menu';
import Routes1 from './components/Routes1';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes1></Routes1>
      <Playbar></Playbar>
    </div>
  );
}


export default App;
