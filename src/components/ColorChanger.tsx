import { useState, useEffect } from "react";
import { ColorItem } from "./ColorItem";
export function ColorChanger() {
  const [color, setColor] = useState<string>("");
  const [colorList, setColorList] = useState<string[]>([]);
  const [isValidColor, setIsValidColor] = useState<boolean>(false);

  const validateColor = (colorStr: string): boolean => {
    const tempElement = document.createElement("div");
    tempElement.style.color = colorStr;
    return tempElement.style.color !== "";
  };

  useEffect(() => {
    setIsValidColor(color ? validateColor(color) : false);
  }, [color]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleAddColor = () => {
    if (color && isValidColor) {
      setColorList([...colorList, color]);
      setColor("");
    }
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl font-bold mb-4">Color Changer</h2>
      <div className="flex items-center flex-col justify-center gap-3 mb-4">
        <div className="flex w-full gap-2">
          {isValidColor && (
            <div
              className="w-10 h-10 border border-gray-300 rounded"
              style={{ backgroundColor: color }}
            />
          )}
          <input
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="Enter a color (example red, #ff0000, rgb(255,0,0))"
            className="p-2 rounded w-full"
          />
          <button
            className={`text-white p-2 rounded flex-1/3 ${
              isValidColor ? "bg-lime-800" : "bg-gray-400"
            }`}
            onClick={handleAddColor}
          >
            Add
          </button>
        </div>
          {!isValidColor && color && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid color
            </p>
          )}
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {colorList.map((c, index) => (
          <ColorItem key={index} color={c} />
        ))}
      </div>
    </div>
  );
}
