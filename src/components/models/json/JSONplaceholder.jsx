import { useState, useEffect } from 'react'
import ReactJson from 'react-json-view'

export const JSONplaceholder = ({ type = 'users' }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
                const json = await response.json()
                setData(json)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [type])

    return (
        <ReactJson
            src={data}
            name={`EXAMPLE JSON ${type}`}
            iconStyle='triangle'
            displayDataTypes={false}
            displayObjectSize={false}
            sortKeys={true}
            displayArrayKey={false}
            groupArraysAfterLength={1000}
            indentWidth={4}
            theme={'rjv-default'}
            style={{ padding: '10px', fontFamily: 'Mukta' }}
            collapseStringsAfterLength={60}
            enableClipboard={false}
            shouldCollapse={({ src, namespace, type }) => {
                if (type === 'array' && src.indexOf('test') > -1) {
                    return true
                } else if (namespace.indexOf('moment') > -1) {
                    return true
                }
                return false
            }}
        />
    )
}
