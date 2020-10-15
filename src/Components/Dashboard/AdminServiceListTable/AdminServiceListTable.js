import React, { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  NavDropdown,
  Table,
} from "react-bootstrap";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import "./AdminServiceListTable.css";

const AdminServiceListTable = () => {
  const [status, setStatus] = useState("Pending");

  const [allCourse, setAllCourse] = useState([]);

  console.log(allCourse);

  useEffect(() => {
    const handleAllCourse = async () => {
      try {
        const res = await AxiosConfig.get("/allCourse");
        setAllCourse(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAllCourse();
  }, []);

  const handleStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Container className="adminServiceListTable">
      <Table borderless hover>
        <thead className="adminServiceListTable__tableHead">
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle
                  variant={
                    (status === "Pending" && "danger") ||
                    (status === "Done" && "success") ||
                    (status === "On Going" && "warning")
                  }
                  id="dropdown-basic"
                >
                  {status}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleStatus("Done")}>
                    Done
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleStatus("On Going")}>
                    On Going
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete()}>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td> */}
          </tr>
          {allCourse.map(({ _id, name, email, service, description }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{service}</td>
              <td>{description}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    variant={
                      (status === "Pending" && "danger") ||
                      (status === "Done" && "success") ||
                      (status === "On Going" && "warning")
                    }
                    id="dropdown-basic"
                  >
                    {status}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleStatus("Done")}>
                      Done
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatus("On Going")}>
                      On Going
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete()}>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminServiceListTable;
