Vue.component('my-header', {
	template: `<h1>Xedrum Help</h1>`
})

Vue.component('profile', {
	data: () => {
		return {
			skills: [
				'НЛП',
				'Робота з травмами',
				'Курс стандартної психології',
				'Курс метафоричних карт',
				'Бутійність',
				'Курси по скайпу'
			]
		}
	},
	template: `<div class="profile-container">
		<div class="avatar"></div>
		<div class="phone">
			<i class="fas fa-phone"></i>
		</div>
		<ul>
			<li v-for="skill in skills">{{ skill }}</li>
		</ul>
	</div>`
})

Vue.component('my-footer', {
	template: `<footer>
		<p>Copyrigh © 2018-2019&ensp;&ensp;&ensp;</p>
		<a href="https://bohdan-krupa.github.io" target="_blank">Created by Bohdan Krupa</a>
	</footer>`
})