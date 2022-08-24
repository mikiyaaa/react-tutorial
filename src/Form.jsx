import { useState } from 'react';

export const Form = (props) => {
    const [text, setText] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.onAddLang(text);
    }


    return (
        <div>
            <h5 >追加フォーム</h5>
            <form onSubmit={submitForm}>
                <input type="text"  value={text} onChange={(e) => {setText(e.target.value)}}/><br />
                <button>送信</button>
            </form>
        </div>
    )
}