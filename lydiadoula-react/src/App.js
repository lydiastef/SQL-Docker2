import {useEffect, useState} from 'react';

function App() {
  const [greeting, setGreeting] = useState(''); // useState is a function that returns an array with two items (greeting and setGreeting)
  useEffect(()=>{ // takes function and array as arguments. Runs when component loads and again if a state variable in the array is changed. If the array is left empty, it will only run once
    const getGreeting = async()=>{ // async makes it possible to use async and await in useEffect
      
      const response = await fetch('http://localhost:5002');
      
      const data = await response.json(); // here we get the json data which is an array with one item(object with _id and greeting properties)
      setGreeting(data[0].greeting); // we can use setGreeting to change the value of greeting
    }

    getGreeting();
  }, [])

  return (
    <div>
      {greeting}
    </div>
  );
}

export default App;