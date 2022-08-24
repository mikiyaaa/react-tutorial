const List = (props) => {

    return (
        <>
            <h5>習得言語</h5>
            {
                props.langs.map((tool, index) => {
                    return <div key={index}>{tool}</div>
                })
            }
        </>
    )
}

export { List };