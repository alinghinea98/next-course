import React, { use } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

// All components in app folder are server side components by default
// next js has a build in system to cache the data
// means that it will cache the data found at that specific URL, and the next time we make the call
// it will take the data from cache instead of making the call
// but if the data changes often, we can disable the cache on url {cache: 'no-store'}
// an alternative is: {next: {revalidate: 10}}. in this case next will make a call every 10sec to have fresh data
//         <p>{new Date().toLocaleTimeString()}</p> se va actualiza la fiecare refresh in dev mode, dar nu si in prod mode
// dev: npm run dev | prod: npm run build and npm start
const UsersPage = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await resp.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-orderd">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
