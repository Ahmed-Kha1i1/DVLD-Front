import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import PageTitle from "../ui/PageTitle";
import PersonForm from "../../Feasures/People/PersonForm";
import useUserPerson from "../../Feasures/Users/useUserPerson";

function EditUserPerson() {
  const { id } = useParams();
  const { isLoading, error, person } = useUserPerson(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`Edit Person Details (ID: ${id})`} />
      <PersonForm personToEdit={person} />
    </div>
  );
}

export default EditUserPerson;
