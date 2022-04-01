import { __ } from "@wordpress/i18n";
import { Button, Icon } from "@wordpress/components";
import { plusCircleFilled } from "@wordpress/icons";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./style/editor.scss";

export default function Edit({ attributes, setAttributes, isSelected }) {
	const ALLOW_BLOCKS = ["core/cover", "core/media-text", "core/group"];
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={ALLOW_BLOCKS}
				renderAppender={InnerBlocks.ButtonBlockAppender}
			/>
		</div>
	);
}
