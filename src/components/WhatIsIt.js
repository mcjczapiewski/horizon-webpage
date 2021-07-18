import React from "react";
import guy from "../assets/images/guy.png";
import guyTrusted from "../assets/images/guy-trusted.png";
import guyChart from "../assets/images/guy-chart.png";

const WhatIsIt = () => {
    return (
        <div className="WhatIsIt">
            <div className="column-one">
                <div className="about-text">
                    <div className="person">
                        <h4>
                            Czym jest Wirtualny Spacer i jakie korzyści
                            przyniesie Twojej firmie?
                        </h4>
                        <p>
                            Wirtualny spacer to nic innego jak połączenie kilku
                            panoramicznych zdjęć w całość. Za pomocą kilku
                            kliknięć potencjalni klienci mogą przenieść się do
                            restauracji, siłowni czy salonu kosmetycznego z
                            którego chcą skorzystać i dowiedzieć czego mogą
                            spodziewać się na miejscu. Przespacerują się po nim,
                            tak jakby byli na miejscu.
                        </p>
                    </div>
                    <img className="person-img" src={guy} alt="" />
                    <img className="emblem-img" src={guyTrusted} alt="" />
                    <div className="emblem">
                        <h4>
                            Wirtualny Spacer podnosi wiarygodność firmy w oczach
                            internautów, zachęca do skorzystania z usług oraz
                            świadczy o tym, że firma idzie z duchem czasu.
                        </h4>
                        <p>
                            Kluczowym elementem jest przypięcie wirtualnego
                            spaceru do wizytówki w mapach Google. Dzięki temu
                            każdy, kto wyszuka Twoją firmę w wyszukiwarce
                            Google, na mapie Google, lub wejdzie na Twoją stronę
                            internetową, będzie mógł go zobaczyć. Warto umieścić
                            również link do spaceru na firmowym Facebooku.
                        </p>
                    </div>
                    <div className="going-up">
                        <h4>
                            Wirtualny spacer można zrobić szybko, tanio, a co
                            najważniejsze, jest to jednorazowa inwestycja, która
                            będzie reklamą.
                        </h4>
                        <p>
                            Według przeprowadzonych badań przez
                            Google, wizytówki ze zdjęciami dobrej jakości i
                            wirtualną wycieczką dwukrotnie częściej wzbudzają
                            zainteresowanie klientów.
                        </p>
                    </div>
                    <img className="going-up-img" src={guyChart} alt="" />
                    <h3>
                        Zyskaj przewagę nad konkurencją i pozwól się wyróżnić!
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default WhatIsIt;
