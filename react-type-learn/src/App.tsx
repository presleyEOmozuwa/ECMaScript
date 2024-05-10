import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';
import Heading from './Components/Heading';
import Button from './Components/Button';
import InputBox from './Components/InputBox';
import Container from './Components/Container';
import { LoggedIn } from './Components/State/LoggedIn';
import User from './Components/State/User';
import Counter from './Components/State/Counter';
import { ThemeContextProvider } from './Components/Context/ThemeContext';
import { Box } from './Components/Context/Box';
import Tester from './Components/Context/Tester';

// Create Data
const movie = {
  id: 1,
  movieName: 'Enchanted',
  producer: 'Perry Blake'
}

// Create Context Storage
export const DataContext = createContext(movie);

function App() {
  const personInfo = {
    firstName: 'Smith',
    lastName: 'Blake'
  }

  const nameList = [
    {
      id: 1,
      firstName: 'Smith',
      lastName: 'Blake'
    },
    {
      id: 2,
      firstName: 'Perry',
      lastName: 'Cooper'
    },
    {
      id: 3,
      firstName: 'Rebeccah',
      lastName: 'Tyler'
    },
    {
      id: 4,
      firstName: 'Lesley',
      lastName: 'Paynes'
    }
  ]
  return (
    // Set your attribute data on your Provider
    <div className="App">
      <DataContext.Provider value={movie}>
        <Tester></Tester>
      </DataContext.Provider>
      {/* <Container styles={{border: '1px solid black', padding: 'irem'}}></Container> */}
      {/* <LoggedIn></LoggedIn> */}
      {/* <User></User> */}
      {/* <Counter></Counter>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}
      {/* <Greet firstName={"Smith"} messageCount={10} isLoggedIn={true}></Greet>
      <Button handleClick={(event, id) => console.log("Click Handler")}></Button>
      <InputBox handleChange={() => console.log("Payload")} value="James"></InputBox>
      <Person userInfo={personInfo}></Person>
      <PersonList nameList={nameList}></PersonList>
      <Status status='success'></Status>
      <Heading content="Holder Message">Placeholder text</Heading> */}

    </div>
  );
}

export default App;
