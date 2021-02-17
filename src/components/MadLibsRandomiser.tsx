import { pickRandom } from "../utils/pickRandom";

/**
 * Note: there's a duplication here between MadLibsCategories
 *  and the Props interface in MadLibsStory.
 *
 * I would typically extract something out common to both,
 *  but I'm duplicating here to make it more readable.
 */
interface RandomisationResult {
  programmingTerm: string;
  mood: string;
  name: string;
  ingVerb: string;
  website: string;
  adjective: string;
}

interface Props {
  handleRandomisationResult: (randomisationResult: RandomisationResult) => void;
  buttonText: string;
}

const programmingTerms = ["state", "React", "TypeScript", "how to Google"];
const moods = ["happy", "sad", "fearful", "arrogant", "confident"];
const names = ["Richard", "Neill", "Esme"];
const ingVerbs = [
  "sleeping",
  "drinking Huel",
  "marching",
  "rock-climbing",
  "limbo dancing",
];
const websites = ["Reddit", "BBC News", "MySpace", "Spotify"];
const adjectives = ["polished", "quick", "empty", "musical"];

function MadLibsRandomiser({ buttonText, handleRandomisationResult }: Props) {
  /**
   *
   * Note: implicit return of object needs parentheses (),
   *  since braces {} without parentheses () are interpreted
   *  as the opening of an object body
   */
  const handleRandomisation = () => {
    const randomisationResult: RandomisationResult = {
      programmingTerm: pickRandom(programmingTerms),
      mood: pickRandom(moods),
      name: pickRandom(names),
      ingVerb: pickRandom(ingVerbs),
      website: pickRandom(websites),
      adjective: pickRandom(adjectives),
    };

    handleRandomisationResult(randomisationResult);
  };

  return <button onClick={handleRandomisation}>{buttonText}</button>;
}

export default MadLibsRandomiser;
