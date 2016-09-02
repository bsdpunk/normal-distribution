var math = require('mathjs');
var stddev = [];
var numbers = [];

process.argv.forEach(function (val, index, array) {
      console.log(index + ': ' + val);
      stddev[index]=val;
});


var len = stddev.length;
for (var i = 0; i < len; i++) {
    if(i >= 2){
        var q = i -2;
        numbers[q]=stddev[i];
    }
}

std_dev_final = math.std(numbers);

console.log(std_dev_final)

