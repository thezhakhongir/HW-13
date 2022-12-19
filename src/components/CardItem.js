import { Add, RemoveCircle } from "@mui/icons-material";
import { styled } from "@mui/material";

export const CardItem = ({
  title,
  subtitle,
  price,
  item,
  id,
  totalPrice,
  onIncreasePrice,
  onDecrease,
}) => {
  const decrease = () => {
    if (item !== 0) {
      onDecrease(id);
    }
  };
  return (
    <StyledDiv>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{price}</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            marginTop: "10px",
          }}
        >
          <Add
            onClick={() => onIncreasePrice(id)}
            style={{ alignSelf: "center" }}
          />
          {item}

          <RemoveCircle onClick={decrease} />
        </div>
        <p>total:{totalPrice}</p>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  backgroundColor: "coral",
  borderRadius: "12px",
  marginTop: "20px",
}));
