import Head from "next/head";
export default function HeaderComponent(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta name="author" content="Lvhau" />
			<meta name="description" content="Search Movies" />
		</Head>
	);
}
