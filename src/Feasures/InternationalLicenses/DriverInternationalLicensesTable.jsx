import { useState } from "react";
import useDriverInternationalLicenses from "./useDriverInternationalLicenses.js";
import Spinner from "../../Core/ui/Spinner.jsx";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import LicenseContextMenu from "../../Core/ui/LicenseContextMenu.jsx";
import { useParams } from "react-router-dom";
import DriverInternationalLicenseRow from "./DriverInternationalLicenseRow";
function DriverInternationalLicensesTable() {
  let { id } = useParams();
  const { isLoading, error, driverInternationalLicenses } =
    useDriverInternationalLicenses(id);
  const [selectedLicense, setSelectedLicense] = useState(null);
  const columns = "grid-cols-[1fr_1fr_1fr_1.3fr_1.3fr_0.5fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>International License Id</div>
        <div>Application Id</div>
        <div>Local License Id</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={driverInternationalLicenses}
          render={(driverInternationalLicense, IsDark) => (
            <ContextMenu.Row
              id={driverInternationalLicense.v}
              key={driverInternationalLicense.internationalLicenseID}
              action={() => {
                setSelectedLicense(driverInternationalLicense);
              }}
            >
              <Table.Row
                isDark={IsDark}
                id={driverInternationalLicense.internationalLicenseID}
              >
                <DriverInternationalLicenseRow
                  driverInternationalLicense={driverInternationalLicense}
                />
              </Table.Row>
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <LicenseContextMenu
            //to={`${selectedLicense.licenseID}/InternationalLicenses`}
            key={selectedLicense?.licenseID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default DriverInternationalLicensesTable;
