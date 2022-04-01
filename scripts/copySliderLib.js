const fs = require("fs");

const files = [
	{
		filepath: "node_modules/@splidejs/splide/dist/js/splide.min.js",
		ext: "js",
	},
	{
		filepath: "node_modules/@splidejs/splide/dist/css/splide-core.min.css",
		ext: "css",
	},
];

function copyAndWriteSplide({ ext = "", filepath = "" }) {
	fs.readFile(filepath, "utf8", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		fs.writeFileSync("vendor/splide." + ext, data);
	});
}

files.map((f) => {
	const { ext, filepath } = f;
	copyAndWriteSplide({ ext, filepath });
});
