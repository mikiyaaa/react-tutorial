import React from "react";
import { List } from './List'
import { Form } from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list'
    }
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => {this.setState({ tab: 'list' })}}>リストを表示</li>
            <li onClick={() => {this.setState({ tab: 'form' })}}>フォームを表示</li>
          </ul>
        </header>
        <hr></hr>
        {
          tab === 'list' ? <List /> : <Form />
        }
      </div>
    )
  }
}

export default App;
