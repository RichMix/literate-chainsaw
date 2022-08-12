// letter && || character finder forked from a JS lesson

function letterFinder(word, match) { // read the word, then scan for letter
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

// This code even works with characters
letterFinder("insert_word_you_would_test", "_")

/* Output should be:
---No match found at 0
---No match found at 1
---No match found at 2
---No match found at 3
---No match found at 4
---No match found at 5
Found the _ at 6
---No match found at 7
---No match found at 8
---No match found at 9
---No match found at 10
Found the _ at 11
---No match found at 12
---No match found at 13
---No match found at 14
Found the _ at 15
---No match found at 16
---No match found at 17
---No match found at 18
---No match found at 19
---No match found at 20
Found the _ at 21
---No match found at 22
---No match found at 23
---No match found at 24
---No match found at 25
*/