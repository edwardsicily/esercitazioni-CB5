import "./creditcards.css";
import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

function CreditCards() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.CREDITCARDS);

  if (error) return <div>Error...</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="credit-card-container">
      <div className="credit-card">
        <img
          className="card-chip"
          src="https://cdn-icons-png.flaticon.com/128/6404/6404100.png"
          alt=""
        />
        <div className="card-number">{data?.credit_card_number}</div>
        <div className="card-date">{data?.credit_card_expiry_date}</div>
        <div className="card-bottom">
          <div className="card-name">Name Surname</div>
          <div className="card-type">{data?.credit_card_type}</div>
        </div>
      </div>
      <button onClick={refetch}>GET </button>
    </div>
  );
}

export default CreditCards;
