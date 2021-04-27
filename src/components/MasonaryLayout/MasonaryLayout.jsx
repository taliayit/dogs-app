import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function MasonaryLayout({list}) {

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{520: 1, 760: 3, 960: 4}}>
            <Masonry columnsCount={2} gutter="10px">
                {list}
            </Masonry>
        </ResponsiveMasonry>            
    )
}
