import React, { useEffect, useState } from "react";
import { Container, Dropdown, Row, Table } from "react-bootstrap";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./AdminServiceListTable.css";

const AdminServiceListTable = () => {
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(true);
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    const handleAllCourse = async () => {
      try {
        const res = await AxiosConfig.get("/allCourse");
        setAllCourse(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleAllCourse();
  }, []);

  const handleDeleteDataCall = async () => {
    try {
      const res = await AxiosConfig.get("/allCourse");
      setAllCourse(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleDeleteDataCall();
  }, []);

  const handleStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const handleDelete = async (_id) => {
    try {
      await AxiosConfig.delete(`/delete/${_id}`).then((res) => {
        if (res) {
          handleDeleteDataCall();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="justify-content-center align-items-center">
        {allCourse.length === 0 && <CircularProgress color="secondary" />}
      </Row>
      {!loading && (
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
                        <Dropdown.Item onClick={() => handleDelete(_id)}>
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
      )}
    </>
  );
};

export default AdminServiceListTable;
