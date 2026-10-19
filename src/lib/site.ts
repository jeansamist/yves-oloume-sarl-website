export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.yves-oloume.com").replace(/\/$/, "")

export const company = {
  name: "Yves OLOUME SARL",
  shortName: "Yves OLOUME",
  foundingYear: 2010,
  phone: "+237676313333",
  phoneDisplay: "+237 676 31 33 33",
  email: "info@yves-oloume.com",
  whatsapp: "https://wa.me/237676313333",
  street: "114 Rue Joffre",
  district: "Akwa",
  city: "Douala",
  country: "CM",
  postalBox: "BP 18629 Douala",
  mapsUrl: "https://maps.google.com/?q=114+Rue+Joffre,Akwa,Douala",
  geo: { latitude: 4.0511, longitude: 9.6942 },
}

export const images = {
  hero: "https://images.unsplash.com/photo-1784915473361-113f7010f0bc?auto=format&fit=crop&w=1800&q=85",
  modules: "https://images.unsplash.com/photo-1616185501655-b134ec9405f9?auto=format&fit=crop&w=1400&q=80",
  worker: "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?auto=format&fit=crop&w=1200&q=80",
  site: "https://images.unsplash.com/photo-1706891713426-282a9e4ad9f5?auto=format&fit=crop&w=1400&q=80",
  warehouse: "https://images.unsplash.com/photo-1772299121503-cd62a57e3a26?auto=format&fit=crop&w=1400&q=80",
  steel: "https://images.unsplash.com/photo-1787672358772-a53840892c0c?auto=format&fit=crop&w=1400&q=80",
  interior: "https://images.unsplash.com/photo-1781156210760-7d33f6ccc893?auto=format&fit=crop&w=1400&q=80",
  engineer: "https://images.unsplash.com/photo-1765378025255-5c2ff04563f4?auto=format&fit=crop&w=1200&q=80",
}

export type ImageKey = keyof typeof images
