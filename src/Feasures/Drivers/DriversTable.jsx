/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import DriverContextMenu from "./DriverContextMenu.jsx";
import DriverRow from "./DriverRow.jsx";
function DriversTable({ drivers, error }) {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const columns = "grid-cols-[0.5fr_0.6fr_0.6fr_2.3fr_1.7fr_1.5fr]";

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Person Id</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Created Date</div>
        <div>Active License</div>
      </Table.Header>

      <Table.Body
        items={drivers?.items}
        render={(Driver, IsDark) => (
          <ContextMenu.Row
            id={Driver.driverID}
            key={Driver.driverID}
            action={() => {
              setSelectedDriver(Driver);
            }}
          >
            <Table.Row isDark={IsDark} id={Driver.driverID}>
              <DriverRow Driver={Driver} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <DriverContextMenu
          SelectedDriver={selectedDriver}
          key={selectedDriver?.driverID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default DriversTable;
