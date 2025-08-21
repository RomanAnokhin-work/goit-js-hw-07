const categories = document.getElementById(`categories`);
const items = categories.querySelectorAll(`.item`);

console.log(`Number of categories: ${categories.children.length}`);

items.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})


