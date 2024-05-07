import logo from './logo.svg';
import test from './test.jpg';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function NavItem({text}) {
  return (
    <div class="w-20 h-full flex items-center justify-center text-2xl font-semibold">
      <p class="text-primary">{text}</p>
      <button onClick={() => {
          const element = document.getElementById('projects');
          element?.scrollIntoView({
            behavior: 'smooth'
          }); 
        }}>
        Jump to My Section
      </button>
    </div>
    
  );
}

function NavBar() {
  return (
    <div class="w-screen h-14 flex">
      <img src={logo} class="w-20 h-20"></img>
      <div class="w-full flex justify-end gap-4 mt-6 mr-9">
        <NavItem text="Home"/>
        <NavItem text="About"/>
        <NavItem text="Work"/>
        <NavItem text="Contact"/>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div>
      <ScrollAnimation animateIn="bounceInLeft">
        <div class="mx-24 mt-24 rounded-3xl bg-secondary w-2/3 h-80 flex">
          <div class="w-80 h-full rounded-l-3xl bg-accent">
            <img src={test} class="rounded-l-3xl"></img>
          </div>
          <div class="w-2/3 p-10">
            <h1 class="text-text  text-3xl font-semibold tracking-wider">Hello</h1>
            <p class="text-text text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel turpis. </p>  
          </div>
        </div>
      </ScrollAnimation>
      <div class="flex flex-wrap justify-end">
        <div class="mx-24 mt-24 rounded-3xl bg-secondary w-2/3 h-80"></div>
      </div>
      <div class="mx-24 mt-24 rounded-3xl bg-secondary w-2/3 h-80"></div>
      <div class="flex flex-wrap justify-end">
        <div class="mx-24 mt-24 rounded-3xl bg-secondary w-2/3 h-80"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div class="mt-20 mx-24">
        <h1 class="pb-14 text-6xl font-bold tracking-wider bg-gradient-to-r from-primary to-secondary gradient-text">Jacob Hensley</h1>
        <div class="w-2/3">
          <p class="text-text text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel turpis. </p>  
          <br></br>
          <p class="text-text text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel turpis. </p>
        </div>
      </div>
      <div class="mt-80 mx-24">
      <h1 id="projects" class="pb-2 text-6xl font-bold tracking-wider bg-gradient-to-r from-primary to-secondary gradient-text">Projects</h1>
      </div>
      <Card></Card>
      
    </div>
  );
}

export default App;
