const mainClass = 'main'
const main = document.querySelector(`.${mainClass}`)

const generateItem = ([h, v]) => `
	<section class="item h${h} v${v}">
		<img src="images/${getRandom(12)}.jpg">
		<div class="item__overlay">
			<button>View &#8594;</button>
		</div>
	</section>
`
const getRandom = limit => Math.floor(Math.random() * limit) + 1

const itemsArr = Array.from({ length: 50} , () => [getRandom(4), getRandom(4)])

const html = itemsArr.map(generateItem).join('');

main.innerHTML = html;
