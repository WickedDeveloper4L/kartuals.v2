import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  FaBars,
  FaRedhat,
  FaShoppingBag,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { useDispatch, useSelector } from "react-redux";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { GiMonclerJacket, GiConverseShoe } from "react-icons/gi";
import { signOutStart } from "../../redux/user/user.actions";
export default function TemporaryDrawer({ anchor }) {
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

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  //   const { username } = user;
  const list = (anchor) => (
    <Box
      sx={{
        color: "black",
        background: "#b87333",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 220,
        height: "120%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem key="15">
        <ListItemText
          primary={
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                fontFamily: "Bruno Ace",
              }}
            >
              KARTUALS
            </span>
          }
          sx={{
            display: "inline",
            fontWeight: "bold",
            fontSize: 14,
            color: "black",
            fontFamily: "Bruno Ace",
          }}
        />
      </ListItem>
      <Divider />

      {user ? (
        <ListItem>
          <ListItemIcon
            sx={{
              color: "black",
            }}
          >
            <FaUserCircle />
          </ListItemIcon>
          <ListItemText primary={user.displayName || "shopa111"} />
        </ListItem>
      ) : (
        <ListItem>
          <Link to="/signIn">
            {" "}
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <AiOutlineLogin />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Sign In
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
      )}
      <Divider />
      <List>
        <ListItem key="5" disablePadding>
          <Link to="/shop">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <FaShoppingBag style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Shop
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem key="0" disablePadding>
          <Link to="/shop/mens">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <BsGenderMale style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Men's
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key="1" disablePadding>
          <Link to="/shop/womens">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <BsGenderFemale style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Women's
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key="2" disablePadding>
          <Link to="/shop/jackets">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <GiMonclerJacket style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Jackets
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key="3" disablePadding>
          <Link to="/shop/hats">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <FaRedhat style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Hats
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key="9" disablePadding>
          <Link to="/shop/sneakers">
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "black",
                }}
              >
                <GiConverseShoe style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Bruno Ace",
                    }}
                  >
                    Sneakers
                  </span>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />

      {user && (
        <ListItem>
          <ListItemButton onClick={() => dispatch(signOutStart())}>
            <ListItemIcon
              sx={{
                color: "black",
              }}
            >
              <FaSignOutAlt style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <span
                  style={{
                    fontSize: "13px",
                    fontFamily: "Bruno Ace",
                  }}
                >
                  Sign out
                </span>
              }
            />
          </ListItemButton>
        </ListItem>
      )}
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <FaBars style={{ color: "#b87333", fontSize: "20px" }} />
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
