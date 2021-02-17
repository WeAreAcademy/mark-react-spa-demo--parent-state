import { useState } from "react";

interface MadLibsFieldProps {
  handleSave: (textToSave: string) => void;
  headerText: string; // optional property
}

function MadLibsField({ handleSave, headerText }: MadLibsFieldProps) {
  // This is some local child state which the parent is ignorant of
  //    (i.e. we've decided the parent doesn't care about it)
  const [inputText, setInputText] = useState("");

  const handleSaveAndClear = () => {
    if (inputText.length > 0) {
      // parent's responsibility to provide handleSave as a prop
      handleSave(inputText);
      // child's responsibility to clear its own local input state
      setInputText("");
    } else {
      window.alert("erm, wot? nothing to move!");
    }
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
