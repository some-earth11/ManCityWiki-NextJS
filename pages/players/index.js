import styles from '../../styles/players.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { players : data }
    }
}



const Players = ({ players} ) => {
    return ( 
        <div>
            <h1>All Players</h1>
            {players.map(player => (
                <div key={player.id}>
                    <a className={styles.single}>
                        <h3>{ player.name }</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
    
export default Players;
