import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.onAddFrameWork(this.state.text); // 親コンポーネントの関数を呼び出す
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <h5>新しいライブラリを追加</h5>
                <form onSubmit={(e) => {this.submitForm(e)}}>
                    {/* 入力フォームに変更があるたびにsteteを変更する */}
                    <input type="text" value={text} onChange={(e) => {this.setState({ text: e.target.value })}} /><br/>
                    <button>送信</button>
                </form>
            </div>
        )
    }
}