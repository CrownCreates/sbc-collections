const ALL_PRODUCTS = [
  {
    id: "now-sbc-shirt",
    numericId: 1,
    name: "NOW SBC SHIRT",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/now-sbc-shirt-white.jpeg",
    variants: [
      { color: "White", images: ["images/tshirts/now-sbc-shirt-white.jpeg"] },
      { color: "Navy Blue", images: ["images/tshirts/now-sbc-shirt-navyblue.jpeg"] }
    ]
  },
  {
    id: "born-this-way-sbc",
    numericId: 2,
    name: "Born this way SBC",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/born this way SBC T-shirt.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/born this way SBC T-shirt.jpeg"] }
    ]
  },
  {
    id: "sbc-army-bucket-cap",
    numericId: 3,
    name: "SBC ARMY BUCKET CAP",
    price: 30000,
    category: "accessories",
    img: "images/headwear/SBC ARMY BUCKET CAP.jpeg",
    variants: [
      { color: "Black", images: ["images/headwear/SBC ARMY BUCKET CAP.jpeg"] }
    ]
  },
  {
    id: "sbc-skull-cap",
    numericId: 4,
    name: "SBC skull cap",
    price: 25000,
    category: "headwear",
    img: "images/headwear/SBC skullcap.jpeg",
    variants: [
      { color: "Black", images: ["images/headwear/SBC skullcap.jpeg"] }
    ]
  },
  {
    id: "sbc-slides",
    numericId: 5,
    name: "SBC SLIDES",
    price: 70000,
    category: "footwear",
    img: "images/footwear/SBC PALM SLIPPERS.jpeg",
    variants: [
      { color: "Black", images: ["images/footwear/SBC PALM SLIPPERS.jpeg"] }
    ]
  },
  {
    id: "sbc-jacket-n-short",
    numericId: 6,
    name: "SBC JACKET N SHORT",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC JACKET N SHORT.jpeg",
    variants: [
      { color: "Black", images: ["images/fullset/SBC JACKET N SHORT.jpeg"] }
    ]
  },
  {
    id: "sbc-star-tracksuit",
    numericId: 7,
    name: "SBC STAR TRACKSUIT",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC STARTRACKSUIT BLACK.jpeg",
    variants: [
      { color: "Black", images: ["images/fullset/SBC STARTRACKSUIT BLACK.jpeg"] }
    ]
  },
  {
    id: "sbc-track-id-1",
    numericId: 8,
    name: "SBC TRACK ID 1",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC TRACK ID 1.jpeg",
    variants: [
      { color: "Black", images: ["images/fullset/SBC TRACK ID 1.jpeg"] }
    ]
  },
  {
    id: "sbc-tracksuit-green",
    numericId: 9,
    name: "SBC Track suit Green",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC Tracksuit Green.jpeg",
    variants: [
      { color: "Green", images: ["images/fullset/SBC Tracksuit Green.jpeg"] }
    ]
  },
  {
    id: "sbc-tracksuit-red-n-white",
    numericId: 10,
    name: "SBC TRACK SUIT RED N WHITE",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC TRACKSUIT NAVY RED N WHITE.jpeg",
    variants: [
      { color: "Black", images: ["images/fullset/SBC TRACKSUIT NAVY RED N WHITE.jpeg"] }
    ]
  },
  {
    id: "sbc-tracksuit-white",
    numericId: 11,
    name: "SBC TRACK SUIT WHITE",
    price: 70000,
    category: "fullset",
    img: "images/fullset/SBC Tracksuit White.jpeg",
    variants: [
      { color: "Black", images: ["images/fullset/SBC Tracksuit White.jpeg"] }
    ]
  },
  {
    id: "sbc-shorts",
    numericId: 12,
    name: "SBC SHORTS",
    price: 30000,
    category: "fullset",
    img: "images/shorts/SBC SHORTS.jpeg",
    variants: [
      { color: "Black", images: ["images/shorts/SBC SHORTS.jpeg"] }
    ]
  },
  {
    id: "senator-scarface",
    numericId: 13,
    name: "SENATOR SCAR FACE",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/SBC BLACK SCARFACE.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/SBC BLACK SCARFACE.jpeg"] }
    ]
  },
  {
    id: "sbc-shirt-logo",
    numericId: 14,
    name: "SBC SHIRT LOGO",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-shirt-logo.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-shirt-logo.jpeg"] }
    ]
  },
  {
    id: "sbc-skeleton-shirt",
    numericId: 15,
    name: "SBC SKELETON SHIRT",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-skeleton-shirt.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-skeleton-shirt.jpeg"] }
    ]
  },
  {
    id: "sbc-skeleton-head",
    numericId: 16,
    name: "SBC SKELETON Love",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-skeleton-head.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-skeleton-head.jpeg"] }
    ]
  },
  {
    id: "sbc-n-yb",
    numericId: 17,
    name: "SBC N YB",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-nbayoungboy-shirt.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-nbayoungboy-shirt.jpeg"] }
    ]
  },
  {
    id: "boys-dont-cry-sbc",
    numericId: 18,
    name: "BOYS DON'T CRY SBC",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-boys-don't-cry.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-boys-don't-cry.jpeg"] }
    ]
  },
  {
    id: "fear-is-the-thief",
    numericId: 19,
    name: "FEAR IS THE THIEF",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-fear-is-the-thief.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-fear-is-the-theif.jpeg"] }
    ]
  },
  {
    id: "sbc-graphic-tee",
    numericId: 20,
    name: "SBC GRAPHIC TEE",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-graphic-tee.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-graphic-tee.jpeg"] }
    ]
  },
  {
    id: "sbc-stay-strong",
    numericId: 21,
    name: "SBC STAY STRONG",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-graphic-tee-id2.jpeg",
    variants: [
      { color: "White", images: ["images/tshirts/sbc-graphic-tee-id2.jpeg"] }
    ]
  },
  {
    id: "im-not-your-ex-sbc",
    numericId: 22,
    name: "I'M NOT YOUR EX SBC",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-i'm-not-your-ex.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-i'm-not-your-ex.jpeg"] }
    ]
  },
  {
    id: "hustlers-mode",
    numericId: 23,
    name: "HUSTLERS MODE",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-kiss-me-on-the-side.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-kiss-me-on-the-side.jpeg"] }
    ]
  },
  {
    id: "sbc-plea-sure",
    numericId: 24,
    name: "SBC PLEA SURE",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-plea-sure.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-plea-sure.jpeg"] }
    ]
  },
  {
    id: "stop-the-war-make-peace",
    numericId: 25,
    name: "STOP THE WAR MAKE PEACE",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-stop-war-make-peace.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-stop-war-make-peace.jpeg"] }
    ]
  },
  {
    id: "trust-your-heart",
    numericId: 26,
    name: "TRUST YOUR HEART",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-trust-your-heart.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-trust-your-heart.jpeg"] }
    ]
  },
  {
    id: "boys-dont-cry-sbc-v2",
    numericId: 27,
    name: "BOYS DON'T CRY SBC 2",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-boys-don't-cry2.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-boys-don't-cry2.jpeg"] }
    ]
  },
  {
    id: "standard-white-tee-design",
    numericId: 28,
    name: "STANDARD WHITE TEE DESIGN",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-monkey-white.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-monkey-white.jpeg"] }
    ]
  },
  {
    id: "sbc-generic-shirt",
    numericId: 29,
    name: "SBC GENERIC SHIRT",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-purple.jpeg",
    variants: [
      { color: "purple", images: ["images/tshirts/sbc-purple.jpeg"] }
    ]
  },
  {
    id: "sbc-new-york",
    numericId: 30,
    name: "SBC NEW YORK",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-new-york-yellow.jpeg",
    variants: [
      { color: "yellow", images: ["images/tshirts/sbc-new-york-yellow.jpeg"] }
    ]
  },
  {
    id: "sbc-trust-your-heart-v2",
    numericId: 31,
    name: "SBC TRUST YOUR HEART 2",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-trust-your-heart.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-trust-your-heart.jpeg"] }
    ]
  },
  
    {
    id: "sbc-tony-montana",
    numericId: 32,
    name: "SBC TONY MONTANA",
    price: 30000,
    category: "tshirts",
    img: "images/tshirts/sbc-tony-montana.jpeg",
    variants: [
      { color: "Black", images: ["images/tshirts/sbc-tony-montana.jpeg"] }
    ]
  }

];
