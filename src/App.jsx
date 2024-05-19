import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';

import './index.css';

export default function App() {
  return (
    <main className="flex justify-center bg-no-repeat bg-contain xl:bg-desktop-light sm:bg-mobile-light dark:xl:bg-desktop-dark dark:sm:bg-mobile-dark">
      <section className="w-[540px] sm:w-[325px] flex flex-col mt-16 sm:mt-10">
        <Header />
        <TodoList />
      </section>
    </main>
  );
}
