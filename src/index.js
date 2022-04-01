import { registerBlockType } from "@wordpress/blocks";
import "./style/style.scss";

import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("adag/hero-slider", {
	edit: Edit,
	save,
});
