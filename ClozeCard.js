module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "....");

    if (!this.partial.includes(this.cloze)) {
        throw ("Try Again");

    };
};

var test = new ClozeCard ("was first prez", "george wash")

console.log(test.partial)