import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [fulltext, setFullText] = useState(false);

  if (children.length <= maxChars) return <p>children</p>;

  const summaryText = children.substring(0, maxChars);
  var textToDisplay = summaryText + (!fulltext ? "..." : "");

  return (
    <>
      <p>
        {!fulltext ? textToDisplay : children}
        <button onClick={() => setFullText(!fulltext)}>
          {fulltext ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
