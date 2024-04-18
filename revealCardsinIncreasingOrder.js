/*
You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

You will do the following steps repeatedly until all cards are revealed:

    Take the top card of the deck, reveal it, and take it out of the deck.
    If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
    If there are still unrevealed cards, go back to step 1. Otherwise, stop.

Return an ordering of the deck that would reveal the cards in increasing order.

Note that the first entry in the answer is considered to be the top of the deck.

 

Example 1:

Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation: 
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.
Since all the cards revealed are in increasing order, the answer is correct.

Example 2:

Input: deck = [1,1000]
Output: [1,1000]


A solution: 
We have an array deck representing a deck of cards.
We need to simulate the process of revealing cards in increasing order after a certain shuffling of the deck.

Thinking Behind the Solution:
Sorting the deck first helps us start with the smallest card.
Using a deque helps in maintaining the positions (indices) in the result array, ensuring that we place the cards in the correct order for revealing.
The simulation process mimics the process of revealing the cards from the shuffled deck in the desired order.

Simulation Process:

    Start by placing the smallest card (after sorting) at the beginning of the result array (index 0).
    For each card in the sorted deck:
        Remove the first index from the deque and assign the current card to this index in the result array.
        Check if there deque is empty, if not:
            Move the index to the end of the deque.

*/

var deckRevealedIncreasing = function(deck) {
    let len = deck.length;
    let sortedDeck = deck.sort((a, b) => a-b);
    let revealed = [];
    revealed.unshift(sortedDeck[len - 1]);

    for (let i = len - 2; i >=0; i--) {
        revealed.unshift(revealed.pop());
        revealed.unshift(sortedDeck[i]);
    }

    return revealed;
};