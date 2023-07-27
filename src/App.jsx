import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './Components/Header';
import Footer from './Components/Footer';
import { getArticlesData } from './utils/mockNewsData.js';
import HeadlineList from './Components/HeadlineList';
import ArticlePage from './Components/ArticlePage';

function App() {

  const [headlines, setHeadlines] = useState([]);

  const getData = async () => {
    const data = await getArticlesData();
    if (data instanceof Error) {
      console.error(data.message);
      setHeadlines([]);
    } else {
      const modifiedIdData = data.map(idLink => ({...idLink, id: idLink.id.replaceAll("/", "-")}));
      setHeadlines(modifiedIdData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        {headlines.length > 0 && <Route path="/" element={<HeadlineList headlineData={headlines} />} />}
        <Route path="/article/:id" element={<ArticlePage headlineData={headlines}/>} />
      </Routes>
      <Footer />
    </>  
  )
}

export default App;
