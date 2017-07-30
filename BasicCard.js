
module.exports = BasicCard;

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

var president = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log(president.front);
console.log(president.back);
