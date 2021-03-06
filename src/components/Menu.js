import ProgressContext from '../context/ProgressContext';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from 'react';

export default function Menu() {
    const {
        progress,
        setProgress,
        numberOfHabits,
        numberOfHabitsDone
    } = useContext(ProgressContext);
    
    setProgress(Math.round((numberOfHabitsDone / numberOfHabits) * 100));

    return (
        <Footer>
            <Link to="/habitos">Hábitos</Link>
            <Progress to="/hoje">
                <CircularProgressbar
                    text="Hoje"
                    value={progress}
                    strokeWidth={10}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        textSize: '18px',
                        textColor: '#FFF',
                        pathColor: `#FFF`,
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })}
                />
            </Progress>
            <Link to="historico">Histórico</Link>
        </Footer>
    );
}

const Footer = styled.nav`
    width: 100%;
    height: 70px;
    padding: 36px;
    box-sizing: border-box;
    font-family: Lexend Deca;
    font-size: 18px;
    color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #FFF;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Progress = styled(Link)`
    width: 91px;
    margin-bottom: 40px;
`;