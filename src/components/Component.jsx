import React from 'react';
import "./Components.css";

function Component(props) {
    const theme = props.theme;
    return (
        <div className={theme.size}>
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