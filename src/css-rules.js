let rules = [
    {
        id: 1,
        name: "Background-Color",
        value: "backgroundColor",
        description: "Set the background-color of an element. This will apply to all children elements unless a new color is applied to a child element.",
        examples: "black, red, rgb(34, 139, 34), #00FFFF",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
    },
    {
        id: 2,
        name: "Border",
        value: "border",
        description: "Set a border around an element. This rule can set the border width, style, and color.",
        examples: "dashed red, 10px double #32a1ce",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/border"
    },
    {
        id: 3,
        name: "Box-Shadow",
        value: "boxShadow",
        description: "Add shadow around the edge of an element.",
        examples: "10px 5px 5px red",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
    },
    {
        id: 4,
        name: "Color",
        value: "color",
        description: "Set the text color of an element. This will apply to all children elements unless a new color is applied to a child element.",
        examples: "black, red, rgb(34, 139, 34), #00FFFF",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/color"
    },
    {
        id: 5,
        name: "Cursor",
        value: "cursor",
        description: "Set the appearance of the cursor while over an element.",
        examples: "pointer, grab, not-allowed",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
    },
    {
        id: 6,
        name: "Display",
        value: "display",
        description: "Set display properties of an element. This includes how it's children will be aligned and how this element will be treated by it's parent element.",
        examples: "block, flex, inline, grid, none",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
    },
    {
        id: 7,
        name: "Filter",
        value: "filter",
        description: "Set visual renderings and filters for images, elements, and backgrounds.",
        examples: "grayscale, contrast, blur",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
    },
    {
        id: 8,
        name: "Float",
        value: "float",
        description: "Makes an element float to the left or right side of its parent element.",
        examples: "none, left, right",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/float"
    },
    {
        id: 9,
        name: "Font",
        value: "font",
        description: "Set the properties for the text font of an element.",
        examples: "3em, italics, bold,",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/font"
    },
    {
        id: 10,
        name: "Height",
        value: "height",
        description: "Set the height of an element.",
        examples: "100%, 50px, 75vh",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/height"
    },
    {
        id: 11,
        name: "Margin",
        value: "margin",
        description: "Set distance between this element and sibling elements.",
        examples: "10px; 1em, 10px 5% 10px 5%",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    },
    {
        id: 12,
        name: "Max-Height",
        value: "maxHeight",
        description: "Set the maximum height allowed for an element.",
        examples: "100%, 50px, 75vh",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height"
    },
    {
        id: 13,
        name: "Max-Width",
        value: "maxWidth",
        description: "Set the maximum width allowed for an element.",
        examples: "100%, 50px, 75vw",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width"
    },
    {
        id: 14,
        name: "Min-Height",
        value: "minHeight",
        description: "Set the minimum height allowed for an element.",
        examples: "100%, 50px, 75vh",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height"
    },
    {
        id: 15,
        name: "Min-Width",
        value: "minWidth",
        description: "Set the minimum width allowed for an element.",
        examples: "100%, 50px, 75vw",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width"
    },
    {
        id: 16,
        name: "Opacity",
        value: "opacity",
        description: "Determines the opacity of an element on a scale from 0 to 1. 1 means the element is completely see-through.",
        examples: "0, 1, 0.5",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
    },
    {
        id: 17,
        name: "Overflow",
        value: "overflow",
        description: "Determine what happens to content that overflows the amount of space in an element.",
        examples: "hidden, visible, scroll, auto",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
    },
    {
        id: 18,
        name: "Padding",
        value: "padding",
        description: "Set the amount of space from the edge of an element to its inner-content.",
        examples: "10px, 50%, 2em",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
    },
    {
        id: 19,
        name: "Position",
        value: "position",
        description: "Determine how the element is positioned within it's parent element.",
        examples: "static, sticky, relative, absolute",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
    },
    {
        id: 20,
        name: "Top",
        value: "top",
        description: "Determines the vertical position of a positioned element. Does not apply to static elements.",
        examples: "10px, 1%, 2em",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/top"
    },
    {
        id: 21,
        name: "Left",
        value: "left",
        description: "Determines the horizontal position of a positioned element. Does not apply to static elements.",
        examples: "10px, 1%, 2em",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/left"
    },
    {
        id: 22,
        name: "Text-Align",
        value: "textAlign",
        description: "Set the horizontal position of text and content inside an element.",
        examples: "left, right, center, justify",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
    },
    {
        id: 23,
        name: "Transform",
        value: "transform",
        description: "Allows an element to be rotated, translated, scaled, and skewed.",
        examples: "scale(1.5), rotateX(180deg), translateY(-10px)",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
    },
    {
        id: 24,
        name: "Transition",
        value: "transition",
        description: "Set the transition delay, duration, and property of an element.",
        examples: "transform 3s, width 1s 0.5s",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
    },
    {
        id: 25,
        name: "Width",
        value: "width",
        description: "Set the width of an element.",
        examples: "100%, 50px, 75vw",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/width"
    },
    {
        id: 26,
        name: "Z-index",
        value: "zIndex",
        description: "Determines the order in which elements lie on top of each other. Higher values cover lower values.",
        examples: "auto, 0, 1, 2, 3 . . .",
        guide: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
    },
];

export default rules;