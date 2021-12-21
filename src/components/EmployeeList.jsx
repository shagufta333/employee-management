import React, { Component } from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    let employeeData = await axios.get("https://reqres.in/api/users");
    this.setState({ employees: employeeData.data.data });
  };
  render() {
    let employeeList = this.state.employees.map((employee) => {
      return (
        <Item key={employee.id} className="employee-item">
          <Item.Image
            className="avatar"
            circular
            size="tiny"
            alt={employee.first_name}
            src={employee.avatar}
          />
          <Item.Content verticalAlign="middle">
            <Item.Header className="name">
              {employee.first_name} {employee.last_name}
            </Item.Header>
          </Item.Content>
        </Item>
      );
    });
    return <Item.Group id="employee-list">{employeeList}</Item.Group>;
  }
}
export default EmployeeList;
