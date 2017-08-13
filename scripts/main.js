/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let hand = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

function handValue(hand) {
    //1. Loop over the hand array and calculate the value of each card
    let handValue = 0;

    for(let i = 0; i < hand.length; i++){
      if (hand[i] === "J" || hand[i] === "Q" || hand [i] === "K"){
        hand[i] = "10";
      } else if (hand[i] === "A"){
        if (handValue > "10"){
          hand[i] = "1";
        } else {
          hand[i] = "11";
        }
      }

    handValue = parseInt(hand[i]) + handValue;
      if (handValue > 21) {
        (handValue -= 10);
        }
      }
    //2. if the card is a K, Q, J then the value is 10
    //3. if the card is A then add 11
    //4. else just use the face value of the card to add to total
    //5. If total is over 21, start changing A values to 1

  return handValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
