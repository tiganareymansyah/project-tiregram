import { useEffect, useRef } from "react";

export default function MoveContent() {
  const myWord = ["Tigana Reymansyah Instagram"];
  let tamp = 0;
  let tamp1 = 0;
  let word = "";
  let word1 = "";

  const moveContentRef = useRef(null);

  useEffect(() => {
    function myMove() {
      if (tamp === myWord.length) {
        tamp = 0;
      }
      word = myWord[tamp];
      word1 = word.slice(0, ++tamp1);
      const moveContent = moveContentRef.current;
      console.log(moveContent);
      moveContent.textContent = word1;
      if (word1.length === word.length) {
        tamp++;
        tamp1 = 0;
      }
    }
    setInterval(myMove, 300);
    return () => {
      console.log("selesai");
      clearInterval(myMove);
    };
  }, []);

  return (
    <p className="text-white text-center">
      <span id="move-content" ref={moveContentRef}></span>
    </p>
  );
}
