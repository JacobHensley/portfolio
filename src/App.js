import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function ScrollToID(ID) {
  const element = document.getElementById(ID);
  console.log(ID);
  element?.scrollIntoView({ behavior: "smooth" });
}

function NavBarButton({ text, scrollID, disable }) {
  return (
    <button
      disabled={disable}
      class="h-full p-4"
      onClick={() => ScrollToID(scrollID)}
    >
      <p class="text-4xl tracking-wide">{text}</p>
    </button>
  );
}

function NavBar() {
  return (
    <div class="fixed top-0 h-44 w-full justify-evenly bg-gradient-to-b from-background from-60%">
      <div class="m-5 inline-block">
        <NavBarButton text="JH" disable={true} />
      </div>
      <div class="float-right m-5 inline-block justify-end">
        <NavBarButton text="Home" scrollID={"Home"} />
        <NavBarButton text="Work" scrollID={"Work"} />
        <NavBarButton text="About" scrollID={"About"} />
        <NavBarButton text="Content" scrollID={"Content"} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div class="mx-52 mt-64">
      <p className="gradient-text mb-6 bg-gradient-to-r from-primary to-secondary text-8xl font-semibold tracking-wider">
        Jacob Hensley
      </p>
      <p className="mb-10 w-1/2 text-4xl leading-relaxed tracking-wide">
        Hi, I'm Jacob Hensley, a third-year undergraduate student pursuing a
        Bachelor's degree in Computer Science at the University of Memphis. With
        a decade of experience in programming, I have specialized in both
        real-time and offline rendering techniques.
      </p>
      <button class="h-full">
        <p class="border-4 border-primary p-4 text-4xl font-semibold tracking-wide text-primary">
          View Projects &darr;
        </p>
      </button>
    </div>
  );
}

function CardImg(flip) {
  return (
    <div
      class={
        "m-0 h-full min-w-[26rem] bg-secondary p-0" +
        (flip ? " rounded-l-3xl" : " rounded-r-3xl")
      }
    ></div>
  );
}

function Card({ title, text, flip }) {
  return (
    <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
      <div
        class={
          "mt-[96rem] flex h-[26rem] w-[72rem] rounded-3xl bg-primary" +
          (flip ? "" : " justify-end")
        }
      >
        {flip ? CardImg(flip) : false}
        <div class={"p-10" + (flip ? "" : " text-right")}>
          <p class="mb-3 text-5xl font-semibold tracking-wide ">{title}</p>
          <p className="text-3xl tracking-wide">{text}</p>
        </div>
        {flip ? false : CardImg(flip)}
      </div>
    </ScrollAnimation>
  );
}

function Work() {
  return (
    <div class="mx-52">
      <Card
        flip={true}
        title="Path Tracer"
        text="Hi, I'm Jacob Hensley, a third-year undergraduate student pursuing a
        Bachelor's degree in Computer Science at the University of Memphis. With
        a decade of experience in programming, I have specialized in both
        real-time and offline rendering techniques."
      ></Card>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Work />
    </div>
  );
}

export default App;
