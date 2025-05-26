export function ColorItem({ color }: { color: string }) {
  return (
    <div
      className="w-16 h-16 rounded-full  shadow-xl/30 transition-colors duration-300 cursor-pointer"
      style={{ backgroundColor: color || "transparent" }}
      onClick={() => {
        console.log(`Color selected: ${color}`);
        document.body.style.backgroundColor = color;
      }}
    ></div>
  );
}
