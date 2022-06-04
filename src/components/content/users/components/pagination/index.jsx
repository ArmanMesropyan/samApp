import React from 'react'
import './index.scss'
const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className="L-user-pages">
            {pages.slice(0, 50).map(p => {
                return <span
                    key={Math.random().toString(36).substr(2, 9)}
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage != p ? null : 'L-user-active-page'}>{p}</span>
            })}
        </div>

    )
}
export default Pagination
