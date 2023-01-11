import { useFetch } from "../../hooks/use-fetch";
import "./users.css";
import { AiOutlineReload } from "react-icons/ai";
import { ENDPOINTS } from "../../constants/endpoints";

function RandomData() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.USERS);

  if (error) {
    return (
      <>
        <div>An error occurred</div>
        <button onClick={refetch}>TRY AGAIN</button>
      </>
    );
  }
  if (loading) {
    return (
      <div className="loading">
        <div className="hypnotic-5"></div>
      </div>
    );
  }
  return (
    <div className="user-wrapper">
      <div className="some-info">
        <img src={data?.avatar} alt="avatar" className="avatar" />
        <h3 className="fullname">
          {data?.first_name} {data?.last_name}
        </h3>
        <h4 className="username">@{data?.username}</h4>
        <h4>{data?.employment.title}</h4>

        <AiOutlineReload className="reload-icon" onClick={refetch} />
      </div>
      <div className="data-container">
        <div className="single-data">
          <p>email:</p>
          <p>{data?.email}</p>
        </div>
        <div className="single-data">
          <p>gender:</p>
          <p>{data?.gender}</p>
        </div>
        <div className="single-data">
          <p>phone:</p>
          <p>{data?.phone_number}</p>
        </div>
        <div className="single-data">
          <p>date of birth:</p>
          <p>{data?.date_of_birth}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomData;
