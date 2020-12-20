import epubjs from "https://cdn.skypack.dev/epubjs@0.3.88";
import LoremIpsum from "https://cdn.skypack.dev/lorem-ipsum@2.0.3";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function boop() {
  var element = document.getElementByID("demo-section");
  var words = lorem.generateParagraphs(4);
  element.value(words);

  console.log(words);
  alert("doing something!");
  console.log("did it work??");
}