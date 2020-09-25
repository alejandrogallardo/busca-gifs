import React, { memo } from 'react'

export const Small = memo(({value}) => { // Memo solo se dispara si las properties cambian

    console.log('Me volvi a llamar ;(');
    return (
        <small>{value}</small>
    )
})
