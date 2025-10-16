import { HttpTypes } from "@medusajs/types"
import { icons } from "assets/assets"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
}

const colorMap: Record<string, string> = {
  LightGray: "#E8E8E8",
  Black: "#000000",
  DarkGray: "#A2A2A2",

  Green: "#22C55E",
  Brown: "#8B4513",
  Yellow: "#FFFF00",

  White: "#FFFFF1",
  Beige: "#F5F5DC",
  Blue: "#3B82F6",

  Purple: "#800080",
  Pink: "#FFB6C1",
  Orange: "#FFA500",
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  if (title.toLowerCase().includes("material")) {
    return (
      <div className="flex flex-col gap-2 mx-5 md:mx-0">
        <div>
          <label>{title}</label>
          {current && <span className="text-gray-500 ml-8">{current}</span>}
        </div>

        <div className="relative w-full md:w-[243px]">
          <select
            className="border border-gray-200 rounded-[4px] px-3 py-3 text-sm w-full appearance-none pr-10"
            value={current || ""}
            onChange={(e) => updateOption(option.id, e.target.value)}
            disabled={disabled}
          >
            <option value="">Select material</option>
            {filteredOptions.map((materials) => (
              <option key={materials} value={materials}>
                {materials}
              </option>
            ))}
          </select>

          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <img
              src={icons.chevronDown.src}
              alt="chevron"
              className="w-5 h-5"
            />
          </span>
        </div>
      </div>
    )
  }

  if (title.toLowerCase().includes("color")) {
    return (
      <div className="flex flex-col gap-4 my-6 mx-5 md:mx-0">
        <div>
          <span>{title}</span>
          {current && <span className="text-gray-500 ml-8">{current}</span>}
        </div>

        <div className="flex gap-3 flex-wrap">
          {filteredOptions.map((color) => {
            const hex = colorMap[color.replace(" ", "")] || "#ccc"
            const isSelected = color === current

            return (
              <div key={color} className="flex flex-col items-center mr-2">
                <div className="w-8 h-8" style={{ backgroundColor: hex }} />
                <div
                  className={`w-8 border-b ${
                    isSelected ? "border-black" : "border-transparent"
                  } mt-2`}
                />
                <button
                  type="button"
                  onClick={() => updateOption(option.id, color)}
                  className="absolute w-8 h-8"
                  disabled={disabled}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default OptionSelect
