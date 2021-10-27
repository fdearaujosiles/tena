import styles from './Home.module.scss';
import React from 'react';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {

    return <div className={styles.Home} >
    </div>
}

export default Home;
