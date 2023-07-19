const myWord = ["Tigana Reymansyah Instagram"];
let tamp = 0;
let tamp1 = 0;
let word = "";
let word1 = "";
(
    function myMove() {
        if (tamp === myWord.length) {
            tamp = 0;
        }
        word = myWord[tamp];
        word1 = word.slice(0, ++tamp1);
        const moveContent = document.querySelector("#move-content");
        moveContent.textContent = word1;
        if (word1.length === word.length) {
            tamp++;
            tamp1 = 0;
        }
        setTimeout(myMove, 200);
    }
)();

export default function MoveContent() {
    return <p><span id="move-content"></span></p>
}
