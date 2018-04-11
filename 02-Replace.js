var replace = function(string) {
	return string.replace(/ /g,"%20");
};
var test = "A BB CCC";
console.log(replace(test));