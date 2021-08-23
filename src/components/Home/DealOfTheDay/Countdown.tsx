import React,{ useRef, useState, useEffect }  from 'react';

const Countdown: React.FC = () => {
    const [countdownDays, setCountdownDays] = useState <number | string>('00');
    const [countdownHours, setCountdownHours] = useState <number | string>('00');
    const [countdownMinutes, setCountdownMinutes] = useState <number | string>('00');
    const [countdownSecondes, setCountdownSecondes] = useState <number | string>('00');

    let interval: any = useRef();

    const startTimer = (): void => {
        const countdownDate: number = new Date('June 09, 2023 00:00:00').getTime();

        interval = setInterval((): void => {
            const now: number = new Date().getTime();
            const distance: number = countdownDate - now;

            const days: number | string = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
            const hours: number | string = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).toString().padStart(2, "0");
            const minutes: number | string = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
            const seconds: number | string = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setCountdownDays(days);
                setCountdownHours(hours);
                setCountdownMinutes(minutes);
                setCountdownSecondes(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(interval);
        };
    });


    return (
        <div className="countdown d-flex">
            <div className="text">
                <p>End in:</p>
            </div>
            <div className="items d-flex justify-content-center align-items-center">
                <div className="box day">
                    <span>{countdownDays}</span>
                </div>
                <span className="colon-symbol">:</span>
                <div className="box hour">
                    <span>{countdownHours}</span>
                </div>
                <span className="colon-symbol">:</span>
                <div className="box minute">
                    <span>{countdownMinutes}</span>
                </div>
                <span className="colon-symbol">:</span>
                <div className="box second">
                    <span>{countdownSecondes}</span>
                </div>
            </div>
        </div>

    )
};

export default Countdown;
