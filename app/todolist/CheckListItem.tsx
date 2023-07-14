'use client'

import useChecked from "@/hooks/useChecked";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type IdValue = string | number;

// props spreading pattern

type CheckListProps<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode;
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
} & ComponentPropsWithoutRef<'ul'>;

function ChecklistItem<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  checkedIds,
  onCheckedIdsChange,
  ...ulProps
}: CheckListProps<Data>) {
  const { resolvedCheckedIds, handleCheckChange } = useChecked({
    checkedIds,
    onCheckedIdsChange,
  });

  return (
    <ul className="bg-gray-300 rounded p-10" {...ulProps}>
      {data.map((item) => {
        if (renderItem) {
          return renderItem(item);
        }

        const idValue = item[id] as unknown;
        if (typeof idValue !== 'string' && typeof idValue !== 'number') {
          return null;
        }

        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== 'string') {
          return null;
        }

        const secondaryText = item[secondary] as unknown;
        return (
          <li
            key={idValue}
            className="bg-white p-6 shadow rounded mb-4 last:mb-0 hover:scale-[1.02] transition ease-in-out duration-300 overflow-hidden relative"
          >
            <label className="flex items-center justify-between cursor-pointer">
              <div className="ml-2">
                <div className="text-xl text-gray-800 pb-1">{primaryText}</div>
                {typeof secondaryText === 'string' && (
                  <div className="text-sm text-gray-500 w-[80%]">{secondaryText}</div>
                )}
              </div>
              <input
                type="checkbox"
                checked={resolvedCheckedIds.includes(idValue)}
                onChange={handleCheckChange(idValue)}
                className="w-8 h-8 rounded-full text-neutral-500 border-neutral-500 focus:ring-neutral-500 focus:ring-4 transition-all"
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default ChecklistItem