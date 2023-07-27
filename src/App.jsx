import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './Components/Header';
import Footer from './Components/Footer';
import { getArticlesData } from './utils/mockNewsData.js';
import HeadlineList from './Components/HeadlineList';

function App() {

  const [headlines, setHeadlines] = useState([]);

  const getData = async () => {
    const data = await getArticlesData();
    if (data instanceof Error) {
      console.error(data.message);
      setHeadlines([]);
    } else {
      setHeadlines(data);
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
      </Routes>
      <Footer />
    </>  
  )
}

export default App;
