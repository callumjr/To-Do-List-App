const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit');
const clearBtn = document.querySelector('.clear');
const ul = document.querySelector('.list');

const addToList = () => {
	if (input.value && input.value !== '' && /[a-zA-Z]/.test(input.value) === true) {
		var listItem = document.createElement('li');
		listItem.textContent = input.value;
		listItem.style.listStyle = 'ol';
		ul.appendChild(listItem);
		var doneBtn = document.createElement('button');
		doneBtn.textContent = 'done';
		var cancelBtn = document.createElement('button');
		cancelBtn.textContent = 'x';
		ul.appendChild(doneBtn);
		ul.appendChild(cancelBtn);
		input.value = '';
	}

	doneBtn.addEventListener('click', () => {
		listItem.style.color = 'green';
		ul.removeChild(doneBtn);
	});

	cancelBtn.addEventListener('click', () => {
		ul.removeChild(listItem);
		ul.removeChild(cancelBtn);
		ul.removeChild(doneBtn);
	});
};

document.addEventListener('keypress', e => {
	if (e.code === 'Enter') {
		addToList();
	}
});

submitBtn.addEventListener('click', addToList);

clearBtn.addEventListener('click', () => {
	ul.innerHTML = '';
	input.value = '';
});
