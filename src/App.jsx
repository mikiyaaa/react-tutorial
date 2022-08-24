import React from "react";
import { List } from './List'
import { Form } from './Form';
import { getFrameworks } from './const/js_frameworks.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list',
      frameworks: [],
    }
  }

  componentDidMount() {
    this.fetchFrameworks();
  }

  async fetchFrameworks() {
    const frameworks = await getFrameworks();
    this.setState({frameworks: frameworks});
  }

  addFrameWork(fw) {
    this.setState({ 
      tab: 'list',
      frameworks: [...this.state.frameworks, fw] 
    });
  }

  render() {
    const { tab, frameworks } = this.state;
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
          tab === 'list' ? <List frameworks={frameworks} /> : <Form onAddFrameWork={(fw) => {this.addFrameWork(fw)}} />
        }
      </div>
    )
  }
}

export default App;
