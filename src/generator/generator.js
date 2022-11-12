//Este es el ejemplo básico de los generators
function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

let generatorValue = generatorFunction();
console.log(generatorValue.next().value);
console.log(generatorValue.next().value);
console.log(generatorValue.next().value);
console.log(generatorValue.next().value);

//Este es un segundo ejemplo de los generators

function* generatorArray(array){
    for(let numero of array){
        yield numero;
    }
}

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10];
const generatorValueArray = generatorArray(arrayNumbers);
console.log(generatorValueArray.next().value);
console.log(generatorValueArray.next().value);
console.log(generatorValueArray.next().value);
console.log(generatorValueArray.next().value);