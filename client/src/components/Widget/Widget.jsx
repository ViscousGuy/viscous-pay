import { MonetizationOnRounded } from "@mui/icons-material";
import "./Widget.scss";
import AssignmentReturnedRoundedIcon from "@mui/icons-material/AssignmentReturnedRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBalance } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import AddMoneyModal from "./AddMoneyModal";
import { USDollar } from "../../pages/utils/helpOptions";

const Widget = ({ type }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.auth.user.balance);

  useEffect(() => {
    const { balance } = JSON.parse(localStorage.getItem("user"));
    dispatch(setBalance(balance));
  }, [JSON.parse(localStorage.getItem("user")).balance]);

  const { moneySend, moneyReceived, requestReceived } = useSelector(
    (state) => state.auth.user
  );

  let data;

  switch (type) {
    case "user":
      data = {
        title: "MONEY SEND",
        isMoney: false,
        link: "/transactions",
        isSend: true,
        linkText: "money send to",
        icon: (
          <CompareArrowsRoundedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "MONEY RECEIVED",
        isMoney: false,
        link: "/transactions",
        isReceived: true,
        linkText: "money received",
        icon: (
          <AssignmentReturnedRoundedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "REQUEST RECEIVED",
        isMoney: true,
        link: "/requests",
        isAnyReq: true,
        linkText: "requests received",
        icon: (
          <MonetizationOnRounded
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "/balance",
        isBalance: true,
        linkText: "add money",
      };
      break;

    default:
      break;
  }

  const addMoney = () => {
    setOpenModal(true);
  };

  return (
    <div className="widget">
      {openModal && <AddMoneyModal setAddMoneyModal={setOpenModal} />}
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isSend && moneySend}
          {data.isReceived && moneyReceived}
          {data.isAnyReq && requestReceived}
          {data.isBalance && USDollar.format(balance)}
        </span>
        {data.link === "/balance" ? (
          <span
            className="link"
            style={{ cursor: "pointer" }}
            onClick={addMoney}
          >
            add money
          </span>
        ) : (
          <Link to={data.link} className="link">
            <span>{data.linkText}</span>
          </Link>
        )}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Widget;
