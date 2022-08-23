import React from "react";

const JS_FRAMEWORKS = [
    'React',
    'Vue',
    'Angular',
];

class List extends React.Component {

    render() {
        return (
            <>
                {
                    JS_FRAMEWORKS.map((fw, index) => {
                        return <div key={index}>{fw}</div>
                    })
                }
            </>
        )
    }
}
export { List };