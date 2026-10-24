
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
                       {/* React markup-like image inclusion */}
                       <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>


                        </section>
<Android></Android>
    </>
  )
}

function Android(){
  const name= "Rubel";
  const age= 33;
  return <div>
    <h3>My name is {name} and i am {age} years old now</h3>
      <Device name='Laptop'></Device>
      <Device name='Iphone'></Device>
     <Device/>
     <Device/>
      
      <Student className='7' score='500'></Student>
  </div>


}

function Device(props){
  console.log(props)
  const details={
    color: 'red',
    margin: '20px',
    border: '10px solid purple',
    borderRadius:'20px',
  }
  return (
    <>
            <h4>I want to buy {props.name}</h4>
            <p style={details}>My name is Rubel</p>
</>
  )
}
function Student({ className: classLevel, score: mark }) {

  return(
    <>
    <h3>This is a student of class {classLevel} and got score {mark}</h3>
    </>
  )
}


export default App
