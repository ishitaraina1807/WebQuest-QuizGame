import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='app'>
       <NavBar/>
       <div className="container">
       <h1>Level Up Your Web Development Skills with Fun Quizzes!</h1>
       <h2>Welcome to our engaging quizzes for web development! Whether you are a beginner taking your first steps into the world of coding or an experienced developer looking to brush up your skills, our quizzes are tailored to challenge and educate you on various web development concepts.</h2>
       <div class="mt-10 flex items-center justify-right gap-x-6">
          <a href="#" class="rounded-md bg-custom-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
       </div>
       
    </div>
  );
}

export default App;
