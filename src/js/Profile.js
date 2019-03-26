Vue.component('my-header', {
	template: `<h1>Xedrum Help</h1>`
})

Vue.component('profile', {
	data: () => {
		return {
			skills: [
				'НЛП',
				'Робота з травмами',
				'Курси по скайпу',
				'Курс стандартної психології',
				'Курс метафоричних карт',
				'Бутійність'
			]
		}
	},
	template: `<div class="profile-container">
		<div class="avatar-container">
			<div class="avatar"></div>
		</div>
		<ul>
			<li v-for="skill in skills">{{ skill }}</li>
		</ul>
		<div class="phone">
			<i class="fas fa-phone"></i>
			<a href="tel:+380966651469">+380 96 665-14-69</a>
		</div>
		<div class="instagram">
			<i class="fab fa-instagram"></i>
			<a href="https://www.instagram.com/xedrum.help">@xedrum.help</a>
		</div>
	</div>`
})

Vue.component('my-footer', {
	template: `<footer>
		<p>Copyrigh © 2018-2019&ensp;&ensp;&ensp;</p>
		<a href="https://bohdan-krupa.github.io" target="_blank">Created by Bohdan Krupa</a>
	</footer>`
})