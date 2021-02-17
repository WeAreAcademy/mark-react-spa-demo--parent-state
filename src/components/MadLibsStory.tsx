interface Props {
  programmingTerm: string;
  mood: string;
  name: string;
  ingVerb: string;
  website: string;
  adjective: string;
}

function MadLibsStory({
  programmingTerm,
  mood,
  name,
  ingVerb,
  website,
  adjective,
}: Props) {
  return (
    <div>
      <p>
        Today, I'm trying to learn about <b>{programmingTerm}</b> - and I'm
        feeling really <b>{mood}</b>!
      </p>
      <p>
        I'd be pairing with <b>{name}</b> - but they're too busy{" "}
        <b>{ingVerb}</b>, it seems.
      </p>
      <p>
        So, instead, I'm trying to learn about it by using <b>{website}</b>, and
        the results have been... <b>{adjective}</b>.
      </p>
    </div>
  );
}

export default MadLibsStory;
