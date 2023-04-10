const navigationData = [
	[
		{
			category: "Products",
			content: [
				{
					name: "List",
					link: "https://carpatin-dashboard.devias.io/dashboard/products",
				},
				{
					name: "Summary",
					link: "https://carpatin-dashboard.devias.io/dashboard/products/:productId",
				},
				{
					name: "Inventory",
					link: "https://carpatin-dashboard.devias.io/dashboard/products/:productId/inventory",
				},
				{
					name: "Insights",
					link: "https://carpatin-dashboard.devias.io/dashboard/products/:productId/insights",
				},
			],
		},
		{
			category: "Orders",
			content: [
				{
					name: "List",
					link: "https://carpatin-dashboard.devias.io/dashboard/orders",
				},
				{
					name: "Summary",
					link: "https://carpatin-dashboard.devias.io/dashboard/orders/:orderId",
				},
			],
		},
	],
	[
		{
			category: "Customers",
			content: [
				{
					name: "List",
					link: "https://carpatin-dashboard.devias.io/dashboard/customers",
				},
				{
					name: "Summary",
					link: "https://carpatin-dashboard.devias.io/dashboard/customers/:customerId",
				},
				{
					name: "Inventory",
					link: "https://carpatin-dashboard.devias.io/dashboard/customers/:customerId/inventory",
				},
				{
					name: "Insights",
					link: "https://carpatin-dashboard.devias.io/dashboard/customers/:customerId/insights",
				},
			],
		},
		{
			category: "Invoices",
			content: [
				{
					name: "List",
					link: "https://carpatin-dashboard.devias.io/dashboard/invoices",
				},
				{
					name: "Create",
					link: "https://carpatin-dashboard.devias.io/dashboard/invoices/create",
				},
				{
					name: "Details",
					link: "https://carpatin-dashboard.devias.io/dashboard/invoices/:invoiceId",
				},
				{
					name: "Preview",
					link: "https://carpatin-dashboard.devias.io/dashboard/invoices/:invoiceId/preview",
				},
			],
		},
	],
	[
		{
			category: "Dashboards",
			content: [
				{
					name: "Overview",
					link: "https://carpatin-dashboard.devias.io/dashboard",
				},
				{
					name: "Reports",
					link: "https://carpatin-dashboard.devias.io/dashboard/sales",
				},
			],
		},
		{
			category: "Account",
			content: [
				{
					name: "General",
					link: "https://carpatin-dashboard.devias.io/dashboard/account",
				},
				{
					name: "Notifications",
					link: "https://carpatin-dashboard.devias.io/dashboard/account/notifications",
				},
			],
		},
		{
			category: "Organization",
			content: [
				{
					name: "General",
					link: "https://carpatin-dashboard.devias.io/dashboard/organization",
				},
				{
					name: "Team",
					link: "https://carpatin-dashboard.devias.io/dashboard/organization/team",
				},
				{
					name: "Billing",
					link: "https://carpatin-dashboard.devias.io/dashboard/organization/billing",
				},
			],
		},
	],
];

export default navigationData;
