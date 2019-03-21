Vue.component('my-header', {
	template: `<h1>Xedrum Help</h1>`
})

Vue.component('my-footer', {
	template: `<footer>
		<p>Copyrigh © 2018-2019&ensp;&ensp;&ensp;</p>
		<a href="https://bohdan-krupa.github.io" target="_blank">Created by Bohdan Krupa</a>
	</footer>`
})

let ThingsContainer = Vue.component('things-container', {
	data: () => {
		return {
			active: 'shoes'
		}
	},
	template: `<div>
		<filter-container @viewActive="onViewActive"></filter-container>
		<things :active="active"></things>
	</div>`,
	methods: {
		onViewActive(tag) {
			this.active = tag
		}
	}
})