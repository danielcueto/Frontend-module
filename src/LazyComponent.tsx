import { useState, lazy, Suspense } from "react";

const LazyModal = lazy(() => import("./Modal"));

export function LazyComponent() {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div className="flex flex-col gap-5">
      {open && (
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <LazyModal isOpen={open} onClose={() => setOpen(false)}>
            <div className="p-6">
              <h1 className="text-xl font-bold">Hola</h1>
              <p>Soy un children modo Lazy</p>
            </div>
          </LazyModal>
        </Suspense>
      )}
      <button onClick={handleClick}>
        Open Modal
      </button>
    </div>
  );
}
