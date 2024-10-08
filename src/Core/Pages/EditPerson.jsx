/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import EditPersonForm from "../ui/EditPersonForm";
function EditPerson({ onSuccess, navigate }) {
  const { id } = useParams();

  return (
    <EditPersonForm onSuccess={onSuccess} personId={id} navigate={navigate} />
  );
}

export default EditPerson;
