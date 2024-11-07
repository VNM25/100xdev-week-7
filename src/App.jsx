import { lazy, Suspense, useContext, useMemo, useState } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { TodoApp } from "./components/TodoApp";

const CountingApp = lazy(() => import("./components/CountingApp"))
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/counter"
              element={
                <Suspense fallback={"loading..."}>
                  <CountingApp></CountingApp>
                </Suspense>
              }
            ></Route>

            <Route
              path="/"
              element={
                <Suspense fallback={"loading..."}>
                  <Landing></Landing>
                </Suspense>
              }
            ></Route>

            <Route
              path="/todo"
              element={
                <Suspense fallback={"loading..."}>
                  <TodoApp></TodoApp>
                </Suspense>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
