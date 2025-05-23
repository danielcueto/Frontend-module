type UserCardProp = {
    name: string;
    age: number;
    onClick: () => void;
}

export function UserCard({
  name,
  age,
  onClick,
}: UserCardProp) {
  return (
    <div onClick={onClick} className="bg-gray-800 rounded-2xl shadow-lg p-6 w-80 text-center hover:bg-gray-600">
      <div className="flex items-center justify-center mt-4 gap-2">
        <p className="text-xl text-white font-bold">{name}</p>
      </div>
      <p className="text-gray-300 text-sm">{age}</p>
    </div>
  );
}
