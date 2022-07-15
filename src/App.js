import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from './routes/home/home.component';
import AuthorPage from './routes/authorPage/authorPage.component';
import { QuoteProvider } from './context/quote.context';
import { AuthorProvider } from './context/author.context'

function App() {
  return (
    <QuoteProvider>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:authorName' element={<AuthorProvider><AuthorPage/></AuthorProvider>}/>
        </Routes>
        <Footer/>
      </div>
    </QuoteProvider>
  );
}

export default App;
