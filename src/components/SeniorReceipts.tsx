import { Button, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Article from "../data/Article";
import GetEmployeeOrders from "../data/GetEmployeeOrders";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import FlexBox from "./FlexBox";
import ReceiptCard from "./cards/ReceiptCard";

interface Props {
  abort: () => void;
}
const SeniorReceipts = (props: Props) => {
  const { user } = useContext(UserContext);
  const { users } = useContext(DataBaseContext);
  const employee = user.empID;
  const seniorList = users.filter((singleUser: User) => {
    return singleUser.role === 3;
  });
  const [ordersByEmp, setOrderList] = useState<Order[] | null>(
    GetEmployeeOrders(employee)
  );

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
        <Grid>
          <ReceiptCard
            senior={senior}
            employee={employee}
            empOrdersBySenior={getEmpOrdersBySenior(senior)}
          />
        </Grid>
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
export default SeniorReceipts;
