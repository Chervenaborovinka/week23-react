import Component from "./Component";
import themeA from "./theme-a.css";
import themeB from "./theme-b.css";
import "./variables.css"

const Cards = () => {
    return (
        <div className="cards">
            <Component theme={themeA}
                title="Безлимитный 300"
                price="руб 300/ мес"
                velocity="до 10 Мбит/сек"
                bgColor="var(--primary-color)"
            />

            <Component theme={themeA}
                title="Безлимитный 450"
                price="руб 450/ мес"
                velocity="до 50 Мбит/сек"
                bgColor="var(--secondary-color)"
            />

            <Component theme={themeB}
                title="Безлимитный 550"
                price="руб 550/ мес"
                velocity="до 100 Мбит/сек"
                bgColor="var(--tritiary-color)"
            />

            <Component theme={themeA}
                title="Безлимитный 450"
                price="руб 450/ мес"
                velocity="до 50 Мбит/сек"
                bgColor="var(--quaternary-сolor)"
            />

        </div>
    )
};

export default Cards;