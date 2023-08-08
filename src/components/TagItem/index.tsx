import React from 'react';

interface TagItemProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const TagItem: React.FC<TagItemProps> = ({ label, isChecked, onChange }) => {
  return (
    <label className="bg-gray-100 flex flex-row gap-2 w-full py-4 px-3 items-center rounded-lg">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
        <p className="whitespace-nowrap font-['Inter'] text-base font-medium leading-[130%] tracking-[-0.4px] text-gray-800">
          {label}
        </p>
    </label>
  );
};

export default TagItem;