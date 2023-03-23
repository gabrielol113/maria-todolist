import styles from './styles.module.scss'




function Tabs(){
    return(
        <div className={styles.Tabs}>
            <button className={styles.tabsButtons}>Gabriel</button>
            <button className={styles.tabsButtons}>Maria</button>
            <button className={styles.tabsButtons}>Casa</button>
        </div>
    )
}


export default Tabs;