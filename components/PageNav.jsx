export default (props) => {
    const {page, setPage, text, value} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        setPage(e.target.name);
    }

    return (
        <div>
            <button onClick={onClickHandler} name={value}>{text}</button>
        </div>
    )
}