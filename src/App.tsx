import React, { useState } from 'react';
import { pipe } from '@matechs/core/Function';
import { array as A, option as O } from '@matechs/core';
import TagItem from './components/TagItem/index';
import Button from './components/Button/index';

interface Item {
  label: string;
  isChecked: boolean;
}

const initialItems: Item[] = [
  { label: 'Arm / Upper body', isChecked: false },
  { label: 'Surf Fitness', isChecked: false },
  { label: 'Lower Body', isChecked: false },
  { label: 'Boxing Exercise', isChecked: false },
];

function App() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedOptions, setSelectedOptions] = useState<Item[]>([]);

  const handleItemChange = (item: Item) => {
    // Todo handle tag change here
    pipe(
      selectedOptions,
      O.fromPredicate(selected => selected.includes(item)),
      O.fold(
        () => setSelectedOptions([...selectedOptions, item]),
        () => setSelectedOptions(selectedOptions.filter(tag => tag !== item))
      )
    );
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectedOptions(isChecked ? items : []);
  }

  const handleReset = () => setSelectedOptions([]);

  const handleSubmit = () => {
    // Todo handle submit here
    alert(JSON.stringify(selectedOptions));
  };

  const renderedItems = pipe(
    initialItems,
    A.map(item => (
      <TagItem
        key={item.label}
        label={item.label}
        isChecked={selectedOptions.includes(item)}
        onChange={() => handleItemChange(item)}
      />
    ))
  );

  return (
    <div className='mx-auto mt-10 w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 pb-8 md:max-w-8xl short:pb-2 short:pt-2'>
      <div className="flex flex-col gap-3 w-full max-w-md h-auto py-4 mx-auto bg-gray p-4 px-0 rounded-lg bg-white">
        <div className="flex px-4 gap-2 mb-4">
          <input
            type='checkbox'
            checked={selectedOptions.length === items.length}
            onChange={(event) => handleSelectAll(event)}
          />
          <span className='text-sm'>Select All</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4">
          {renderedItems}
        </div>
        <div className="pt-3 px-4 py-4 flex flex-row justify-end gap-2 border-solid border-[#e8eaec] w-full border-t border-b-0 border-x-0">
          <Button label="Reset" variant='default' onClick={handleReset} />
          <Button label="Update" variant='primary' onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
