export default function Todo({ firstName, lastName, age}) {
  return (
    <>
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
        </tr>
        <style jsx>{`
            tr:nth-child(odd){
              background-color: #fff;
            }

            tr:nth-child(even){
                background-color: #f2f2f2;
            }
              
            tr:hover {
                background-color: #ddd;
            }

            td {
                border: 1px solid #ddd;
                padding: 8px;
              }
        `}</style>
    </>
  );
}
