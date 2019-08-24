// Test-Driven Development (TDD)
// https://repl.it/@istrate/Unit-Testing

// why is TDD great? 

// ensure you only write code you absolutely need to write, no fluff
// ensure you can articulate to yourself what it is you expect your code to do, and that therefore you understand it, and avoid having to rewrite (clarify requirements early!)
// design/architecture decisions are driven by the requirements, rather than personal biases or assumptions
// instant documentation of the requirements, that can be communicated to anyone
// ability to prove to anyone that the code works
// ability to prove to anyone that code changes will break existing functionality
// avoid analysis paralysis - you don't have to think endlessly about whether some code you're thinking about writing will work or not - just run the tests!
// work incrementally - breaks up your work in terms of expectations rather than blocks of code.  rather than having to come up with the entire design for how a function should work in our minds, before being able to lay down code, we can break up the design work itself first.

// Procedure for TDD

// start with simple test cases, rather than complex ones
// write your first test before writing any code for the function under test
// resolve any compilation errors by writing a stub for the function under test
// run your tests
// check for failures and pick one to fix
// add the minimal amount of code to fix the reason for the failure
// run the tests again
// repeat fixing failure until all tests pass
// add another test to cover another scenario that your function should handle
// run the tests again and repeat the process of fixing failures
// keep adding tests until you, as the developer, are convinced that the function meets the business' acceptance criteria

const StringUtility = require('./StringUtility');

let stringUtility;

// runs before each test. (creates a new class)
beforeEach(() => {
  stringUtility = new StringUtility;
});

// unit tests should just test logic
// Saves headaches later down the road
// very important testing
// talk about unit testing and mocking and why they are great
// Actual test. 'describe' categorizes the test

// first layer class name, second layer function name 
// describe('StringUtility', () => {
//   it('describe your scenario here, () => {
//     // code it describes
//   },
// });

// Don't add any code unless test is failing.

// ad hoc manual testing

describe('StringUtility', () => {
  describe('findVowels', () => {
    it('handles undefined', () => {
      let result = stringUtility.findVowels(undefined);
      expect(result).toBe('');
    });

    it('handles null', () => {
      let result = stringUtility.findVowels(null);
      expect(result).toBe('');
    });

    it('handles a number', () => {
      let result = stringUtility.findVowels(5);
      expect(result).toBe('');
    });

    it('handles a boolean', () => {
      let result = stringUtility.findVowels(true);
      expect(result).toBe('');
    });

    it('handles an array', () => {
      let result = stringUtility.findVowels(['a',1]);
      expect(result).toBe('');
    });

    it('handles an object', () => {
      let result = stringUtility.findVowels({});
      expect(result).toBe('');
    });

    it('handles empty string', () => {
      let result = stringUtility.findVowels('');
      expect(result).toBe('');
    });

    it('should return same string for a string with only vowels', () => {
      let result = stringUtility.findVowels('aeiou');
      expect(result).toBe('aeiou');
    });

    it('should return empty string for a string with only consonants', () => {
      let result = stringUtility.findVowels('bdfgh');
      expect(result).toBe('');
    });

    it('should get a string of just the vowels in a mix of vowels and consonants', () => {
      let result = stringUtility.findVowels('abedifgohu');
      expect(result).toBe('aeiou');
    });

    it('handles mixed case', () => {
      let result = stringUtility.findVowels('aBedIfGOhu');
      expect(result).toBe('aeIOu');
      result = stringUtility.findVowels('About');
      expect(result).toBe('Aou');
    })

    it('handles all caps', () => {
      let result = stringUtility.findVowels('ABEDIFGOHU');
      expect(result).toBe('AEIOU');
    })
  });

  // add spaces, and punctuation

  // Yael code
  describe('toLeeetSpeak', () => {
    it('Is a defined function', () => {
      let result = stringUtility.toLeetSpeak();
      expect(result).toBe(typeof result === "function");
    });

    it('returns a string when a string is passed', () => {
      let result = stringUtility.toLeetSpeak("thisIsAString");
      expect(result).toBe(typeof result === "string");
    });

  });


  // toLeetSpeak(text)
  // Description: Convert text to leet speak with the
  // following conversion table (includes uppercase):
  // l => 1, z => 2, e => 3, a => 4, s => 5, 
  // t => 7, b => 8, g => 9, o => 0
  // Example input:
  // Gonna get a lab coat.
  // 90nn4 937 4 148 c047.
  describe('toLeetSpeak', () => {
    it('my scenario 1', () => {

    });

    it('my scenario 2', () => {
      
    });

    // Javi's solution:
    // https://repl.it/@javiyzaguirre
    // it('converts text to leet', () => {
    //  let result = stringUtility.toLeetSpeak('The cow jumped over the moon');
    //  expect (result).toBe('7h3 c0w jump3d 0v3r 7h3 m00n')
    // });
  })
});


