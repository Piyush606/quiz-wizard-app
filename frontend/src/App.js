import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pdfs from "./pages/Pdfs";
import Videos from "./pages/Videos";
import Tests from "./pages/Tests";
import SeeIds from "./pages/SeeIds";
import TestList from "./pages/TestList";
import Quiz from "./pages/Quiz";
import Result from './pages/Result';
import AddClass from './components/AddClass';
import AddSubject from './components/AddSubject';
import AddChapter from './components/AddChapter';
import AddTest from './components/AddTest';
import AddQuestion from './components/AddQuestion';
import BasicLayout from './components/BasicLayout';
import QuizLayout from './components/QuizLayout';
import StartQuiz from './pages/StartQuiz';


function App() {
  return (
    <>
      <div className='content'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/pdfs" element={<Pdfs/>} />
              <Route path="/videos" element={<Videos/>} />
              <Route path="/subjects" element={<Tests/>} />
              <Route path="/testlist" element={<TestList/>} />
              <Route path="/result" element={<Result/>} />
              <Route path="/admin/add-class" element={<AddClass/>} />
              <Route path="/admin/add-subject" element={<AddSubject/>} />
              <Route path="/admin/add-test" element={<AddTest/>} />
              <Route path="/admin/add-chapter" element={<AddChapter/>} />
              <Route path="/admin/add-question" element={<AddQuestion/>} />
            </Route>
            <Route>
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/start-quiz" element={<StartQuiz/>} />
              <Route path="/ids" element={<SeeIds/>} />
            </Route>
          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
