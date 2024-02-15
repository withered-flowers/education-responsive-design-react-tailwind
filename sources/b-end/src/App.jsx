import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <section className="w-full min-h-dvh flex flex-col md:flex-row bg-gray-100">
      {/* Left (Variant Mobile) */}
      <section id="left" className="block md:hidden md:basis-80 p-4">
        {/* Navbar Component */}
        <section>
          <h1 className="text-xl font-semibold mb-4">Navigation</h1>
          <a
            className="underline text-blue-600 hover:text-blue-600/50 transition-colors duration-300"
            href="https://github.com/withered-flowers/education-responsive-design-react-tailwind"
          >
            Github (Code)
          </a>
        </section>
      </section>
      {/* End of Left (Variant Mobile) */}

      {/* Left (Variant MD++) */}
      <section id="left" className="hidden md:block md:basis-80 p-4">
        {/* Navbar Component */}
        <section>
          <h1 className="text-xl font-semibold mb-4">Navigation</h1>
          <ul className="flex flex-col gap-4 list-disc ml-4">
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-600/50 transition-colors duration-300"
                href="https://github.com/withered-flowers/education-responsive-design-react-tailwind"
              >
                Github (Code)
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-600/50 transition-colors duration-300"
                href="https://www.google.com"
              >
                Google (Dummy)
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-600/50 transition-colors duration-300"
                href="https://www.stackblitz.com"
              >
                StackBlitz (Dummy)
              </a>
            </li>
          </ul>
        </section>
      </section>
      {/* End of Left */}

      {/* Right */}
      <section id="right" className="grow p-4">
        {/* Content */}
        <section>
          <h1 className="text-xl font-semibold mb-4">Content</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todos.map((todo) => (
              // Card Component
              <div
                key={todo.id}
                className="p-4 bg-white rounded-xl hover:bg-slate-50 transition-colors duration-300"
              >
                <p className="font-semibold capitalize">{todo.title}</p>
                <p className="text-sm font-thin">
                  {todo.completed ? "Completed" : "Not Completed"}
                </p>
              </div>
            ))}
          </section>
        </section>
      </section>
      {/* End of Right */}
    </section>
  );
};

export default App;
