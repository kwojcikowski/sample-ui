import {useState} from "react";
import "./CounterPage.css";
import { Col, Row } from "react-bootstrap";

export const CounterPage = () => {

    const [count, setCount] = useState(0)

    return <div className="counter-container">
        <div model="Counter" className="counter">
            <span>Counter</span>
            <Row>
                <Col>
                    <button model-function="decreaseCount" id="decrease-count-btn" onClick={() => setCount(count - 1)}>
                        -
                        <constraint>
                            post counterWasDecremented: self.count = self.count@pre - 1
                        </constraint>
                    </button>
                </Col>
                <Col>
                    <span model-attribute="count" id="count-span">
                        {count}
                    </span>
                </Col>
                <Col>
                    <button model-function="increaseCount" id="increase-count-btn" onClick={() => setCount(count + 1)}>
                        +
                        <constraint>
                            post counterWasIncremented: self.count = self.count@pre + 1
                        </constraint>
                    </button>
                </Col>
            </Row>
            <button model-function="resetState" id="reset-state-btn" onClick={() => setCount(0)}>
                Reset
                <constraint>
                    post counterWasReset: self.count = 0
                </constraint>
            </button>
        </div>
    </div> 

}