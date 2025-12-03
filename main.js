/*
Name: Aiesha Asim
File: main.js
Date: December 2, 2025
This file adds JavaScript behavior such as showing and hiding comments.
*/


// Show/hide comments section
const toggleBtn = document.getElementById('toggle-comments');
const commentWrapper = document.querySelector('.comment-wrapper');

// Start with comments hidden
commentWrapper.classList.add('hidden');

toggleBtn.addEventListener('click', () => {
  commentWrapper.classList.toggle('hidden');

  if (commentWrapper.classList.contains('hidden')) {
    toggleBtn.textContent = 'Show comments';
  } else {
    toggleBtn.textContent = 'Hide comments';
  }
});

// Add new comments
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Reset fields
  nameField.value = '';
  commentField.value = '';
}
