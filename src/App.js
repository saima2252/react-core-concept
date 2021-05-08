import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const personName = ['sayka', 'saima', 'mahi', 'mahir', 'sabiha']
  const productMenu =[
    {name: "photoshop", price: '$45'},
    {name: "illustrator", price: '$32.00'},
    {name: "saima", price: '$23'}
  ]
  const nayokNames = personName.map(person => person);
  console.log(nayokNames);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a good person</p>
        <Counter></Counter>
        <Comments></Comments>
        <ul>
          {
            personName.map(person => <li>{person}</li>)
          }
          
        </ul>
        <ul>
          {
            productMenu.map( Product  => <li>{Product.name}</li>)
          }
        </ul>
        {
          productMenu.map(pd => <Product product = {pd}></Product>)
        }
        

        <Person name={personName[0]} job="study"></Person>
        <Person name={personName[1]} job="teacher"></Person>
        <Person name={personName[2]} job="kichu na"></Person>
        <Person name={personName[3]} job="bekar"></Person>

      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(20);
  //const handleIncrease = () => setCount(count+1);
  //const handleDecrease = () => setCount(count-1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=> setCount(count+1)} >increase</button>
    </div>
  )
  
}
function Comments() {

  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  }, [])


  return(
    <div>
      <h3>Dynamic comments: {comments.length}</h3>
      <ul>
        {comments.map(comments =><li>{comments.name}</li>)}
      </ul>
    </div>
  )
  
}
function Product(props) {
   const productStyle={
     border: "2px solid gray",
     borderRadius: "4px",
     margin: "5px",
     backgroundColor: "lightgray",
     width: "300px",
     height: "300px"
   }
   const {name,price} = props.product

  return(
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      
      <button>Buy Now</button>
    </div>
  )
  
}
function Person(props) {
  const personStyle = {
    border: '2px solid purple',
    backgroundColor: 'red',

    margin: '10px',
    borderRadius: '5px',
    color: 'yellow'

  }

  return(
    <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>profession: {props.job}</h3>
    </div>
  )
  
}

export default App;
