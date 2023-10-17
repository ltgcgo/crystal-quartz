// Used to emit a slimmed down bundle
"use strict";

import Colour from "../../libs/colorjs/color.js";

import a98rgb from "../../libs/colorjs/spaces/a98rgb.js";
import hsv from "../../libs/colorjs/spaces/hsv.js";
import lch from "../../libs/colorjs/spaces/lch.js";
import oklch from "../../libs/colorjs/spaces/oklch.js";
import p3 from "../../libs/colorjs/spaces/p3.js";
import srgb from "../../libs/colorjs/spaces/srgb.js";

[a98rgb, hsv, lch, oklch, p3, srgb].forEach((e) => {
	Colour.Space.register(e);
});

export default Colour;
