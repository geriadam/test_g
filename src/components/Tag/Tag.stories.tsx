import React from 'react'

import ListWithMemo, { SelectableList } from './index'

export default {
    title: 'SelectableList',
    component: SelectableList
}

export const List = () => (
    <ListWithMemo items={["Arm / Upper body", "Surf Fitness", "Lower Body", "Boxing Exercise"]} onSelect={() => {}}/>
)
