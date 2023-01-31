import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =>{

  console.log(props)
  return (
    <div>
      <h1 style={{color: props.color}}>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props)=>{
  return(
    <div>
      <p style={{color:props.color}}>{props.name1} {props.amount1}</p>
      <p>{props.name2} {props.amount2}</p>
      <p>{props.name3} {props.amount3}</p>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div style={{color: props.color}}>
      <Part  color="yellow" name1={props.parts[0].name} amount1={props.parts[0].exercises} />
      <Part name2={props.parts[1].name} amount2={props.parts[1].exercises}/>
      <Part name3={props.parts[2].name} amount3={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props)=>{
  console.log(props.parts[0].name)
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  /*
  const course = 'Half Stack application development'
  const parts = [
 
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]*/

  //<> esto sew llama fragment
  return (
    <> 
      <Header  color="red" course={course.name} />
      <Content color="blue" parts={course.parts} /> 
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
























///////////////////////////////////////////////////////////////////////////////////////////


/*import React from 'react'
import ReactDOM from 'react-dom'

/*import React from 'react';
import ReactDOM from 'react-dom/client';
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/

/*const App = () =>(  // **forma para una sola expresion**
 
  <div>
    <p>Hello world</p>
  </div>
)*/

/*const App = () =>{  // **forma para mas expresiones**
  console.log('Hello from component' )
  const now = new Date()
  const a = 10
  const b = 20


  return  (  // ***forma para mas expresiones***
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} es <br /> plus {b} is {a+b} 
      </p>
    </div>
  )
}*/


/*const Hello = () =>{  ****Componentes múltiples****
  return(
    <div>
      <p>hello world</p>
    </div>
  )
}

const App = () =>{  
  return(
    <div>
      <h1>Greetings</h1>
      <Hello></Hello>
      <Hello></Hello>
    </div>
  )
}*/


/*const Hello = (props) =>{  /*//***pasar datos a componentes**
  return (
  <div>
    <p>Hello {props.name}</p>
  </div>
  )
}

const App = ()=>{
  return(
    <div>
      <Hello name="Marcus" />
    </div>
  )
}*/

/*
const Hello = (props) =>{// pasar varios datos al componente name y age

  return(
    <div>
      <p>
        Hello {props.name}, you are  {props.age} years old
      </p>
    </div>
  )
}


const App = () =>{
  const name = 'peter'
  const age = 10

  return(//fragments
    <>  
      <h1>Greetings</h1>
      <Hello name="Marcus" age = {26+6}/>
      <Hello name = {name} age = {age} />
    </>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))



/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
