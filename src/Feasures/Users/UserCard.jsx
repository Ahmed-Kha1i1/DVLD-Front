/* eslint-disable react/prop-types */
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Info from "../../Core/ui/Info";
import { GoPersonFill } from "react-icons/go";
import Active from "../../Core/ui/Active";

function UserCard({ user }) {
  return (
    <Card>
      <CardTitle text="User Details" icon={<GoPersonFill />}>
        <Active active={user.isActive} />
      </CardTitle>
      <Info title="Id" text={user.userId} />
      <Info title="Username" text={user.username} />
    </Card>
  );
}

export default UserCard;
