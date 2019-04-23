import * as fromTypes from './types.js';

export const mutations = {

	[fromTypes.GET_ERRORS](state, payload) {
		if (payload.login != undefined)
			state.errors.login = payload.login;
		if (payload.server != undefined)
			state.errors.server = payload.server;
		if (payload.register != undefined)
			state.errors.register = payload.register;

	},

	[fromTypes.SEARCH](state, payload) {
		state.search = {
			...state.search,
			results : payload,
		};
	},
	[fromTypes.SEARCH_LOADING](state, payload) {
		state.search.loading = payload;
	},
	[fromTypes.SEARCH_LOADED](state, payload) {
		state.search.loaded = payload;
	},


	[fromTypes.CREATE_PRODUCT](state, payload) {
		state.create_product = {
			...state.create_product,
			results : payload,
		};
	},
	

	[fromTypes.GET_CATEGORIES](state, payload) {
		state.categories = {
			...state.categories,
			results : payload,
		};
	},
	[fromTypes.GET_CATEGORIES_LOADING](state, payload) {
		state.categories.loading = payload;
	},
	[fromTypes.GET_CATEGORIES_LOADED](state, payload) {
		state.categories.loaded = payload;
	},


	[fromTypes.GET_ITEMS](state, payload) {
		state.items = {
			...state.items,
			results : payload,
		};
	},
	[fromTypes.GET_ITEMS_LOADING](state, payload) {
		state.items.loading = payload;
	},
	[fromTypes.GET_ITEMS_LOADED](state, payload) {
		state.items.loaded = payload;
	},


	[fromTypes.GET_ITEM](state, payload) {
		state.item = {
			...state.item,
			results : payload,
		};
	},
	[fromTypes.GET_ITEM_LOADING](state, payload) {
		state.item.loading = payload;
	},
	[fromTypes.GET_ITEM_LOADED](state, payload) {
		state.item.loaded = payload;
	},

	
	[fromTypes.GET_ITEMS_PREF](state, payload) {
		state.itemspref = {
			...state.itemspref,
			results : payload,
		};
	},
	[fromTypes.GET_ITEMS_PREF_LOADING](state, payload) {
		state.itemspref.loading = payload;
	},
	[fromTypes.GET_ITEMS_PREF_LOADED](state, payload) {
		state.itemspref.loaded = payload;
	},


	[fromTypes.GET_MY_ITEMS](state, payload) {
		state.items = {
			...state.items,
			results : payload,
		};
	},
	[fromTypes.GET_MY_ITEMS_LOADING](state, payload) {
		state.items.loading = payload;
	},
	[fromTypes.GET_MY_ITEMS_LOADED](state, payload) {
		state.items.loaded = payload;
	},

	
	[fromTypes.LOGIN_USER](state, payload) {
		state.user = {
			...state.user,
			infos : payload,
		};
	},
	[fromTypes.LOGIN_USER_BOLEAN](state, payload) {
		state.user = {
			...state.user,
			login : payload,
		};
	},

	[fromTypes.USER_INFO](state, payload) {
		state.user = {
			...state.user,
			data : payload,
		};
	},

	
	[fromTypes.CREATE_MEDIA](state, payload) {
		state.media = payload
	},

	[fromTypes.DECO_USER](state) {
		state.user.login=false
		state.user.infos.token = null
		state.user.infos.id = null
		state.user.data.department = "00"
		state.user.data.categories = 0

	},
	
	// [fromTypes.UPDATE_LOADER](state, payload) {
	// 	state.loader = payload;
	// },

	// [fromTypes.UPDATE_SEARCH_TYPE](state, payload) {
	// 	state.args = {
	// 		...state.args,
	// 		type: payload
	// 	};
	// },

};