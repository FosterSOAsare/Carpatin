import { Typography } from "@mui/material";

const faqData = [
	[
		{
			question: "Do you have a free demo to review the code before purchasing?",
			answer: (
				<>
					<Typography variant="p" className="faq__answer">
						Yes, you can check out our open source <a href="https://github.com/devias-io/carpatin-dashboard-free">dashboard template</a> which should give you an overview of the code
						quality and folder structure.
					</Typography>
					<Typography variant="p" className="faq__answer">
						Keep in mind that some aspects may differ from the Carpatin - Admin Dashboard Paid version.
					</Typography>
				</>
			),
		},
		{
			question: "How many projects can I build with Carpatin - Admin Dashboard?",
			answer: (
				<Typography variant="p" className="faq__answer">
					The license is per project (domain), but if you intend to develop an unknown number of projects feel free to <a href="https://devias.io/contact">contact us</a> and we'll find a
					solution.
				</Typography>
			),
		},
	],
	[
		{
			question: "Can I use this template in commercial projects like a SaaS?",
			answer: (
				<Typography variant="p" className="faq__answer">
					Absolutely! If you intend to charge users for using your product Extended license is created specifically for this context.
				</Typography>
			),
		},
		{
			question: "What browsers does Carpatin - Admin Dashboard support?",
			answer: (
				<>
					<Typography variant="p" className="faq__answer">
						The components in Material-UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.
					</Typography>
					<Typography variant="p" className="faq__answer">
						We don't support Internet Explorer 11.
					</Typography>
				</>
			),
		},
	],
	[
		{
			question: "For what kind of projects is the Standard license intended?",
			answer: (
				<>
					<Typography variant="p" className="faq__answer">
						The Standard license is designed for internal applications in which staff will access the application. An example could be the back-office dashboard of a public-facing
						e-commerce website in which staff would sign in and manage inventory, customers, etc.
					</Typography>
					<Typography variant="p" className="faq__answer">
						An example could be the back-office dashboard of a public-facing e-commerce website in which staff would sign in and manage inventory, customers, etc.
					</Typography>
				</>
			),
		},

		{
			question: "Does Carpatin - Admin Dashboard include Figma, Sketch, or Adobe XD files?",
			answer: (
				<>
					<Typography variant="p" className="faq__answer">
						The Standard Plus license includes an expertly designed complete Figma kit that takes advantage of modern Figma features like Variants and Auto Layout.
					</Typography>
					<Typography variant="p" className="faq__answer">
						Should you need a sample of the Figma file, you can{" "}
						<a href="https://www.figma.com/file/4XoBSB4Sl2fSpD9OebSsr3/Carpatin---Admin-Dashboard-v2.0?node-id=7435%3A43141">download a free preview</a> from the Figma community.
					</Typography>
					<Typography variant="p" className="faq__answer">
						We don't include assets for other design tools such as Sketch or Adobe XD.
					</Typography>
				</>
			),
		},
	],
];

export default faqData;
