import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	SelectControl,
	ToggleControl,
	Panel,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export const SliderSettingsControl = ({ attributes, setAttributes }) => {
	const slidertypeopts = [
		{ label: "Slide", value: "slide" },
		{ label: "Fade", value: "fade" },
		{ label: "Loop", value: "loop" },
	];

	const setSlideStringOption = (val, prop) => {
		setAttributes({ [prop]: val });
		if (prop === "type" && val === "fade") {
			setSlideNumberOption(1, "perPage");
		}
	};
	const setSlideNumberOption = (num, prop) => {
		setAttributes({ [prop]: num });
	};
	const setSlideBooleanOption = (bool, prop) => {
		setAttributes({ [prop]: bool });
	};
	const setSlideBreakpoint = (val) => {
		const bkeys = Object.keys(attributes.breakpoints);
		const { breakpoints: bkpts, ...attrs } = attributes;
		setAttributes({ ...attrs, breakpoints: { [val]: { ...bkpts[bkeys[0]] } } });
	};

	const setSliderBrakpointOptions = (val, prop) => {
		const bkeys = Object.keys(attributes.breakpoints);
		const { breakpoints: bkpts, ...attrs } = attributes;
		setAttributes({
			breakpoints: { [bkeys[0]]: { ...bkpts[bkeys[0]], [prop]: val } },
		});
		console.log(attributes.breakpoints);
	};

	return (
		<InspectorControls key="setting">
			<Panel
				header={__("Hero Slider Settings", "hero-slider")}
				className="hero-slider-settings-panel"
			>
				<PanelBody title={__("General Setting", "hero-slider")}>
					<fieldset className="settings-field">
						<legend>{__("Slide Effect Type", "hero-slider")}</legend>
						<SelectControl
							value={attributes.type || ""}
							options={slidertypeopts}
							onChange={(val) => setSlideStringOption(val, "type")}
						/>
						<small
							style={{
								marginBottom: ".875rem",
								marginTop: "-1.5rem",
								display: "block",
							}}
						>
							{__(
								'"Fade" type don\'t work with "Slides per page".',
								"hero-slider"
							)}
						</small>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slide Transition Speed", "hero-slider")}</legend>
						<small>{__("(In miliseconds.)", "hero-slider")}</small>
						<RangeControl
							value={attributes.speed}
							min={100}
							max={1000}
							step={50}
							start={100}
							onChange={(val) => setSlideNumberOption(val, "speed")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slide Interval Time", "hero-slider")}</legend>
						<small>{__("(In seconds.)", "hero-slider")}</small>
						<RangeControl
							value={attributes.interval / 1000}
							min={2}
							max={15}
							step={1}
							start={2}
							onChange={(val) => setSlideNumberOption(val * 1000, "interval")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Show Arrows", "hero-slider")}</legend>
						<ToggleControl
							label={__("Toggle show arrows", "hero-slider")}
							checked={attributes.arrows}
							onChange={(val) => setSlideBooleanOption(val, "arrows")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Show Pagination", "hero-slider")}</legend>
						<ToggleControl
							label={__("Toggle show pagination", "hero-slider")}
							checked={attributes.pagination}
							onChange={(val) => setSlideBooleanOption(val, "pagination")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Pause on hover", "hero-slider")}</legend>
						<ToggleControl
							label={__("Pause Slider on mouser hover", "herp-slider")}
							checked={attributes.pauseOnHover}
							onChange={(val) => setSlideBooleanOption(val, "pauseOnHover")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Autoplay", "hero-slider")}</legend>
						<ToggleControl
							label={__("Enable Slider autoplay", "hero-slider")}
							checked={attributes.autoplay}
							onChange={(val) => setSlideBooleanOption(val, "autoplay")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slides per page", "hero-slider")}</legend>
						<RangeControl
							value={attributes.perPage}
							min={1}
							max={10}
							step={1}
							start={1}
							onChange={(val) => setSlideNumberOption(val, "perPage")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slides to Move", "hero-slider")}</legend>
						<RangeControl
							value={attributes.perMove}
							min={1}
							max={10}
							step={1}
							start={1}
							onChange={(val) => setSlideNumberOption(val, "perMove")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Rewind", "hero-slider")}</legend>
						<ToggleControl
							label={__("Make Slideshow back from begin", "hero-slider")}
							checked={attributes.rewind}
							onChange={(val) => setSlideBooleanOption(val, "rewind")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Rewind Speed", "hero-slider")}</legend>
						<RangeControl
							value={attributes.rewindSpeed}
							min={100}
							max={2000}
							step={50}
							start={100}
							onChange={(val) => setSlideNumberOption(val, "rewindSpeed")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Gap", "hero-slider")}</legend>
						<UnitControl
							label={__("Gap between slides", "hero-slider")}
							value={attributes.gap}
							onChange={(val) => setSlideStringOption(val, "gap")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Padding", "hero-slider")}</legend>
						<UnitControl
							label={__("Padding on sides", "hero-slider")}
							value={attributes.padding}
							onChange={(val) => setSlideStringOption(val, "padding")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Dragging", "hero-slider")}</legend>
						<ToggleControl
							label={__("Enable dragging", "hero-slider")}
							checked={attributes.drag}
							onChange={(val) => setSlideStringOption(val, "drag")}
						/>
					</fieldset>
				</PanelBody>
				<PanelBody title={"Responsive Settings"}>
					<fieldset className="settings-field">
						<legend>{__("Breakpoint", "hero-slider")}</legend>
						<UnitControl
							units={[
								{
									value: "px",
									label: "px",
									a11yLabel: "Pixels (px)",
									step: 1,
								},
							]}
							value={
								attributes.breakpoints
									? Object.keys(attributes.breakpoints)[0]
									: ""
							}
							onChange={setSlideBreakpoint}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slides per page (on mobile)", "hero-slider")}</legend>
						<RangeControl
							value={
								attributes.breakpoints
									? attributes.breakpoints[
											Object.keys(attributes.breakpoints)[0]
									  ].perPage
									: ""
							}
							min={1}
							max={10}
							step={1}
							start={1}
							onChange={(val) => setSliderBrakpointOptions(val, "perPage")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Slides to Move (on mobile)", "hero-slider")}</legend>
						<RangeControl
							value={
								attributes.breakpoints
									? attributes.breakpoints[
											Object.keys(attributes.breakpoints)[0]
									  ].perMove
									: ""
							}
							min={1}
							max={10}
							step={1}
							start={1}
							onChange={(val) => setSliderBrakpointOptions(val, "perMove")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Gap (on mobile)", "hero-slider")}</legend>
						<UnitControl
							label={__("Gap between slides", "hero-slider")}
							value={
								attributes.breakpoints
									? attributes.breakpoints[
											Object.keys(attributes.breakpoints)[0]
									  ].gap
									: ""
							}
							onChange={(val) => setSliderBrakpointOptions(val, "gap")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Padding (on mobile)", "hero-slider")}</legend>
						<UnitControl
							label={__("Padding on sides", "hero-slider")}
							value={
								attributes.breakpoints
									? attributes.breakpoints[
											Object.keys(attributes.breakpoints)[0]
									  ].padding
									: ""
							}
							onChange={(val) => setSliderBrakpointOptions(val, "padding")}
						/>
					</fieldset>
					<fieldset className="settings-field">
						<legend>{__("Disable slider behavior", "hero-slider")}</legend>
						<ToggleControl
							label={__("Disable slider", "hero-slider")}
							checked={
								attributes.breakpoints
									? attributes.breakpoints[
											Object.keys(attributes.breakpoints)[0]
									  ].destroy
									: ""
							}
							onChange={(val) => setSliderBrakpointOptions(val, "destroy")}
						/>
					</fieldset>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
};

SliderSettingsControl.displayName = "SliderSettingsControl";
