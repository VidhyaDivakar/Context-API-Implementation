import type { ReactNode } from "react";

import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";
import { ThemeProvider } from "./ThemeContext";

const AppProviders = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          {children}
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
};

export default AppProviders;