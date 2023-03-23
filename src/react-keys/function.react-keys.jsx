export default function NameList(props){
    const names = props.names;
    const nameList = names.map((name, i) => {
        return <PrintList name={name} key={i}/>;
    });

    return(
        <>
        <h2>Name List</h2>
        <ol>{nameList}</ol>
        </>
    )
}

function PrintList(props){
    const name = props.name;
    return(<li>{name}</li>);
}