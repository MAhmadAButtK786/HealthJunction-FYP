import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../../../../firebase";

function UpdateAlnoorLabPage() {
  const { id } = useParams();
  const history = useHistory();
  const [alnoorLabData, setAlnoorLabData] = useState({});
  const [formData, setFormData] = useState({
    "Test Name": "",
    Price: "",
  });

  useEffect(() => {
    const fetchAlnoorLabData = async () => {
      const alnoorLabDoc = doc(database, "Alnoor Lab", id);
      const alnoorLabSnapshot = await getDoc(alnoorLabDoc);
      if (alnoorLabSnapshot.exists()) {
        const data = alnoorLabSnapshot.data();
        setAlnoorLabData(data);
        setFormData(data); // Set form data with Alnoor Lab data
      } else {
        console.log("No such document!");
      }
    };
    fetchAlnoorLabData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const alnoorLabDoc = doc(database, "Alnoor Lab", id);
    await updateDoc(alnoorLabDoc, formData);
    alert("Alnoor Lab test updated successfully");
    // Redirect to Alnoor Lab list page after update
    history.push("/alnoor");
  };

  return (
    <div className="w-full max-w-lg p-8 mx-auto my-8 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-center">Update Alnoor Lab Test Information</h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="col-span-1">
            <label className="block mb-2 font-semibold">
              Test Name:
              <input
                type="text"
                name="Test Name"
                value={formData["Test Name"]}
                onChange={handleInputChange}
                className="block w-full mt-1 border-gray-300 rounded-md form-input focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="col-span-1">
            <label className="block mb-2 font-semibold">
              Price:
              <input
                type="text"
                name="Price"
                value={formData.Price}
                onChange={handleInputChange}
                className="block w-full mt-1 border-gray-300 rounded-md form-input focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Update Alnoor Lab Test
        </button>
      </form>
    </div>
  );
}

export default UpdateAlnoorLabPage;
