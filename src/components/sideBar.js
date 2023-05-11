import React from "react";
import { useDispatch } from "react-redux";
import close from "../images/close.png";
import {
  selectedItemFromList,
  updateToggleSidebar,
} from "../Store/actions/vehiclesAction";

function SidebarContent(props) {
  const { listVehicle } = props;
  const dispatch = useDispatch();

  const toggleIcon = () => {
    dispatch(updateToggleSidebar(false));
  };
  const selectedItem = (data) => {
    dispatch(selectedItemFromList(data));
  };
 const statusCounts = props.listVehicle?.vehicles?.reduce((acc, cur) => {
  if (cur.status in acc) {
    acc[cur.status]++;
  } else {
    acc[cur.status] = 1;
  }
  return acc;
}, {});

console.log(statusCounts);


  return (
    <div>
      <img className="closeico" onClick={toggleIcon} src={close} />
      {props.listVehicle?.vehicles?.map((data) => (
        <div style={{ borderBottom: "1px solid #edd9d99c" }} key={data.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "14px 8px 13px 8px",
                 
              cursor: "pointer",
            }}
            onClick={(evt) => selectedItem(data)}
          >
            <div
              style={{
                height: "9px",
                width: "9px",
                backgroundColor: data.color,
                borderRadius: "50%",
                marginRight: "10px",
                 justifyContent: "space-between", // Add margin to separate dot and text
              }}
            ></div>
            <p className="vehName" style={{ margin: 0,width:'80%'}}>
              {data.name}
            </p>
            
              <div style={{width: '10%',backgroundColor: data.color,borderRadius:'5rem'}}><p>{statusCounts[`${data.status}`]}</p></div>
            
            
          </div>
        </div>
      ))}
    </div>
  );
}
export default SidebarContent;
