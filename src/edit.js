import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { createRef, useEffect } from "@wordpress/element";

import { SliderSettingsControl } from "./edit/edit__settings-control";

import "./style/editor.scss";

export default function Edit({ attributes, setAttributes, isSelected }) {
	const ALLOW_BLOCKS = ["core/cover", "core/media-text", "core/group"];
	const blockProps = useBlockProps();

	// REF AND EFFECT to stylize base layout on editor
	const sliderRef = createRef();
	useEffect(() => {
		const sliderList = sliderRef.current;
		const slideItems = sliderRef.current.querySelectorAll(
			"div > div.block-editor-block-list__block"
		);
		slideItems.forEach((sld) => {
			sld.style.minWidth = `calc(100% / ${attributes.perPage || 1})`;
		});
		console.log(slideItems);
		const sliderWrap = sliderRef.current.parentNode;
		sliderWrap.style.padding = `0 ${attributes.padding}`;
		sliderList.style.gap = `${attributes.gap}`;
	}, [attributes]);

	return (
		<div {...blockProps}>
			<SliderSettingsControl
				attributes={attributes}
				setAttributes={setAttributes}
			/>
			<InnerBlocks
				ref={sliderRef}
				allowedBlocks={ALLOW_BLOCKS}
				renderAppender={InnerBlocks.ButtonBlockAppender}
				placeholder={
					<p
						style={{
							display: "inline-block",
							marginBottom: 0,
							width: "100%",
							textAlign: "right",
							padding: ".8rem",
							paddingRight: "calc(.8rem + 50px)",
						}}
					>
						{__("Add your first slide block", "hero-slider")}
					</p>
				}
			/>
		</div>
	);
}
