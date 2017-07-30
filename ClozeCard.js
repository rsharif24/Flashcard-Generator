module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "....");

    if (!this.fullText.includes(this.cloze)) {
        throw ("Try Again");

    };

};


var president = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(president.fullText);
console.log(president.cloze);
console.log(president.partial);