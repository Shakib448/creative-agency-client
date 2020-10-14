import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  NavDropdown,
  Table,
} from "react-bootstrap";
import "./AdminServiceListTable.css";

const AdminServiceListTable = () => {
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
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <NavDropdown title="Pending" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Done</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">On Going</NavDropdown.Item>
              </NavDropdown>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminServiceListTable;
