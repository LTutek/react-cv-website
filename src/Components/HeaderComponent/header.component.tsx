import "./header.component.css";

function HeaderComponent() {
  const onButtonClick = () => {
    const pdfUrl = "/react-cv-website/assets/CV-Luka%20Swisscom.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-LukaTutek";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <sdx-header
        index={{
          label: "Home",
          href: "/",
        }}
        slots='[
        {
          "label": "Download CV",
          "iconName": "icon-download-cloud",
          "slot": "download",
          "scrollable": false,
          "href": "javascript:;"      
        },
        {
          "label": "School",
          "iconName": "icon-college-hat",
          "slot": "school",
          "scrollable": false
        },
        {
          "label": "Contact",
          "iconName": "icon-information-circle",
          "slot": "contact",
          "scrollable": false
        }
      ]'
      >
        <div slot="contact" className="container">
          <div className="row">
            <div className="col-10 margin-bottom-1">
              <sdx-button
                theme="transparent"
                label="LinkedIn"
                icon-name="icon-linkedin"
                href="https://www.linkedin.com/in/luka-tutek-b14850279/"
                icon-size="3"
              ></sdx-button>
            </div>
            <div className="col-10 margin-bottom-1">
              <sdx-button
                theme="transparent"
                label="Intranet"
                icon-name="icon-network"
                href="https://intranet.swisscom.com/home/profile/taatulu3/profile"
                icon-size="3"
              ></sdx-button>
            </div>
          </div>
        </div>
        <div slot="download" className="container">
          <div className="row">
            <div className="col-10 margin-bottom-1">
              <sdx-button
                theme="transparent"
                label="Download PDF"
                icon-name="icon-download"
                icon-size="2"
                onClick={onButtonClick}
              ></sdx-button>
            </div>
          </div>
        </div>
        <div slot="school" className="container">
          <div className="row">
            <div className="col-10 center margin-bottom-1">
              <sdx-icon
                icon-name="icon-map-pointer"
                size={2}
                sr-hint="School location"
                style={{ marginRight: "5px" }}
              ></sdx-icon>
              <span>BBBaden</span>
            </div>
            <div className="col-10 center margin-bottom-1">
              <sdx-icon
                icon-name="icon-clock"
                size={2}
                sr-hint="Day"
                style={{ marginRight: "5px" }}
              ></sdx-icon>
              <span>Mittwoch: Berufsschule</span>
            </div>
            <div className="col-10 center margin-bottom-1">
              <sdx-icon
                icon-name="icon-clock"
                size={2}
                sr-hint="Day"
                style={{ marginRight: "5px" }}
              ></sdx-icon>
              <span>Freitag: ABU</span>
            </div>
          </div>
        </div>
      </sdx-header>
    </>
  );
}

export default HeaderComponent;
