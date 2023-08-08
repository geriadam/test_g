import React, { useState } from 'react';
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

  const handleTagChange = (index: number, checked: boolean) => {
    // Todo handle tag change here
  };

  const handleReset = () => {
    // Todo handle reset here
  }

  const handleSubmit = () => {
    // Todo handle submit here
  };

  return (
    <div className='mx-auto mt-10 w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 pb-8 md:max-w-8xl short:pb-2 short:pt-2'>
      <div className="flex flex-col gap-3 w-full max-w-md h-auto py-4 mx-auto bg-gray p-4 px-0 rounded-lg bg-white">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4">
          {items.map((item, index) => (
            <TagItem
              key={index}
              label={item.label}
              isChecked={item.isChecked}
              onChange={(checked: any) => handleTagChange(index, checked)}
            />
          ))}
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
