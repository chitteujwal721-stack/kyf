export const siteConfig = {
  name: "Khandesh Youth Foundation",
  shortName: "KHANDESH YOUTH FOUNDATION",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://khandeshyouthfoundation.org",
  logoUrl: "/logo.png",
  tagline: "Empowering Youth • Transforming Society",
  description: "Khandesh Youth Foundation (KYF) unites cause-driven youth to solve community challenges in education, healthcare, blood donation, and social welfare in Dhule and across Khandesh.",
  email: "",
  phone: "+91 9421098906",
  altPhone: "",
  address: "Dhule, Maharashtra, India",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.664408711463!2d74.7675765!3d20.9042225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd80693a1c6a2ad%3A0x6b4fb24e6446e507!2sDhule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  joinUsFormUrl: "https://forms.google.com",
  socialLinks: {
    instagram: "https://instagram.com/khandeshyouthfoundation",
    facebook: "https://facebook.com/khandeshyouthfoundation",
    youtube: "https://youtube.com/@khandeshyouthfoundation",
    linkedin: "https://linkedin.com/company/khandeshyouthfoundation",
    whatsapp: "https://wa.me/919421098906"
  },
  upi: {
    id: "8830651706@upi",
    accountName: "Khandesh Youth Foundation",
    bankName: "Union Bank of India",
    accountNumber: "324002010193464",
    ifsc: "UBIN0532401",
    branch: "Dhule Branch",
    qrCodeImage: "/qr-code.png"
  },
  notice: {
    enabled: true,
    text: "📢 Member Registration Open for 2026 Mega Blood Donation & Tree Plantation Drives! Join us to make a difference in Khandesh.",
    speed: 18, // seconds for 1 cycle
    bgColor: "#5D3A1A",
    textColor: "#FDFBF7"
  },
  defaultTheme: {
    primary: "#5D3A1A", // Deep Warm Brown
    primaryHover: "#4A2E14",
    secondary: "#0EA5E9", // Sky Blue / Teal
    secondaryHover: "#0284C7",
    accent: "#16A34A", // Green
    accentHover: "#15803D",
    bgMain: "#FDFBF7", // Warm Ivory White
    bgCard: "#FFFFFF",
    textMain: "#1F2937",
    textMuted: "#4B5563",
    navbarBg: "#FFFFFF",
    footerBg: "#2A1810"
  }
};
