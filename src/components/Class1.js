import React,{Component} from "react";
class Table extends Component {
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>navya</td>
              <td>11</td>
            </tr>
            <tr>
              <td>sita</td>
              <td>12</td>
            </tr>
            <tr>
              <td>sre</td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }
export default Table;