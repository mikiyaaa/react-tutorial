import React from "react";

export class Form extends React.Component {

    render() {
        return (
            <form action="">
                <label htmlFor="">フォーム</label><br/>
                <input type="text" /><br/>
                <input type="button" value="送信" />
            </form>
        )
    }
}