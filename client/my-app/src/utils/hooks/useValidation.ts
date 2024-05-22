import { useState, ChangeEvent } from "react";

export const useValidation = () => {
  const [descriptionV, setDesctiption] = useState("");
  const [titleV, setTitle] = useState("");
  const [blockBtn, setBlockBtn] = useState(true);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);

  const descriptionChangeV = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDescriptionLength(value.length);

    setDesctiption(value);

    if (value.length === 0) {
      setBlockBtn(true);
    } else {
      setBlockBtn(false);
    }
  };

  const titleChangeV = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitleLength(value.length);

    setTitle(value);

    if (value.length === 0) {
      setBlockBtn(true);
    } else {
      setBlockBtn(false);
    }
  };

  return {
    descriptionChangeV,
    blockBtn,
    descriptionV,
    descriptionLength,
    titleV,
    titleChangeV,
    titleLength,
  };
};
