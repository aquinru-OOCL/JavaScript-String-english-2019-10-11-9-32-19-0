// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
document.write(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
const wordsArray = sentence.split(' '); //split by space
for (var i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substr(1);
}
document.write("<br>" + wordsArray.join(' ')); //join by space

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
document.write("<br>" + money.replace(/\D/g, ""));