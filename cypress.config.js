const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/"
  },
  env: {
		AdminUser: {
			username: 'Admin',
			password: 'admin123',
		},
		endpoint: {
			authLogin: '/auth/login',
			dashboardIndex: '/dashboard/index',
			signUp: 'https://coderbyte.com/sl',
		},
		user: {
			username: 'upexTesting',
			email: 'sai@upextesting.com',
			password: '1234567',
		},
		swagLabs: {
			endpoint: {
				inventory: '/inventory.html',
				cart: '/cart.html',
				checkoutOne: '/checkout-step-one.html',
				checkoutTwo: '/checkout-step-two.html',
				checkoutAll: '/checkout-complete.html',
			},
			login: {
				users: {
					correctUser: 'standard_user',
					correctPass: 'secret_sauce',
					lockUser: 'locked_out_user',
					problemUser: 'problem_user',
					passInv: 'invalid_password',
					glitchUser: 'performance_glitch_user',
					userInv: 'invalid_username',
				},
				errorMsg: {
					inventoryError: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
					cartError: "Epic sadface: You can only access '/cart.html' when you are logged in.",
					checkoutOneError: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
					checkoutTwoError: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",
					checkoutAllError: "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.",
					lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
					PassOrUserInv: 'Epic sadface: Username and password do not match any user in this service',
					UserNull: 'Epic sadface: Username is required',
					PassNull: 'Epic sadface: Password is required',
				},
			},
			checkout: {
				errorMsg: {
					BusinessRule2: 'Error: First Name is required',
					BusinessRule3: 'Error: Last Name is required',
					BusinessRule4: 'Error: Postal Code is required',
					BusinessRule5: 'Error: Special characters are not allowed',
					BusinessRule6: 'Error: Special characters are not allowed',
					BusinessRule7: 'Error: Special characters are not allowed',
					BusinessRule8: 'Error: Numeric characters not allowed',
					BusinessRule9: 'Error: Numeric characters not allowed',
				},
			},
		},
	},
});
