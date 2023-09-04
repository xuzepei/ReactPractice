import './css/app.css';

import MyButton from './MyButton'
import MyNewButton from './MyNewButton';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import Game from './Game';
import Gallery from './Gallery';

import PackingList from './PackingList'

import ScientistList from './ScientistList';

import RecipeList from './RecipeList';

import TodoList from './TodoList';

import Carousel from './Carousel';

import UseHook from './UseHook';

import QuoteGenerator from './QuoteGenerator';

import { useState } from 'react';




export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      {/* <h1>Counters that update separately</h1>
        <ol>
          <li><MyButton /></li>
          <li><MyButton /></li>
        </ol>

        <h1>Counters that update together</h1>
        <ol>
          <li><MyNewButton count={count} onClick={handleClick} /></li>
          <li><MyNewButton count={count} onClick={handleClick} /></li>
        </ol>

        <Profile />
        <ShoppingList />

        <Game />

        <p>
          <Gallery />
        </p>

        <PackingList />

        <ScientistList /> */}

      {/* <RecipeList /> */}

      {/* <TodoList /> */}

      {/* <Carousel /> */}

      <UseHook />

      <QuoteGenerator />
    </div>
  );
}