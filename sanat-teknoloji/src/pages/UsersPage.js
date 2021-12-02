import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import UserList from "../components/UserList";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://5c7d65c4dd19010014c8e9d4.mockapi.io/users"
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  const indexOfLastUser = currentPage * postPerPage;
  const indexOfFirstUser = indexOfLastUser - postPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const lastPage = Math.ceil(users.length / postPerPage);

  const nextPage = () => {
    if (currentPage !== lastPage) {
      let c = currentPage;
      c++;
      setCurrentPage(c);
    }
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      let c = currentPage;
      c--;
      setCurrentPage(c);
    }
  };

  return (
    <div className="container pt-5">
      <div className="d-flex align-items-center justify-content-between mt-5">
        <h1>Anasayfa</h1>
        <ul className="d-flex align-items-center justify-content-center">
          <li className="mx-2">
            <button className="btn btn-secondary px-3">...</button>
          </li>
          <li>
            <button className="btn btn-success">Ekle</button>
          </li>
        </ul>
      </div>
      <UserList users={currentUsers} loading={loading} />
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
}
