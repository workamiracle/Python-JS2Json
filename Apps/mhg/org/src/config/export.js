export default [
  {
    url: "https://arcgis8.intertown.co.il/arcgis107/rest/services/itown_utils/Printing/GPServer/ExportWebMap/execute",
    dpi: [
      {
        default: 96,
        min: 50,
        max: 300
      }
    ],
    scales: ['1:100', '1:250', '1:500', '1:1000', '1:2000', '1:4000', '1:8000', '1:16000', '1:32000'],
    output_formats: ['PDF', 'PNG32', 'PNG8', 'JPG', 'GIF', /*'SVG', 'SVGZ'//קבצים הניתנים לעריכה*/],
	landscape_templates: [
    {
      source: 'mhg_A3 Landscape',
      EN_text: 'A3',
      HE_text: 'A3ֹֹֹֹ Landscape'
    },
    {
      source: 'mhg_A0_Landscape',
      EN_text: 'A0',
      HE_text: 'A0ֹֹֹֹ Landscape'
    },
    {
      source: 'mhg_A4 Landscape',
      EN_text: 'A4',
      HE_text: 'A4ֹֹֹֹ Landscape'
    },
    {
      source: 'mhg_A4 Landscape_grid_50',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל50 מטר'
    },
    {
      source: 'mhg_A4 Landscape_grid_100',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל100 מטר'
    },
    {
      source: 'mhg_A4 Landscape_grid_250',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל250 מטר'
    },
    {
      source: 'mhg_A4 Landscape_grid_500',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל500 מטר'
    },
    
  ],
  portrait_templates: [
    {
      source: 'mhg_A3 Portrait',
      EN_text: 'A3',
      HE_text: 'A3ֹֹֹֹ Portrait'
    },
    {
      source: 'mhg_A0_Portrait',
      EN_text: 'A0',
      HE_text: 'A0ֹֹֹֹ Portrait'
    },
    {
      source: 'mhg_A4 Portrait',
      EN_text: 'A4',
      HE_text: 'A4 Portrait'
    },
    {
      source: 'mhg_A4 Portrait_grid_50',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל50 מטר'
    },
    {
      source: 'mhg_A4 Portrait_grid_100',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל100 מטר'
    },
    {
      source: 'mhg_A4 Portrait_grid_250',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל250 מטר'
    },
    {
      source: 'mhg_A4 Portrait_grid_500',
      EN_text: 'A4',
      HE_text: 'קנ"מ מותאם ל500 מטר'
    },
  ]
}
]