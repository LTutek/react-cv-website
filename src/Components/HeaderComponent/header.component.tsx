function HeaderComponent() {
  return (
    <>
      <sdx-header
        index={{
          label: "Home",
          href: "https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaavabr1",
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
          "label": "Contact",
          "iconName": "icon-information-circle",
          "slot": "contact",
          "scrollable": false
        }

        
      ]'
        navigation='{
        "tertiary": {
          "children": [
            {
              "iconName": "icon-network",
              "label": "Intranet",
              "href": "https://intranet.swisscom.com/home/profile/taatulu3/profile"
            },
            {
              "iconName": "icon-linkedin",
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/in/luka-tutek-b14850279/"
            }
          ]
        }
      }'
      >
        <div slot="contact" className="container">
          <div className="row">
            <div className="col-10 padding-bottom-4">
              <sdx-button
                theme="transparent"
                icon-name="icon-linkedin"
                href="https://www.linkedin.com/in/luka-tutek-b14850279/"
                icon-size="2"
              ></sdx-button>
              <sdx-button
                theme="transparent"
                icon-name="icon-network"
                href="https://intranet.swisscom.com/home/profile/taatulu3/profile"
                icon-size="2"
              ></sdx-button>
            </div>
          </div>
        </div>
      </sdx-header>
    </>
  );
}

export default HeaderComponent;
