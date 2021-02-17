/**
 * Key takeaway: using array state with map lets us
 *  have a dynamically changing list of things
 */

import { useState } from "react";
import MadLibsField from "./components/MadLibsField";
import MadLibsRandomiser from "./components/MadLibsRandomiser";
import MadLibsStory from "./components/MadLibsStory";

function App() {
  const [programmingTerm, setProgrammingTerm] = useState("state");
  const [mood, setMood] = useState("paranoid");
  const [name, setName] = useState("Richard");
  const [ingVerb, setIngVerb] = useState("fishing");
  const [website, setWebsite] = useState("Reddit");
  const [adjective, setAdjective] = useState("fluorescent");

  return (
    <div>
      <h1>Madlibs</h1>
      <MadLibsField
        headerText="Programming term"
        handleSave={setProgrammingTerm}
      />
      <MadLibsField headerText="Mood" handleSave={setMood} />
      <MadLibsField headerText="Name" handleSave={setName} />
      <MadLibsField headerText="Verb ending in -ing" handleSave={setIngVerb} />
      <MadLibsField headerText="Website" handleSave={setWebsite} />
      <MadLibsField headerText="Adjective" handleSave={setAdjective} />
      <hr />
      <MadLibsStory
        programmingTerm={programmingTerm}
        mood={mood}
        name={name}
        ingVerb={ingVerb}
        website={website}
        adjective={adjective}
      />
      <MadLibsRandomiser
        onRandomisation={(randomisationResult) => {
          // deliberately left incomplete for now
          setProgrammingTerm(randomisationResult.programmingTerm);
          setMood(randomisationResult.mood);
          setName(randomisationResult.name);
        }}
      />
    </div>
  );
}

export default App;
