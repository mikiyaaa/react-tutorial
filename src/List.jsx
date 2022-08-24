import React from "react";
import { JS_FRAMEWORKS } from './const/js_frameworks'

class List extends React.Component {

    render() {
        const { frameworks } = this.props; // Appコンポーネントから受け取る
        return (
            <>
                {
                    frameworks.map((fw, index) => {
                        return <div key={index}>{fw}</div>
                    })
                }
            </>
        )
    }
}
export { List };