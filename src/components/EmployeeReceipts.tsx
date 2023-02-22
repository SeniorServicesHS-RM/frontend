import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import GetEmployeeOrders from "../data/GetEmployeeOrders";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import ReceiptCard from "./ReceiptCard";
import FlexBox from "./FlexBox";

interface Props {
  abort: () => void;
}
const EmployeeReceipts = (props: Props) => {
  const { user } = useContext(UserContext);
  const { users } = useContext(DataBaseContext);
  const employee = user.empID;
  const seniorList = users.filter((singleUser: User) => {
    return singleUser.role === 3;
  });
  const [ordersByEmp] = useState<Order[] | null>(GetEmployeeOrders(employee));

  const getEmpOrdersBySenior = (senior: User) => {
    return ordersByEmp.filter((order) => {
      return order.seniorId === senior.seniorId;
    });
  };
  const mappedSeniors =
    seniorList &&
    seniorList.length > 0 &&
    seniorList.map((senior: User) => {
      return (
        <FlexBox>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <ReceiptCard
              senior={senior}
              employee={employee}
              empOrdersBySenior={getEmpOrdersBySenior(senior)}
            />
          </Grid>
        </FlexBox>
      );
    });
  return (
    <FlexBox>
      <Grid>
        <Button onClick={props.abort}>Zurück</Button>
        {mappedSeniors}
      </Grid>
    </FlexBox>
  );
};
export default EmployeeReceipts;
