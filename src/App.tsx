/**
 * Key takeaways:
 *  1. Children can be empowered to change parent state
 *  2. It's very awkward for parents to change child state
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
      {/*
        Strategy 1 (basic): empowering children to change parent state,
          both _when_ and _how_, by passing down the setState
          function.
        
        The child can decide when to call it, how to use it, and
          what data to pass into it.
      */}
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
      {/* 
        MadLibsStory is receiving parent state but is not empowered
          to change parent state at all
      */}
      <MadLibsStory
        programmingTerm={programmingTerm}
        mood={mood}
        name={name}
        ingVerb={ingVerb}
        website={website}
        adjective={adjective}
      />
      {/* 
        Strategy 2 (advanced!!): empowering children to decide _when_
          to change parent state, but not _how_ to change parent state.
        
        The parent has fixed a callback function, which it passes to
          the child (and which abstracts over setState).
        
        The child can decide when to call it, and what to pass into
          the callback (which, presumably, should be a randomisation
          result).
        
        This might seem worse - the child has less freedom to change the
          parent state! - but it's a nice pattern for the following reasons:

        1. Separation of responsibility
            Our MadLibsRandomiser has a clear job: randomise some data.
            It's the job of our parent to make sure that data gets
            handled in some appropriate way.

        2. Greater reusability (through 'inversion of control')
            Rather than the child stubbornly insisting on how it changes
            state, our parent can give direction on the how - which is
            helpful because the same child can then be used by different
            parent components with different contexts and needs
      */}
      <MadLibsRandomiser
        buttonText="Randomise story"
        handleRandomisationResult={(randomisationResult) => {
          // incomplete - add the rest, why don't you?
          setProgrammingTerm(randomisationResult.programmingTerm);
          setMood(randomisationResult.mood);
          setName(randomisationResult.name);
        }}
      />
      {/* 
        Gets us a nice reuse out of the same component!
      */}
      <MadLibsRandomiser
        buttonText="Log some random stuff"
        handleRandomisationResult={(randomisationResult) => {
          /**
           * deciding to log here - but, in principle,
           *  could use the randomisation data to do things
           *  like updating a second, separate MadLibs story
           *  or sending the data to a database
           */
          console.log(randomisationResult);
        }}
      />
    </div>
  );
}

export default App;
