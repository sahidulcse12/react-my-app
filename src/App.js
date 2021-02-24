import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const style = {
    color: 'blue',
    backgroundColor: 'yellow',
  }
  const nameOfHero = ['muhit', 'jafor', 'jit', 'srk','salman'];
  const products = [
    { name: 'laptop', price: '$2500' },
    { name: 'mobile', price: '$500' },
    { name: 'tablet', price: '$200' },
    { name: 'headphone', price: '$100' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>My Nayoks</p>
        <User></User>
        <ul>
          {
            nameOfHero.map(hero => <li>{hero}</li>)
          }
        </ul>

          <Counter></Counter>

        <ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        </ul>

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}


      </header>
    </div>
  );
}

function User() {
  const [users, stateUser] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => stateUser(data))
  })
  
    return (
      <div>
        <h2>userState: {users.length}</h2>
        <ul>
          {
            users.map(user =><li>{user.name}</li>)
          }
        </ul>
      </div>
    )
}

function  Counter(){
    const [count, setCount] = useState(10);
    // const handleButton = ()=>{
    //   const newCount = count + 1;
    //   setCount(newCount);
    // }

    const buttonStyle = {
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer'
    }

    return (
      <div>
        <h1>Count : {count}</h1>
        <button style={buttonStyle} onMouseEnter={() => setCount(count-1)}>Decrease</button>
        <button style={buttonStyle} onClick={() => setCount(count+1)}>Increase</button>
      </div>
    )
}

function Product(props) {
  const productStyle = {
    border: '2px solid red',
    margin: '5px',
    height: '250px',
    width: '200px',
    backgroundColor: 'lightblue',
    float: 'left',
    overflow: 'hidden'
  }

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
  const { name, price } = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '3px solid white',
    margin: '10px',
    padding: '20px',
    borderRadius: '5px'
  }
  
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h1>Hero of {props.nayika}</h1>
    </div>
  )
}

export default App;
