import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./list.scss";

const List = () => {
  const rows = [
    {
      id: "APR-2021",
      date: "1267789",
      amount: 7989885,
      method: 5875868678,
      status: "Approved",

      value: "5%",
    },
    {
      id: "MAY-2021",
      date: "82123345678",
      amount: 9023430,
      method: -578678684,
      status: "Pending",
      value: "5%",
    },
    {
      id: "JUN-2021",
      date: "23442",
      amount: 3123455,
      method: -8686789,
      status: "Pending",
      value: "5%",
    },
    {
      id: "JUL-2021",
      date: "675868",
      amount: 912320,
      method: 70896070,
      status: "Approved",
      value: "5%",
    },
    {
      id: "AUG-2021",
      date: "675868",
      amount: 2005340,
      method: -70896070,
      status: "Pending",
      value: "5%",
    },
    {
      id: "SEP-2021",
      date: "675868",
      amount: 782345,
      method: 58686789,
      status: "Approved",
      value: "5%",
    },
    {
      id: "OCT-2021",
      date: "675868",
      amount: 901231230,
      method: -578678684,
      status: "Pending",
      value: "5%",
    },
    {
      id: "NOV-2021",
      date: "675868",
      amount: 32345,
      method: -875868678,
      status: "Pending",
      value: "5%",
    },
    {
      id: "DEC-2021",
      date: "675868",
      amount: 9233440,
      method: 70896070,
      status: "Approved",
      value: "5%",
    },
    {
      id: "JAN-2022",
      date: "675868",
      amount: 20234300,
      method: -70896070,
      status: "Pending",
      value: "5%",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <div className="tablename">
            <h4>Monthwise Performance</h4>
          </div>
          <TableRow>
            <TableCell className="tableCell">Month</TableCell>
            <TableCell className="tableCell ">Max Profit Day</TableCell>
            <TableCell className="tableCell ">Max Loss Day</TableCell>
            <TableCell className="tableCell">Profit/Loss</TableCell>
            <TableCell className="tableCell">P/L (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">
                <span>{row.date}</span>
              </TableCell>
              <TableCell className="tableCell loss">
                <span>{row.amount}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span>{row.method}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.value}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
