import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [
    {
      id: 1,
      todo: "gym",
      desc: "go to gym",
    },
    {
      id: 2,
      todo: "study",
      desc: "study for exam",
    },
    {
      id: 3,
      todo: "sleep",
      desc: "sleep early",
    },
  ],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get}) => {
        const todos = get(todoAtom)
        const filter = get(filterAtom)
        let sentence = todos.filter((x, idx) => {
            return x.desc.toLowerCase().includes(filter.toLowerCase());
          });

        return sentence
    }
})
