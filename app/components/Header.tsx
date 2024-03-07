"use client";

    import { OrganizationSwitcher } from "@clerk/nextjs";

    const DotIcon = () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
      )
    }

    const CustomPage = () => {
      return (
        <div>
          <h1>Custom Organization Profile Page</h1>
          <p>This is the custom organization profile page</p>
        </div>
      );
    };

    const Header = () => (
      <header>
        <OrganizationSwitcher>
          <OrganizationSwitcher.OrganizationProfilePage
            label="Custom Page"
            url="custom"
            labelIcon={<DotIcon />}
          >
            <CustomPage />
          </OrganizationSwitcher.OrganizationProfilePage>
          <OrganizationSwitcher.OrganizationProfileLink
            label="Homepage"
            url="/"
            labelIcon={<DotIcon />}
          />
          <OrganizationSwitcher.OrganizationProfilePage label="members" />
          <OrganizationSwitcher.OrganizationProfilePage label="settings" />
        </OrganizationSwitcher>
      </header>
    );

    export default Header;
