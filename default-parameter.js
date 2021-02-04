// how can we use default parameter in function
function getName(name = "Boss"){
    return name;
}
const result = getName(); // with default parameter
console.log(result);
const result2 = getName('Jagadish Chakma'); // with default parameter
console.log(result2);