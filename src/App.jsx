import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './Components/Header';
import Footer from './Components/Footer';
import { getArticlesData } from './utils/mockNewsData.js';
import HeadlineList from './Components/HeadlineList';
import ArticlePage from './Components/ArticlePage';
import Navigate from './Components/Navigate';

function App() {

  const [headlines, setHeadlines] = useState([]);
  const [searchValue, setSearch] = useState('');
  const sections = ['Business', 'Politics', 'World news', 'Sport'];
  console.log(searchValue);

  const getData = async () => {
    const data = await getArticlesData();
    if (data instanceof Error) {
      console.error(data.message);
      setHeadlines([]);
    } else {
      const modifiedIdData = data.map(idLink => ({ ...idLink, id: idLink.id.replaceAll("/", "-") }));
      setHeadlines(modifiedIdData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [showSearch, setShowSearch] = useState(window.location.pathname.toLowerCase().indexOf('/home') != -1);

  return (
    <>
      <NavBar sections={sections} searchValue={searchValue} setSearch={setSearch} showSearch={showSearch} />
      <Routes>
        <Route path='' element={<Navigate to="/home" />} />
        <Route path="/home" element={<HeadlineList sections={sections} headlineData={headlines} searchValue={searchValue} setShowSearch={setShowSearch} />} />
        <Route path="/article/:id" element={<ArticlePage headlineData={headlines} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
