//We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.


const isEven = (x) => {
    if(x == 0) {
      return true;
  } else if(x == 1) {
    return false;
  } else if(x < 0) { //this is where you fix the final condition of a negative number being passed
   return false; 
  } else {
    return isEven(x-2);
    }
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false