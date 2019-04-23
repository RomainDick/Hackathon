export const getters = {
	

	getErrors: state => {
		return state.errors;
	},

	getItem: state => {
		return state.item.results;
	},
	getItemLoading: state => {
		return state.item.loading;
	},
	getItemLoaded: state => {
		return state.item.loaded;
	},

	getItems: state => {
		return state.items.results;
	},
	getItemsLoading: state => {
		return state.items.loading;
	},
	getItemsLoaded: state => {
		return state.items.loaded;
	},

	getItemsPref: state => {
		return state.itemspref.results;
	},
	getItemsPrefLoading: state => {
		return state.itemspref.loading;
	},
	getItemsPrefLoaded: state => {
		return state.itemspref.loaded;
	},

	getMyItems: state => {
		return state.items.results;
	},
	getMyItemsLoading: state => {
		return state.items.loading;
	},
	getMyItemsLoaded: state => {
		return state.items.loaded;
	},

	getCategories: state => {
		return state.categories.results;
	},
	getCategoriesLoading: state => {
		return state.categories.loading;
	},
	getCategoriesLoaded: state => {
		return state.categories.loaded;
	},

	getSearch: state => {
		return state.search.results;
	},
	getSearchLoading: state => {
		return state.search.loading;
	},
	getSearchLoaded: state => {
		return state.search.loaded;
	},

	getUserLogin: state => {
		return state.user.login;
	},
	getUserInfos: state => {
		return state.user.infos;
	},
	getUserData: state => {
		return state.user.data;
	},
	getMedia: state => {
		return state.media;
	},
	
};