import { createContext, useContext, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const TodosContext = createContext(null);

const GET_TODO = gql`
  query todos($completed: Boolean) {
    todos(completed: $completed) {
      id
      text
      completed
    }
  }
`;

const REMOVE_TODO = gql`
  mutation removeTodo($id: Int!) {
    removeTodo(id: $id) {
      id
      text
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: Int!, $text: String!, $completed: Boolean!) {
    updateTodo(id: $id, text: $text, completed: $completed) {
      id
      text
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation createTodo($text: String!, $completed: Boolean!) {
    createTodo(text: $text, completed: $completed) {
      id
      text
      completed
    }
  }
`;

export const TodosProvider = ({ children }) => {
  const { loading, error, data, refetch } = useQuery(GET_TODO);
  const [removeTodo] = useMutation(REMOVE_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [createTodo] = useMutation(ADD_TODO);
  const [completed, setCompleted] = useState(null);

  const remove = async (id) => {
    await removeTodo({ variables: { id } });
    await refetch({ completed: null });
  };

  const update = async (todo) => {
    await updateTodo({
      variables: { text: todo.text, completed: todo.completed, id: todo.id },
    });
    await refetch({ completed: null });
  };

  const filter = async (input) => {
    await refetch({ completed: input });
    setCompleted(input);
  };

  const addTodo = async (text) => {
    await createTodo({ variables: { text, completed: false } });
    await refetch({ completed: null });
  };

  const value = {
    data,
    loading,
    remove,
    update,
    filter,
    completed,
    addTodo,
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error("useTodo must be used within TodosContext");
  }

  return context;
};

export default useTodos;
