/// Given an array of integers, return a new array with each value doubled.
console.log("hello");
function maps(x) {
  return x.map((n) => n * 2);
}

function likeOrDislike(buttons) {
  // Initialize the state variable to null
  let state = null;

  // Iterate over each button in the input list
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    // If the button is a "Like" button
    if (button === "Like") {
      // If the previous state was "Dislike", update the state to "Like"
      if (state === "Dislike") {
        state = "Like";
      } else {
        // Otherwise, toggle the "Like" button on or off
        state = state === null ? "Like" : null;
      }
    }
    // If the button is a "Dislike" button
    else if (button === "Dislike") {
      // If the previous state was "Like", update the state to "Dislike"
      if (state === "Like") {
        state = "Dislike";
      } else {
        // Otherwise, toggle the "Dislike" button on or off
        state = state === null ? "Dislike" : null;
      }
    }
  }

  // Return the final state
  return state;
}

function likeOrDislike(buttons) {
  let state = "Nothing"; // initializing the state to nothing, when no button is pressed

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]; /// iterating through each of the buttons to check which one is pressed

    if (button === "Like") {
      // when the like button is pressed check the state
      if (state === "Dislike") {
        // if the state is dislike then overwrite it to like
        state = "Like";
      } else {
        // else is the state is nothing then make it like or if state is already like then make it nothing
        state = state === "Nothing" ? "Like" : "Nothing";
      }
    }

    if (button === "Dislike") {
      // now if the dislike button is pressed then follow the similiar procedure as like
      // check the state first
      if (state === "Like") {
        //update it to dislike
        state = "Dislike";
      } else {
        state = state === "Nothing" ? "Dislike" : "Nothing";
        // if state = nothing is true then update it to dislike else nothing
        // it is working as a toggle
      }
    }
  }

  /// now return the state
  return state;
}

function likeDislike(buttons) {
  return buttons.reduce(
    (state, button) => (state === button ? Nothing : button),
    Nothing
  );
}
