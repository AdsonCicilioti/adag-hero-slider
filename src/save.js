import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
	const { className, ...blockProps } = useBlockProps.save();
	return (
		<div
			{...blockProps}
			className={`${className || ""} splide`}
			data-splide={JSON.stringify(attributes)}
		>
			<div class="splide__track">
				<div class="splide__list">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
