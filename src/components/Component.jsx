import React from 'react';
import "./Components.css";
import "./theme-a.css";
import "./theme-b.css";

function Component(props) {
    let sizeClassName;
    if (props.theme === 'themeA') {
        sizeClassName = "sizeA";
    } else if (props.theme === 'themeB') {
        sizeClassName = "sizeB";
    }
    return (
        <div className={sizeClassName}>
            <div>
                <div style={{ backgroundColor: props.bgColor }}>
                    <h3 className="pricing-header">{props.title}</h3>
                    <p className="pricing-cost">{props.price}</p>
                </div>
                <p className="pricing-velocity">{props.velocity}</p>
                <p className="pricing-text">Объем включённого трафика не ограничен</p>
            </div>
        </div>
    )
}

export default Component;


