import {useState} from "react";
import "./DemoCounterPage.css";
import { Col, Row } from "react-bootstrap";

export const DemoCounterPage = () => {

    const [count, setCount] = useState(0)

    return <div className="counter-container">
        <div model="DemoCounter" className="counter">
            <span>Counter</span>
            <span model-attribute="count" id="count-span">
                {count}
            </span>
            <button model-function="increaseCount" id="increase-count-btn" className="m-2" onClick={() => setCount(count + 1)}>
                +
                <constraint>
                    post counterWasIncremented: self.count.toInteger() = self.count@pre.toInteger() + 1
                </constraint>
            </button>
            <button model-function="resetState" id="reset-state-btn" className="m-2" onClick={() => setCount(0)}>
                Reset
                <constraint>
                    post counterWasReset: self.count.toInteger() = 0
                </constraint>
            </button>
        </div>
    </div> 

}