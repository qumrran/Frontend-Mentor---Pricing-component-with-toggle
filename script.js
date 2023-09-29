const globalBtn = document.querySelector('.pricing__wrapper__btn');
const globalBtnBall = document.querySelector('.pricing__wrapper__btn__ball');

const basicPrice = document.querySelector('.basic__price');
const professionalPrice = document.querySelector('.professional__price');
const masterPrice = document.querySelector('.master__price');

function changePricingPlan() {
	const isRight =
		globalBtn.style.justifyContent === 'right' ||
		getComputedStyle(globalBtn).justifyContent === 'right';

	if (isRight) {
		globalBtn.style.justifyContent = 'left';
		basicPrice.innerHTML =
			'<span class="basic__price__dolar">&dollar;</span>' + '199.99';
		professionalPrice.innerHTML =
			'<span class="professional__price__dolar">&dollar;</span>' + '249.99';
		masterPrice.innerHTML =
			'<span class="professional__price__dolar">&dollar;</span>' + '399.99';
	} else {
		globalBtn.style.justifyContent = 'right';
		basicPrice.innerHTML =
			'<span class="basic__price__dolar">&dollar;</span>' + '19.99';
		professionalPrice.innerHTML =
			'<span class="professional__price__dolar">&dollar;</span>' + '24.99';
		masterPrice.innerHTML =
			'<span class="professional__price__dolar">&dollar;</span>' + '39.99';
	}
}

globalBtn.addEventListener('click', changePricingPlan);
