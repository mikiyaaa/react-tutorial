
const NODE_VERSION_MANAGE_TOOLS = [
    'nodebrew',
    'nodenv',
    'nvm',
    'volta'
];

const List = () => {

    return (
        <>
            <h5>Nodeバージョン管理ツール</h5>
            {
                NODE_VERSION_MANAGE_TOOLS.map((tool, index) => {
                    return <div key={index}>{tool}</div>
                })
            }
        </>
    )
}

export { List };