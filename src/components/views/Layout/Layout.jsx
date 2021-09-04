import styles from './Layout.module.scss'

const selectStyle = layoutStyle => {
    switch (layoutStyle) {
        case 'default':
            return styles.LayoutDefault
        case 'clear':
            return styles.LayoutClearHTML
        case 'blog':
            return styles.LayoutBlog
        default:
            console.error('empty name in Layout prop - check the props, given to Layout component')
            break
    }
}

export const Layout = ({ children, layoutStyle }) => (
    <div className={selectStyle(layoutStyle)}>{children}</div>
)
