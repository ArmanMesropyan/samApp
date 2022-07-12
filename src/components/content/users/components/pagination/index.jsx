import React, { useState } from 'react'
import './index.scss'
const Pagination = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    console.log(portionCount)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className="L-user-pages">
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}> Prev </button>}
            <div className='L-user-pages-wrapper-main'>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span
                            key={Math.random().toString(36).substr(2, 9)}
                            onClick={() => onPageChanged(p)}
                            className={currentPage != p ? null : 'L-user-active-page'}>{p}</span>
                    })}
            </div>

            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}> Next </button>}
        </div>

    )
}
export default Pagination

// {pages.slice(0, 50).map(p => {
//     return <span
//         key={Math.random().toString(36).substr(2, 9)}
//         onClick={() => onPageChanged(p)}
//         className={currentPage != p ? null : 'L-user-active-page'}>{p}</span>
// })}