import { MouseEventHandler } from "react";


export default (props) => {
    const {food, setFood} = props;
    
    const save = (e) => {
        e.preventDefault();    
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target;
        const foodCopy = {
            ...food
        }

        foodCopy[input.id] = input.value;

        setFood(foodCopy);
    }

    return(
        <>
            <form action="#">
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input onChange={onChangeHandler} type="text" id="name"/>
                </div>

                <div>
                    <label htmlFor="desc">Descrição: </label>
                    <input onChange={onChangeHandler} type="text" id="desc"/>
                </div>

                <button onClick={save}>Salvar</button>
            </form>
        </>
    )
}