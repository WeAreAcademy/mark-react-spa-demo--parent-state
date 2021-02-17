import { useState } from "react";

interface MadLibsFieldProps {
  handleSave: (textToSave: string) => void;
  headerText: string; // optional property
}

function MadLibsField({ handleSave, headerText }: MadLibsFieldProps) {
  const [inputText, setInputText] = useState("");

  const handleSaveAndClear = () => {
    // parent's responsibility to provide handleSave as a prop
    handleSave(inputText);
    // child's responsibility to clear its own local input state
    setInputText("");
  };

  return (
    <>
      <h3>{headerText}</h3>
      <input
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
      <button onClick={handleSaveAndClear}>Move to story</button>
    </>
  );
}

export default MadLibsField;
