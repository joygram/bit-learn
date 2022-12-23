
function initJoyEditor(edit_tag, in_hide_toolbar = false) {
	let codeblock_config = {
		languages: [
			{ language: '', label: 'Text' },
			{ language: '{r}', label: 'Rcmd' },
			{ language: '{python}', label: 'PyCmd' },
			{ language: 'r', label: 'R' },
			{ language: 'python', label: 'Python' },
			{ language: 'css', label: 'css' }
		]
	}

	let config = {
		codeBljock: codeblock_config
	}
	if (in_hide_toolbar) {
		config = {
			//without toolbar by jogyram 2022/12/22
			toolbar: [],
			codeBljock: codeblock_config
		}
	}

	JoyEditor.Editor.create(document.querySelector(`#${edit_tag}`), config)
		.then(editor => {

			const toolbarElement = editor.ui.view.toolbar.element;
			if (in_hide_toolbar) {
				toolbarElement.style.display = 'none'; // hide toolbar 
				editor.enableReadOnlyMode('my-feature-id'); // turn on readonly mode 
				//editor.disableReadOnlyMode('my-feature-id');
			}
			window.editor = editor;

		}).catch(error => {
			console.error('There was a problem initializing the JoyEditor.', error);
		});
}