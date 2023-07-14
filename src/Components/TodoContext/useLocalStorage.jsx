import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("TODOS_V1", JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   {
//     text: "Cortar cebolla!",
//     completed: true,
//   },
//   {
//     text: "Hacer Curso!",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona!",
//     completed: false,
//   },
//   {
//     text: "Merendar!",
//     completed: true,
//   },
//   {
//     text: "Hacer ejercicio!",
//     completed: true,
//   },
//   {
//     text: "Cocinar almuerzo!",
//     completed: false,
//   },
//   {
//     text: "Cortar cebolla",
//     completed: true,
//   },
//   {
//     text: "Hacer Curso",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: true,
//   },
//   {
//     text: "Merendar",
//     completed: false,
//   },
//   {
//     text: "Hacer ejercicio",
//     completed: true,
//   },
//   {
//     text: "Cocinar almuerzo",
//     completed: true,
//   },
//   {
//     text: "Cocinar cena",
//     completed: false,
//   },
//   {
//     text: "Cenar",
//     completed: false,
//   },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

// localStorage.removeItem("TODOS_V1");
