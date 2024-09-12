export default (props) => {
    const {page, setPage} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        setPage(e.target.value);
    }

    return(
        <>
            <button onClick={onClickHandler} value={0}>Adicionar</button>
            <button onClick={onClickHandler} value={1}>Ver</button>
        </>
    )
}