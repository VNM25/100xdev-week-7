import { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";
import { filterAtom, filterSelector, todoAtom } from "../store/atoms/todos";

export function TodoApp() {
  // const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const todos = useRecoilValue(todoAtom);

  // const filteredTodo = useMemo(() => {
  //   let sentence = todos.filter((x, idx) => {
  //     console.log(x.desc);
  //     return x.desc.toLowerCase().includes(filter.toLowerCase());
  //   });
  //   return sentence ? sentence : [];
  // }, [todos, filter]);
  return (
    <div>
      <CreateTodos></CreateTodos>
      <FilterTodo></FilterTodo>
      <Todos ></Todos>
    </div>
  );
}

export function FilterTodo() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <div>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export function CreateTodos() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useRecoilState(todoAtom);
  function createNewTodo() {
    let id = todos.length();

    const newTodo = {
      id: id + 1,
      todo: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button onClick={() => createNewTodo()}>Submit</button>
    </div>
  );
}

export function Todos() {
  const todos = useRecoilValue(filterSelector)
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h2>{todo.todo}</h2>
              <p>{todo.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
