/* eslint-disable no-template-curly-in-string */
export default [
  {
    url: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${this.y},${this.x}",
    title_HE: `מבט רחוב`,
    title_EN: 'Street view',
    projection: "EPSG:4326"
  },
  {
    url: "https://simplex-smart3d.com/ces/nzrt/app/index.html?&x=${this.x}&y=${this.y}&crs=2039&height=400",
    title_HE: `מבט תלת מימד-נצרת עילית`,
    title_EN: '3D View',
    projection: "EPSG:2039"
  },
  {
    url: "https://oapgis.ofekonline.com/customscene/afula/?x=${this.x}&y=${this.y}&crs=2039&height=400",
    title_HE: `מבט תלת מימד-עפולה`,
    title_EN: '3D View',
    projection: "EPSG:2039"
  },
  {
    url: "http://simplex-mapping-data.com/oblivisionjs2/index.aspx?project=nazarethillit&x=${this.x}&y=${this.y}&crs=2039",
    title_HE: `מבט אלכסוני`,
    title_EN: 'Oblique View',
    projection: "EPSG:2039"
  },
  {
    url: "https://www.govmap.gov.il/?c=${this.x},${this.y}&z=10&b=1&bs=PARCEL_ALL%7C${this.x},${this.y}",
    title_HE: `Govmap`,
    title_EN: 'Govmap',
    projection: "EPSG:2039"
  },
  {
    url: "//www.waze.com/ul?ll=${this.y},${this.x}&navigate=yes&zoom=17",
    title_HE: `Waze`,
    title_EN: 'Waze',
    projection: "EPSG:4326"
  },
];
