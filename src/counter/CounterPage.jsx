import {useState} from "react";

export const CounterPage = () => {

    const [count, setCount] = useState(0)

    return <model name="CounterModel">
        <div className="counter">
            <model-function id="mf1" name="decreaseCount">
                <button onClick={() => setCount(count - 1)}>-</button>
            </model-function>
            <span>
                <model-attribute id="ma1" type="Integer" name="count">
                    {count}
                </model-attribute>
            </span>
            <model-function id="mf2" name="increaseCount">
                <button onClick={() => setCount(count + 1)}>+</button>
            </model-function>
            <model-function id="mf3" name="resetState">
                <button onClick={() => setCount(0)}>Reset</button>
            </model-function>
        </div>
    </model>

}