function writeCards(names, surprise) {
    let output = [];
    for (let i = 0; i < names.length; i++) {
        output.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return output;
}
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
