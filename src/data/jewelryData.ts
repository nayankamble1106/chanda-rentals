export interface Product {
  id: string;
  name: string;
  category: 'rings' | 'necklaces' | 'bridal' | 'bracelets';
  categoryLabel: string;
  purity: string;
  image: string;
  description: string;
  features: string[];
  approxWeight: string;
  estimatedPrice: string;
  inStock: boolean;
  highlightTag?: string;
}

export const STORE_INFO = {
  name: "Shanti Silver",
  tagline: "Timeless Elegance in Every Detail",
  subheadline: "Exquisite Silver Jewelry & Custom Artisanal Crafts in Chandrapur.",
  phone: "090288 30299",
  phoneFormatted: "+91 90288 30299",
  phoneRaw: "+919028830299",
  whatsappNumber: "919028830299",
  address: "Girnar Chowk Rd, opposite Jain sweet mart, Bazar Ward, Chandrapur, Maharashtra 442402",
  landmark: "Opposite Jain Sweet Mart, Girnar Chowk Rd",
  city: "Chandrapur",
  state: "Maharashtra",
  pincode: "442402",
  hoursText: "Open Daily - Closes at 8:00 PM",
  openingTime: "10:30 AM",
  closingTime: "8:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Girnar+Chowk+Rd,+opposite+Jain+sweet+mart,+Bazar+Ward,+Chandrapur,+Maharashtra+442402",
  googleMapsEmbedQuery: "Girnar Chowk Rd, opposite Jain sweet mart, Bazar Ward, Chandrapur, Maharashtra 442402",
};

export const PRODUCTS: Product[] = [
  {
    id: "sr-01",
    name: "Celestial Pavé Solitaire Ring",
    category: "rings",
    categoryLabel: "Silver Rings",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/collection_silver_rings_1791962678489.jpg",
    description: "Hand-forged sterling silver band adorned with precision-cut micro pavé accents, coated in lustrous anti-tarnish rhodium.",
    features: ["925 BIS Hallmarked", "Micro-Pavé Brilliant Cut Accents", "Platinum-Dipped Anti-Tarnish Finish"],
    approxWeight: "4.8g",
    estimatedPrice: "₹2,850",
    inStock: true,
    highlightTag: "Signature Design",
  },
  {
    id: "sn-01",
    name: "Aethel Filigree Statement Choker",
    category: "necklaces",
    categoryLabel: "Designer Necklaces",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/collection_silver_necklaces_1791962679825.jpg",
    description: "Intricately spun silver filigree work created by master artisans, presenting vintage royal opulence for high-profile celebrations.",
    features: ["Master Silversmith Filigree", "Adjustable Sterling Link Chain", "Hypoallergenic Nickel-Free"],
    approxWeight: "38.5g",
    estimatedPrice: "₹14,900",
    inStock: true,
    highlightTag: "Artisanal Masterpiece",
  },
  {
    id: "sb-01",
    name: "Rajwada Royal Bridal Choker & Kada Set",
    category: "bridal",
    categoryLabel: "Bridal Silver Collection",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/collection_bridal_silver_1791962680287.jpg",
    description: "An opulent bridal trousseau ensemble featuring a grand choker, matched chandelier jhumkas, maang tikka, and hand-embossed silver kadas.",
    features: ["Complete 5-Piece Bridal Set", "Heirloom Grade Hand Crafting", "Certified 92.5% Pure Silver Assay"],
    approxWeight: "165.0g",
    estimatedPrice: "₹48,500",
    inStock: true,
    highlightTag: "Bridal Heirloom",
  },
  {
    id: "sc-01",
    name: "Aura Brushed Minimalist Cuff",
    category: "bracelets",
    categoryLabel: "Modern Bracelets & Ornaments",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/collection_silver_bracelets_1791962680832.jpg",
    description: "Architectural satin-brushed solid sterling silver cuff, contoured with refined ergonomics and a lustrous mirror-beveled border.",
    features: ["Solid 925 Sterling Core", "Satin Matte with Mirror Chamfer", "Comfort Ergonomic Contour"],
    approxWeight: "28.2g",
    estimatedPrice: "₹8,400",
    inStock: true,
    highlightTag: "Contemporary Classic",
  },
  {
    id: "sr-02",
    name: "Eternity Dual-Tone Artisan Band",
    category: "rings",
    categoryLabel: "Silver Rings",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/collection_silver_rings_1791962678489.jpg",
    description: "Textured hammered finish band juxtaposed with polished silver channel settings, ideal for daily elegance or modern wedding bands.",
    features: ["Hand-Hammered Finish", "Comfort Fit Interior", "Custom Laser Engraving Available"],
    approxWeight: "6.2g",
    estimatedPrice: "₹3,400",
    inStock: true,
  },
  {
    id: "sn-02",
    name: "Serpentine Platinum-Luster Collar",
    category: "necklaces",
    categoryLabel: "Designer Necklaces",
    purity: "925 Sterling Silver",
    image: "/src/assets/images/hero_luxury_silver_jewelry_1791962677091.jpg",
    description: "Fluid architectural silver collar necklace reflecting light with liquid silk smoothness, completed with a solitaire teardrop pendant.",
    features: ["Liquid Silk Articulation", "Double Rhodium Plating", "Secure Hidden Clasp"],
    approxWeight: "24.6g",
    estimatedPrice: "₹11,200",
    inStock: true,
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    author: "Dr. Priya Deshmukh",
    locality: "Civil Lines, Chandrapur",
    rating: 5,
    date: "October 2026",
    quote: "Shanti Silver is unmatched in Chandrapur for pure 925 silver craftsmanship. I had a custom bridal choker made for my sister's wedding; the filigree detail and hallmark finish rival luxury jewelers in Mumbai.",
    verifiedPurchase: "Custom Bridal Choker Set",
  },
  {
    id: "t2",
    author: "Rohan Agrawal",
    locality: "Ramnagar, Chandrapur",
    rating: 5,
    date: "September 2026",
    quote: "Purchased a minimalist sterling silver bracelet and couple rings. Transparent weight calculation, fair pricing, and they gave proper certificate of authenticity. Highly recommend visiting their Bazar Ward store.",
    verifiedPurchase: "Artisan Couple Bands",
  },
  {
    id: "t3",
    author: "Sunita Wankhede",
    locality: "Bazar Ward, Chandrapur",
    rating: 5,
    date: "August 2026",
    quote: "Opposite Jain Sweet Mart, easiest location to find. The staff took time to explain 925 hallmarking and showed diverse modern designs alongside traditional pieces. Pure trust for our family for years.",
    verifiedPurchase: "Silver Pooja Articles & Neckwear",
  },
];

export const STORE_HIGHLIGHTS = [
  {
    title: "100% Certified 925 Purity",
    description: "Every single piece is rigorously tested and stamped with authentic 925 silver hallmark purity, backed by our purity certificate.",
  },
  {
    title: "Bespoke Artisanal Silversmiths",
    description: "Custom hand-forged jewelry crafted to your exact design specifications, wrist measurements, and bridal theme right in Chandrapur.",
  },
  {
    title: "5.0 Rated Customer Trust",
    description: "Over 140+ verified 5-star reviews from families across Chandrapur who rely on Shanti Silver for integrity and transparent pricing.",
  },
  {
    title: "Lifetime Polish & Maintenance",
    description: "Enjoy complimentary ultrasonic silver cleaning, scratch buffing, and stone inspection whenever you visit our Bazar Ward boutique.",
  },
];
