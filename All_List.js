import { Table } from 'react-bootstrap';
function All_List() {
  const arr = [
    {
      name: 'Ram', email: 'gopalnagarjwr@gmail.com', Address: [
        { Hm: '101', city: 'jhalawar', state: 'jaipur' },
        { Hm: '132', city: 'kota', state: 'jaipur' },
        { Hm: '111', city: 'udaipur', state: 'jaipur' },
        { Hm: '112', city: 'jodhapur', state: 'jaipur' }
      ]
    },
    {
      name: 'vikas', email: 'vikasjaintk@gmail.com', Address: [
        { Hm: '101', city: 'jhalawar', state: 'jaipur' },
        { Hm: '132', city: 'kota', state: 'jaipur' },
        { Hm: '111', city: 'udaipur', state: 'jaipur' },
        { Hm: '112', city: 'jodhapur', state: 'jaipur' }
      ]
    },
    {
      name: 'raj', email: 'raj123tk@gmail.com', Address: [
        { Hm: '101', city: 'jhalawar', state: 'jaipur' },
        { Hm: '132', city: 'kota', state: 'jaipur' },
        { Hm: '111', city: 'udaipur', state: 'jaipur' },
        { Hm: '112', city: 'jodhapur', state: 'jaipur' }
      ]

    },
    {
      name: 'ghanshaym', email: 'gan431tk@gmail.com', Address: [
        { Hm: '101', city: 'jhalawar', state: 'jaipur' },
        { Hm: '132', city: 'kota', state: 'jaipur' },
        { Hm: '111', city: 'udaipur', state: 'jaipur' },
        { Hm: '112', city: 'jodhapur', state: 'jaipur' }
      ]
    }
  ];
  return (
    <div>
      <center>
        <h1>All List of users</h1>
        <Table variant='dark' striped>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
            {arr.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant='dark' ><tbody>
                    <tr>
                      <th>Hm</th>
                      <th>city</th>
                      <th>state</th>
                    </tr>
                    {item.Address.map((data, j) =>
                      <tr key={j}>
                        <td>{data.Hm}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                      </tr>
                    )}
                  </tbody></Table>
                </td>
              </tr>
            )
            }
          </tbody>
        </Table>
      </center>
    </div>
  );
}
export default All_List;