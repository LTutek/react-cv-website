function LanguageComponent() {
  return (
    <>
      <div className="language container">
        <div className="title row col-md-6 offset-md-3">
          <div className="col-xl-12 col-md-6 col-lg-12 col-md-6 col-md-12 col-md-6">
            <h1 className="hobbieTitle">Languages</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <sdx-pie-chart
              value="Language"
              description="Proficiency"
              legend-position="right"
              data='[{
    "value": 10,
    "color": "azure",
    "label": "German (10/10)",
    "srHint": "Native language"
  }, {
    "value": 9,
    "color": "iris",
    "label": "Croatian (9/10)",
    "srHint": "Native language"
  }, {
    "value": 8,
    "color": "turquoise",
    "label": "English (8/10)",
    "srHint": "Fluent"
  },  {
    "value": 4,
    "color": "orchid",
    "label": "French (4/10)",
    "srHint": "School level"
  }]'
            ></sdx-pie-chart>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguageComponent;
