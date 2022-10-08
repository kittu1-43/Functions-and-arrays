//Progression #1: Greatest of the two numbers

/*
function greatestOfTwoNumbers(num1,num2)
{
    if(num1>num2)
    {
        console.log(num1 +" is greater");

    }
    else
    {
        console.log(num2 +" is greater");
    }

}
console.log(greatestOfTwoNumbers(26,12));
*/


// Progression #2: The lengthy word

/*
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
function findScaryWord(names)
{
    
    var max_char = words[0].length;
    var ans = words[0];
    for (var i = 0; i < words.length; i++) {
        var maxi = words[i].length;
        if (maxi > max_char) {
            ans = words[i];
            max_char = maxi;
            max_char_word=words[i];
        }
    }
    console.log("The name which contains the maximum character is "+max_char_word);
}
findScaryWord(words);

*/

// Progression #3: Net Price

/*
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

function netPrice(arr)
{
    var spentAmount=0;
    for(i=0;i<prices.length;i++)
    {
        spentAmount=spentAmount+prices[i];
    }
    console.log("Total amount spent by john is "+spentAmount);
}
netPrice(prices);

*/

// Progression #3.1 (Bonus): A generic sum() function

/*
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add()
{
    const sum = mixedArr.reduce( (sumSoFar, nextValue) => {
        if ( typeof nextValue === "number" && isFinite(nextValue) ) {
           return sumSoFar + nextValue;
        }
        //skip otherwise
        return sumSoFar;
     }, 0); //sum starting from zero
      
      console.log(sum);
}
add(mixedArr);
*/

// Progression #4: Calculate the average

/*
const arr= [200,10,900,32,65,876,43];
function sumOfArray()
{
var sum=0;
for(i=0; i<Array.length ; i++)
{
    sum=sum+arr[i];
    
}
midPoint=sum/arr.length;
console.log("Mid point is "+midPoint);
}

sumOfArray(arr);

*/

// Progression 4.1: Array of numbers

/*
const levels = [22, 16, 9, 10, 7, 14, 11, 9];

function midPointOfLevels()
{
    var sum=0;
    for(i=0;i<levels.length;i++){
        sum=sum +levels[i];
    }
    var average=sum/levels.length;
    console.log("Average of levels is "+average);
}

midPointOfLevels(levels);

*/

// Progression 4.2: Array of strings

/*
const items = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt'];

function averageWordLength()
{
    var wordLength=0;
    for(i=0;i<items.length;i++)
    {
        wordLength=wordLength+items[i].length;
    }
    var averageWordLength=wordLength/items.length;
    console.log("Average length of the words is "+averageWordLength);
}
averageWordLength(items);

*/

// Progression #5: Unique arrays

/*
const wordsUnique = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg','flour'];

function uniqueArray()
{
    var unique = [];
        wordsUnique.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;

    }
console.log(uniqueArray(wordsUnique));
*/

// Progression #6: Find elements

/*
const words = ['door','window','ceiling','roof','plinth','tiles','ceiling','flooring'];

function searchElement()
{
console.log(words.includes("tiles"));
}

searchElement(words);
  
*/

// Progression #7: Count repetition

/*
const words = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'];

function howManyTimesElementRepeated(arr,word)
{
    count=0;
for(i=0;i<words.length;i++){
 if(words[i]==word)
 {
    count++
 }
}
console.log(count+" times "+word+" is repeated")
}
howManyTimesElementRepeated(words,"matter");
*/

// Progression #8: (Bonus) Product of adjacent numbers

const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
  ];
  let n=10;

  function maximumProduct(matrix,n)
  {
    let max=0,result;
   for(i=0;i<n;i++)
   {
    for(let j=0;j<n;j++)
    {
        if((j-9)>=0)
        {
            result=matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3]*matrix[i][j-4]*matrix[i][j-5]*matrix[i][j-6]*matrix[i][j-7]*matrix[i][j-8]*matrix[i][j-9];
            if(max <result)
            max=result;
        }
        if((i-9)>=0)
        {
            result=matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j]*matrix[i-4][j]*matrix[i-5][j]*matrix[i-6][j]*matrix[i-7][j]*matrix[i-8][j]*matrix[i-9][j];

            if(max < result)
            max=result;
        }
        if((i-9) >=0 && (j-9) >=0)
        {
            result=matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3]*matrix[i-4][j-4]*matrix[i-5][j-5]*matrix[i-6][j-6]*matrix[i-7][j-7]*matrix[i-8][j-8]*matrix[i-9][j-9];

            if(max < result)
            max=result;

        }
        if((i -9) >=0 && (j-1) <=0)
        {
            result=matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3]*matrix[i-4][j+4]*matrix[i-5][j+5]*matrix[i-6][j+6]*matrix[i-7][j+7]*matrix[i-8][j+8]*matrix[i-9][j+9];

            if(max<result)
            max=result;

        }

    }
   }
   return max;
};
console.log(maximumProduct(matrix,n));
  