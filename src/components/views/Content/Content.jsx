import styles from './Content.module.scss'


export const Content = ({ children}) => (
    <div className={styles.Content}>
        {children}
    </div>
)
