import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {HeadingWrapper} from "./components/HeadingWrapper";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeadingWrapper>
        <Heading>Placeholder text</Heading>
      </HeadingWrapper>
    <Greet text={'Hello World!'} messageCounter={10}  />
    <Status status={'error'}/>
        <Footer copyright={'test'}/>
    </div>
  );
}

export default App;
