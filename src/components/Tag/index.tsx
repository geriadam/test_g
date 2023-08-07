import React, { FC, useState } from 'react'
import { pipe } from '@matechs/core/Function'
import {array as A, option as O} from '@matechs/core'
interface SelectableListProps<T> {
    items: T[]
    onSelect: (selected:readonly T[]) => void
}

export const SelectableList: FC<SelectableListProps<String>> = ({items, onSelect }) => {
    const [selected, setSelected] = useState<readonly String[]>(items)
    return pipe(
        items,
        A.map(item => <li onClick={() => pipe(
            selected,
            A.findIndex(s => s === item),
            O.fold(
                () => setSelected([...selected, item]),
                index => pipe(items, A.deleteAt(index), O.map(x => setSelected(x)))
            )
        )}>{item}</li>),
        items => 
        <div>
            <div style={{backgroundColor: 'yellow'}}>
           <ul>
            {items}
           </ul>
        </div>
        <div><button onClick={() => onSelect(selected)}>ok</button></div>
        </div>
        
    )
}

export default React.memo(SelectableList)