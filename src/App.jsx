import { List } from './List';
import { Form } from './Form';
import { useState, useEffect } from 'react';
import { getLanguages } from './const/lauguages';

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log('App.js: useEffect()');
    fetchLanguages();
  }, []) 

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => {setTab('list')}}>リストを表示</li>
          <li onClick={() => {setTab('form')}}>フォームを表示</li>
        </ul>
      </header>
      <hr />
      <> 
        {
          tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang} />
        }
      </>
    </div>
  )
}

export default App;
