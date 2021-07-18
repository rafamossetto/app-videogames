import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieList } from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import AdminContainer from "./AdminStyles";
import {
  BiCameraMovie,
  BiUserCheck,
  BiStore,
  BiListCheck,
} from "react-icons/bi";
import NotFound from "../404/NotFound";

function AdminPage({ props }) {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    let verifyAdmin = async () => {
      const authorized = await isAdmin();
      setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getMovieList());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <AdminContainer>
      {admin ? (
        <div className="boxContainer">
          <div className="userBox">
            <BiCameraMovie size="100" />
            <Link to="/AdminMovies" className="link">
              Movies
            </Link>
          </div>
          <div className="userBox">
            <BiUserCheck size="100" />
            <Link to="/users" className="link">
              Users
            </Link>
          </div>
          <div className="userBox">
            <BiListCheck size="100" />
            <Link to="/adminorders" className="link">
              Orders
            </Link>
          </div>
          <div className="userBox">
            <BiStore size="100" />
            <Link to="/AdminProd" className="link">
              Products
            </Link>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </AdminContainer>
  );
}

export default AdminPage;
