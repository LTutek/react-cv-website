function HeaderComponent() {
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
          "label": "Contact",
          "iconName": "icon-information-circle",
          "slot": "contact",
          "scrollable": false
        }

        
      ]'
      >
        <div slot="contact" className="container">
          <div className="row">
            <div className="col-10 ">
              <sdx-button
                theme="transparent"
                label="LinkedIn"
                icon-name="icon-linkedin"
                href="https://www.linkedin.com/in/luka-tutek-b14850279/"
                icon-size="3"
              ></sdx-button>
            </div>
            <div className="col-10">
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
      </sdx-header>
    </>
  );
}

export default HeaderComponent;
