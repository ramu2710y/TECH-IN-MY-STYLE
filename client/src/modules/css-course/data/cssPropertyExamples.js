export const propertyExamples = [
  {
    property: "align-content",
    description:
      "sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    htmlCode: `<div class="demo">
  <div class="flex-container ac-flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <p class="label">align-content: flex-start</p>
</div>
<div class="demo">
  <div class="flex-container ac-center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <p class="label">align-content: center</p>
</div>
<div class="demo">
  <div class="flex-container ac-space-between">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <p class="label">align-content: space-between</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  height: 150px;
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.5rem;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
}

.label {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
}

.ac-flex-start {
  align-content: flex-start;
}

.ac-center {
  align-content: center;
}

.ac-space-between {
  align-content: space-between;
}`,
  },

  {
    property: "align-items",
    description:
      "sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the cross axis.",
    htmlCode: `<div class="demo">
  <div class="flex-ai ai-flex-start">
    <div class="box">flex-start</div>
    <div class="box tall">Tall</div>
    <div class="box">flex-start</div>
  </div>
</div>
<div class="demo">
  <div class="flex-ai ai-center">
    <div class="box">center</div>
    <div class="box tall">Tall</div>
    <div class="box">center</div>
  </div>
</div>
<div class="demo">
  <div class="flex-ai ai-stretch">
    <div class="box">stretch</div>
    <div class="box">stretch</div>
    <div class="box">stretch</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.flex-ai {
  display: flex;
  height: 120px;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box.tall {
  height: 150px;
}

.ai-flex-start {
  align-items: flex-start;
}

.ai-center {
  align-items: center;
}

.ai-stretch {
  align-items: stretch;
}`,
  },

  {
    property: "align-self",
    description:
      "overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area.",
    htmlCode: `<div class="demo">
  <div class="flex-as">
    <div class="item-as as-auto">auto</div>
    <div class="item-as as-flex-start">flex-start</div>
    <div class="item-as as-center">center</div>
    <div class="item-as as-flex-end">flex-end</div>
    <div class="item-as as-stretch">stretch</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.flex-as {
  display: flex;
  height: 180px;
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.75rem;
  align-items: flex-end;
}

.item-as {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}

.as-auto {
  align-self: auto;
}

.as-flex-start {
  align-self: flex-start;
}

.as-center {
  align-self: center;
}

.as-flex-end {
  align-self: flex-end;
}

.as-stretch {
  align-self: stretch;
}`,
  },

  {
    property: "animation",
    description:
      "applies an animation between styles. It is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.",
    htmlCode: `<div class="demo">
  <div class="animated-box box1">Slide In</div>
  <div class="animated-box box2">Bounce</div>
  <div class="animated-box box3">Fade & Scale</div>
  <div class="animated-box box4">Rotate</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 600px;
}

.animated-box {
  padding: 2rem;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.box1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: slideIn 2s ease-in-out infinite;
}

.box2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  animation: bounce 1.5s ease-in-out infinite;
}

.box3 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  animation: fadeScale 2s ease-in-out infinite;
}

.box4 {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  animation: rotate 3s linear infinite;
}

@keyframes slideIn {
  0%, 100% {
    transform: translateX(-20px);
    opacity: 0.7;
  }
  50% {
    transform: translateX(20px);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeScale {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  },

  {
    property: "appearance",
    description:
      "is used to display an element using platform-native styling based on the operating system's theme.",
    htmlCode: `<div class="demo">
  <div class="control-group">
    <label>Default Button:</label>
    <button class="btn-default">Click Me</button>
  </div>
  <div class="control-group">
    <label>None Appearance:</label>
    <button class="btn-none">Custom Button</button>
  </div>
  <div class="control-group">
    <label>Checkbox:</label>
    <input type="checkbox" class="check-default" checked>
    <input type="checkbox" class="check-none" checked>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
}

.control-group {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

label {
  font-weight: 600;
  color: #333;
  min-width: 150px;
}

.btn-default {
  appearance: auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1rem;
}

.btn-none {
  appearance: none;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s;
}

.btn-none:hover {
  transform: scale(1.05);
}

.check-default {
  appearance: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.check-none {
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #a8edea;
  border-radius: 4px;
  cursor: pointer;
  background: white;
  transition: all 0.2s;
}

.check-none:checked {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-color: #fed6e3;
}`,
  },

  {
    property: "aspect-ratio",
    description:
      "sets a preferred aspect ratio for the element. The element will maintain this ratio as it scales.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box ratio-1-1">1:1</div>
    <div class="box ratio-16-9">16:9</div>
    <div class="box ratio-4-3">4:3</div>
    <div class="box ratio-2-1">2:1</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  width: 100%;
}

.ratio-1-1 {
  aspect-ratio: 1 / 1;
}

.ratio-16-9 {
  aspect-ratio: 16 / 9;
}

.ratio-4-3 {
  aspect-ratio: 4 / 3;
}

.ratio-2-1 {
  aspect-ratio: 2 / 1;
}`,
  },

  {
    property: "backdrop-filter",
    description:
      "applies graphical effects like blur or color shift to the area behind an element.",
    htmlCode: `<div class="demo">
  <div class="background-image">
    <div class="blur-box">
      <p>Blur Effect</p>
    </div>
    <div class="brightness-box">
      <p>Brightness</p>
    </div>
    <div class="saturate-box">
      <p>Saturate</p>
    </div>
    <div class="combined-box">
      <p>Combined</p>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.background-image {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3Ccircle cx='100' cy='100' r='50' fill='%23f093fb' opacity='0.5'/%3E%3Ccircle cx='300' cy='200' r='60' fill='%2300f2fe' opacity='0.5'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  min-height: 300px;
}

.blur-box,
.brightness-box,
.saturate-box,
.combined-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
}

.blur-box {
  backdrop-filter: blur(10px);
}

.brightness-box {
  backdrop-filter: brightness(1.5);
}

.saturate-box {
  backdrop-filter: saturate(2);
}

.combined-box {
  backdrop-filter: blur(5px) brightness(1.2) saturate(1.5);
}`,
  },

  {
    property: "backface-visibility",
    description:
      "sets whether the back face of an element is visible when turned towards the user. Useful for 3D transforms.",
    htmlCode: `<div class="demo">
  <div class="flip-container">
    <div class="flipper visible">
      <div class="front">Front</div>
      <div class="back">Back</div>
    </div>
  </div>
  <p class="label">backface-visibility: visible</p>
</div>
<div class="demo">
  <div class="flip-container">
    <div class="flipper hidden">
      <div class="front">Front</div>
      <div class="back">Back</div>
    </div>
  </div>
  <p class="label">backface-visibility: hidden</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.flip-container {
  perspective: 1000px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 8px;
}

.front {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  z-index: 2;
}

.back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}

.visible .back {
  backface-visibility: visible;
}

.hidden .back {
  backface-visibility: hidden;
}

.label {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #1e3c72;
  font-weight: 600;
}`,
  },

  {
    property: "background-attachment",
    description:
      "sets whether a background image scrolls with the viewport or stays fixed.",
    htmlCode: `<div class="demo scroll-bg">
  <div class="content">
    <h3>background-attachment: scroll</h3>
    <p>Background scrolls with content. Scroll to see the effect.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div class="demo fixed-bg">
  <div class="content">
    <h3>background-attachment: fixed</h3>
    <p>Background stays in place. Scroll to see the effect.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>`,
    cssCode: `body {
  background: #f5f5f5;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  height: 300px;
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow-y: scroll;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.scroll-bg {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: scroll;
}

.fixed-bg {
  background-image: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  background-attachment: fixed;
}

.content {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  margin: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.content h3 {
  color: #333;
  margin-top: 0;
  font-size: 1.1rem;
}

.content p {
  color: #666;
  line-height: 1.6;
  margin: 0.5rem 0;
}`,
  },

  {
    property: "background-blend-mode",
    description:
      "sets how an element's background blends with its background color or images.",
    htmlCode: `<div class="demo">
  <div class="blend multiply">multiply</div>
  <div class="blend screen">screen</div>
  <div class="blend overlay">overlay</div>
  <div class="blend darken">darken</div>
  <div class="blend lighten">lighten</div>
  <div class="blend color-dodge">color-dodge</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.blend {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF6B6B' width='50' height='50'/%3E%3Crect fill='%234ECDC4' x='50' width='50' height='50'/%3E%3Crect fill='%23FFE66D' y='50' width='50' height='50'/%3E%3Crect fill='%2395E1D3' x='50' y='50' width='50' height='50'/%3E%3C/svg%3E");
  background-size: 100px;
  background-color: #667eea;
  font-size: 0.85rem;
}

.multiply {
  background-blend-mode: multiply;
}

.screen {
  background-blend-mode: screen;
}

.overlay {
  background-blend-mode: overlay;
}

.darken {
  background-blend-mode: darken;
}

.lighten {
  background-blend-mode: lighten;
}

.color-dodge {
  background-blend-mode: color-dodge;
}`,
  },

  {
    property: "background-clip",
    description:
      "sets the background painting area, determining how far the background extends.",
    htmlCode: `<div class="demo">
  <div class="box border-box">border-box</div>
  <div class="box padding-box">padding-box</div>
  <div class="box content-box">content-box</div>
  <div class="box text-clip">text</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  border: 8px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-box {
  background-clip: border-box;
}

.padding-box {
  background-clip: padding-box;
}

.content-box {
  background-clip: content-box;
}

.text-clip {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
}`,
  },

  {
    property: "background-color",
    description:
      "sets the background color of an element using color names, hex values, RGB, RGBA, HSL, or HSLA values.",
    htmlCode: `<div class="demo">
  <div class="color-box named">cornflowerblue</div>
  <div class="color-box hex">#667EEA</div>
  <div class="color-box rgb">rgb(102, 126, 234)</div>
  <div class="color-box rgba">rgba(102, 126, 234, 0.5)</div>
  <div class="color-box hsl">hsl(231, 68%, 66%)</div>
  <div class="color-box gradient">Gradient</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.color-box {
  padding: 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  text-align: center;
  transition: transform 0.3s;
}

.color-box:hover {
  transform: scale(1.05);
}

.named {
  background-color: cornflowerblue;
}

.hex {
  background-color: #667EEA;
}

.rgb {
  background-color: rgb(102, 126, 234);
}

.rgba {
  background-color: rgba(102, 126, 234, 0.5);
  border: 2px solid #667eea;
}

.hsl {
  background-color: hsl(231, 68%, 66%);
}

.gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
  },

  {
    property: "background-image",
    description:
      "sets one or more background images on an element. Background images are drawn on top of the background color.",
    htmlCode: `<div class="demo">
  <div class="img-box url-img">URL Image</div>
  <div class="img-box linear-grad">Linear Gradient</div>
  <div class="img-box radial-grad">Radial Gradient</div>
  <div class="img-box conic-grad">Conic Gradient</div>
  <div class="img-box overlay">Gradient Overlay</div>
  <div class="img-box pattern">Pattern</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.img-box {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
}

.url-img {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23667eea' width='100' height='100'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%23764ba2'/%3E%3C/svg%3E");
}

.linear-grad {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.radial-grad {
  background-image: radial-gradient(circle, #667eea 30%, #764ba2 100%);
}

.conic-grad {
  background-image: conic-gradient(#667eea, #764ba2, #667eea);
}

.overlay {
  background-image: linear-gradient(rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23fff' width='50' height='50'/%3E%3Crect fill='%23ccc' x='50' width='50' height='50'/%3E%3Crect fill='%23ccc' y='50' width='50' height='50'/%3E%3Crect fill='%23fff' x='50' y='50' width='50' height='50'/%3E%3C/svg%3E");
}

.pattern {
  background-image: repeating-linear-gradient(45deg, #667eea, #667eea 10px, #764ba2 10px, #764ba2 20px);
}`,
  },

  {
    property: "background-origin",
    description:
      "sets the origin of the background image relative to the background box.",
    htmlCode: `<div class="demo">
  <div class="box origin-border">border-box</div>
  <div class="box origin-padding">padding-box</div>
  <div class="box origin-content">content-box</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  border: 10px dashed rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-image: radial-gradient(circle, #667eea 20%, transparent 20%);
  background-size: 30px 30px;
  background-color: #f0f4ff;
  font-weight: 600;
  color: #333;
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.origin-border {
  background-origin: border-box;
}

.origin-padding {
  background-origin: padding-box;
}

.origin-content {
  background-origin: content-box;
}`,
  },

  {
    property: "background-position",
    description:
      "sets the initial position of a background image. You can set horizontal and vertical positions using keywords or length values.",
    htmlCode: `<div class="demo">
  <div class="box pos-top-left">top left</div>
  <div class="box pos-top-center">top center</div>
  <div class="box pos-center">center</div>
  <div class="box pos-bottom-right">bottom right</div>
  <div class="box pos-custom">30% 60%</div>
  <div class="box pos-right-center">right center</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  height: 120px;
  border-radius: 8px;
  background-image: radial-gradient(circle, #ff6b6b 30%, transparent 30%);
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-color: #e0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4facfe;
  border: 2px solid #4facfe;
  font-size: 0.85rem;
}

.pos-top-left {
  background-position: top left;
}

.pos-top-center {
  background-position: top center;
}

.pos-center {
  background-position: center;
}

.pos-bottom-right {
  background-position: bottom right;
}

.pos-custom {
  background-position: 30% 60%;
}

.pos-right-center {
  background-position: right center;
}`,
  },

  {
    property: "background-repeat",
    description:
      "sets how background images are repeated. Can be repeat, repeat-x, repeat-y, or no-repeat.",
    htmlCode: `<div class="demo">
  <div class="box repeat-xy">repeat</div>
  <div class="box repeat-x">repeat-x</div>
  <div class="box repeat-y">repeat-y</div>
  <div class="box no-repeat">no-repeat</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  height: 150px;
  border-radius: 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Crect fill='%23f093fb' width='30' height='30'/%3E%3Ccircle cx='15' cy='15' r='8' fill='%23fff'/%3E%3C/svg%3E");
  background-size: 30px 30px;
  background-color: #fff5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #f5576c;
  border: 2px solid #f5576c;
}

.repeat-xy {
  background-repeat: repeat;
}

.repeat-x {
  background-repeat: repeat-x;
}

.repeat-y {
  background-repeat: repeat-y;
}

.no-repeat {
  background-repeat: no-repeat;
}`,
  },

  {
    property: "background-size",
    description:
      "sets the size of the background image. Can use keywords like cover, contain, or specific dimensions.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-cover">cover</div>
  <div class="box size-contain">contain</div>
  <div class="box size-custom">100px 80px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  height: 150px;
  border-radius: 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%234facfe' width='100' height='100'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%2300f2fe'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-color: #e0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4facfe;
  border: 2px solid #4facfe;
}

.size-auto {
  background-size: auto;
}

.size-cover {
  background-size: cover;
}

.size-contain {
  background-size: contain;
}

.size-custom {
  background-size: 100px 80px;
}`,
  },

  {
    property: "border",
    description:
      "sets an element's border. It sets the values of border-width, border-style, and border-color in a single declaration.",
    htmlCode: `<div class="demo">
  <div class="box b1">2px solid</div>
  <div class="box b2">4px dashed</div>
  <div class="box b3">3px dotted</div>
  <div class="box b4">5px double</div>
  <div class="box b5">Rounded</div>
  <div class="box b6">Thick</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e2a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  background: #f0fffe;
}

.b1 {
  border: 2px solid #43e97b;
}

.b2 {
  border: 4px dashed #38f9d7;
}

.b3 {
  border: 3px dotted #43e97b;
}

.b4 {
  border: 5px double #38f9d7;
}

.b5 {
  border: 3px solid #43e97b;
  border-radius: 15px;
}

.b6 {
  border: 8px solid #38f9d7;
}`,
  },

  {
    property: "border-radius",
    description:
      "sets the radius of the corners of an element's border box. You can create rounded corners or even circles.",
    htmlCode: `<div class="demo">
  <div class="box radius-0">0px</div>
  <div class="box radius-10">10px</div>
  <div class="box radius-20">20px</div>
  <div class="box radius-50">50%</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.radius-0 {
  border-radius: 0px;
}

.radius-10 {
  border-radius: 10px;
}

.radius-20 {
  border-radius: 20px;
}

.radius-50 {
  border-radius: 50%;
}`,
  },

  {
    property: "box-shadow",
    description:
      "adds one or more shadows to an element. Shadows can be inset or outset with customizable blur, spread, and color.",
    htmlCode: `<div class="demo">
  <div class="box shadow-none">No Shadow</div>
  <div class="box shadow-small">Small</div>
  <div class="box shadow-medium">Medium</div>
  <div class="box shadow-large">Large</div>
  <div class="box shadow-inset">Inset</div>
  <div class="box shadow-multiple">Multiple</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 8px;
  min-height: 100px;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: translateY(-5px);
}

.shadow-none {
  box-shadow: none;
}

.shadow-small {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.shadow-medium {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.shadow-large {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.shadow-inset {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.shadow-multiple {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3);
}`,
  },

  {
    property: "box-sizing",
    description:
      "sets how the total width and height of an element is calculated. Can be content-box or border-box.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box content-box">
      <p>content-box</p>
      <small>Width: 200px (content only)</small>
    </div>
    <div class="box border-box">
      <p>border-box</p>
      <small>Width: 200px (includes border)</small>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.box {
  padding: 1rem;
  border: 10px solid #667eea;
  border-radius: 8px;
  background: #f0f4ff;
  width: 200px;
}

.box p {
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  color: #667eea;
  font-size: 1.1rem;
}

.box small {
  color: #666;
  font-size: 0.85rem;
}

.content-box {
  box-sizing: content-box;
}

.border-box {
  box-sizing: border-box;
}`,
  },

  {
    property: "caption-side",
    description:
      "specifies the placement of a table caption. Can be top or bottom.",
    htmlCode: `<div class="demo">
  <div class="table-container">
    <h3>caption-side: top</h3>
    <table class="table top-caption">
      <caption>Sales Data 2024</caption>
      <tr>
        <th>Month</th>
        <th>Revenue</th>
        <th>Growth</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$50,000</td>
        <td>+15%</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$62,000</td>
        <td>+24%</td>
      </tr>
    </table>
  </div>
  <div class="table-container">
    <h3>caption-side: bottom</h3>
    <table class="table bottom-caption">
      <caption>Sales Data 2024</caption>
      <tr>
        <th>Month</th>
        <th>Revenue</th>
        <th>Growth</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$50,000</td>
        <td>+15%</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$62,000</td>
        <td>+24%</td>
      </tr>
    </table>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.table-container {
  margin-bottom: 2rem;
}

.table-container h3 {
  color: #f5576c;
  margin-top: 0;
  font-size: 1rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.table caption {
  font-weight: 700;
  color: #f5576c;
  padding: 0.5rem;
  font-size: 0.95rem;
}

.top-caption {
  caption-side: top;
}

.bottom-caption {
  caption-side: bottom;
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  border: 2px solid #f5576c;
}

.table th {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  font-weight: 600;
}

.table tr:nth-child(even) td {
  background: #fff5f7;
}`,
  },

  {
    property: "caret-color",
    description:
      "sets the color of the cursor (caret) in input fields and text areas.",
    htmlCode: `<div class="demo">
  <div class="input-group">
    <label>Default Caret:</label>
    <input type="text" class="input-default" placeholder="Type here...">
  </div>
  <div class="input-group">
    <label>Red Caret:</label>
    <input type="text" class="input-red" placeholder="Type here...">
  </div>
  <div class="input-group">
    <label>Blue Caret:</label>
    <input type="text" class="input-blue" placeholder="Type here...">
  </div>
  <div class="input-group">
    <label>Green Caret:</label>
    <textarea class="textarea-green" placeholder="Type here..."></textarea>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #4facfe;
  border-radius: 6px;
  font-size: 1rem;
  font-family: "Segoe UI", sans-serif;
  transition: border-color 0.3s;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: #00f2fe;
}

.input-default {
  caret-color: auto;
}

.input-red {
  caret-color: #ff6b6b;
}

.input-blue {
  caret-color: #4facfe;
}

.textarea-green {
  caret-color: #43e97b;
  resize: vertical;
  min-height: 80px;
}`,
  },

  {
    property: "clear",
    description:
      "sets whether an element must be moved below floating elements that precede it.",
    htmlCode: `<div class="demo">
  <div class="float-left">Float Left</div>
  <p class="clear-none">clear: none - Text wraps around float</p>
  
  <div class="float-left">Float Left</div>
  <p class="clear-left">clear: left - Moves below float</p>
  
  <div class="float-left">Float Left</div>
  <div class="float-right">Float Right</div>
  <p class="clear-both">clear: both - Moves below all floats</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.float-left {
  float: left;
  width: 120px;
  height: 80px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.float-right {
  float: right;
  width: 120px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.demo p {
  color: #333;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: #f0fffe;
  border-left: 4px solid #43e97b;
  border-radius: 4px;
}

.clear-none {
  clear: none;
}

.clear-left {
  clear: left;
}

.clear-both {
  clear: both;
}`,
  },

  {
    property: "clip-path",
    description:
      "creates a clipping region that defines what part of an element is visible.",
    htmlCode: `<div class="demo">
  <div class="clip-circle">Circle</div>
  <div class="clip-polygon">Polygon</div>
  <div class="clip-inset">Inset</div>
  <div class="clip-ellipse">Ellipse</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.demo > div {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  transition: transform 0.3s;
}

.demo > div:hover {
  transform: scale(1.05);
}

.clip-circle {
  clip-path: circle(50%);
}

.clip-polygon {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.clip-inset {
  clip-path: inset(20% 20% 20% 20%);
}

.clip-ellipse {
  clip-path: ellipse(60% 40%);
}`,
  },

  {
    property: "color",
    description:
      "sets the foreground color of an element's text content and text decorations.",
    htmlCode: `<div class="demo">
  <p class="color-named">Named Color: cornflowerblue</p>
  <p class="color-hex">Hex Color: #667EEA</p>
  <p class="color-rgb">RGB Color: rgb(102, 126, 234)</p>
  <p class="color-rgba">RGBA Color: rgba(102, 126, 234, 0.7)</p>
  <p class="color-hsl">HSL Color: hsl(231, 68%, 66%)</p>
  <p class="color-gradient">Gradient Text</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: #f0f4ff;
}

.color-named {
  color: cornflowerblue;
}

.color-hex {
  color: #667EEA;
}

.color-rgb {
  color: rgb(102, 126, 234);
}

.color-rgba {
  color: rgba(102, 126, 234, 0.7);
}

.color-hsl {
  color: hsl(231, 68%, 66%);
}

.color-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
  },

  {
    property: "column-count",
    description:
      "sets the number of columns an element's content should be divided into.",
    htmlCode: `<div class="demo">
  <div class="columns-1">
    <h3>column-count: 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="columns-2">
    <h3>column-count: 2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="columns-3">
    <h3>column-count: 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo > div {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.demo h3 {
  color: #f5576c;
  margin-top: 0;
  font-size: 1rem;
}

.demo p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.columns-1 {
  column-count: 1;
}

.columns-2 {
  column-count: 2;
  column-gap: 1.5rem;
}

.columns-3 {
  column-count: 3;
  column-gap: 1.5rem;
}`,
  },

  {
    property: "column-gap",
    description:
      "sets the size of the gap between columns in a multi-column layout.",
    htmlCode: `<div class="demo">
  <div class="gap-0">
    <h3>column-gap: 0</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>
  <div class="gap-1">
    <h3>column-gap: 1rem</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>
  <div class="gap-2">
    <h3>column-gap: 2rem</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo > div {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.demo h3 {
  color: #4facfe;
  margin-top: 0;
  font-size: 1rem;
}

.demo p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.gap-0 {
  column-count: 2;
  column-gap: 0;
}

.gap-1 {
  column-count: 2;
  column-gap: 1rem;
}

.gap-2 {
  column-count: 2;
  column-gap: 2rem;
}`,
  },

  {
    property: "cursor",
    description:
      "sets the type of cursor to be displayed when hovering over an element.",
    htmlCode: `<div class="demo">
  <div class="cursor-auto">auto</div>
  <div class="cursor-pointer">pointer</div>
  <div class="cursor-text">text</div>
  <div class="cursor-move">move</div>
  <div class="cursor-wait">wait</div>
  <div class="cursor-help">help</div>
  <div class="cursor-not-allowed">not-allowed</div>
  <div class="cursor-grab">grab</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo > div {
  padding: 1.5rem;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  min-height: 80px;
  transition: transform 0.2s;
}

.demo > div:hover {
  transform: scale(1.05);
}

.cursor-auto {
  cursor: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.cursor-move {
  cursor: move;
}

.cursor-wait {
  cursor: wait;
}

.cursor-help {
  cursor: help;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-grab {
  cursor: grab;
}`,
  },

  {
    property: "display",
    description:
      "sets whether an element is treated as a block or inline box and the layout used for its children, such as flex or grid.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">display: block</p>
    <div class="block-item">Block 1</div>
    <div class="block-item">Block 2</div>
  </div>
  <div class="section">
    <p class="label">display: inline</p>
    <span class="inline-item">Inline 1</span>
    <span class="inline-item">Inline 2</span>
    <span class="inline-item">Inline 3</span>
  </div>
  <div class="section">
    <p class="label">display: flex</p>
    <div class="flex-container">
      <div class="flex-item">A</div>
      <div class="flex-item">B</div>
      <div class="flex-item">C</div>
    </div>
  </div>
  <div class="section">
    <p class="label">display: grid</p>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.block-item {
  display: block;
  background: #fa709a;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.inline-item {
  display: inline;
  background: #fee140;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  font-weight: 600;
}

.flex-container {
  display: flex;
  gap: 0.75rem;
}

.flex-item {
  background: #667eea;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  flex: 1;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.grid-item {
  background: #764ba2;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  text-align: center;
}`,
  },
  {
    property: "filter",
    description:
      "applies graphical effects like blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, and sepia to an element.",
    htmlCode: `<div class="demo">
  <div class="filter-box filter-blur">Blur</div>
  <div class="filter-box filter-brightness">Brightness</div>
  <div class="filter-box filter-contrast">Contrast</div>
  <div class="filter-box filter-grayscale">Grayscale</div>
  <div class="filter-box filter-hue">Hue Rotate</div>
  <div class="filter-box filter-invert">Invert</div>
  <div class="filter-box filter-saturate">Saturate</div>
  <div class="filter-box filter-sepia">Sepia</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.filter-box {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s;
}

.filter-box:hover {
  transform: scale(1.05);
}

.filter-blur {
  filter: blur(3px);
}

.filter-brightness {
  filter: brightness(1.5);
}

.filter-contrast {
  filter: contrast(1.8);
}

.filter-grayscale {
  filter: grayscale(100%);
}

.filter-hue {
  filter: hue-rotate(90deg);
}

.filter-invert {
  filter: invert(100%);
}

.filter-saturate {
  filter: saturate(2);
}

.filter-sepia {
  filter: sepia(100%);
}`,
  },

  {
    property: "flex",
    description:
      "sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",
    htmlCode: `<div class="demo">
  <div class="flex-container">
    <div class="flex-item flex-0">flex: 0</div>
    <div class="flex-item flex-1">flex: 1</div>
    <div class="flex-item flex-2">flex: 2</div>
  </div>
  <div class="flex-container">
    <div class="flex-item flex-auto">flex: auto</div>
    <div class="flex-item flex-none">flex: none</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.flex-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.flex-item {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.flex-item:hover {
  transform: scale(1.05);
}

.flex-0 {
  flex: 0;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-auto {
  flex: auto;
}

.flex-none {
  flex: none;
}`,
  },

  {
    property: "flex-basis",
    description:
      "sets the default size of a flex item before the remaining space is distributed according to flex-grow or flex-shrink.",
    htmlCode: `<div class="demo">
  <div class="flex-container">
    <div class="flex-item basis-auto">auto</div>
    <div class="flex-item basis-100">100px</div>
    <div class="flex-item basis-150">150px</div>
  </div>
  <div class="flex-container">
    <div class="flex-item basis-25">25%</div>
    <div class="flex-item basis-50">50%</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.flex-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.flex-item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.flex-item:hover {
  transform: scale(1.05);
}

.basis-auto {
  flex-basis: auto;
}

.basis-100 {
  flex-basis: 100px;
}

.basis-150 {
  flex-basis: 150px;
}

.basis-25 {
  flex-basis: 25%;
}

.basis-50 {
  flex-basis: 50%;
}`,
  },

  {
    property: "flex-direction",
    description:
      "sets how flex items are placed in the flex container, defining the main axis and direction (row, column, row-reverse, column-reverse).",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">flex-direction: row</p>
    <div class="flex-container flex-row">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">flex-direction: column</p>
    <div class="flex-container flex-column">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">flex-direction: row-reverse</p>
    <div class="flex-container flex-row-reverse">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">flex-direction: column-reverse</p>
    <div class="flex-container flex-column-reverse">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.flex-container {
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.75rem;
}

.flex-item {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-width: 60px;
  min-height: 60px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}

.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse;
}`,
  },

  {
    property: "flex-grow",
    description:
      "sets the flex grow factor of a flex item, determining how much the item will grow relative to other flex items when positive free space is distributed.",
    htmlCode: `<div class="demo">
  <div class="flex-container">
    <div class="flex-item grow-0">grow: 0</div>
    <div class="flex-item grow-1">grow: 1</div>
    <div class="flex-item grow-2">grow: 2</div>
    <div class="flex-item grow-3">grow: 3</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.flex-item {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.flex-item:hover {
  transform: scale(1.05);
}

.grow-0 {
  flex-grow: 0;
}

.grow-1 {
  flex-grow: 1;
}

.grow-2 {
  flex-grow: 2;
}

.grow-3 {
  flex-grow: 3;
}`,
  },

  {
    property: "flex-shrink",
    description:
      "sets the flex shrink factor of a flex item, determining how much the item will shrink relative to other flex items when negative free space is distributed.",
    htmlCode: `<div class="demo">
  <div class="flex-container">
    <div class="flex-item shrink-0">shrink: 0</div>
    <div class="flex-item shrink-1">shrink: 1</div>
    <div class="flex-item shrink-2">shrink: 2</div>
    <div class="flex-item shrink-3">shrink: 3</div>
  </div>
  <p class="note">Resize the window to see shrinking effect</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  gap: 1rem;
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.flex-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  min-width: 120px;
  transition: transform 0.3s;
}

.flex-item:hover {
  transform: scale(1.05);
}

.shrink-0 {
  flex-shrink: 0;
}

.shrink-1 {
  flex-shrink: 1;
}

.shrink-2 {
  flex-shrink: 2;
}

.shrink-3 {
  flex-shrink: 3;
}

.note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #667eea;
  font-style: italic;
}`,
  },

  {
    property: "flex-wrap",
    description:
      "sets whether flex items are forced onto a single line or can wrap onto multiple lines.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">flex-wrap: nowrap</p>
    <div class="flex-container nowrap">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
      <div class="flex-item">Item 4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">flex-wrap: wrap</p>
    <div class="flex-container wrap">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
      <div class="flex-item">Item 4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">flex-wrap: wrap-reverse</p>
    <div class="flex-container wrap-reverse">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
      <div class="flex-item">Item 4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.flex-container {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.75rem;
}

.flex-item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 120px;
  min-height: 80px;
}

.nowrap {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
}`,
  },

  {
    property: "float",
    description:
      "places an element on the left or right side of its container, allowing text and inline elements to wrap around it.",
    htmlCode: `<div class="demo">
  <div class="float-section">
    <p class="label">float: left</p>
    <div class="float-left">Float Left</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="float-section">
    <p class="label">float: right</p>
    <div class="float-right">Float Right</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="float-section">
    <p class="label">float: none</p>
    <div class="float-none">Float None</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.float-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.float-left,
.float-right,
.float-none {
  width: 120px;
  height: 80px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.float-section p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.float-left {
  float: left;
  margin-right: 1rem;
}

.float-right {
  float: right;
  margin-left: 1rem;
}

.float-none {
  float: none;
}`,
  },

  {
    property: "font",
    description:
      "sets all the different properties of an element's font. It is a shorthand for font-style, font-variant, font-weight, font-size, line-height, and font-family.",
    htmlCode: `<div class="demo">
  <p class="font-1">12px sans-serif</p>
  <p class="font-2">italic 14px serif</p>
  <p class="font-3">bold 16px monospace</p>
  <p class="font-4">italic bold 18px cursive</p>
  <p class="font-5">small-caps 20px fantasy</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #fff5f7;
  border-left: 4px solid #fa709a;
}

.font-1 {
  font: 12px sans-serif;
}

.font-2 {
  font: italic 14px serif;
}

.font-3 {
  font: bold 16px monospace;
}

.font-4 {
  font: italic bold 18px cursive;
}

.font-5 {
  font: small-caps 20px fantasy;
}`,
  },

  {
    property: "font-family",
    description:
      "specifies a prioritized list of one or more font family names and/or generic family names for the selected element.",
    htmlCode: `<div class="demo">
  <p class="family-serif">Serif Font: Georgia, serif</p>
  <p class="family-sans">Sans-serif Font: Arial, sans-serif</p>
  <p class="family-mono">Monospace Font: Courier New, monospace</p>
  <p class="family-cursive">Cursive Font: Brush Script MT, cursive</p>
  <p class="family-fantasy">Fantasy Font: Comic Sans MS, fantasy</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #f0f4ff;
  border-left: 4px solid #667eea;
  font-size: 1.1rem;
}

.family-serif {
  font-family: Georgia, serif;
}

.family-sans {
  font-family: Arial, sans-serif;
}

.family-mono {
  font-family: "Courier New", monospace;
}

.family-cursive {
  font-family: "Brush Script MT", cursive;
}

.family-fantasy {
  font-family: "Comic Sans MS", fantasy;
}`,
  },

  {
    property: "font-size",
    description:
      "sets the size of the font. Changing the font size also updates the size of the font metrics, such as line-height.",
    htmlCode: `<div class="demo">
  <p class="size-12">12px - Extra Small</p>
  <p class="size-16">16px - Small</p>
  <p class="size-20">20px - Medium</p>
  <p class="size-24">24px - Large</p>
  <p class="size-32">32px - Extra Large</p>
  <p class="size-2em">2em - Relative Size</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: #fff5f7;
  border-left: 4px solid #f5576c;
  font-weight: 600;
}

.size-12 {
  font-size: 12px;
}

.size-16 {
  font-size: 16px;
}

.size-20 {
  font-size: 20px;
}

.size-24 {
  font-size: 24px;
}

.size-32 {
  font-size: 32px;
}

.size-2em {
  font-size: 2em;
}`,
  },

  {
    property: "font-style",
    description:
      "sets whether a font should be styled with a normal, italic, or oblique face from its font-family.",
    htmlCode: `<div class="demo">
  <p class="style-normal">font-style: normal</p>
  <p class="style-italic">font-style: italic</p>
  <p class="style-oblique">font-style: oblique</p>
  <p class="style-oblique-10">font-style: oblique 10deg</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #e0f7ff;
  border-left: 4px solid #4facfe;
  font-size: 1.1rem;
  font-weight: 600;
}

.style-normal {
  font-style: normal;
}

.style-italic {
  font-style: italic;
}

.style-oblique {
  font-style: oblique;
}

.style-oblique-10 {
  font-style: oblique 10deg;
}`,
  },

  {
    property: "font-weight",
    description:
      "sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.",
    htmlCode: `<div class="demo">
  <p class="weight-100">100 - Thin</p>
  <p class="weight-300">300 - Light</p>
  <p class="weight-400">400 - Normal</p>
  <p class="weight-600">600 - Semi-bold</p>
  <p class="weight-700">700 - Bold</p>
  <p class="weight-900">900 - Black</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: #e8fffe;
  border-left: 4px solid #43e97b;
  font-size: 1.05rem;
}

.weight-100 {
  font-weight: 100;
}

.weight-300 {
  font-weight: 300;
}

.weight-400 {
  font-weight: 400;
}

.weight-600 {
  font-weight: 600;
}

.weight-700 {
  font-weight: 700;
}

.weight-900 {
  font-weight: 900;
}`,
  },

  {
    property: "gap",
    description:
      "sets the gaps (gutters) between rows and columns in grid, flex, and multi-column layouts.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">gap: 0</p>
    <div class="grid-container gap-0">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">gap: 1rem</p>
    <div class="grid-container gap-1">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">gap: 2rem</p>
    <div class="grid-container gap-2">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.grid-item {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 100px;
}

.gap-0 {
  gap: 0;
}

.gap-1 {
  gap: 1rem;
}

.gap-2 {
  gap: 2rem;
}`,
  },

  {
    property: "grid",
    description:
      "sets all the explicit and implicit grid properties in a single declaration. It is a shorthand for grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid: auto-flow / 1fr 1fr</p>
    <div class="grid-1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid: 100px 100px / auto-flow 1fr</p>
    <div class="grid-2">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-1,
.grid-2 {
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.grid-1 {
  grid: auto-flow / 1fr 1fr;
  display: grid;
  gap: 1rem;
}

.grid-2 {
  grid: 100px 100px / auto-flow 1fr;
  display: grid;
  gap: 1rem;
}`,
  },

  {
    property: "grid-auto-columns",
    description:
      "specifies the size of an implicitly-created grid column track or pattern of tracks.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-auto-columns: auto</p>
    <div class="grid-auto-1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-auto-columns: 100px</p>
    <div class="grid-auto-2">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-auto-columns: 1fr</p>
    <div class="grid-auto-3">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-auto-1,
.grid-auto-2,
.grid-auto-3 {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(2, 80px);
  gap: 1rem;
  overflow-x: auto;
}

.item {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.grid-auto-1 {
  grid-auto-columns: auto;
}

.grid-auto-2 {
  grid-auto-columns: 100px;
}

.grid-auto-3 {
  grid-auto-columns: 1fr;
}`,
  },

  {
    property: "grid-auto-flow",
    description:
      "controls how the auto-placement algorithm works, specifying how auto-placed items get inserted into the grid.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-auto-flow: row</p>
    <div class="grid-flow-row">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-auto-flow: column</p>
    <div class="grid-flow-column">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-flow-row,
.grid-flow-column {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.grid-flow-row {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
}

.grid-flow-column {
  grid-template-rows: repeat(3, 80px);
  grid-auto-flow: column;
}`,
  },

  {
    property: "grid-auto-rows",
    description:
      "specifies the size of an implicitly-created grid row track or pattern of tracks.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-auto-rows: auto</p>
    <div class="grid-rows-auto">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-auto-rows: 100px</p>
    <div class="grid-rows-100">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-auto-rows: minmax(80px, auto)</p>
    <div class="grid-rows-minmax">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-rows-auto,
.grid-rows-100,
.grid-rows-minmax {
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.item {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.grid-rows-auto {
  grid-auto-rows: auto;
}

.grid-rows-100 {
  grid-auto-rows: 100px;
}

.grid-rows-minmax {
  grid-auto-rows: minmax(80px, auto);
}`,
  },

  {
    property: "grid-column",
    description:
      "is a shorthand property for grid-column-start and grid-column-end, specifying a grid item's size and location within the grid column.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 100px;
}

.item-1 {
  grid-column: 1 / 2;
}

.item-2 {
  grid-column: 2 / 3;
}

.item-3 {
  grid-column: 3 / 4;
}

.item-4 {
  grid-column: 1 / 3;
}

.item-5 {
  grid-column: 3 / 4;
}

.item-6 {
  grid-column: 1 / 4;
}`,
  },

  {
    property: "grid-column-end",
    description:
      "specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1: auto</div>
    <div class="item item-2">2: 2</div>
    <div class="item item-3">3: 3</div>
    <div class="item item-4">4: span 2</div>
    <div class="item item-5">5: -1</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
}

.item-1 {
  grid-column-end: auto;
}

.item-2 {
  grid-column-end: 2;
}

.item-3 {
  grid-column-end: 3;
}

.item-4 {
  grid-column-end: span 2;
}

.item-5 {
  grid-column-end: -1;
}`,
  },

  {
    property: "grid-column-start",
    description:
      "specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1: auto</div>
    <div class="item item-2">2: 1</div>
    <div class="item item-3">3: 2</div>
    <div class="item item-4">4: span 2</div>
    <div class="item item-5">5: -2</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
}

.item-1 {
  grid-column-start: auto;
}

.item-2 {
  grid-column-start: 1;
}

.item-3 {
  grid-column-start: 2;
}

.item-4 {
  grid-column-start: span 2;
}

.item-5 {
  grid-column-start: -2;
}`,
  },

  {
    property: "grid-row",
    description:
      "is a shorthand property for grid-row-start and grid-row-end, specifying a grid item's size and location within the grid row.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 100px;
}

.item-1 {
  grid-row: 1 / 2;
}

.item-2 {
  grid-row: 1 / 2;
}

.item-3 {
  grid-row: 1 / 2;
}

.item-4 {
  grid-row: 2 / 3;
}

.item-5 {
  grid-row: 2 / 4;
}

.item-6 {
  grid-row: 2 / 3;
}`,
  },

  {
    property: "grid-row-end",
    description:
      "specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1: auto</div>
    <div class="item item-2">2: 2</div>
    <div class="item item-3">3: 3</div>
    <div class="item item-4">4: span 2</div>
    <div class="item item-5">5: -1</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
}

.item-1 {
  grid-row-end: auto;
}

.item-2 {
  grid-row-end: 2;
}

.item-3 {
  grid-row-end: 3;
}

.item-4 {
  grid-row-end: span 2;
}

.item-5 {
  grid-row-end: -1;
}`,
  },

  {
    property: "grid-row-start",
    description:
      "specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item item-1">1: auto</div>
    <div class="item item-2">2: 1</div>
    <div class="item item-3">3: 2</div>
    <div class="item item-4">4: span 2</div>
    <div class="item item-5">5: -2</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
}

.item-1 {
  grid-row-start: auto;
}

.item-2 {
  grid-row-start: 1;
}

.item-3 {
  grid-row-start: 2;
}

.item-4 {
  grid-row-start: span 2;
}

.item-5 {
  grid-row-start: -2;
}`,
  },

  {
    property: "grid-template",
    description:
      "is a shorthand property for grid-template-rows, grid-template-columns, and grid-template-areas.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-template: auto / 1fr 1fr</p>
    <div class="grid-1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-template: 100px 100px / 1fr 1fr</p>
    <div class="grid-2">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-1,
.grid-2 {
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.grid-1 {
  grid-template: auto / 1fr 1fr;
}

.grid-2 {
  grid-template: 100px 100px / 1fr 1fr;
}`,
  },

  {
    property: "grid-template-areas",
    description:
      "defines a grid template by referencing the names of grid areas which are specified with the grid-area property.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
    <div class="footer">Footer</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  min-height: 400px;
}

.header {
  grid-area: header;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.main {
  grid-area: main;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.footer {
  grid-area: footer;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}`,
  },

  {
    property: "grid-template-columns",
    description:
      "defines the line names and track sizing functions of the grid columns.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-template-columns: 1fr 1fr 1fr</p>
    <div class="grid-1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-template-columns: 100px auto 100px</p>
    <div class="grid-2">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-template-columns: repeat(4, 1fr)</p>
    <div class="grid-3">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-1,
.grid-2,
.grid-3 {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 100px;
}

.grid-1 {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-2 {
  grid-template-columns: 100px auto 100px;
}

.grid-3 {
  grid-template-columns: repeat(4, 1fr);
}`,
  },

  {
    property: "grid-template-rows",
    description:
      "defines the line names and track sizing functions of the grid rows.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">grid-template-rows: 100px 100px 100px</p>
    <div class="grid-1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-template-rows: auto 1fr auto</p>
    <div class="grid-2">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">grid-template-rows: repeat(2, 80px)</p>
    <div class="grid-3">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-1,
.grid-2,
.grid-3 {
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.grid-1 {
  grid-template-rows: 100px 100px 100px;
}

.grid-2 {
  grid-template-rows: auto 1fr auto;
  min-height: 300px;
}

.grid-3 {
  grid-template-rows: repeat(2, 80px);
}`,
  },

  {
    property: "height",
    description:
      "sets the height of an element. By default, the property defines the height of the content area. It can also be used to set the height including padding, border, and margin.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box height-auto">auto</div>
    <div class="box height-100">100px</div>
    <div class="box height-150">150px</div>
    <div class="box height-50">50%</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  display: flex;
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  align-items: flex-end;
  min-height: 300px;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  flex: 1;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.height-auto {
  height: auto;
}

.height-100 {
  height: 100px;
}

.height-150 {
  height: 150px;
}

.height-50 {
  height: 50%;
}`,
  },

  {
    property: "hyphens",
    description:
      "specifies how words should be hyphenated when text wraps across multiple lines.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">hyphens: none</p>
    <p class="hyphens-none">The quick brown fox jumps over the lazy dog. Supercalifragilisticexpialidocious.</p>
  </div>
  <div class="section">
    <p class="label">hyphens: manual</p>
    <p class="hyphens-manual">The quick brown fox jumps over the lazy dog. Super&shy;cali&shy;fragilistic&shy;expialidocious.</p>
  </div>
  <div class="section">
    <p class="label">hyphens: auto</p>
    <p class="hyphens-auto">The quick brown fox jumps over the lazy dog. Supercalifragilisticexpialidocious.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  line-height: 1.6;
  margin: 0;
  width: 200px;
}

.hyphens-none {
  hyphens: none;
}

.hyphens-manual {
  hyphens: manual;
}

.hyphens-auto {
  hyphens: auto;
  lang: en;
}`,
  },

  {
    property: "justify-content",
    description:
      "defines how the browser distributes space between and around content items along the main-axis of a flex container or inline axis of a grid container.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">justify-content: flex-start</p>
    <div class="flex-container flex-start">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">justify-content: center</p>
    <div class="flex-container center">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">justify-content: space-between</p>
    <div class="flex-container space-between">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
  <div class="section">
    <p class="label">justify-content: space-around</p>
    <div class="flex-container space-around">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.flex-container {
  display: flex;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  min-height: 100px;
  gap: 0.5rem;
}

.item {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-width: 60px;
}

.flex-start {
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}`,
  },

  {
    property: "justify-items",
    description:
      "defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">justify-items: start</p>
    <div class="grid-container justify-start">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">justify-items: center</p>
    <div class="grid-container justify-center">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">justify-items: end</p>
    <div class="grid-container justify-end">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 80px;
}

.justify-start {
  justify-items: start;
}

.justify-center {
  justify-items: center;
}

.justify-end {
  justify-items: end;
}`,
  },

  {
    property: "justify-self",
    description:
      "sets the way a box is justified inside its alignment container along the appropriate axis.",
    htmlCode: `<div class="demo">
  <div class="grid-container">
    <div class="item self-auto">auto</div>
    <div class="item self-start">start</div>
    <div class="item self-center">center</div>
    <div class="item self-end">end</div>
    <div class="item self-stretch">stretch</div>
    <div class="item self-baseline">baseline</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 100px;
}

.self-auto {
  justify-self: auto;
}

.self-start {
  justify-self: start;
}

.self-center {
  justify-self: center;
}

.self-end {
  justify-self: end;
}

.self-stretch {
  justify-self: stretch;
}

.self-baseline {
  justify-self: baseline;
}`,
  },

  {
    property: "left",
    description:
      "specifies the distance a positioned element is offset to the right from the left edge of its containing block.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box left-0">left: 0</div>
    <div class="box left-50">left: 50px</div>
    <div class="box left-100">left: 100px</div>
    <div class="box left-auto">left: auto</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  position: relative;
  background: #fff5f7;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 300px;
  border: 2px dashed #fa709a;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 100px;
  text-align: center;
  transition: left 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.left-0 {
  left: 0;
  top: 20px;
}

.left-50 {
  left: 50px;
  top: 100px;
}

.left-100 {
  left: 100px;
  top: 180px;
}

.left-auto {
  left: auto;
  right: 20px;
  top: 260px;
}`,
  },

  {
    property: "letter-spacing",
    description:
      "sets the horizontal spacing behavior between text characters. It defines space instead of the default space between characters.",
    htmlCode: `<div class="demo">
  <p class="spacing-normal">letter-spacing: normal</p>
  <p class="spacing-2">letter-spacing: 2px</p>
  <p class="spacing-4">letter-spacing: 4px</p>
  <p class="spacing-6">letter-spacing: 6px</p>
  <p class="spacing-negative">letter-spacing: -1px</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #f0f4ff;
  border-left: 4px solid #667eea;
  font-size: 1.1rem;
  font-weight: 600;
}

.spacing-normal {
  letter-spacing: normal;
}

.spacing-2 {
  letter-spacing: 2px;
}

.spacing-4 {
  letter-spacing: 4px;
}

.spacing-6 {
  letter-spacing: 6px;
}

.spacing-negative {
  letter-spacing: -1px;
}`,
  },

  {
    property: "line-height",
    description:
      "sets the height of a line box. It's commonly used to set the distance between lines of text.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">line-height: normal</p>
    <p class="height-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">line-height: 1.5</p>
    <p class="height-1-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">line-height: 2</p>
    <p class="height-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
}

.height-normal {
  line-height: normal;
}

.height-1-5 {
  line-height: 1.5;
}

.height-2 {
  line-height: 2;
}`,
  },

  {
    property: "list-style",
    description:
      "is a shorthand property for setting list-style-type, list-style-image, and list-style-position.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">list-style: disc</p>
    <ul class="style-disc">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style: circle</p>
    <ul class="style-circle">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style: square</p>
    <ul class="style-square">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style: none</p>
    <ul class="style-none">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section ul {
  margin: 0;
  padding-left: 1.5rem;
}

.section li {
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.style-disc {
  list-style: disc;
}

.style-circle {
  list-style: circle;
}

.style-square {
  list-style: square;
}

.style-none {
  list-style: none;
}`,
  },

  {
    property: "list-style-image",
    description:
      "sets an image to be used as the list item marker. It can also be set to none to remove a previously set image.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">list-style-image: none</p>
    <ul class="image-none">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style-image: url(...)</p>
    <ul class="image-custom">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section ul {
  margin: 0;
  padding-left: 1.5rem;
}

.section li {
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.image-none {
  list-style-image: none;
  list-style-type: disc;
}

.image-custom {
  list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2343e97b'/%3E%3C/svg%3E");
}`,
  },

  {
    property: "list-style-position",
    description:
      "sets the position of the ::marker relative to a list item. It can be inside or outside the list item's content.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">list-style-position: outside</p>
    <ul class="position-outside">
      <li>Item One - Lorem ipsum dolor sit amet</li>
      <li>Item Two - Consectetur adipiscing elit</li>
      <li>Item Three - Sed do eiusmod tempor</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style-position: inside</p>
    <ul class="position-inside">
      <li>Item One - Lorem ipsum dolor sit amet</li>
      <li>Item Two - Consectetur adipiscing elit</li>
      <li>Item Three - Sed do eiusmod tempor</li>
    </ul>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section ul {
  margin: 0;
  padding-left: 2rem;
}

.section li {
  color: #333;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
}

.position-outside {
  list-style-position: outside;
}

.position-inside {
  list-style-position: inside;
}`,
  },

  {
    property: "list-style-type",
    description:
      "sets the marker (such as a disc, character, or custom counter style) of a list item element.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">list-style-type: disc</p>
    <ul class="type-disc">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style-type: decimal</p>
    <ul class="type-decimal">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style-type: lower-alpha</p>
    <ul class="type-lower-alpha">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
  <div class="section">
    <p class="label">list-style-type: upper-roman</p>
    <ul class="type-upper-roman">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section ul {
  margin: 0;
  padding-left: 1.5rem;
}

.section li {
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.type-disc {
  list-style-type: disc;
}

.type-decimal {
  list-style-type: decimal;
}

.type-lower-alpha {
  list-style-type: lower-alpha;
}

.type-upper-roman {
  list-style-type: upper-roman;
}`,
  },

  {
    property: "margin",
    description:
      "sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box margin-0">margin: 0</div>
    <div class="box margin-10">margin: 10px</div>
    <div class="box margin-20">margin: 20px</div>
    <div class="box margin-mixed">margin: 10px 20px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #f5576c;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.margin-0 {
  margin: 0;
}

.margin-10 {
  margin: 10px;
}

.margin-20 {
  margin: 20px;
}

.margin-mixed {
  margin: 10px 20px;
}`,
  },

  {
    property: "margin-bottom",
    description:
      "sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box mb-0">margin-bottom: 0</div>
    <div class="box mb-10">margin-bottom: 10px</div>
    <div class="box mb-20">margin-bottom: 20px</div>
    <div class="box mb-30">margin-bottom: 30px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #4facfe;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
}

.mb-0 {
  margin-bottom: 0;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}`,
  },

  {
    property: "margin-left",
    description:
      "sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box ml-0">margin-left: 0</div>
    <div class="box ml-20">margin-left: 20px</div>
    <div class="box ml-40">margin-left: 40px</div>
    <div class="box ml-60">margin-left: 60px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #43e97b;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.ml-0 {
  margin-left: 0;
}

.ml-20 {
  margin-left: 20px;
}

.ml-40 {
  margin-left: 40px;
}

.ml-60 {
  margin-left: 60px;
}`,
  },

  {
    property: "margin-right",
    description:
      "sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box mr-0">margin-right: 0</div>
    <div class="box mr-20">margin-right: 20px</div>
    <div class="box mr-40">margin-right: 40px</div>
    <div class="box mr-60">margin-right: 60px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #fa709a;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
  min-width: 150px;
}

.mr-0 {
  margin-right: 0;
}

.mr-20 {
  margin-right: 20px;
}

.mr-40 {
  margin-right: 40px;
}

.mr-60 {
  margin-right: 60px;
}`,
  },

  {
    property: "margin-top",
    description:
      "sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box mt-0">margin-top: 0</div>
    <div class="box mt-20">margin-top: 20px</div>
    <div class="box mt-40">margin-top: 40px</div>
    <div class="box mt-60">margin-top: 60px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #667eea;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
}

.mt-0 {
  margin-top: 0;
}

.mt-20 {
  margin-top: 20px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-60 {
  margin-top: 60px;
}`,
  },

  {
    property: "max-height",
    description:
      "sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">max-height: 100px</p>
    <div class="box max-100">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">max-height: 150px</p>
    <div class="box max-150">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">max-height: none</p>
    <div class="box max-none">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #f5576c;
  overflow: hidden;
}

.box p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.max-100 {
  max-height: 100px;
}

.max-150 {
  max-height: 150px;
}

.max-none {
  max-height: none;
}`,
  },

  {
    property: "max-width",
    description:
      "sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified for max-width.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">max-width: 150px</p>
    <div class="box max-150">Box</div>
  </div>
  <div class="section">
    <p class="label">max-width: 250px</p>
    <div class="box max-250">Box</div>
  </div>
  <div class="section">
    <p class="label">max-width: 100%</p>
    <div class="box max-100">Box</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.max-150 {
  max-width: 150px;
}

.max-250 {
  max-width: 250px;
}

.max-100 {
  max-width: 100%;
}`,
  },

  {
    property: "min-height",
    description:
      "sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">min-height: 80px</p>
    <div class="box min-80">Box</div>
  </div>
  <div class="section">
    <p class="label">min-height: 150px</p>
    <div class="box min-150">Box</div>
  </div>
  <div class="section">
    <p class="label">min-height: 200px</p>
    <div class="box min-200">Box</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.min-80 {
  min-height: 80px;
}

.min-150 {
  min-height: 150px;
}

.min-200 {
  min-height: 200px;
}`,
  },

  {
    property: "min-width",
    description:
      "sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">min-width: 100px</p>
    <div class="box min-100">Box</div>
  </div>
  <div class="section">
    <p class="label">min-width: 200px</p>
    <div class="box min-200">Box</div>
  </div>
  <div class="section">
    <p class="label">min-width: 300px</p>
    <div class="box min-300">Box</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 80px;
}

.min-100 {
  min-width: 100px;
}

.min-200 {
  min-width: 200px;
}

.min-300 {
  min-width: 300px;
}`,
  },

  {
    property: "mix-blend-mode",
    description:
      "defines how an element's content should blend with its background.",
    htmlCode: `<div class="demo">
  <div class="blend multiply">multiply</div>
  <div class="blend screen">screen</div>
  <div class="blend overlay">overlay</div>
  <div class="blend darken">darken</div>
  <div class="blend lighten">lighten</div>
  <div class="blend color-dodge">color-dodge</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.blend {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF6B6B' width='50' height='50'/%3E%3Crect fill='%234ECDC4' x='50' width='50' height='50'/%3E%3Crect fill='%23FFE66D' y='50' width='50' height='50'/%3E%3Crect fill='%2395E1D3' x='50' y='50' width='50' height='50'/%3E%3C/svg%3E");
  background-size: 100px;
  background-color: #667eea;
  font-size: 0.85rem;
}

.multiply {
  mix-blend-mode: multiply;
}

.screen {
  mix-blend-mode: screen;
}

.overlay {
  mix-blend-mode: overlay;
}

.darken {
  mix-blend-mode: darken;
}

.lighten {
  mix-blend-mode: lighten;
}

.color-dodge {
  mix-blend-mode: color-dodge;
}`,
  },

  {
    property: "object-fit",
    description:
      "sets how the content of a replaced element, such as an img or video, should be resized to fit its container.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">object-fit: fill</p>
    <div class="container">
      <div class="box fill"></div>
    </div>
  </div>
  <div class="section">
    <p class="label">object-fit: contain</p>
    <div class="container">
      <div class="box contain"></div>
    </div>
  </div>
  <div class="section">
    <p class="label">object-fit: cover</p>
    <div class="container">
      <div class="box cover"></div>
    </div>
  </div>
  <div class="section">
    <p class="label">object-fit: scale-down</p>
    <div class="container">
      <div class="box scale-down"></div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.container {
  width: 100%;
  height: 150px;
  background: #fff5f7;
  border-radius: 8px;
  border: 2px solid #f5576c;
  overflow: hidden;
}

.box {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.scale-down {
  object-fit: scale-down;
}`,
  },

  {
    property: "object-position",
    description:
      "determines the alignment of the replaced element inside its box.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">object-position: top left</p>
    <div class="container top-left"></div>
  </div>
  <div class="section">
    <p class="label">object-position: center</p>
    <div class="container center"></div>
  </div>
  <div class="section">
    <p class="label">object-position: bottom right</p>
    <div class="container bottom-right"></div>
  </div>
  <div class="section">
    <p class="label">object-position: 25% 75%</p>
    <div class="container custom"></div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.container {
  width: 100%;
  height: 150px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%234facfe' width='200' height='200'/%3E%3Ccircle cx='100' cy='100' r='50' fill='%2300f2fe'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  border-radius: 8px;
  border: 2px solid #4facfe;
  overflow: hidden;
}

.top-left {
  object-position: top left;
}

.center {
  object-position: center;
}

.bottom-right {
  object-position: bottom right;
}

.custom {
  object-position: 25% 75%;
}`,
  },

  {
    property: "opacity",
    description:
      "sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.",
    htmlCode: `<div class="demo">
  <div class="box opacity-0">opacity: 0</div>
  <div class="box opacity-25">opacity: 0.25</div>
  <div class="box opacity-50">opacity: 0.5</div>
  <div class="box opacity-75">opacity: 0.75</div>
  <div class="box opacity-100">opacity: 1</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  min-height: 100px;
  transition: opacity 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.opacity-0 {
  opacity: 0;
}

.opacity-25 {
  opacity: 0.25;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-100 {
  opacity: 1;
}`,
  },

  {
    property: "order",
    description:
      "sets the order to lay out a flex or grid item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.",
    htmlCode: `<div class="demo">
  <div class="flex-container">
    <div class="item order-3">Order: 3</div>
    <div class="item order-1">Order: 1</div>
    <div class="item order-4">Order: 4</div>
    <div class="item order-2">Order: 2</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  gap: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
}

.item {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  flex: 1;
  min-height: 100px;
  transition: transform 0.3s;
}

.item:hover {
  transform: scale(1.05);
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}`,
  },

  {
    property: "outline",
    description:
      "is a shorthand property for setting outline-style, outline-width, and outline-color in a single declaration.",
    htmlCode: `<div class="demo">
  <div class="box outline-1">2px solid</div>
  <div class="box outline-2">3px dashed</div>
  <div class="box outline-3">4px dotted</div>
  <div class="box outline-4">5px double</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #667eea;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.outline-1 {
  outline: 2px solid #667eea;
}

.outline-2 {
  outline: 3px dashed #667eea;
}

.outline-3 {
  outline: 4px dotted #667eea;
}

.outline-4 {
  outline: 5px double #667eea;
}`,
  },

  {
    property: "outline-color",
    description:
      "sets the color of an element's outline.",
    htmlCode: `<div class="demo">
  <div class="box color-red">Red</div>
  <div class="box color-blue">Blue</div>
  <div class="box color-green">Green</div>
  <div class="box color-purple">Purple</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #333;
  outline: 3px solid;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.color-red {
  outline-color: #ff6b6b;
}

.color-blue {
  outline-color: #4facfe;
}

.color-green {
  outline-color: #43e97b;
}

.color-purple {
  outline-color: #764ba2;
}`,
  },

  {
    property: "outline-offset",
    description:
      "sets the amount of space between an outline and the edge or border of an element.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">outline-offset: 0</p>
    <div class="box offset-0">Box</div>
  </div>
  <div class="section">
    <p class="label">outline-offset: 5px</p>
    <div class="box offset-5">Box</div>
  </div>
  <div class="section">
    <p class="label">outline-offset: 10px</p>
    <div class="box offset-10">Box</div>
  </div>
  <div class="section">
    <p class="label">outline-offset: -5px</p>
    <div class="box offset-neg">Box</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4facfe;
  outline: 2px solid #4facfe;
  min-height: 80px;
}

.offset-0 {
  outline-offset: 0;
}

.offset-5 {
  outline-offset: 5px;
}

.offset-10 {
  outline-offset: 10px;
}

.offset-neg {
  outline-offset: -5px;
}`,
  },

  {
    property: "outline-style",
    description:
      "sets the style of an element's outline. An outline is a line that is drawn around elements, outside the border edge.",
    htmlCode: `<div class="demo">
  <div class="box style-solid">solid</div>
  <div class="box style-dashed">dashed</div>
  <div class="box style-dotted">dotted</div>
  <div class="box style-double">double</div>
  <div class="box style-groove">groove</div>
  <div class="box style-ridge">ridge</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #43e97b;
  outline: 3px;
  outline-color: #43e97b;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.style-solid {
  outline-style: solid;
}

.style-dashed {
  outline-style: dashed;
}

.style-dotted {
  outline-style: dotted;
}

.style-double {
  outline-style: double;
}

.style-groove {
  outline-style: groove;
}

.style-ridge {
  outline-style: ridge;
}`,
  },

  {
    property: "outline-width",
    description:
      "sets the width (thickness) of an element's outline.",
    htmlCode: `<div class="demo">
  <div class="box width-thin">thin</div>
  <div class="box width-medium">medium</div>
  <div class="box width-thick">thick</div>
  <div class="box width-2">2px</div>
  <div class="box width-4">4px</div>
  <div class="box width-6">6px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fa709a;
  outline-style: solid;
  outline-color: #fa709a;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.width-thin {
  outline-width: thin;
}

.width-medium {
  outline-width: medium;
}

.width-thick {
  outline-width: thick;
}

.width-2 {
  outline-width: 2px;
}

.width-4 {
  outline-width: 4px;
}

.width-6 {
  outline-width: 6px;
}`,
  },

  {
    property: "overflow",
    description:
      "sets what happens to content that is too big to fit in an element. It is a shorthand for overflow-x and overflow-y.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">overflow: visible</p>
    <div class="box visible">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow: hidden</p>
    <div class="box hidden">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow: scroll</p>
    <div class="box scroll">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow: auto</p>
    <div class="box auto">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #667eea;
  height: 100px;
}

.box p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.visible {
  overflow: visible;
}

.hidden {
  overflow: hidden;
}

.scroll {
  overflow: scroll;
}

.auto {
  overflow: auto;
}`,
  },

  {
    property: "overflow-x",
    description:
      "sets what happens to content that is too big to fit horizontally in an element.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">overflow-x: visible</p>
    <div class="box visible">
      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</div>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow-x: hidden</p>
    <div class="box hidden">
      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</div>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow-x: scroll</p>
    <div class="box scroll">
      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #f5576c;
  width: 100%;
  height: 80px;
}

.content {
  color: #333;
  font-weight: 600;
  white-space: nowrap;
}

.visible {
  overflow-x: visible;
}

.hidden {
  overflow-x: hidden;
}

.scroll {
  overflow-x: scroll;
}`,
  },

  {
    property: "overflow-y",
    description:
      "sets what happens to content that is too big to fit vertically in an element.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">overflow-y: visible</p>
    <div class="box visible">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow-y: hidden</p>
    <div class="box hidden">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="section">
    <p class="label">overflow-y: scroll</p>
    <div class="box scroll">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #4facfe;
  height: 100px;
}

.box p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.visible {
  overflow-y: visible;
}

.hidden {
  overflow-y: hidden;
}

.scroll {
  overflow-y: scroll;
}`,
  },

  {
    property: "padding",
    description:
      "sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.",
    htmlCode: `<div class="demo">
  <div class="box padding-0">padding: 0</div>
  <div class="box padding-10">padding: 10px</div>
  <div class="box padding-20">padding: 20px</div>
  <div class="box padding-mixed">padding: 10px 20px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.padding-0 {
  padding: 0;
}

.padding-10 {
  padding: 10px;
}

.padding-20 {
  padding: 20px;
}

.padding-mixed {
  padding: 10px 20px;
}`,
  },

  {
    property: "padding-bottom",
    description:
      "sets the height of the padding area on the bottom of an element.",
    htmlCode: `<div class="demo">
  <div class="box pb-0">padding-bottom: 0</div>
  <div class="box pb-10">padding-bottom: 10px</div>
  <div class="box pb-20">padding-bottom: 20px</div>
  <div class="box pb-30">padding-bottom: 30px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border: 2px dashed rgba(255, 255, 255, 0.5);
}

.pb-0 {
  padding-bottom: 0;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-30 {
  padding-bottom: 30px;
}`,
  },

  {
    property: "padding-left",
    description:
      "sets the width of the padding area on the left side of an element.",
    htmlCode: `<div class="demo">
  <div class="box pl-0">padding-left: 0</div>
  <div class="box pl-20">padding-left: 20px</div>
  <div class="box pl-40">padding-left: 40px</div>
  <div class="box pl-60">padding-left: 60px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border: 2px dashed rgba(255, 255, 255, 0.5);
}

.pl-0 {
  padding-left: 0;
}

.pl-20 {
  padding-left: 20px;
}

.pl-40 {
  padding-left: 40px;
}

.pl-60 {
  padding-left: 60px;
}`,
  },

  {
    property: "padding-right",
    description:
      "sets the width of the padding area on the right side of an element.",
    htmlCode: `<div class="demo">
  <div class="box pr-0">padding-right: 0</div>
  <div class="box pr-20">padding-right: 20px</div>
  <div class="box pr-40">padding-right: 40px</div>
  <div class="box pr-60">padding-right: 60px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  text-align: right;
}

.pr-0 {
  padding-right: 0;
}

.pr-20 {
  padding-right: 20px;
}

.pr-40 {
  padding-right: 40px;
}

.pr-60 {
  padding-right: 60px;
}`,
  },

  {
    property: "padding-top",
    description:
      "sets the height of the padding area on the top of an element.",
    htmlCode: `<div class="demo">
  <div class="box pt-0">padding-top: 0</div>
  <div class="box pt-10">padding-top: 10px</div>
  <div class="box pt-20">padding-top: 20px</div>
  <div class="box pt-30">padding-top: 30px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border: 2px dashed rgba(255, 255, 255, 0.5);
}

.pt-0 {
  padding-top: 0;
}

.pt-10 {
  padding-top: 10px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-30 {
  padding-top: 30px;
}`,
  },

  {
    property: "position",
    description:
      "sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">position: static</p>
    <div class="box static">Static</div>
  </div>
  <div class="section">
    <p class="label">position: relative</p>
    <div class="box relative">Relative</div>
  </div>
  <div class="section">
    <p class="label">position: absolute</p>
    <div class="container">
      <div class="box absolute">Absolute</div>
    </div>
  </div>
  <div class="section">
    <p class="label">position: fixed</p>
    <div class="box fixed">Fixed</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  background: #e8fffe;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 120px;
  border: 2px dashed #43e97b;
}

.static {
  position: static;
}

.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 20px;
  right: 20px;
}

.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
  },

  {
    property: "right",
    description:
      "specifies the distance a positioned element is offset to the left from the right edge of its containing block.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box right-0">right: 0</div>
    <div class="box right-50">right: 50px</div>
    <div class="box right-100">right: 100px</div>
    <div class="box right-auto">right: auto</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  position: relative;
  background: #fff5f7;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 300px;
  border: 2px dashed #fa709a;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 100px;
  text-align: center;
  transition: right 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.right-0 {
  right: 0;
  top: 20px;
}

.right-50 {
  right: 50px;
  top: 100px;
}

.right-100 {
  right: 100px;
  top: 180px;
}

.right-auto {
  right: auto;
  left: 20px;
  top: 260px;
}`,
  },

  {
    property: "text-align",
    description:
      "sets the horizontal alignment of the inline-level content inside a block element or table-cell box.",
    htmlCode: `<div class="demo">
  <p class="align-left">text-align: left - Lorem ipsum dolor sit amet</p>
  <p class="align-center">text-align: center - Lorem ipsum dolor sit amet</p>
  <p class="align-right">text-align: right - Lorem ipsum dolor sit amet</p>
  <p class="align-justify">text-align: justify - Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #f0f4ff;
  border-left: 4px solid #667eea;
  color: #333;
  line-height: 1.6;
  font-weight: 600;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.align-justify {
  text-align: justify;
}`,
  },

  {
    property: "text-decoration",
    description:
      "sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, and text-decoration-style.",
    htmlCode: `<div class="demo">
  <p class="decoration-none">text-decoration: none</p>
  <p class="decoration-underline">text-decoration: underline</p>
  <p class="decoration-overline">text-decoration: overline</p>
  <p class="decoration-line-through">text-decoration: line-through</p>
  <p class="decoration-custom">text-decoration: underline wavy red</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #fff5f7;
  border-left: 4px solid #f5576c;
  color: #333;
  font-weight: 600;
  font-size: 1.05rem;
}

.decoration-none {
  text-decoration: none;
}

.decoration-underline {
  text-decoration: underline;
}

.decoration-overline {
  text-decoration: overline;
}

.decoration-line-through {
  text-decoration: line-through;
}

.decoration-custom {
  text-decoration: underline wavy #f5576c;
}`,
  },

  {
    property: "text-indent",
    description:
      "sets the length of empty space (indentation) that is put before lines of text in a block.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">text-indent: 0</p>
    <p class="indent-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">text-indent: 2em</p>
    <p class="indent-2em">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">text-indent: 40px</p>
    <p class="indent-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.indent-0 {
  text-indent: 0;
}

.indent-2em {
  text-indent: 2em;
}

.indent-40 {
  text-indent: 40px;
}`,
  },

  {
    property: "text-overflow",
    description:
      "sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis, or display a custom string.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">text-overflow: clip</p>
    <div class="box clip">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>
  <div class="section">
    <p class="label">text-overflow: ellipsis</p>
    <div class="box ellipsis">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: #e8fffe;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #43e97b;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.box p {
  color: #333;
  margin: 0;
  font-weight: 600;
}

.clip {
  text-overflow: clip;
}

.ellipsis {
  text-overflow: ellipsis;
}`,
  },

  {
    property: "text-shadow",
    description:
      "adds one or more shadows to text. Each shadow is specified by some combination of X and Y offsets from the element, blur radius, and color.",
    htmlCode: `<div class="demo">
  <p class="shadow-none">No Shadow</p>
  <p class="shadow-simple">Simple Shadow</p>
  <p class="shadow-multiple">Multiple Shadows</p>
  <p class="shadow-glow">Glow Effect</p>
  <p class="shadow-3d">3D Effect</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #fff5f7;
  border-left: 4px solid #fa709a;
  color: #333;
  font-weight: 700;
  font-size: 1.3rem;
}

.shadow-none {
  text-shadow: none;
}

.shadow-simple {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.shadow-multiple {
  text-shadow: 2px 2px 4px #fa709a, -2px -2px 4px #fee140;
}

.shadow-glow {
  text-shadow: 0 0 10px #fa709a, 0 0 20px #fee140;
  color: #fa709a;
}

.shadow-3d {
  text-shadow: 1px 1px 0 #fa709a, 2px 2px 0 #fee140, 3px 3px 0 #f5576c;
}`,
  },

  {
    property: "text-transform",
    description:
      "specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, regardless of the original case.",
    htmlCode: `<div class="demo">
  <p class="transform-none">text-transform: none</p>
  <p class="transform-uppercase">text-transform: uppercase</p>
  <p class="transform-lowercase">text-transform: lowercase</p>
  <p class="transform-capitalize">text-transform: capitalize</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #f0f4ff;
  border-left: 4px solid #667eea;
  color: #333;
  font-weight: 600;
  font-size: 1.05rem;
}

.transform-none {
  text-transform: none;
}

.transform-uppercase {
  text-transform: uppercase;
}

.transform-lowercase {
  text-transform: lowercase;
}

.transform-capitalize {
  text-transform: capitalize;
}`,
  },

  {
    property: "top",
    description:
      "specifies the distance a positioned element is offset downward from the top edge of its containing block.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box top-0">top: 0</div>
    <div class="box top-50">top: 50px</div>
    <div class="box top-100">top: 100px</div>
    <div class="box top-auto">top: auto</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  position: relative;
  background: #fff5f7;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 300px;
  border: 2px dashed #f5576c;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 100px;
  text-align: center;
  transition: top 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.top-0 {
  top: 0;
  left: 20px;
}

.top-50 {
  top: 50px;
  left: 150px;
}

.top-100 {
  top: 100px;
  left: 280px;
}

.top-auto {
  top: auto;
  bottom: 20px;
  left: 20px;
}`,
  },

  {
    property: "transform",
    description:
      "lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.",
    htmlCode: `<div class="demo">
  <div class="box transform-rotate">rotate(45deg)</div>
  <div class="box transform-scale">scale(1.5)</div>
  <div class="box transform-skew">skew(20deg)</div>
  <div class="box transform-translate">translate(20px, 20px)</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.1);
}

.transform-rotate {
  transform: rotate(45deg);
}

.transform-scale {
  transform: scale(1.5);
}

.transform-skew {
  transform: skew(20deg);
}

.transform-translate {
  transform: translate(20px, 20px);
}`,
  },

  {
    property: "transform-origin",
    description:
      "sets the origin for an element's transformations.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">transform-origin: top left</p>
    <div class="box origin-top-left">Rotate</div>
  </div>
  <div class="section">
    <p class="label">transform-origin: center</p>
    <div class="box origin-center">Rotate</div>
  </div>
  <div class="section">
    <p class="label">transform-origin: bottom right</p>
    <div class="box origin-bottom-right">Rotate</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: rotate(45deg);
}

.origin-top-left {
  transform-origin: top left;
}

.origin-center {
  transform-origin: center;
}

.origin-bottom-right {
  transform-origin: bottom right;
}`,
  },

  {
    property: "transform-style",
    description:
      "sets whether children of an element are positioned in the 3D space or flattened in the plane of the element.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">transform-style: flat</p>
    <div class="container flat">
      <div class="cube-face front">Front</div>
      <div class="cube-face back">Back</div>
    </div>
  </div>
  <div class="section">
    <p class="label">transform-style: preserve-3d</p>
    <div class="container preserve">
      <div class="cube-face front">Front</div>
      <div class="cube-face back">Back</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.container {
  perspective: 1000px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
}

.cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 8px;
  transition: transform 0.6s;
}

.front {
  z-index: 2;
}

.back {
  transform: rotateY(180deg);
  z-index: 1;
}

.container:hover .cube-face {
  transform: rotateY(180deg);
}

.flat {
  transform-style: flat;
}

.preserve {
  transform-style: preserve-3d;
}`,
  },

  {
    property: "transition",
    description:
      "is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.",
    htmlCode: `<div class="demo">
  <div class="box transition-1">Fade</div>
  <div class="box transition-2">Scale</div>
  <div class="box transition-3">Slide</div>
  <div class="box transition-4">Rotate</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 120px;
  cursor: pointer;
}

.transition-1 {
  transition: opacity 0.3s ease;
}

.transition-1:hover {
  opacity: 0.5;
}

.transition-2 {
  transition: transform 0.3s ease;
}

.transition-2:hover {
  transform: scale(1.2);
}

.transition-3 {
  transition: transform 0.3s ease;
}

.transition-3:hover {
  transform: translateX(20px);
}

.transition-4 {
  transition: transform 0.3s ease;
}

.transition-4:hover {
  transform: rotate(45deg);
}`,
  },

  {
    property: "transition-delay",
    description:
      "specifies the amount of time to wait before a transition effect starts.",
    htmlCode: `<div class="demo">
  <div class="box delay-0">delay: 0s</div>
  <div class="box delay-1">delay: 0.5s</div>
  <div class="box delay-2">delay: 1s</div>
  <div class="box delay-3">delay: 1.5s</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 120px;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.box:hover {
  transform: scale(1.1);
}

.delay-0 {
  transition-delay: 0s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 1s;
}

.delay-3 {
  transition-delay: 1.5s;
}`,
  },

  {
    property: "transition-duration",
    description:
      "sets the length of time that a transition animation takes to complete.",
    htmlCode: `<div class="demo">
  <div class="box duration-1">0.2s</div>
  <div class="box duration-2">0.5s</div>
  <div class="box duration-3">1s</div>
  <div class="box duration-4">2s</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 120px;
  cursor: pointer;
  transition-property: transform;
  transition-timing-function: ease;
}

.box:hover {
  transform: scale(1.2);
}

.duration-1 {
  transition-duration: 0.2s;
}

.duration-2 {
  transition-duration: 0.5s;
}

.duration-3 {
  transition-duration: 1s;
}

.duration-4 {
  transition-duration: 2s;
}`,
  },

  {
    property: "transition-property",
    description:
      "specifies the names of the CSS properties to which a transition effect should be applied.",
    htmlCode: `<div class="demo">
  <div class="box prop-opacity">opacity</div>
  <div class="box prop-transform">transform</div>
  <div class="box prop-background">background</div>
  <div class="box prop-all">all</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 120px;
  cursor: pointer;
  transition-duration: 0.5s;
}

.box:hover {
  opacity: 0.7;
  transform: scale(1.1);
  background: linear-gradient(135deg, #38f9d7 0%, #43e97b 100%);
}

.prop-opacity {
  transition-property: opacity;
}

.prop-transform {
  transition-property: transform;
}

.prop-background {
  transition-property: background;
}

.prop-all {
  transition-property: all;
}`,
  },

  {
    property: "transition-timing-function",
    description:
      "specifies how intermediate values are calculated for CSS properties being affected by a transition effect.",
    htmlCode: `<div class="demo">
  <div class="box timing-linear">linear</div>
  <div class="box timing-ease">ease</div>
  <div class="box timing-ease-in">ease-in</div>
  <div class="box timing-ease-out">ease-out</div>
  <div class="box timing-ease-in-out">ease-in-out</div>
  <div class="box timing-cubic">cubic-bezier</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  min-height: 100px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 1s;
}

.box:hover {
  transform: translateY(-20px);
}

.timing-linear {
  transition-timing-function: linear;
}

.timing-ease {
  transition-timing-function: ease;
}

.timing-ease-in {
  transition-timing-function: ease-in;
}

.timing-ease-out {
  transition-timing-function: ease-out;
}

.timing-ease-in-out {
  transition-timing-function: ease-in-out;
}

.timing-cubic {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
  },

  {
    property: "unicode-bidi",
    description:
      "works alongside the direction property to set or return whether text should be overridden to support multiple languages in the same document.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">unicode-bidi: normal</p>
    <p class="bidi-normal">Hello مرحبا World</p>
  </div>
  <div class="section">
    <p class="label">unicode-bidi: embed</p>
    <p class="bidi-embed">Hello مرحبا World</p>
  </div>
  <div class="section">
    <p class="label">unicode-bidi: bidi-override</p>
    <p class="bidi-override">Hello مرحبا World</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.05rem;
}

.bidi-normal {
  unicode-bidi: normal;
}

.bidi-embed {
  unicode-bidi: embed;
}

.bidi-override {
  unicode-bidi: bidi-override;
}`,
  },

  {
    property: "user-select",
    description:
      "controls whether the user can select text. It can be used to prevent text selection or allow it.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">user-select: auto</p>
    <p class="select-auto">This text can be selected</p>
  </div>
  <div class="section">
    <p class="label">user-select: none</p>
    <p class="select-none">This text cannot be selected</p>
  </div>
  <div class="section">
    <p class="label">user-select: text</p>
    <p class="select-text">This text can be selected</p>
  </div>
  <div class="section">
    <p class="label">user-select: all</p>
    <p class="select-all">Select all text at once</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
}

.select-auto {
  user-select: auto;
}

.select-none {
  user-select: none;
}

.select-text {
  user-select: text;
}

.select-all {
  user-select: all;
}`,
  },

  {
    property: "vertical-align",
    description:
      "sets the vertical alignment of an inline, inline-block or table-cell box.",
    htmlCode: `<div class="demo">
  <div class="container">
    <span class="align-baseline">baseline</span>
    <span class="align-top">top</span>
    <span class="align-middle">middle</span>
    <span class="align-bottom">bottom</span>
    <span class="align-text-top">text-top</span>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 2rem 1rem;
  border: 2px solid #4facfe;
  line-height: 3;
  font-size: 1.2rem;
}

.container span {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin: 0 0.5rem;
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
}

.align-baseline {
  vertical-align: baseline;
}

.align-top {
  vertical-align: top;
}

.align-middle {
  vertical-align: middle;
}

.align-bottom {
  vertical-align: bottom;
}

.align-text-top {
  vertical-align: text-top;
}`,
  },

  {
    property: "visibility",
    description:
      "sets whether an element is visible or hidden. Hidden elements still take up space in the layout.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">visibility: visible</p>
    <div class="box visible">Visible</div>
  </div>
  <div class="section">
    <p class="label">visibility: hidden</p>
    <div class="box hidden">Hidden (takes space)</div>
  </div>
  <div class="section">
    <p class="label">visibility: collapse</p>
    <div class="box collapse">Collapse</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 100px;
}

.visible {
  visibility: visible;
}

.hidden {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}`,
  },

  {
    property: "white-space",
    description:
      "sets how white space inside an element is handled. It can preserve spaces and line breaks or collapse them.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">white-space: normal</p>
    <p class="space-normal">This    has     multiple     spaces     and
    line breaks</p>
  </div>
  <div class="section">
    <p class="label">white-space: pre</p>
    <p class="space-pre">This    has     multiple     spaces     and
    line breaks</p>
  </div>
  <div class="section">
    <p class="label">white-space: nowrap</p>
    <p class="space-nowrap">This has multiple spaces and line breaks that will not wrap</p>
  </div>
  <div class="section">
    <p class="label">white-space: pre-wrap</p>
    <p class="space-pre-wrap">This    has     multiple     spaces     and
    line breaks</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-family: monospace;
  font-size: 0.9rem;
}

.space-normal {
  white-space: normal;
}

.space-pre {
  white-space: pre;
}

.space-nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.space-pre-wrap {
  white-space: pre-wrap;
}`,
  },

  {
    property: "width",
    description:
      "sets the width of an element. By default, it sets the width of the content area, but it can also be used to set the width including padding, border, and margin.",
    htmlCode: `<div class="demo">
  <div class="box width-auto">auto</div>
  <div class="box width-100">100px</div>
  <div class="box width-200">200px</div>
  <div class="box width-50">50%</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 60px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.width-auto {
  width: auto;
}

.width-100 {
  width: 100px;
}

.width-200 {
  width: 200px;
}

.width-50 {
  width: 50%;
}`,
  },

  {
    property: "word-break",
    description:
      "specifies how words should break when reaching the end of a line.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">word-break: normal</p>
    <p class="break-normal">Thisisaverylongwordthatwillbreakinthenormalmanner</p>
  </div>
  <div class="section">
    <p class="label">word-break: break-all</p>
    <p class="break-all">Thisisaverylongwordthatwillbreakinthenormalmanner</p>
  </div>
  <div class="section">
    <p class="label">word-break: keep-all</p>
    <p class="break-keep">Thisisaverylongwordthatwillbreakinthenormalmanner</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
  width: 200px;
}

.break-normal {
  word-break: normal;
}

.break-all {
  word-break: break-all;
}

.break-keep {
  word-break: keep-all;
}`,
  },

  {
    property: "word-spacing",
    description:
      "sets the length of space between words and between tags.",
    htmlCode: `<div class="demo">
  <p class="spacing-normal">word-spacing: normal</p>
  <p class="spacing-2">word-spacing: 2px</p>
  <p class="spacing-5">word-spacing: 5px</p>
  <p class="spacing-10">word-spacing: 10px</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.demo p {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  background: #e0f7ff;
  border-left: 4px solid #4facfe;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
}

.spacing-normal {
  word-spacing: normal;
}

.spacing-2 {
  word-spacing: 2px;
}

.spacing-5 {
  word-spacing: 5px;
}

.spacing-10 {
  word-spacing: 10px;
}`,
  },

  {
    property: "word-wrap",
    description:
      "specifies whether words should break and wrap to the next line when they are too long to fit within the container.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">word-wrap: normal</p>
    <p class="wrap-normal">Thisisaverylongwordthatwillnotbreakandwilloverflowthecontainer</p>
  </div>
  <div class="section">
    <p class="label">word-wrap: break-word</p>
    <p class="wrap-break">Thisisaverylongwordthatwillbreakandwraptothecontainer</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
  width: 200px;
}

.wrap-normal {
  word-wrap: normal;
  overflow: hidden;
}

.wrap-break {
  word-wrap: break-word;
}`,
  },

  {
    property: "writing-mode",
    description:
      "sets whether lines of text are laid out horizontally or vertically, and the direction in which blocks progress.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">writing-mode: horizontal-tb</p>
    <p class="mode-horizontal">Horizontal Text</p>
  </div>
  <div class="section">
    <p class="label">writing-mode: vertical-rl</p>
    <p class="mode-vertical-rl">Vertical</p>
  </div>
  <div class="section">
    <p class="label">writing-mode: vertical-lr</p>
    <p class="mode-vertical-lr">Vertical</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0;
  min-width: 150px;
}

.section p {
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  padding: 1rem;
  border-radius: 6px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mode-horizontal {
  writing-mode: horizontal-tb;
}

.mode-vertical-rl {
  writing-mode: vertical-rl;
}

.mode-vertical-lr {
  writing-mode: vertical-lr;
}`,
  },

  {
    property: "z-index",
    description:
      "specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box z-1">z-index: 1</div>
    <div class="box z-2">z-index: 2</div>
    <div class="box z-3">z-index: 3</div>
    <div class="box z-4">z-index: 4</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  position: relative;
  background: #f0f4ff;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 300px;
  border: 2px dashed #667eea;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 120px;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.1);
}

.z-1 {
  z-index: 1;
  top: 20px;
  left: 20px;
}

.z-2 {
  z-index: 2;
  top: 60px;
  left: 80px;
}

.z-3 {
  z-index: 3;
  top: 100px;
  left: 140px;
}

.z-4 {
  z-index: 4;
  top: 140px;
  left: 200px;
}`,
  },

  {
    property: "accent-color",
    description:
      "sets the accent color for user-interface controls like checkboxes, radio buttons, and range sliders.",
    htmlCode: `<div class="demo">
  <div class="section">
    <label>Default Checkbox:</label>
    <input type="checkbox" class="accent-default" checked>
  </div>
  <div class="section">
    <label>Blue Accent:</label>
    <input type="checkbox" class="accent-blue" checked>
  </div>
  <div class="section">
    <label>Green Accent:</label>
    <input type="checkbox" class="accent-green" checked>
  </div>
  <div class="section">
    <label>Purple Accent:</label>
    <input type="checkbox" class="accent-purple" checked>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section label {
  font-weight: 600;
  color: #333;
  min-width: 150px;
}

.section input {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.accent-default {
  accent-color: auto;
}

.accent-blue {
  accent-color: #4facfe;
}

.accent-green {
  accent-color: #43e97b;
}

.accent-purple {
  accent-color: #764ba2;
}`,
  },

  {
    property: "all",
    description:
      "resets all of an element's properties (except unicode-bidi and direction) to their initial or inherited values.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">all: initial</p>
    <div class="box initial">Reset to Initial</div>
  </div>
  <div class="section">
    <p class="label">all: inherit</p>
    <div class="box inherit">Inherit from Parent</div>
  </div>
  <div class="section">
    <p class="label">all: unset</p>
    <div class="box unset">Unset All</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  min-height: 100px;
}

.initial {
  all: initial;
  background: #e0f7ff;
  color: #333;
  padding: 1rem;
  border-radius: 4px;
}

.inherit {
  all: inherit;
}

.unset {
  all: unset;
  background: #e0f7ff;
  color: #333;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}`,
  },

  {
    property: "content",
    description:
      "is used with the ::before and ::after pseudo-elements to insert generated content.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">content: 'text'</p>
    <p class="content-text">Before and After</p>
  </div>
  <div class="section">
    <p class="label">content: attr(data-info)</p>
    <p class="content-attr" data-info="[Info from attribute]">Hover me</p>
  </div>
  <div class="section">
    <p class="label">content: counter()</p>
    <ol class="content-counter">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.content-text::before {
  content: "✓ ";
  color: #43e97b;
  font-weight: 700;
}

.content-text::after {
  content: " ✓";
  color: #43e97b;
  font-weight: 700;
}

.content-text {
  padding: 1rem;
  background: #e8fffe;
  border-radius: 6px;
  border-left: 4px solid #43e97b;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.content-attr::after {
  content: attr(data-info);
  display: block;
  font-size: 0.85rem;
  color: #43e97b;
  margin-top: 0.5rem;
}

.content-attr {
  padding: 1rem;
  background: #e8fffe;
  border-radius: 6px;
  border-left: 4px solid #43e97b;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.content-counter {
  padding: 1rem 2rem;
  background: #e8fffe;
  border-radius: 6px;
  border-left: 4px solid #43e97b;
  margin: 0;
}

.content-counter li {
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
}`,
  },

  {
    property: "counter-increment",
    description:
      "increments one or more CSS counters. The counter can be used in generated content via the counter() or counters() function.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">counter-increment: section</p>
    <div class="item">Section Item</div>
    <div class="item">Section Item</div>
    <div class="item">Section Item</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
  counter-reset: section;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.item {
  padding: 1rem;
  background: #f0f4ff;
  border-radius: 6px;
  border-left: 4px solid #667eea;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  counter-increment: section;
}

.item::before {
  content: "Item " counter(section) ": ";
  color: #667eea;
  font-weight: 700;
}`,
  },

  {
    property: "counter-reset",
    description:
      "resets one or more CSS counters to a given value.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">counter-reset: count 0</p>
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  counter-reset: count 0;
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.item {
  padding: 1rem;
  background: #fff5f7;
  border-radius: 6px;
  border-left: 4px solid #f5576c;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  counter-increment: count;
}

.item::before {
  content: counter(count) ". ";
  color: #f5576c;
  font-weight: 700;
}`,
  },

  {
    property: "backdrop-visibility",
    description:
      "controls whether an element's backdrop is visible or hidden.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">backdrop-visibility: visible</p>
    <div class="box vis-visible">Visible</div>
  </div>
  <div class="section">
    <p class="label">backdrop-visibility: hidden</p>
    <div class="box vis-hidden">Hidden</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 80px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.vis-visible {
  backdrop-visibility: visible;
}

.vis-hidden {
  backdrop-visibility: hidden;
}`,
  },

  {
    property: "direction",
    description:
      "sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written right-to-left (like Hebrew or Arabic), and ltr for left-to-right.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">direction: ltr</p>
    <p class="dir-ltr">Left to Right Text</p>
  </div>
  <div class="section">
    <p class="label">direction: rtl</p>
    <p class="dir-rtl">Right to Left Text</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.dir-ltr {
  direction: ltr;
}

.dir-rtl {
  direction: rtl;
}`,
  },

  {
    property: "empty-cells",
    description:
      "sets whether borders and backgrounds appear around empty cells in a table.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">empty-cells: show</p>
    <table class="table show">
      <tr>
        <td>Cell 1</td>
        <td></td>
        <td>Cell 3</td>
      </tr>
    </table>
  </div>
  <div class="section">
    <p class="label">empty-cells: hide</p>
    <table class="table hide">
      <tr>
        <td>Cell 1</td>
        <td></td>
        <td>Cell 3</td>
      </tr>
    </table>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: #fff5f7;
  border-radius: 6px;
  overflow: hidden;
}

.table td {
  padding: 1rem;
  border: 2px solid #fa709a;
  text-align: center;
  font-weight: 600;
  color: #333;
}

.show {
  empty-cells: show;
}

.hide {
  empty-cells: hide;
}`,
  },

  {
    property: "flex-flow",
    description:
      "is a shorthand property for flex-direction and flex-wrap. It specifies the direction of flex items and whether they should wrap.",
    htmlCode: `<div class="demo">
  <div class="container flow-row">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
  <p class="label">flex-flow: row wrap</p>
</div>
<div class="demo">
  <div class="container flow-column">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
  <p class="label">flex-flow: column wrap</p>
</div>
<div class="demo">
  <div class="container flow-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
  <p class="label">flex-flow: row-reverse wrap</p>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.75rem;
  min-height: 150px;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.label {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
}

.flow-row {
  flex-flow: row wrap;
}

.flow-column {
  flex-flow: column wrap;
}

.flow-reverse {
  flex-flow: row-reverse wrap;
}`,
  },

  {
    property: "font-feature-settings",
    description:
      "gives you control over advanced typographic features in OpenType fonts.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-feature-settings: normal</p>
    <p class="feature-normal">1234567890 - Regular Numbers</p>
  </div>
  <div class="section">
    <p class="label">font-feature-settings: 'smcp'</p>
    <p class="feature-smcp">Small Capitals Text</p>
  </div>
  <div class="section">
    <p class="label">font-feature-settings: 'c2sc'</p>
    <p class="feature-c2sc">Capitals to Small Capitals</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.feature-normal {
  font-feature-settings: normal;
}

.feature-smcp {
  font-feature-settings: "smcp";
}

.feature-c2sc {
  font-feature-settings: "c2sc";
}`,
  },

  {
    property: "font-kerning",
    description:
      "controls the usage of the kerning information stored in a font. Kerning defines how letters are spaced.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-kerning: auto</p>
    <p class="kerning-auto">AWAY - Kerning Applied</p>
  </div>
  <div class="section">
    <p class="label">font-kerning: normal</p>
    <p class="kerning-normal">AWAY - Kerning Applied</p>
  </div>
  <div class="section">
    <p class="label">font-kerning: none</p>
    <p class="kerning-none">AWAY - No Kerning</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
}

.kerning-auto {
  font-kerning: auto;
}

.kerning-normal {
  font-kerning: normal;
}

.kerning-none {
  font-kerning: none;
}`,
  },

  {
    property: "font-language-override",
    description:
      "controls the use of language-specific glyphs in a typeface.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-language-override: normal</p>
    <p class="lang-normal">Language Override Normal</p>
  </div>
  <div class="section">
    <p class="label">font-language-override: 'TRK'</p>
    <p class="lang-trk">Turkish Language Glyphs</p>
  </div>
  <div class="section">
    <p class="label">font-language-override: 'DAN'</p>
    <p class="lang-dan">Danish Language Glyphs</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.lang-normal {
  font-language-override: normal;
}

.lang-trk {
  font-language-override: "TRK";
}

.lang-dan {
  font-language-override: "DAN";
}`,
  },

  {
    property: "font-optical-sizing",
    description:
      "enables or disables optical sizing, which adjusts the appearance of text based on the font size.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-optical-sizing: auto</p>
    <p class="sizing-auto-small">Small Text - Auto Sizing</p>
    <p class="sizing-auto-large">Large Text - Auto Sizing</p>
  </div>
  <div class="section">
    <p class="label">font-optical-sizing: none</p>
    <p class="sizing-none-small">Small Text - No Sizing</p>
    <p class="sizing-none-large">Large Text - No Sizing</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0.5rem 0;
  font-weight: 600;
}

.sizing-auto-small {
  font-optical-sizing: auto;
  font-size: 0.8rem;
}

.sizing-auto-large {
  font-optical-sizing: auto;
  font-size: 1.8rem;
}

.sizing-none-small {
  font-optical-sizing: none;
  font-size: 0.8rem;
}

.sizing-none-large {
  font-optical-sizing: none;
  font-size: 1.8rem;
}`,
  },

  {
    property: "font-size-adjust",
    description:
      "sets the size of lower-case letters relative to the current font size (x-height).",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-size-adjust: none</p>
    <p class="adjust-none">Font Size Adjust None</p>
  </div>
  <div class="section">
    <p class="label">font-size-adjust: 0.5</p>
    <p class="adjust-half">Font Size Adjust 0.5</p>
  </div>
  <div class="section">
    <p class="label">font-size-adjust: 0.7</p>
    <p class="adjust-seven">Font Size Adjust 0.7</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
}

.adjust-none {
  font-size-adjust: none;
}

.adjust-half {
  font-size-adjust: 0.5;
}

.adjust-seven {
  font-size-adjust: 0.7;
}`,
  },

  {
    property: "font-smooth",
    description:
      "controls the application of anti-aliasing when rendering text.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-smooth: auto</p>
    <p class="smooth-auto">Font Smooth Auto</p>
  </div>
  <div class="section">
    <p class="label">font-smooth: never</p>
    <p class="smooth-never">Font Smooth Never</p>
  </div>
  <div class="section">
    <p class="label">font-smooth: always</p>
    <p class="smooth-always">Font Smooth Always</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
}

.smooth-auto {
  -webkit-font-smoothing: auto;
}

.smooth-never {
  -webkit-font-smoothing: none;
}

.smooth-always {
  -webkit-font-smoothing: antialiased;
}`,
  },

  {
    property: "font-stretch",
    description:
      "selects a normal, condensed, or expanded face from a font family.",
    htmlCode: `<div class="demo">
  <div class="box stretch-normal">normal</div>
  <div class="box stretch-condensed">condensed</div>
  <div class="box stretch-expanded">expanded</div>
  <div class="box stretch-semi-condensed">semi-condensed</div>
  <div class="box stretch-semi-expanded">semi-expanded</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.stretch-normal {
  font-stretch: normal;
}

.stretch-condensed {
  font-stretch: condensed;
}

.stretch-expanded {
  font-stretch: expanded;
}

.stretch-semi-condensed {
  font-stretch: semi-condensed;
}

.stretch-semi-expanded {
  font-stretch: semi-expanded;
}`,
  },

  {
    property: "font-variant",
    description:
      "is a shorthand for all font variant properties. It can control the usage of alternate glyphs in a font.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variant: normal</p>
    <p class="variant-normal">Normal Font Variant</p>
  </div>
  <div class="section">
    <p class="label">font-variant: small-caps</p>
    <p class="variant-small-caps">Small Capitals Variant</p>
  </div>
  <div class="section">
    <p class="label">font-variant: all-small-caps</p>
    <p class="variant-all-small-caps">All Small Capitals</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.variant-normal {
  font-variant: normal;
}

.variant-small-caps {
  font-variant: small-caps;
}

.variant-all-small-caps {
  font-variant: all-small-caps;
}`,
  },

  {
    property: "font-variant-alternates",
    description:
      "controls the usage of alternate glyphs associated with alternative names defined in @font-feature-values.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variant-alternates: normal</p>
    <p class="alt-normal">Normal Alternates</p>
  </div>
  <div class="section">
    <p class="label">font-variant-alternates: stylistic()</p>
    <p class="alt-stylistic">Stylistic Alternates</p>
  </div>
  <div class="section">
    <p class="label">font-variant-alternates: historical-forms</p>
    <p class="alt-historical">Historical Forms</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.alt-normal {
  font-variant-alternates: normal;
}

.alt-stylistic {
  font-variant-alternates: stylistic();
}

.alt-historical {
  font-variant-alternates: historical-forms;
}`,
  },

  {
    property: "font-variant-caps",
    description:
      "controls the usage of alternate glyphs for capital letters.",
    htmlCode: `<div class="demo">
  <div class="box caps-normal">normal</div>
  <div class="box caps-small">small-caps</div>
  <div class="box caps-all-small">all-small-caps</div>
  <div class="box caps-petite">petite-caps</div>
  <div class="box caps-all-petite">all-petite-caps</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.caps-normal {
  font-variant-caps: normal;
}

.caps-small {
  font-variant-caps: small-caps;
}

.caps-all-small {
  font-variant-caps: all-small-caps;
}

.caps-petite {
  font-variant-caps: petite-caps;
}

.caps-all-petite {
  font-variant-caps: all-petite-caps;
}`,
  },

  {
    property: "font-variant-east-asian",
    description:
      "controls the usage of alternate glyphs for East Asian scripts, such as Japanese and Chinese.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variant-east-asian: normal</p>
    <p class="east-normal">East Asian Normal</p>
  </div>
  <div class="section">
    <p class="label">font-variant-east-asian: jis78</p>
    <p class="east-jis78">East Asian JIS78</p>
  </div>
  <div class="section">
    <p class="label">font-variant-east-asian: simplified</p>
    <p class="east-simplified">East Asian Simplified</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.east-normal {
  font-variant-east-asian: normal;
}

.east-jis78 {
  font-variant-east-asian: jis78;
}

.east-simplified {
  font-variant-east-asian: simplified;
}`,
  },

  {
    property: "font-variant-ligatures",
    description:
      "controls which ligatures and contextual forms are used in text.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variant-ligatures: normal</p>
    <p class="lig-normal">Ligatures: fi fl ffi ffl</p>
  </div>
  <div class="section">
    <p class="label">font-variant-ligatures: common-ligatures</p>
    <p class="lig-common">Ligatures: fi fl ffi ffl</p>
  </div>
  <div class="section">
    <p class="label">font-variant-ligatures: no-ligatures</p>
    <p class="lig-none">Ligatures: fi fl ffi ffl</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.lig-normal {
  font-variant-ligatures: normal;
}

.lig-common {
  font-variant-ligatures: common-ligatures;
}

.lig-none {
  font-variant-ligatures: no-ligatures;
}`,
  },

  {
    property: "font-variant-numeric",
    description:
      "controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
    htmlCode: `<div class="demo">
  <div class="box num-normal">1234567890</div>
  <div class="box num-tabular">1234567890</div>
  <div class="box num-lining">1234567890</div>
  <div class="box num-oldstyle">1234567890</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Georgia", serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.num-normal {
  font-variant-numeric: normal;
}

.num-tabular {
  font-variant-numeric: tabular-nums;
}

.num-lining {
  font-variant-numeric: lining-nums;
}

.num-oldstyle {
  font-variant-numeric: oldstyle-nums;
}`,
  },

  {
    property: "font-variant-position",
    description:
      "controls the usage of alternate glyphs of smaller size positioned as superscript or subscript.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variant-position: normal</p>
    <p class="pos-normal">H<span>2</span>O - Normal Position</p>
  </div>
  <div class="section">
    <p class="label">font-variant-position: sub</p>
    <p class="pos-sub">H<span>2</span>O - Subscript</p>
  </div>
  <div class="section">
    <p class="label">font-variant-position: super</p>
    <p class="pos-super">E=mc<span>2</span> - Superscript</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.pos-normal {
  font-variant-position: normal;
}

.pos-sub {
  font-variant-position: sub;
}

.pos-super {
  font-variant-position: super;
}`,
  },

  {
    property: "font-variation-settings",
    description:
      "provides low-level control over OpenType or TrueType font variations.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">font-variation-settings: normal</p>
    <p class="var-normal">Font Variation Normal</p>
  </div>
  <div class="section">
    <p class="label">font-variation-settings: 'wght' 700</p>
    <p class="var-weight">Font Variation Weight</p>
  </div>
  <div class="section">
    <p class="label">font-variation-settings: 'wdth' 85%</p>
    <p class="var-width">Font Variation Width</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.var-normal {
  font-variation-settings: normal;
}

.var-weight {
  font-variation-settings: "wght" 700;
}

.var-width {
  font-variation-settings: "wdth" 85%;
}`,
  },

  {
    property: "hanging-punctuation",
    description:
      "specifies whether a punctuation mark should hang outside the line box at the start or end of a line of text.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">hanging-punctuation: none</p>
    <p class="hang-none">"This is a quote with hanging punctuation."</p>
  </div>
  <div class="section">
    <p class="label">hanging-punctuation: first</p>
    <p class="hang-first">"This is a quote with hanging punctuation."</p>
  </div>
  <div class="section">
    <p class="label">hanging-punctuation: last</p>
    <p class="hang-last">"This is a quote with hanging punctuation."</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  width: 250px;
}

.hang-none {
  hanging-punctuation: none;
}

.hang-first {
  hanging-punctuation: first;
}

.hang-last {
  hanging-punctuation: last;
}`,
  },

  {
    property: "inset",
    description:
      "is a shorthand property that sets top, right, bottom, and left properties for positioned elements.",
    htmlCode: `<div class="demo">
  <div class="container">
    <div class="box inset-auto">inset: auto</div>
    <div class="box inset-20">inset: 20px</div>
    <div class="box inset-custom">inset: 10px 20px</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  position: relative;
  background: #e0f7ff;
  border-radius: 8px;
  padding: 2rem 1rem;
  min-height: 300px;
  border: 2px dashed #4facfe;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  min-width: 100px;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.1);
}

.inset-auto {
  inset: auto;
  top: 20px;
  left: 20px;
}

.inset-20 {
  inset: 20px;
}

.inset-custom {
  inset: 10px 20px;
  bottom: auto;
}`,
  },

  {
    property: "inline-size",
    description:
      "defines the horizontal or vertical size of an element's inline dimension, depending on its writing mode.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-200">200px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  inline-size: auto;
}

.size-200 {
  inline-size: 200px;
}

.size-50 {
  inline-size: 50%;
}

.size-fit {
  inline-size: fit-content;
}`,
  },

  {
    property: "input-security",
    description:
      "controls whether text in password input fields is obscured or visible.",
    htmlCode: `<div class="demo">
  <div class="section">
    <label>Default Password Input:</label>
    <input type="password" class="input-default" value="password123">
  </div>
  <div class="section">
    <label>Text Input:</label>
    <input type="text" class="input-text" value="visible text">
  </div>
  <div class="section">
    <label>Email Input:</label>
    <input type="email" class="input-email" value="user@example.com">
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section label {
  font-weight: 600;
  color: #333;
  min-width: 150px;
}

.section input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #fa709a;
  border-radius: 6px;
  font-size: 1rem;
  font-family: "Segoe UI", sans-serif;
}

.input-default {
  -webkit-text-security: disc;
}

.input-text {
  -webkit-text-security: none;
}

.input-email {
  -webkit-text-security: none;
}`,
  },

  {
    property: "isolation",
    description:
      "defines whether an element must create a new stacking context.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">isolation: auto</p>
    <div class="container auto">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
    </div>
  </div>
  <div class="section">
    <p class="label">isolation: isolate</p>
    <div class="container isolate">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.container {
  background: #f0f4ff;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}

.container.auto {
  isolation: auto;
}

.container.isolate {
  isolation: isolate;
}

.item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
}`,
  },

  {
    property: "line-break",
    description:
      "specifies how to break lines of Chinese, Japanese, or Korean (CJK) text.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">line-break: auto</p>
    <p class="break-auto">日本語のテキストが長い場合の改行方法を制御します</p>
  </div>
  <div class="section">
    <p class="label">line-break: loose</p>
    <p class="break-loose">日本語のテキストが長い場合の改行方法を制御します</p>
  </div>
  <div class="section">
    <p class="label">line-break: strict</p>
    <p class="break-strict">日本語のテキストが長い場合の改行方法を制御します</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f5576c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
  width: 250px;
}

.break-auto {
  line-break: auto;
}

.break-loose {
  line-break: loose;
}

.break-strict {
  line-break: strict;
}`,
  },

  {
    property: "line-clamp",
    description:
      "truncates text to a specified number of lines and adds an ellipsis.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">line-clamp: none</p>
    <p class="clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">line-clamp: 2</p>
    <p class="clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="section">
    <p class="label">line-clamp: 3</p>
    <p class="clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
}

.clamp-none {
  -webkit-line-clamp: none;
  display: block;
}

.clamp-2 {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clamp-3 {
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
  },

  {
    property: "mask",
    description:
      "hides parts of an element by masking or clipping the image at specific points.",
    htmlCode: `<div class="demo">
  <div class="box mask-none">No Mask</div>
  <div class="box mask-circle">Circle Mask</div>
  <div class="box mask-gradient">Gradient Mask</div>
  <div class="box mask-image">Image Mask</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.mask-none {
  -webkit-mask: none;
  mask: none;
}

.mask-circle {
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
}

.mask-gradient {
  -webkit-mask: linear-gradient(to bottom, black 0%, transparent 100%);
  mask: linear-gradient(to bottom, black 0%, transparent 100%);
}

.mask-image {
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='black'/%3E%3C/svg%3E");
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='black'/%3E%3C/svg%3E");
}`,
  },

  {
    property: "mask-clip",
    description:
      "determines the area within which the mask is clipped.",
    htmlCode: `<div class="demo">
  <div class="box clip-border">border-box</div>
  <div class="box clip-padding">padding-box</div>
  <div class="box clip-content">content-box</div>
  <div class="box clip-text">text</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.clip-border {
  -webkit-mask-clip: border-box;
  mask-clip: border-box;
}

.clip-padding {
  -webkit-mask-clip: padding-box;
  mask-clip: padding-box;
}

.clip-content {
  -webkit-mask-clip: content-box;
  mask-clip: content-box;
}

.clip-text {
  -webkit-mask-clip: text;
  mask-clip: text;
}`,
  },

  {
    property: "mask-composite",
    description:
      "sets the composition operation used on the mask layer.",
    htmlCode: `<div class="demo">
  <div class="box comp-add">add</div>
  <div class="box comp-subtract">subtract</div>
  <div class="box comp-intersect">intersect</div>
  <div class="box comp-exclude">exclude</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.comp-add {
  -webkit-mask-composite: source-over;
  mask-composite: add;
}

.comp-subtract {
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
}

.comp-intersect {
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.comp-exclude {
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}`,
  },

  {
    property: "mask-image",
    description:
      "sets the image to be used as a mask layer for an element.",
    htmlCode: `<div class="demo">
  <div class="box img-none">No Mask</div>
  <div class="box img-gradient">Gradient Mask</div>
  <div class="box img-radial">Radial Mask</div>
  <div class="box img-conic">Conic Mask</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.img-none {
  -webkit-mask-image: none;
  mask-image: none;
}

.img-gradient {
  -webkit-mask-image: linear-gradient(to right, black 0%, transparent 100%);
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
}

.img-radial {
  -webkit-mask-image: radial-gradient(circle, black 30%, transparent 100%);
  mask-image: radial-gradient(circle, black 30%, transparent 100%);
}

.img-conic {
  -webkit-mask-image: conic-gradient(black, transparent);
  mask-image: conic-gradient(black, transparent);
}`,
  },

  {
    property: "mask-mode",
    description:
      "sets the blending mode of a mask layer.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">mask-mode: alpha</p>
    <div class="box mode-alpha">Alpha Mode</div>
  </div>
  <div class="section">
    <p class="label">mask-mode: luminance</p>
    <div class="box mode-luminance">Luminance Mode</div>
  </div>
  <div class="section">
    <p class="label">mask-mode: match-source</p>
    <div class="box mode-match">Match Source</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e0f7ff;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 80px;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
}

.mode-alpha {
  -webkit-mask-mode: alpha;
  mask-mode: alpha;
}

.mode-luminance {
  -webkit-mask-mode: luminance;
  mask-mode: luminance;
}

.mode-match {
  -webkit-mask-mode: match-source;
  mask-mode: match-source;
}`,
  },

  {
    property: "mask-origin",
    description:
      "sets the origin of the mask.",
    htmlCode: `<div class="demo">
  <div class="box origin-border">border-box</div>
  <div class="box origin-padding">padding-box</div>
  <div class="box origin-content">content-box</div>
  <div class="box origin-fill">fill-box</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.origin-border {
  -webkit-mask-origin: border-box;
  mask-origin: border-box;
}

.origin-padding {
  -webkit-mask-origin: padding-box;
  mask-origin: padding-box;
}

.origin-content {
  -webkit-mask-origin: content-box;
  mask-origin: content-box;
}

.origin-fill {
  -webkit-mask-origin: fill-box;
  mask-origin: fill-box;
}`,
  },

  {
    property: "mask-position",
    description:
      "sets the initial position of the mask image.",
    htmlCode: `<div class="demo">
  <div class="box pos-top-left">top left</div>
  <div class="box pos-center">center</div>
  <div class="box pos-bottom-right">bottom right</div>
  <div class="box pos-custom">30% 60%</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 40%, transparent 100%);
  mask: radial-gradient(circle, black 40%, transparent 100%);
  -webkit-mask-size: 60px 60px;
  mask-size: 60px 60px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.pos-top-left {
  -webkit-mask-position: top left;
  mask-position: top left;
}

.pos-center {
  -webkit-mask-position: center;
  mask-position: center;
}

.pos-bottom-right {
  -webkit-mask-position: bottom right;
  mask-position: bottom right;
}

.pos-custom {
  -webkit-mask-position: 30% 60%;
  mask-position: 30% 60%;
}`,
  },

  {
    property: "mask-repeat",
    description:
      "sets how the mask image is repeated.",
    htmlCode: `<div class="demo">
  <div class="box repeat-xy">repeat</div>
  <div class="box repeat-x">repeat-x</div>
  <div class="box repeat-y">repeat-y</div>
  <div class="box no-repeat">no-repeat</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 30%, transparent 100%);
  mask: radial-gradient(circle, black 30%, transparent 100%);
  -webkit-mask-size: 40px 40px;
  mask-size: 40px 40px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.repeat-xy {
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
}

.repeat-x {
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
}

.repeat-y {
  -webkit-mask-repeat: repeat-y;
  mask-repeat: repeat-y;
}

.no-repeat {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}`,
  },

  {
    property: "mask-size",
    description:
      "sets the size of the mask image.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-cover">cover</div>
  <div class="box size-contain">contain</div>
  <div class="box size-custom">80px 60px</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  -webkit-mask-size: auto;
  mask-size: auto;
}

.size-cover {
  -webkit-mask-size: cover;
  mask-size: cover;
}

.size-contain {
  -webkit-mask-size: contain;
  mask-size: contain;
}

.size-custom {
  -webkit-mask-size: 80px 60px;
  mask-size: 80px 60px;
}`,
  },

  {
    property: "mask-type",
    description:
      "sets whether the mask defined by an SVG <mask> element is used as a luminance or alpha mask.",
    htmlCode: `<div class="demo">
  <svg width="100" height="100" style="display: none;">
    <defs>
      <mask id="luminance-mask" maskContentUnits="objectBoundingBox" maskType="luminance">
        <rect width="1" height="1" fill="white"/>
        <circle cx="0.5" cy="0.5" r="0.3" fill="black"/>
      </mask>
      <mask id="alpha-mask" maskContentUnits="objectBoundingBox" maskType="alpha">
        <rect width="1" height="1" fill="white"/>
        <circle cx="0.5" cy="0.5" r="0.3" fill="black"/>
      </mask>
    </defs>
  </svg>
  <div class="box type-luminance">Luminance</div>
  <div class="box type-alpha">Alpha</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.type-luminance {
  -webkit-mask-type: luminance;
  mask-type: luminance;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
}

.type-alpha {
  -webkit-mask-type: alpha;
  mask-type: alpha;
  -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
  mask: radial-gradient(circle, black 50%, transparent 100%);
}`,
  },

  {
    property: "math-depth",
    description:
      "indicates the depth of nesting with respect to the number of levels of script style.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">math-depth: 0</p>
    <p class="depth-0">Math Depth 0</p>
  </div>
  <div class="section">
    <p class="label">math-depth: 1</p>
    <p class="depth-1">Math Depth 1</p>
  </div>
  <div class="section">
    <p class="label">math-depth: 2</p>
    <p class="depth-2">Math Depth 2</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.depth-0 {
  math-depth: 0;
}

.depth-1 {
  math-depth: 1;
}

.depth-2 {
  math-depth: 2;
}`,
  },

  {
    property: "math-style",
    description:
      "indicates whether MathML content should be rendered in display or inline style.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">math-style: normal</p>
    <p class="style-normal">Math Style Normal</p>
  </div>
  <div class="section">
    <p class="label">math-style: compact</p>
    <p class="style-compact">Math Style Compact</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.style-normal {
  math-style: normal;
}

.style-compact {
  math-style: compact;
}`,
  },

  {
    property: "max-block-size",
    description:
      "sets the maximum size of an element in the block direction.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-200">200px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  max-block-size: auto;
}

.size-200 {
  max-block-size: 200px;
}

.size-50 {
  max-block-size: 50%;
}

.size-fit {
  max-block-size: fit-content;
}`,
  },

  {
    property: "max-inline-size",
    description:
      "sets the maximum size of an element in the inline direction.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-200">200px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  max-inline-size: auto;
}

.size-200 {
  max-inline-size: 200px;
}

.size-50 {
  max-inline-size: 50%;
}

.size-fit {
  max-inline-size: fit-content;
}`,
  },

  {
    property: "min-block-size",
    description:
      "sets the minimum size of an element in the block direction.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-100">100px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  min-block-size: auto;
}

.size-100 {
  min-block-size: 100px;
}

.size-50 {
  min-block-size: 50%;
}

.size-fit {
  min-block-size: fit-content;
}`,
  },

  {
    property: "min-inline-size",
    description:
      "sets the minimum size of an element in the inline direction.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-100">100px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  min-inline-size: auto;
}

.size-100 {
  min-inline-size: 100px;
}

.size-50 {
  min-inline-size: 50%;
}

.size-fit {
  min-inline-size: fit-content;
}`,
  },

  {
    property: "offset",
    description:
      "is a shorthand property for setting the offset-distance and offset-path properties.",
    htmlCode: `<div class="demo">
  <svg width="400" height="200" style="border: 1px solid #ccc; border-radius: 8px;">
    <path id="path1" d="M 50 50 Q 200 50 350 150" stroke="#667eea" stroke-width="2" fill="none"/>
    <circle cx="50" cy="50" r="8" fill="#667eea"/>
  </svg>
  <div class="box offset-start">Start</div>
  <div class="box offset-mid">Mid</div>
  <div class="box offset-end">End</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.offset-start {
  offset-distance: 0%;
  top: 20px;
  left: 20px;
}

.offset-mid {
  offset-distance: 50%;
  top: 50px;
  left: 150px;
}

.offset-end {
  offset-distance: 100%;
  top: 120px;
  left: 300px;
}`,
  },

  {
    property: "offset-anchor",
    description:
      "defines the point of the element that is fixed on the offset-path.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">offset-anchor: auto</p>
    <div class="box anchor-auto">Auto</div>
  </div>
  <div class="section">
    <p class="label">offset-anchor: center</p>
    <div class="box anchor-center">Center</div>
  </div>
  <div class="section">
    <p class="label">offset-anchor: top left</p>
    <div class="box anchor-top-left">Top Left</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  position: relative;
  min-height: 120px;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.anchor-auto {
  offset-anchor: auto;
}

.anchor-center {
  offset-anchor: center;
}

.anchor-top-left {
  offset-anchor: top left;
}`,
  },

  {
    property: "offset-distance",
    description:
      "specifies the distance along an offset-path for an element to be placed.",
    htmlCode: `<div class="demo">
  <div class="box dist-0">0%</div>
  <div class="box dist-25">25%</div>
  <div class="box dist-50">50%</div>
  <div class="box dist-75">75%</div>
  <div class="box dist-100">100%</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  min-height: 300px;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.75rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.dist-0 {
  offset-distance: 0%;
  top: 20px;
  left: 20px;
}

.dist-25 {
  offset-distance: 25%;
  top: 80px;
  left: 100px;
}

.dist-50 {
  offset-distance: 50%;
  top: 120px;
  left: 200px;
}

.dist-75 {
  offset-distance: 75%;
  top: 150px;
  left: 300px;
}

.dist-100 {
  offset-distance: 100%;
  top: 200px;
  left: 380px;
}`,
  },

  {
    property: "offset-path",
    description:
      "specifies a motion path along which an element can be animated.",
    htmlCode: `<div class="demo">
  <svg width="400" height="200" style="border: 1px solid #ccc; border-radius: 8px;">
    <path id="motionPath" d="M 50 50 Q 200 50 350 150" stroke="#4facfe" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
  </svg>
  <div class="box">Motion</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  offset-path: path("M 50 50 Q 200 50 350 150");
  offset-distance: 50%;
  offset-anchor: center;
}`,
  },

  {
    property: "offset-position",
    description:
      "defines the initial position of the offset-path.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">offset-position: auto</p>
    <div class="box pos-auto">Auto</div>
  </div>
  <div class="section">
    <p class="label">offset-position: center</p>
    <div class="box pos-center">Center</div>
  </div>
  <div class="section">
    <p class="label">offset-position: top left</p>
    <div class="box pos-top-left">Top Left</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e8fffe;
  border-radius: 8px;
  border-left: 4px solid #43e97b;
  position: relative;
  min-height: 120px;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #43e97b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  position: absolute;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pos-auto {
  offset-position: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pos-center {
  offset-position: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pos-top-left {
  offset-position: top left;
  top: 0;
  left: 0;
}`,
  },

  {
    property: "offset-rotate",
    description:
      "defines the direction of an element along its offset-path.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">offset-rotate: auto</p>
    <div class="box rotate-auto">↻</div>
  </div>
  <div class="section">
    <p class="label">offset-rotate: 0deg</p>
    <div class="box rotate-0">↻</div>
  </div>
  <div class="section">
    <p class="label">offset-rotate: 45deg</p>
    <div class="box rotate-45">↻</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 150px;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.rotate-auto {
  offset-rotate: auto;
}

.rotate-0 {
  offset-rotate: 0deg;
}

.rotate-45 {
  offset-rotate: 45deg;
}`,
  },

  {
    property: "paint-order",
    description:
      "specifies the order in which the fill, stroke, and markers of a graphic element are painted.",
    htmlCode: `<div class="demo">
  <svg width="300" height="150" style="border: 1px solid #ccc; border-radius: 8px;">
    <text x="20" y="50" class="order-normal" font-size="32" font-weight="bold">Text</text>
    <text x="20" y="100" class="order-stroke" font-size="32" font-weight="bold">Text</text>
  </svg>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.order-normal {
  fill: #667eea;
  stroke: #764ba2;
  stroke-width: 2;
  paint-order: normal;
}

.order-stroke {
  fill: #667eea;
  stroke: #764ba2;
  stroke-width: 2;
  paint-order: stroke;
}`,
  },

  {
    property: "perspective",
    description:
      "gives an element a 3D-space perspective. Elements that are closer to the user appear larger, and those farther away appear smaller.",
    htmlCode: `<div class="demo">
  <div class="container persp-none">
    <div class="box">No Perspective</div>
  </div>
  <div class="container persp-500">
    <div class="box">500px Perspective</div>
  </div>
  <div class="container persp-1000">
    <div class="box">1000px Perspective</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #fff5f7;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.persp-none {
  perspective: none;
}

.persp-500 {
  perspective: 500px;
}

.persp-1000 {
  perspective: 1000px;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  transform: rotateX(45deg);
  width: 100%;
}`,
  },

  {
    property: "perspective-origin",
    description:
      "sets the origin of the perspective for 3D transformations.",
    htmlCode: `<div class="demo">
  <div class="container origin-center">
    <div class="box">Center</div>
  </div>
  <div class="container origin-top-left">
    <div class="box">Top Left</div>
  </div>
  <div class="container origin-bottom-right">
    <div class="box">Bottom Right</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.container {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  perspective: 800px;
}

.origin-center {
  perspective-origin: center;
}

.origin-top-left {
  perspective-origin: top left;
}

.origin-bottom-right {
  perspective-origin: bottom right;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  transform: rotateX(45deg);
  width: 100%;
}`,
  },

  {
    property: "pointer-events",
    description:
      "specifies whether or not an element reacts to pointer events.",
    htmlCode: `<div class="demo">
  <div class="box events-auto">
    <p>pointer-events: auto</p>
    <p class="small">Click me</p>
  </div>
  <div class="box events-none">
    <p>pointer-events: none</p>
    <p class="small">Can't click</p>
  </div>
  <div class="box events-painted">
    <p>pointer-events: painted</p>
    <p class="small">Click on fill</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 120px;
  cursor: pointer;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.box p {
  margin: 0.5rem 0;
}

.small {
  font-size: 0.75rem;
  font-weight: 500;
}

.events-auto {
  pointer-events: auto;
}

.events-none {
  pointer-events: none;
  opacity: 0.6;
}

.events-painted {
  pointer-events: painted;
}`,
  },

  {
    property: "print-color-adjust",
    description:
      "controls whether the browser should adjust colors for printing.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">print-color-adjust: auto</p>
    <div class="box adjust-auto">Auto Adjust</div>
  </div>
  <div class="section">
    <p class="label">print-color-adjust: exact</p>
    <div class="box adjust-exact">Exact Colors</div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 8px;
  border-left: 4px solid #fa709a;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fa709a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 80px;
}

.adjust-auto {
  print-color-adjust: auto;
}

.adjust-exact {
  print-color-adjust: exact;
}`,
  },

  {
    property: "quotes",
    description:
      "specifies how the browser should render quotation marks.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">quotes: auto</p>
    <p class="quotes-auto">This is a <q>quoted text</q> example.</p>
  </div>
  <div class="section">
    <p class="label">quotes: '«' '»'</p>
    <p class="quotes-custom">This is a <q>quoted text</q> example.</p>
  </div>
  <div class="section">
    <p class="label">quotes: none</p>
    <p class="quotes-none">This is a <q>quoted text</q> example.</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section p {
  color: #333;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
}

.quotes-auto {
  quotes: auto;
}

.quotes-custom {
  quotes: "«" "»";
}

.quotes-none {
  quotes: none;
}`,
  },

  {
    property: "resize",
    description:
      "specifies whether an element is resizable by the user.",
    htmlCode: `<div class="demo">
  <div class="box resize-none">
    <p>resize: none</p>
    <p class="small">Not resizable</p>
  </div>
  <div class="box resize-both">
    <p>resize: both</p>
    <p class="small">Drag corner</p>
  </div>
  <div class="box resize-horizontal">
    <p>resize: horizontal</p>
    <p class="small">Drag right</p>
  </div>
  <div class="box resize-vertical">
    <p>resize: vertical</p>
    <p class="small">Drag down</p>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  min-height: 120px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.box p {
  margin: 0.5rem 0;
}

.small {
  font-size: 0.7rem;
  font-weight: 500;
}

.resize-none {
  resize: none;
}

.resize-both {
  resize: both;
}

.resize-horizontal {
  resize: horizontal;
}

.resize-vertical {
  resize: vertical;
}`,
  },

  {
    property: "scroll-behavior",
    description:
      "specifies whether to smoothly animate the scroll position or jump instantly.",
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">scroll-behavior: auto</p>
    <div class="scroll-container auto">
      <div class="scroll-item">Item 1</div>
      <div class="scroll-item">Item 2</div>
      <div class="scroll-item">Item 3</div>
      <div class="scroll-item">Item 4</div>
    </div>
  </div>
  <div class="section">
    <p class="label">scroll-behavior: smooth</p>
    <div class="scroll-container smooth">
      <div class="scroll-item">Item 1</div>
      <div class="scroll-item">Item 2</div>
      <div class="scroll-item">Item 3</div>
      <div class="scroll-item">Item 4</div>
    </div>
  </div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4facfe;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.scroll-container {
  background: #e0f7ff;
  border-radius: 8px;
  padding: 1rem;
  height: 150px;
  overflow-y: scroll;
  border: 2px solid #4facfe;
}

.auto {
  scroll-behavior: auto;
}

.smooth {
  scroll-behavior: smooth;
}

.scroll-item {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },

  {
    property: "block-size",
    description:
      "defines the size of an element in the block direction.",
    htmlCode: `<div class="demo">
  <div class="box size-auto">auto</div>
  <div class="box size-100">100px</div>
  <div class="box size-50">50%</div>
  <div class="box size-fit">fit-content</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.size-auto {
  block-size: auto;
}

.size-100 {
  block-size: 100px;
}

.size-50 {
  block-size: 50%;
}

.size-fit {
  block-size: fit-content;
}`,
  },

  {
    property: "border-block",
    description:
      "is a shorthand property for border-block-start and border-block-end.",
    htmlCode: `<div class="demo">
  <div class="box border-1">1px solid</div>
  <div class="box border-2">2px dashed</div>
  <div class="box border-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.border-1 {
  border-block: 1px solid #00f2fe;
}

.border-2 {
  border-block: 2px dashed #00f2fe;
}

.border-3 {
  border-block: 3px dotted #00f2fe;
}`,
  },

  {
    property: "border-block-end",
    description:
      "sets the width, style, and color of the logical end border of an element.",
    htmlCode: `<div class="demo">
  <div class="box end-1">1px solid</div>
  <div class="box end-2">2px dashed</div>
  <div class="box end-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.end-1 {
  border-block-end: 1px solid #38f9d7;
}

.end-2 {
  border-block-end: 2px dashed #38f9d7;
}

.end-3 {
  border-block-end: 3px dotted #38f9d7;
}`,
  },

  {
    property: "border-block-start",
    description:
      "sets the width, style, and color of the logical start border of an element.",
    htmlCode: `<div class="demo">
  <div class="box start-1">1px solid</div>
  <div class="box start-2">2px dashed</div>
  <div class="box start-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.start-1 {
  border-block-start: 1px solid #fee140;
}

.start-2 {
  border-block-start: 2px dashed #fee140;
}

.start-3 {
  border-block-start: 3px dotted #fee140;
}`,
  },

  {
    property: "border-inline",
    description:
      "is a shorthand property for border-inline-start and border-inline-end.",
    htmlCode: `<div class="demo">
  <div class="box inline-1">1px solid</div>
  <div class="box inline-2">2px dashed</div>
  <div class="box inline-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.inline-1 {
  border-inline: 1px solid #764ba2;
}

.inline-2 {
  border-inline: 2px dashed #764ba2;
}

.inline-3 {
  border-inline: 3px dotted #764ba2;
}`,
  },

  {
    property: "border-inline-end",
    description:
      "sets the width, style, and color of the logical end border of an element in the inline direction.",
    htmlCode: `<div class="demo">
  <div class="box iend-1">1px solid</div>
  <div class="box iend-2">2px dashed</div>
  <div class="box iend-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.iend-1 {
  border-inline-end: 1px solid #f5576c;
}

.iend-2 {
  border-inline-end: 2px dashed #f5576c;
}

.iend-3 {
  border-inline-end: 3px dotted #f5576c;
}`,
  },

  {
    property: "border-inline-start",
    description:
      "sets the width, style, and color of the logical start border of an element in the inline direction.",
    htmlCode: `<div class="demo">
  <div class="box istart-1">1px solid</div>
  <div class="box istart-2">2px dashed</div>
  <div class="box istart-3">3px dotted</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 100px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.istart-1 {
  border-inline-start: 1px solid #00f2fe;
}

.istart-2 {
  border-inline-start: 2px dashed #00f2fe;
}

.istart-3 {
  border-inline-start: 3px dotted #00f2fe;
}`,
  },

  {
    property: "margin-block",
    description:
      "is a shorthand property for margin-block-start and margin-block-end.",
    htmlCode: `<div class="demo">
  <div class="box mb-1">1rem margin</div>
  <div class="box mb-2">2rem margin</div>
  <div class="box mb-3">3rem margin</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 80px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.mb-1 {
  margin-block: 1rem;
}

.mb-2 {
  margin-block: 2rem;
}

.mb-3 {
  margin-block: 3rem;
}`,
  },

  {
    property: "margin-inline",
    description:
      "is a shorthand property for margin-inline-start and margin-inline-end.",
    htmlCode: `<div class="demo">
  <div class="box mi-1">1rem margin</div>
  <div class="box mi-2">2rem margin</div>
  <div class="box mi-3">3rem margin</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  min-height: 80px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.mi-1 {
  margin-inline: 1rem;
}

.mi-2 {
  margin-inline: 2rem;
}

.mi-3 {
  margin-inline: 3rem;
}`,
  },


  {
    property: "rotate",
    description:
      "applies a rotation transformation to an element around the z-axis.",
    htmlCode: `<div class="demo">
  <div class="box rotate-0">0deg</div>
  <div class="box rotate-45">45deg</div>
  <div class="box rotate-90">90deg</div>
  <div class="box rotate-180">180deg</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.rotate-0 {
  rotate: 0deg;
}

.rotate-45 {
  rotate: 45deg;
}

.rotate-90 {
  rotate: 90deg;
}

.rotate-180 {
  rotate: 180deg;
}`,
  },

  {
    property: "scale",
    description:
      "applies a scale transformation to an element, making it larger or smaller.",
    htmlCode: `<div class="demo">
  <div class="box scale-50">scale(0.5)</div>
  <div class="box scale-100">scale(1)</div>
  <div class="box scale-150">scale(1.5)</div>
  <div class="box scale-xy">scaleX(1.5) scaleY(0.5)</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.scale-50 {
  scale: 0.5;
}

.scale-100 {
  scale: 1;
}

.scale-150 {
  scale: 1.5;
}

.scale-xy {
  scale: 1.5 0.5;
}`,
  },

  {
    property: "translate",
    description:
      "applies a translation transformation to an element, moving it along the x and y axes.",
    htmlCode: `<div class="demo">
  <div class="box translate-0">translate(0, 0)</div>
  <div class="box translate-xy">translate(20px, 20px)</div>
  <div class="box translate-x">translateX(40px)</div>
  <div class="box translate-y">translateY(40px)</div>
</div>`,
    cssCode: `body {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  min-height: 120px;
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(1.05);
}

.translate-0 {
  translate: 0 0;
}

.translate-xy {
  translate: 20px 20px;
}

.translate-x {
  translate: 40px 0;
}

.translate-y {
  translate: 0 40px;
}`,
  },
];

export function getPropertyExample(propertyName) {
  if (!propertyName) return null;
  const item = propertyExamples.find(
    (p) => p.property.toLowerCase() === propertyName.toLowerCase()
  );
  return item || null;
}

export default propertyExamples;
