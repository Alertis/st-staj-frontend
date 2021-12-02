import React, { useState } from "react";
import "./userList.css";

export default function UserList({ users, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="pt-1">
      <table className="w-100 user-list-table">
        <thead className="user-list-head ">
          <tr className="text-muted">
            <th>Kullanıcı</th>
            <th>Tarih</th>
            <th>E-Posta</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="user-list-body">
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} width="25px" />
                <p className="mx-3">{user.name}</p>
              </td>
              <td>{user.createdAt}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
