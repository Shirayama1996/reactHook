import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  let { allData, loading, isError } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`
  );
  return (
    <>
      <h2>COVID 19</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            loading === false &&
            allData &&
            allData.length > 0 &&
            allData.map((item, index) => {
              return (
                <tr key={item.ID}>
                  <td>{moment(item.Date).format("DD/MM/YYYY")}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
