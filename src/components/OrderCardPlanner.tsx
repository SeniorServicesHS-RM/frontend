import { orderBy } from "@firebase/firestore";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Article from "../data/Article";
import { updateEmployeeInOrderToDatabase } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import DropDownUserMenu from "./DropDownUserMenu";
import EditArticleDialog from "./EditArticleDialog";
import OrderCard from "./OrderCard";

interface Props {
  order: Order;
}

const OrderCardPlanner = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isEditArticleDialogOpen, setEditArticleDialogOpen] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const { users } = useContext(DataBaseContext);
  const employees = users.filter((user) => {
    return user.role === 2;
  });
  const editArticleOpenDialogHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setArticle(
      props.order.articleList.find((article) => {
        return article.id === event.currentTarget.id;
      })
    );
    setEditArticleDialogOpen(!isEditArticleDialogOpen);
  };
  const editArticleDialogHandler = () => {
    setEditArticleDialogOpen(!isEditArticleDialogOpen);
  };
  //event: React.MouseEvent<HTMLButtonElement>
  const handleClickDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setDialogOpen(true);
  };
  const dialogOpenHandler = () => {
    setDialogOpen(!isDialogOpen);
  };
  const dropDownClosingHandler = (user?: User) => {
    if (user) {
      updateEmployeeInOrderToDatabase(props.order, user);
      console.log(user.empID);
    } else if (user === null) {
      updateEmployeeInOrderToDatabase(props.order, null);
    }
    setAnchorEl(null);
  };

  const editOrder = (newOrder: Article, oldOrder: Article) => {
    const arrayIndex = props.order.articleList.findIndex((aryOrder) => {
      return aryOrder === oldOrder;
    });
    const newList = [...props.order.articleList];
    newList[arrayIndex] = newOrder;
    props.order.articleList = newList;
  };
  const deleteOrder = () => {};

  console.log(props.order);

  return (
    <>
      <Typography>Bestellung von: {props.order.seniorId}</Typography>
      <Typography>
        Zugewiesener Einkaufshelfer:{" "}
        {props.order.employeeId !== "undefined"
          ? props.order.employeeId
          : "noch nicht zugewiesen"}
      </Typography>
      <Button onClick={dialogOpenHandler}>Editieren</Button>
      <Dialog
        open={isDialogOpen}
        onClose={dialogOpenHandler}
        aria-labelledby={"Edit Order " + props.order.id}
      >
        <DialogContent>
          <DialogContentText>
            Bestellungs ID: {props.order.id}
          </DialogContentText>
          <DialogContentText>
            Senior ID: {props.order.seniorId}
          </DialogContentText>
          <DialogContentText>
            Einkaufshelfer ID: {props.order.employeeId}
          </DialogContentText>
          <Button onClick={handleClickDropDown}>Einkaufshelfer zuweisen</Button>
          <br></br>
          <DropDownUserMenu
            userList={employees}
            isOpen={Boolean(anchorEl)}
            handleClose={dropDownClosingHandler}
            anchorElement={anchorEl}
          />{" "}
          <>
            {props.order.articleList.map((article) => {
              return (
                <>
                  <Button
                    onClick={editArticleOpenDialogHandler}
                    id={article.id}
                  >
                    {article.name}
                  </Button>
                  <br></br>
                </>
              );
            })}
            {isEditArticleDialogOpen && (
              <EditArticleDialog
                order={article}
                handleClose={editArticleDialogHandler}
                editOrder={editOrder}
                deleteOrder={deleteOrder}
              ></EditArticleDialog>
            )}
          </>
        </DialogContent>

        <DialogActions>
          <Button>Speichern</Button>
          <Button onClick={dialogOpenHandler}>Abbrechen</Button>
        </DialogActions>
      </Dialog>
      <OrderCard order={props.order} />
      <br />
      <Divider variant="middle" />
      <br />
    </>
  );
};

export default OrderCardPlanner;
