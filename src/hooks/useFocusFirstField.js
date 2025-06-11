import { useEffect } from "react";

const useFocusFirstField = () => {
  useEffect(() => {
    const form = document.querySelector("form");
    const firstField = form.querySelector("input");
    firstField.focus();
  }, []);
};

export default useFocusFirstField;
