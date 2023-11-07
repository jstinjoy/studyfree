const oldButton = document.querySelector('div[data-specific-auth-trigger="download"]');

const newButton = document.createElement('div');
newButton.classList.add(
  'protected-auth',
  'flex',
  'h-10',
  'items-center',
  'p-2',
  'border',
  'border-solid',
  'rounded',
  'cursor-pointer',
  'border-black-500',
  'md:border-black-400',
  'hover:bg-black-100',
  'active:bg-black-200',
  'mr-3',
);

newButton.innerHTML = `
    <i class="w-5 h-5 mr-1 icon icon-downloads"></i>
    <span class="text-sm leading-tight">${oldButton.querySelector('span').innerHTML}</span>
`;

const parent = oldButton.parentElement;

oldButton.remove();

parent.insertBefore(newButton, parent.children[2]);

newButton.addEventListener('click', () => {
  chrome.runtime.sendMessage('getUrl', (url) => {
    if (url) {
      window.open(url).focus();
    }
  });
});
