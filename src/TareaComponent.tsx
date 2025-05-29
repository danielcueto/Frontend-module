export function TareaComponent({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white border border-lime-300">
      <div className="bg-linear-to-r from-lime-300 to-lime-600 text-black p-4">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
      </div>
      <div className="p-6 flex justify-center">
        {children}
      </div>
    </div>
  );
}