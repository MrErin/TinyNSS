const create_CodeBlock = require('./cb_create_CodeBlock')

// dayNumber, correctBlock, timidBlock, delusionalBlock


const initializeCodeBlocks = () => {
	create_CodeBlock('0A', 0, '<p>0A: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('0B', 0, '<p>0B: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('0C', 0, '<p>0C: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('1A', 1, '<p>1A: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('1B', 1, '<p>1B: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('1C', 1, '<p>1C: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('2A', 2, '<p>2A: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('2B', 2, '<p>2B: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
	create_CodeBlock('2C', 2, '<p>2C: correct: with three spaces next:   </p>', '<p>timid: with a new line<br>between these lines</p>', '<p>delusional says something about me here\'s some underscores and special characters: _=+{}[]!<>/\'"</p>')
}

module.exports = initializeCodeBlocks