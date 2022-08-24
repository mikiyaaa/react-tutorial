import { List } from './List';
import { Form } from './Form';
import { useState } from 'react';
import { LANGUAGES } from './const/lauguages';

function App() {
  const [tab, setTab] = useState('form');
  const [langs, setLangs] = useState(LANGUAGES);

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
