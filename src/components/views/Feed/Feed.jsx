import styles from './Feed.module.scss'

export const Feed = ({ children }) => {
    
    return (
        <section className={styles.Feed}>
            {children}
        </section>
    )
}
