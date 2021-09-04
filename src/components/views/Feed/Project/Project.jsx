import { NavLink } from 'react-router-dom'
import styles from './Project.module.scss'

const activeStyle = { fontWeight: 'bold' }

export const Project = ({
    children,
    title = 'default Project title',
    date = 'default current date: ' + Date().toString()
}) => (
    <div className={styles.Project}>
        <NavLink to='/project' exact activeStyle={activeStyle}>
            <h1>{title}</h1>
        </NavLink>
        {children}
        <div className={styles.Time}>
            <time dateTime={date}>{date}</time>
        </div>
    </div>
)
