import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">MyBooks App</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : "hover:underline"
                  }
                >
                  Books
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
