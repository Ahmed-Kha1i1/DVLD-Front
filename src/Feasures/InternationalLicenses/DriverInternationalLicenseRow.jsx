/* eslint-disable react/prop-types */
import BoolColumn from "../../Core/ui/BoolColumn";
import { FormatDateTime } from "../../Core/utils/FormatUtils";
function DriverInternationalLicenseRow({ driverInternationalLicense }) {
  const {
    internationalLicenseID,
    applicationID,
    issuedUsingLocalLicenseID,
    issueDate,
    expirationDate,
    isActive,
  } = driverInternationalLicense;

  return (
    <>
      <div>{internationalLicenseID}</div>
      <div>{applicationID}</div>
      <div>{issuedUsingLocalLicenseID}</div>
      <div>{FormatDateTime(issueDate)}</div>
      <div>{FormatDateTime(expirationDate)}</div>
      <BoolColumn value={isActive} />
    </>
  );
}

export default DriverInternationalLicenseRow;
