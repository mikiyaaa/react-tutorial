import React from "react";

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