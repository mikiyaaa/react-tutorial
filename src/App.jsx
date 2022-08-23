import { List } from './List';
import { Form } from './Form';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState('form');

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
          tab === 'list' ? <List /> : <Form />
        }
      </>
    </div>
  )
}

export default App;
