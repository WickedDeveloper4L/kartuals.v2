import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import { motion } from "framer-motion";
import { BsFillBagFill } from "react-icons/bs";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function CartDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const list = (anchor) => (
    <Box
      sx={{
        color: "black",
        background: "#fff",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "fit-content",
        minHeight: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem
        key="15"
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          fontFamily: "Bruno Ace",
          backgroundColor: "#eee",
        }}
      >
        <ListItemText
          primary={
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                fontFamily: "Bruno Ace",
                color: "#b87333",
              }}
            >
              My cart <BsFillBagFill style={{ fontSize: "20px" }} />
            </span>
          }
        />
      </ListItem>
      <Divider />
      <List>
        <motion.div variants={container} initial="hidden" animate="visible">
          {cartItems.map((item) => (
            <motion.div variants={child} key={item.id}>
              <ListItem key={item.id}>
                <CartItem key={item.title} item={item} />
              </ListItem>
            </motion.div>
          ))}
        </motion.div>
      </List>
      <Divider />
      <ListItem key="5">
        <CustomButton
          onClick={() => {
            history.push("/checkout");
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </ListItem>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <CartIcon style={{ color: "white", fontSize: "20px" }} />
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
