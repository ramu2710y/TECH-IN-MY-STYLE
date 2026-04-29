/* ═══════════════════════════════════════════════════════════════════
   cssData.js  —  CSS IN MY STYLE
   Complete CSS properties reference data
═══════════════════════════════════════════════════════════════════ */

export const cssData = {
  categories: [
    {
      name: `Box Model`,
      description: `Properties that control element dimensions, spacing, and borders`,
      icon: 'bi bi-square',
      color: '#264de4',
      tags: [
        { name: `width`, description: `Sets the width of an element` },
        { name: `height`, description: `Sets the height of an element` },
        { name: `min-width`, description: `Sets the minimum width of an element` },
        { name: `max-width`, description: `Sets the maximum width of an element` },
        { name: `min-height`, description: `Sets the minimum height of an element` },
        { name: `max-height`, description: `Sets the maximum height of an element` },
        { name: `margin`, description: `Sets all four margins of an element` },
        { name: `margin-top`, description: `Sets the top margin of an element` },
        { name: `margin-right`, description: `Sets the right margin of an element` },
        { name: `margin-bottom`, description: `Sets the bottom margin of an element` },
        { name: `margin-left`, description: `Sets the left margin of an element` },
        { name: `padding`, description: `Sets all four paddings of an element` },
        { name: `padding-top`, description: `Sets the top padding of an element` },
        { name: `padding-right`, description: `Sets the right padding of an element` },
        { name: `padding-bottom`, description: `Sets the bottom padding of an element` },
        { name: `padding-left`, description: `Sets the left padding of an element` },
        { name: `border`, description: `Sets all border properties in one declaration` },
        { name: `border-width`, description: `Sets the width of all four borders` },
        { name: `border-style`, description: `Sets the style of all four borders` },
        { name: `border-color`, description: `Sets the color of all four borders` },
        { name: `border-radius`, description: `Defines the radius of the element corners` },
        { name: `border-top`, description: `Sets all top border properties in one declaration` },
        { name: `border-right`, description: `Sets all right border properties in one declaration` },
        { name: `border-bottom`, description: `Sets all bottom border properties in one declaration` },
        { name: `border-left`, description: `Sets all left border properties in one declaration` },
        { name: `box-sizing`, description: `Defines how the width and height of an element are calculated` },
        { name: `overflow`, description: `Specifies what happens if content overflows an element box` },
        { name: `overflow-x`, description: `Specifies what to do with the left/right edges of the content` },
        { name: `overflow-y`, description: `Specifies what to do with the top/bottom edges of the content` },
        { name: `outline`, description: `Sets all the outline properties in one declaration` },
        { name: `outline-width`, description: `Sets the width of an outline` },
        { name: `outline-style`, description: `Sets the style of an outline` },
        { name: `outline-color`, description: `Sets the color of an outline` },
        { name: `outline-offset`, description: `Offsets an outline, and draws it beyond the border edge` },
      ],
    },

    {
      name: `Flexbox`,
      description: `Properties for flexible one-dimensional layout`,
      icon: 'bi bi-layout-wtf',
      color: '#2965f1',
      tags: [
        { name: `flexbox`, description: `Complete interactive Flexbox layout system — LIVE DEMO`, workable: true },
        { name: `display`, description: `Specifies the display behavior of an element` },
        { name: `flex-direction`, description: `Specifies the direction of the flexible items` },
        { name: `flex-wrap`, description: `Specifies whether the flexible items should wrap or not` },
        { name: `flex-flow`, description: `Shorthand for flex-direction and flex-wrap properties` },
        { name: `justify-content`, description: `Aligns flexible container items when items do not use all available space` },
        { name: `align-items`, description: `Specifies the default alignment for items inside the flexible container` },
        { name: `align-content`, description: `Modifies the behavior of the flex-wrap property` },
        { name: `flex`, description: `Shorthand for flex-grow, flex-shrink, and flex-basis` },
        { name: `flex-grow`, description: `Specifies how much a flex item will grow relative to others` },
        { name: `flex-shrink`, description: `Specifies how much a flex item will shrink relative to others` },
        { name: `flex-basis`, description: `Specifies the initial length of a flex item` },
        { name: `align-self`, description: `Specifies the alignment for the selected item inside the flex container` },
        { name: `order`, description: `Sets the order of a flexible item relative to other items` },
        { name: `gap`, description: `Sets the gap between rows and columns` },
        { name: `row-gap`, description: `Sets the gap between rows` },
        { name: `column-gap`, description: `Sets the gap between columns` },
      ],
    },

    {
      name: `CSS Grid`,
      description: `Properties for powerful two-dimensional grid layouts`,
      icon: 'bi bi-grid-3x3-gap',
      color: '#1b35b5',
      tags: [
        { name: `grid`, description: `Complete interactive CSS Grid layout system — LIVE DEMO`, workable: true },
        { name: `grid-template-columns`, description: `Specifies the size of the columns in a grid layout` },
        { name: `grid-template-rows`, description: `Specifies the size of the rows in a grid layout` },
        { name: `grid-template-areas`, description: `Specifies how to display columns and rows using named grid items` },
        { name: `grid-template`, description: `Shorthand for grid-template-rows, grid-template-columns, and grid-template-areas` },
        { name: `grid-column-gap`, description: `Specifies the gap between the columns` },
        { name: `grid-row-gap`, description: `Specifies the gap between the rows` },
        { name: `grid-gap`, description: `Shorthand for grid-row-gap and grid-column-gap` },
        { name: `justify-items`, description: `Aligns grid items along the inline axis` },
        { name: `align-items`, description: `Aligns grid items along the block axis` },
        { name: `place-items`, description: `Shorthand for align-items and justify-items` },
        { name: `justify-content`, description: `Aligns the grid along the inline axis` },
        { name: `align-content`, description: `Aligns the grid along the block axis` },
        { name: `place-content`, description: `Shorthand for align-content and justify-content` },
        { name: `grid-auto-columns`, description: `Sets a size for the columns in a grid container` },
        { name: `grid-auto-rows`, description: `Sets a size for the rows in a grid container` },
        { name: `grid-auto-flow`, description: `Controls how auto-placed items are inserted in the grid` },
        { name: `grid-column`, description: `Shorthand for grid-column-start and grid-column-end` },
        { name: `grid-row`, description: `Shorthand for grid-row-start and grid-row-end` },
        { name: `grid-area`, description: `Shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end` },
        { name: `grid-column-start`, description: `Specifies where to start the grid item` },
        { name: `grid-column-end`, description: `Specifies where to end the grid item` },
        { name: `grid-row-start`, description: `Specifies where to start the grid item` },
        { name: `grid-row-end`, description: `Specifies where to end the grid item` },
        { name: `justify-self`, description: `Aligns a grid item inside a cell along the inline axis` },
        { name: `align-self`, description: `Aligns a grid item inside a cell along the block axis` },
        { name: `place-self`, description: `Shorthand for align-self and justify-self` },
      ],
    },

    {
      name: `Animations & Transitions`,
      description: `Bring your designs to life with smooth motion`,
      icon: 'bi bi-play-circle',
      color: '#264de4',
      tags: [
        { name: `animation`, description: `Interactive CSS Animation playground — LIVE DEMO`, workable: true },
        { name: `animation-name`, description: `Specifies a name for the @keyframes animation` },
        { name: `animation-duration`, description: `Specifies how many seconds or milliseconds an animation takes` },
        { name: `animation-timing-function`, description: `Specifies the speed curve of an animation` },
        { name: `animation-delay`, description: `Specifies when an animation will start` },
        { name: `animation-iteration-count`, description: `Specifies the number of times an animation should be played` },
        { name: `animation-direction`, description: `Specifies whether animation should play in reverse on alternate cycles` },
        { name: `animation-fill-mode`, description: `Specifies what values are applied by the animation outside execution time` },
        { name: `animation-play-state`, description: `Specifies whether the animation is running or paused` },
        { name: `transition`, description: `Shorthand for all transition properties` },
        { name: `transition-property`, description: `Specifies the name of the CSS property the transition effect is for` },
        { name: `transition-duration`, description: `Specifies how many seconds or milliseconds a transition effect takes` },
        { name: `transition-timing-function`, description: `Specifies the speed curve of the transition effect` },
        { name: `transition-delay`, description: `Specifies when the transition effect will start` },
      ],
    },

    {
      name: `Typography`,
      description: `Control text appearance, fonts, and spacing`,
      icon: 'bi bi-fonts',
      color: '#2965f1',
      tags: [
        { name: `font`, description: `Sets all font properties in one declaration` },
        { name: `font-family`, description: `Specifies the font for an element` },
        { name: `font-size`, description: `Specifies the font size of text` },
        { name: `font-weight`, description: `Specifies the weight of a font` },
        { name: `font-style`, description: `Specifies the font style for a text` },
        { name: `font-variant`, description: `Specifies whether or not a text should be displayed in a small-caps font` },
        { name: `font-stretch`, description: `Allows you to make text narrower or wider` },
        { name: `line-height`, description: `Sets the line height` },
        { name: `letter-spacing`, description: `Increases or decreases the space between characters` },
        { name: `word-spacing`, description: `Increases or decreases the white space between words` },
        { name: `text-align`, description: `Specifies the horizontal alignment of text` },
        { name: `text-decoration`, description: `Specifies the decoration added to text` },
        { name: `text-transform`, description: `Controls the capitalization of text` },
        { name: `text-indent`, description: `Specifies the indentation of the first line in a text-block` },
        { name: `text-shadow`, description: `Adds shadow to text` },
        { name: `text-overflow`, description: `Specifies what should happen when text overflows the containing element` },
        { name: `white-space`, description: `Specifies how white-space inside an element is handled` },
        { name: `word-break`, description: `Specifies how words should break when reaching the end of a line` },
        { name: `word-wrap`, description: `Allows long, unbreakable words to be broken and wrap to the next line` },
        { name: `vertical-align`, description: `Sets the vertical alignment of an element` },
        { name: `direction`, description: `Specifies the text direction/writing direction` },
        { name: `writing-mode`, description: `Specifies whether lines of text are laid out horizontally or vertically` },
      ],
    },

    {
      name: `Colors & Backgrounds`,
      description: `Set colors, gradients, and background images`,
      icon: 'bi bi-palette-fill',
      color: '#1b35b5',
      tags: [
        { name: `color`, description: `Sets the color of text` },
        { name: `background`, description: `Sets all background properties in one declaration` },
        { name: `background-color`, description: `Specifies the background color of an element` },
        { name: `background-image`, description: `Specifies one or more background images for an element` },
        { name: `background-size`, description: `Specifies the size of the background images` },
        { name: `background-position`, description: `Specifies the position of a background image` },
        { name: `background-repeat`, description: `Sets if/how a background image will be repeated` },
        { name: `background-attachment`, description: `Sets whether a background image scrolls with the rest of the page` },
        { name: `background-clip`, description: `Specifies the painting area of the background` },
        { name: `background-origin`, description: `Specifies the origin position of a background image` },
        { name: `background-blend-mode`, description: `Specifies the blending mode of each background layer` },
        { name: `opacity`, description: `Sets the opacity level for an element` },
        { name: `mix-blend-mode`, description: `Specifies how an element content should blend with its parent background` },
        { name: `filter`, description: `Defines effects to an element (blurring, color shifting, etc.)` },
        { name: `backdrop-filter`, description: `Applies graphical effects to the area behind an element` },
      ],
    },

    {
      name: `Positioning & Layout`,
      description: `Control element positioning and stacking`,
      icon: 'bi bi-bounding-box',
      color: '#264de4',
      tags: [
        { name: `position`, description: `Specifies the type of positioning method used for an element` },
        { name: `top`, description: `Affects the vertical position of a positioned element` },
        { name: `right`, description: `Affects the horizontal position of a positioned element` },
        { name: `bottom`, description: `Affects the vertical position of a positioned element` },
        { name: `left`, description: `Affects the horizontal position of a positioned element` },
        { name: `z-index`, description: `Sets the stack order of an element` },
        { name: `float`, description: `Specifies whether an element should float to the left, right, or not at all` },
        { name: `clear`, description: `Specifies on which sides of an element floating elements are not allowed to float` },
        { name: `clip-path`, description: `Clips an element to a basic shape or to an SVG source` },
        { name: `inset`, description: `Shorthand for top, right, bottom, and left` },
        { name: `visibility`, description: `Specifies whether or not an element is visible` },
        { name: `pointer-events`, description: `Defines whether or not an element reacts to pointer events` },
        { name: `cursor`, description: `Specifies the mouse cursor to be displayed when pointing over an element` },
      ],
    },

    {
      name: `Transforms`,
      description: `Rotate, scale, skew and translate elements`,
      icon: 'bi bi-arrows-move',
      color: '#2965f1',
      tags: [
        { name: `transform`, description: `Applies a 2D or 3D transformation to an element` },
        { name: `transform-origin`, description: `Allows you to change the position on transformed elements` },
        { name: `transform-style`, description: `Specifies how nested elements are rendered in 3D space` },
        { name: `perspective`, description: `Specifies the perspective on how 3D elements are viewed` },
        { name: `perspective-origin`, description: `Specifies the bottom position of 3D elements` },
        { name: `backface-visibility`, description: `Defines whether or not the back face of an element should be visible` },
        { name: `rotate`, description: `Applies a rotation transformation to an element` },
        { name: `scale`, description: `Applies a scale transformation to an element` },
        { name: `translate`, description: `Applies a translation transformation to an element` },
      ],
    },

    {
      name: `Shadows & Effects`,
      description: `Add depth with shadows and visual effects`,
      icon: 'bi bi-stars',
      color: '#1b35b5',
      tags: [
        { name: `box-shadow`, description: `Attaches one or more shadows to an element` },
        { name: `text-shadow`, description: `Adds shadow to text` },
        { name: `filter`, description: `Defines effects to an element (blur, brightness, contrast, etc.)` },
        { name: `backdrop-filter`, description: `Applies graphical effects to the area behind an element` },
        { name: `mix-blend-mode`, description: `Specifies how an element content should blend` },
        { name: `mask`, description: `Defines a masking layer on an element` },
        { name: `mask-image`, description: `Specifies the image to be used as a mask layer for an element` },
      ],
    },

    {
      name: `CSS Variables`,
      description: `Custom properties for reusable design tokens`,
      icon: 'bi bi-code-slash',
      color: '#264de4',
      tags: [
        { name: `var()`, description: `Inserts the value of a custom property into a CSS property` },
        { name: `custom-properties`, description: `Defines CSS custom properties (variables)` },
        { name: `calc()`, description: `Performs a calculation to be used as a property value` },
        { name: `min()`, description: `Uses the smallest value from a list of values` },
        { name: `max()`, description: `Uses the largest value from a list of values` },
        { name: `clamp()`, description: `Clamps a value between an upper and lower bound` },
        { name: `env()`, description: `Inserts the value of a user-agent defined environment variable` },
      ],
    },

    {
      name: `Responsive Design`,
      description: `Media queries and responsive layout techniques`,
      icon: 'bi bi-phone',
      color: '#2965f1',
      tags: [
        { name: `media-queries`, description: `Applies CSS based on media types and feature conditions` },
        { name: `container-queries`, description: `Applies styles based on the size of a containing element` },
        { name: `aspect-ratio`, description: `Sets a preferred aspect ratio for the element` },
        { name: `object-fit`, description: `Specifies how an element is fitted to its box` },
        { name: `object-position`, description: `Specifies the alignment of the replaced element inside its box` },
        { name: `resize`, description: `Defines if (and how) an element is resizable by the user` },
        { name: `scroll-behavior`, description: `Specifies whether to smoothly animate the scroll position` },
        { name: `scroll-snap-type`, description: `Specifies how strictly snap points are enforced on the scroll container` },
        { name: `scroll-snap-align`, description: `Specifies the box\'s snap position as an alignment of its snap area` },
      ],
    },

    {
      name: `Selectors & At-Rules`,
      description: `Target elements with precision using CSS selectors`,
      icon: 'bi bi-cursor',
      color: '#1b35b5',
      tags: [
        { name: `pseudo-classes`, description: `Style elements based on state like :hover, :focus, :nth-child` },
        { name: `pseudo-elements`, description: `Style specific parts of elements like ::before, ::after` },
        { name: `attribute-selectors`, description: `Select elements based on attribute values` },
        { name: `combinators`, description: `Select elements based on their relationship to other elements` },
        { name: `@keyframes`, description: `Specifies the animation code with keyframe percentages` },
        { name: `@media`, description: `Applies CSS based on media type and features` },
        { name: `@import`, description: `Imports a style sheet into another style sheet` },
        { name: `@font-face`, description: `Specifies a custom font for displaying text` },
        { name: `@supports`, description: `Applies CSS only if the browser supports a given CSS feature` },
        { name: `@layer`, description: `Defines a cascade layer to manage specificity` },
      ],
    },

    {
      name: `Lists & Tables`,
      description: `Style list items and table elements`,
      icon: 'bi bi-table',
      color: '#264de4',
      tags: [
        { name: `list-style`, description: `Sets all the properties for a list in one declaration` },
        { name: `list-style-type`, description: `Specifies the type of list-item marker` },
        { name: `list-style-position`, description: `Specifies the position of the list-item markers` },
        { name: `list-style-image`, description: `Specifies an image as the list-item marker` },
        { name: `border-collapse`, description: `Sets whether table borders should collapse into a single border` },
        { name: `border-spacing`, description: `Sets the distance between the borders of adjacent cells` },
        { name: `caption-side`, description: `Specifies the placement of a table caption` },
        { name: `empty-cells`, description: `Specifies whether or not to display borders and background on empty cells` },
        { name: `table-layout`, description: `Sets the layout algorithm used for a table` },
      ],
    },

    {
      name: `Miscellaneous`,
      description: `Other useful CSS properties and features`,
      icon: 'bi bi-three-dots',
      color: '#2965f1',
      tags: [
        { name: `appearance`, description: `Allows you to display an element like a standard user interface element` },
        { name: `content`, description: `Used with the ::before and ::after pseudo-elements to insert content` },
        { name: `counter-reset`, description: `Creates or resets one or more counters` },
        { name: `counter-increment`, description: `Increases or decreases the value of one or more CSS counters` },
        { name: `user-select`, description: `Specifies whether the text of an element can be selected` },
        { name: `will-change`, description: `Hints to browsers how an element is expected to change` },
        { name: `all`, description: `Resets all properties to their initial or inherited value` },
        { name: `isolation`, description: `Defines whether an element must create a new stacking context` },
        { name: `contain`, description: `Allows an author to indicate that an element and its contents are independent` },
        { name: `print-color-adjust`, description: `Allows a page to specify how the browser should handle printing` },
      ],
    },
  ],
}

/* ─── Detailed property data for interactive pages ─────────────── */
export const propertyDetails = {
  flexbox: {
    name: `flexbox`,
    fullName: `CSS Flexbox`,
    description: `CSS Flexbox (Flexible Box) is a one-dimensional layout method for arranging items in rows or columns. It gives the container the ability to alter its items\' width, height, and order to best fill the available space.`,
    syntax: `display: flex;`,
    workable: true,
    category: `Flexbox`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox`,
    values: [
      { value: `flex`, description: `Sets the element as a block-level flex container` },
      { value: `inline-flex`, description: `Sets the element as an inline-level flex container` },
    ],
    examples: [
      {
        title: `Basic Flex Container`,
        css: `.container {\n  display: flex;\n  gap: 1rem;\n}\n\n.item {\n  padding: 1rem 1.5rem;\n  background: #264de4;\n  color: white;\n  border-radius: 8px;\n}`,
        html: `<div class="container">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>`,
      },
      {
        title: `Centered with Flexbox`,
        css: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n  background: #eef2ff;\n  border-radius: 12px;\n}\n\n.box {\n  padding: 2rem;\n  background: #264de4;\n  color: white;\n  border-radius: 8px;\n  font-weight: 700;\n}`,
        html: `<div class="container">\n  <div class="box">Perfectly Centered!</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '29', firefox: '28', safari: '9', edge: '12' },
  },

  grid: {
    name: `grid`,
    fullName: `CSS Grid`,
    description: `CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.`,
    syntax: `display: grid;`,
    workable: true,
    category: `CSS Grid`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout`,
    values: [
      { value: `grid`, description: `Sets the element as a block-level grid container` },
      { value: `inline-grid`, description: `Sets the element as an inline-level grid container` },
    ],
    examples: [
      {
        title: `Basic 3-Column Grid`,
        css: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.item {\n  padding: 2rem 1rem;\n  background: #264de4;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}`,
        html: `<div class="container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>`,
      },
      {
        title: `Grid Template Areas`,
        css: `.container {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 200px 1fr;\n  gap: 0.75rem;\n}\n.header { grid-area: header; background: #264de4; }\n.sidebar { grid-area: sidebar; background: #2965f1; }\n.main { grid-area: main; background: #1b35b5; }\n.footer { grid-area: footer; background: #42a1d0; }\n[class] { padding: 1.25rem; color: white; border-radius: 8px; font-weight: 600; }`,
        html: `<div class="container">\n  <div class="header">Header</div>\n  <div class="sidebar">Sidebar</div>\n  <div class="main">Main Content</div>\n  <div class="footer">Footer</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '57', firefox: '52', safari: '10.1', edge: '16' },
  },

  animation: {
    name: `animation`,
    fullName: `CSS Animation`,
    description: `CSS animations allow you to animate transitions from one CSS style configuration to another. They consist of two components: a style describing the CSS animation and a set of keyframes that indicate the start and end states.`,
    syntax: `animation: name duration timing-function delay iteration-count direction fill-mode;`,
    workable: true,
    category: `Animations & Transitions`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/animation`,
    values: [
      { value: `none`, description: `No animation should be applied` },
      { value: `name`, description: `Specifies the name of the @keyframes animation` },
      { value: `duration`, description: `How long the animation takes (e.g. 2s, 500ms)` },
      { value: `timing-function`, description: `Speed curve: ease, linear, ease-in, ease-out, ease-in-out` },
      { value: `delay`, description: `Delay before animation starts` },
      { value: `iteration-count`, description: `Number of times: a number or infinite` },
      { value: `direction`, description: `normal, reverse, alternate, alternate-reverse` },
      { value: `fill-mode`, description: `What values apply before/after: none, forwards, backwards, both` },
    ],
    examples: [
      {
        title: `Bounce Animation`,
        css: `@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-40px); }\n}\n\n.ball {\n  width: 60px;\n  height: 60px;\n  background: #264de4;\n  border-radius: 50%;\n  animation: bounce 1s ease-in-out infinite;\n  margin: 2rem auto;\n}`,
        html: `<div class="ball"></div>`,
      },
      {
        title: `Fade In Animation`,
        css: `@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  padding: 2rem;\n  background: #264de4;\n  color: white;\n  border-radius: 12px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.2rem;\n  animation: fadeIn 0.8s ease forwards;\n}`,
        html: `<div class="card">✨ I fade in smoothly!</div>`,
      },
    ],
    browserSupport: { chrome: '43', firefox: '16', safari: '9', edge: '12' },
  },

  display: {
    name: `display`,
    fullName: `display`,
    description: `The display property specifies the display behavior (the type of rendering box) of an element.`,
    syntax: `display: value;`,
    workable: false,
    category: `Flexbox`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/display`,
    values: [
      { value: `block`, description: `Displays as a block element (line break before and after)` },
      { value: `inline`, description: `Displays as an inline element (no line breaks)` },
      { value: `inline-block`, description: `Displays as an inline-level block container` },
      { value: `flex`, description: `Displays as a block-level flex container` },
      { value: `inline-flex`, description: `Displays as an inline-level flex container` },
      { value: `grid`, description: `Displays as a block-level grid container` },
      { value: `inline-grid`, description: `Displays as an inline-level grid container` },
      { value: `none`, description: `The element is completely removed from the document` },
      { value: `contents`, description: `Makes the container disappear, promoting its children to parent` },
      { value: `table`, description: `Behaves like a table element` },
      { value: `list-item`, description: `Displays as a list item with list-style` },
      { value: `flow-root`, description: `Generates a block container that establishes a new BFC` },
    ],
    examples: [
      {
        title: `Display Values Demo`,
        css: `.block { display: block; background: #264de4; color: white; padding: 0.5rem 1rem; margin-bottom: 0.5rem; border-radius: 6px; }\n.inline { display: inline; background: #2965f1; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; margin: 0 0.25rem; }\n.flex { display: flex; gap: 0.5rem; background: #eef2ff; padding: 0.75rem; border-radius: 8px; margin-top: 0.5rem; }\n.flex-item { background: #1b35b5; color: white; padding: 0.5rem 1rem; border-radius: 6px; }`,
        html: `<div class="block">Block Element (full width)</div>\n<span class="inline">Inline 1</span>\n<span class="inline">Inline 2</span>\n<span class="inline">Inline 3</span>\n<div class="flex">\n  <div class="flex-item">Flex 1</div>\n  <div class="flex-item">Flex 2</div>\n  <div class="flex-item">Flex 3</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '1', firefox: '1', safari: '1', edge: '12' },
  },

  color: {
    name: `color`,
    fullName: `color`,
    description: `The color property specifies the color of text. Colors can be set using named colors, HEX, RGB, RGBA, HSL, HSLA, or modern color functions.`,
    syntax: `color: value;`,
    workable: false,
    category: `Colors & Backgrounds`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/color`,
    values: [
      { value: `named color`, description: `e.g. red, blue, cornflowerblue, transparent` },
      { value: `#HEX`, description: `Hexadecimal notation: #RRGGBB or #RGB` },
      { value: `rgb()`, description: `RGB notation: rgb(red, green, blue)` },
      { value: `rgba()`, description: `RGBA notation with alpha: rgba(r, g, b, alpha)` },
      { value: `hsl()`, description: `HSL notation: hsl(hue, saturation%, lightness%)` },
      { value: `hsla()`, description: `HSLA notation with alpha: hsla(h, s%, l%, alpha)` },
      { value: `oklch()`, description: `Modern perceptual color notation: oklch(L C H)` },
      { value: `currentColor`, description: `Uses the value of the color property` },
      { value: `inherit`, description: `Inherits color from parent element` },
    ],
    examples: [
      {
        title: `Color Formats`,
        css: `.named { color: cornflowerblue; }\n.hex { color: #264de4; }\n.rgb { color: rgb(38, 77, 228); }\n.hsl { color: hsl(228, 74%, 52%); }\n.demo { font-size: 1.1rem; font-weight: 600; padding: 0.4rem 0; border-bottom: 1px solid #e0e7ff; }`,
        html: `<p class="demo named">Named: cornflowerblue</p>\n<p class="demo hex">HEX: #264de4</p>\n<p class="demo rgb">RGB: rgb(38, 77, 228)</p>\n<p class="demo hsl">HSL: hsl(228, 74%, 52%)</p>`,
      },
    ],
    browserSupport: { chrome: '1', firefox: '1', safari: '1', edge: '12' },
  },

  'border-radius': {
    name: `border-radius`,
    fullName: `border-radius`,
    description: `The border-radius property defines the radius of the element\'s corners. It is shorthand for border-top-left-radius, border-top-right-radius, border-bottom-right-radius, and border-bottom-left-radius.`,
    syntax: `border-radius: value;`,
    workable: false,
    category: `Box Model`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius`,
    values: [
      { value: `0`, description: `No rounding (default sharp corners)` },
      { value: `px value`, description: `Fixed pixel radius, e.g. 8px, 16px` },
      { value: `% value`, description: `Percentage of element\'s size, e.g. 50% creates a circle` },
      { value: `em / rem`, description: `Relative to font size` },
      { value: `4 values`, description: `top-left top-right bottom-right bottom-left (clockwise)` },
      { name: `2 values`, value: `2 values`, description: `top-left+bottom-right  top-right+bottom-left` },
    ],
    examples: [
      {
        title: `Border Radius Examples`,
        css: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }\n.box { background: #264de4; color: white; padding: 1.5rem 1rem; text-align: center; font-weight: 600; font-size: 0.82rem; }\n.r0 { border-radius: 0; }\n.r8 { border-radius: 8px; }\n.r16 { border-radius: 16px; }\n.r50p { border-radius: 50%; width: 80px; height: 80px; margin: auto; padding: 1.5rem 0; }\n.rfull { border-radius: 9999px; }\n.rcustom { border-radius: 2rem 0 2rem 0; }`,
        html: `<div class="grid">\n  <div class="box r0">0</div>\n  <div class="box r8">8px</div>\n  <div class="box r16">16px</div>\n  <div class="box r50p">50%</div>\n  <div class="box rfull">9999px</div>\n  <div class="box rcustom">custom</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '5', firefox: '4', safari: '5', edge: '12' },
  },

  'box-shadow': {
    name: `box-shadow`,
    fullName: `box-shadow`,
    description: `The box-shadow property attaches one or more shadows to an element. Shadows are rendered in the order they are defined, from front to back.`,
    syntax: `box-shadow: h-offset v-offset blur spread color inset;`,
    workable: false,
    category: `Shadows & Effects`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow`,
    values: [
      { value: `none`, description: `No shadow (default)` },
      { value: `h-offset`, description: `Required. Horizontal shadow position (negative = left)` },
      { value: `v-offset`, description: `Required. Vertical shadow position (negative = above)` },
      { value: `blur`, description: `Optional. Blur distance (0 = sharp edge)` },
      { value: `spread`, description: `Optional. Size of shadow (negative = shrink)` },
      { value: `color`, description: `Optional. Color of shadow (default = text color)` },
      { value: `inset`, description: `Optional. Changes shadow from outer to inner` },
    ],
    examples: [
      {
        title: `Shadow Styles`,
        css: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 1rem; }\n.card { background: white; border-radius: 12px; padding: 1.5rem; text-align: center; font-weight: 600; font-size: 0.82rem; color: #264de4; }\n.s1 { box-shadow: 2px 2px 5px rgba(0,0,0,0.2); }\n.s2 { box-shadow: 0 4px 20px rgba(38,77,228,0.25); }\n.s3 { box-shadow: 0 0 0 3px #264de4; }\n.s4 { box-shadow: inset 0 2px 8px rgba(0,0,0,0.15); }\n.s5 { box-shadow: 5px 5px 0 #264de4; }\n.s6 { box-shadow: 0 1px 2px rgba(0,0,0,.07), 0 4px 12px rgba(0,0,0,.1), 0 16px 40px rgba(0,0,0,.08); }`,
        html: `<div class="grid">\n  <div class="card s1">Basic</div>\n  <div class="card s2">Soft Brand</div>\n  <div class="card s3">Outline</div>\n  <div class="card s4">Inset</div>\n  <div class="card s5">Hard</div>\n  <div class="card s6">Layered</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '10', firefox: '4', safari: '5.1', edge: '12' },
  },

  transform: {
    name: `transform`,
    fullName: `transform`,
    description: `The transform property applies a 2D or 3D transformation to an element. You can rotate, scale, move, skew, and more using transform functions.`,
    syntax: `transform: function(value);`,
    workable: false,
    category: `Transforms`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/transform`,
    values: [
      { value: `none`, description: `No transform (default)` },
      { value: `translate(x, y)`, description: `Moves element horizontally and/or vertically` },
      { value: `translateX(x)`, description: `Moves element horizontally` },
      { value: `translateY(y)`, description: `Moves element vertically` },
      { value: `rotate(angle)`, description: `Rotates element by specified angle (deg, rad, turn)` },
      { value: `scale(x, y)`, description: `Scales element width and height` },
      { value: `scaleX(x)`, description: `Scales element horizontally` },
      { value: `scaleY(y)`, description: `Scales element vertically` },
      { value: `skew(x, y)`, description: `Skews element along X and Y axes` },
      { value: `matrix()`, description: `Defines a 2D transformation using a matrix of 6 values` },
      { value: `perspective(n)`, description: `Defines a perspective view for 3D transformed element` },
      { value: `rotateX(angle)`, description: `Rotates element along the X-axis (3D)` },
      { value: `rotateY(angle)`, description: `Rotates element along the Y-axis (3D)` },
      { value: `rotateZ(angle)`, description: `Rotates element along the Z-axis (3D)` },
    ],
    examples: [
      {
        title: `Transform Functions`,
        css: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 1.5rem; }\n.box { background: #264de4; color: white; padding: 1.5rem 1rem; border-radius: 10px; text-align: center; font-weight: 700; font-size: 0.8rem; transition: transform 0.3s ease; cursor: pointer; }\n.box:hover { transform: none !important; opacity: 0.9; }\n.t1 { transform: rotate(15deg); }\n.t2 { transform: scale(1.15); }\n.t3 { transform: skewX(15deg); }\n.t4 { transform: translateX(10px); }\n.t5 { transform: rotate(45deg) scale(0.9); }\n.t6 { transform: perspective(300px) rotateY(20deg); }`,
        html: `<div class="grid">\n  <div class="box t1">rotate(15deg)</div>\n  <div class="box t2">scale(1.15)</div>\n  <div class="box t3">skewX(15deg)</div>\n  <div class="box t4">translateX(10px)</div>\n  <div class="box t5">rotate+scale</div>\n  <div class="box t6">rotateY 3D</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '36', firefox: '16', safari: '9', edge: '12' },
  },

  transition: {
    name: `transition`,
    fullName: `transition`,
    description: `The transition property is a shorthand for transition-property, transition-duration, transition-timing-function, and transition-delay. It creates smooth state changes between CSS values.`,
    syntax: `transition: property duration timing-function delay;`,
    workable: false,
    category: `Animations & Transitions`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/transition`,
    values: [
      { value: `all`, description: `Transition applies to all properties` },
      { value: `property name`, description: `Specific CSS property to transition` },
      { value: `duration`, description: `Time in seconds (s) or milliseconds (ms)` },
      { value: `ease`, description: `Slow start, fast middle, slow end (default)` },
      { value: `linear`, description: `Constant speed throughout` },
      { value: `ease-in`, description: `Slow start, faster end` },
      { value: `ease-out`, description: `Fast start, slow end` },
      { value: `ease-in-out`, description: `Slow start and end, fast middle` },
      { value: `cubic-bezier()`, description: `Custom timing function using bezier curve` },
      { value: `none`, description: `No transition` },
    ],
    examples: [
      {
        title: `Hover Transitions`,
        css: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }\n.btn { background: #264de4; color: white; padding: 1rem; border-radius: 10px; text-align: center; font-weight: 600; font-size: 0.82rem; cursor: pointer; }\n.b1 { transition: background 0.3s ease; }\n.b1:hover { background: #1b35b5; }\n.b2 { transition: transform 0.3s ease-out; }\n.b2:hover { transform: translateY(-4px); }\n.b3 { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }\n.b3:hover { transform: scale(1.08); box-shadow: 0 8px 24px rgba(38,77,228,0.35); }`,
        html: `<div class="grid">\n  <div class="btn b1">Color Transition</div>\n  <div class="btn b2">Lift Transition</div>\n  <div class="btn b3">Bounce Transition</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '26', firefox: '16', safari: '9', edge: '12' },
  },

  position: {
    name: `position`,
    fullName: `position`,
    description: `The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).`,
    syntax: `position: value;`,
    workable: false,
    category: `Positioning & Layout`,
    mdn: `https://developer.mozilla.org/en-US/docs/Web/CSS/position`,
    values: [
      { value: `static`, description: `Default. Element flows in the normal document flow` },
      { value: `relative`, description: `Positioned relative to its normal position` },
      { value: `absolute`, description: `Positioned relative to its nearest positioned ancestor` },
      { value: `fixed`, description: `Positioned relative to the viewport` },
      { value: `sticky`, description: `Positioned based on scroll position (hybrid of relative and fixed)` },
    ],
    examples: [
      {
        title: `Position Values`,
        css: `.container { position: relative; background: #eef2ff; padding: 2rem; border-radius: 12px; min-height: 160px; }\n.box { padding: 0.6rem 1rem; border-radius: 6px; font-weight: 600; font-size: 0.82rem; color: white; width: fit-content; }\n.rel { position: relative; background: #264de4; top: 10px; left: 10px; }\n.abs { position: absolute; background: #2965f1; top: 1rem; right: 1rem; }\n.label { position: absolute; bottom: 0.75rem; left: 1rem; font-size: 0.75rem; color: #4a5580; }`,
        html: `<div class="container">\n  <div class="box rel">Relative (offset 10px)</div>\n  <div class="box abs">Absolute (top-right)</div>\n  <div class="label">⬆ Relative to this container</div>\n</div>`,
      },
    ],
    browserSupport: { chrome: '1', firefox: '1', safari: '1', edge: '12' },
  },
}

/* ─── Quick lookup: get property details ─────────────────────────── */
export function getPropertyDetails(name) {
  if (!name) return null
  const key = name.toLowerCase().replace(/\s+/g, '-')
  return propertyDetails[key] || null
}

/* ─── Get all tags flat list ─────────────────────────────────────── */
export function getAllTags() {
  const map = new Map()
  cssData.categories.forEach((cat) => {
    cat.tags.forEach((tag) => {
      if (!map.has(tag.name)) {
        map.set(tag.name, { ...tag, category: cat.name, categoryColor: cat.color })
      }
    })
  })
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name))
}

/* ─── Get workable (interactive) properties ──────────────────────── */
export function getWorkableProperties() {
  return Object.values(propertyDetails).filter((p) => p.workable)
}

export default cssData
