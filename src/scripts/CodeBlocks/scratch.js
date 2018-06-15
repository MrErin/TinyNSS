// //when calling the function he passes the following parameters:
// onKeyUp="checkKeypressBeep(
//identifier:      'beep11', (name of the input field)
//correctCode:      'alert(&quot;Boo!&quot;);', (the correct code)
//twoNumbers:      [1,6]

// <!--
// carriage return Æ 0198
// Use &lt;, &quot. Escape single quotes, slashes
// EXAMPLE:
// '&lt;a href=&quot;JavaScript:void(0)&quot; onClick=Æ  &quot;alert(\'Hi\');&quot;>Click<\/a>'
// -->


{/* <textarea rows="2" cols="55" id="beep11" class="codeField style=" font-size:15px;"="" onkeyup="checkKeypressBeep(
	'beep11',
    '  alert(&quot;Hi, John&quot;);Æ}',
    [10,6]
);"></textarea> */}
//correct code for above:
//  alert("Hi, John");
//}


function checkKeypressBeep(identifier,correctCode,twoNumbers)
{
	//part of his answer show/hide; not relevant
	if (document.getElementById('correction-' + twoNumbers[0] + '-' + twoNumbers[1]).className === 'hidden') // Otherwise, will be able to try again after mistake.
	{
		//whatsInField is the value the user has entered in the box
		var whatsInField = document.getElementById(identifier).value

		var whatsInFieldCharNums = []

		//set inputLength to the length of what the user has typed
		var inputLength = whatsInField.length


	  for (var i = 0;i < inputLength;i++)
	  {
			//loop through what the user has entered and push each character into the empty array
		  whatsInFieldCharNums.push(whatsInField.charCodeAt(i))
		}

		//set inputIndex to minus one because of starting at 0
		var inputIndex = inputLength - 1

		//checking the character at the same index to where the user has typed
		var correctCurrentCharCode = correctCode.charCodeAt(inputIndex)

		//replacing ASCII 198 (which is an a with a tilde) with a line feed. This is necessary because it's unusual and he's confident he won't be replacing valid data for the line feed. See comments of function call at top
		//I'm using alt + 146
	  if (correctCurrentCharCode === 198)
 	  {
			//10 is the code for line feed
			correctCurrentCharCode = 10
		}

		//check to see if user's input matches the correct input
	  if (whatsInFieldCharNums[inputIndex] === correctCurrentCharCode)
 	  {
			//if the user's input is the same length as the correct code (i.e., if the user is done typing stuff)
		  if (inputIndex === correctCode.length - 1)
		  {
				//      playSound("click");
		    if (document.getElementById('exercise-' + twoNumbers[0] + '-' + twoNumbers[1]).className === 'unhidden') //so doesn't go twice
		    {
			  document.getElementById(identifier).style.backgroundColor = '#99ff66'
			  alert('Well done.')
	      	  colorizeNumberAndAdvanceToNextExercise(twoNumbers,true)
		    }
	  	  }
		}
		//if the user entered the wrong character, remove that character
  	  else
 	  {
			document.getElementById(identifier).value = whatsInField.substring(0,inputLength - 1)
			//		playSound("quack");
  	  }
	}
}