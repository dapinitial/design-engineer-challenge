import React from 'react'
import styles from './table.module.css'

interface TableProps {
    data: Array<{ [key: string]: string }>
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <table className={styles.table}>
            <tbody>
                {data.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {Object.entries(row).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}:</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default Table
