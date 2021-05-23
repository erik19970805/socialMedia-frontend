import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../interfaces/state.interface';
import { searchUser } from '../../redux/actions/user.action';
import { IUser } from '../../interfaces/user.interface';
import UserCard from '../UserCard';

const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);

  const { auth, user } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();

  const onChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value.toLocaleLowerCase().replace(/ /g, '');
    setSearch(inputSearch);

    if (inputSearch) {
      dispatch(searchUser(inputSearch));
    }
  };

  const handleClose = () => {
    setSearch('');
    setUsers([]);
  };

  useEffect(() => {
    if (search) {
      setUsers(user.searchUser);
    } else {
      setUsers([]);
    }
  }, [auth.token, search, user]);

  return (
    <form className="search-form">
      <input type="text" id="search" name="search" value={search} onChange={onChangeSearch} />
      <div className="search-icon" style={{ opacity: search ? 0 : 0.3 }}>
        <span className="material-icons">search</span>
        <span>Search</span>
      </div>
      <div
        className="close-search"
        style={{ opacity: users && (users.length === 0 ? 0 : 1) }}
        onClick={handleClose}
      >
        &times;
      </div>
      <div className="users">
        {users &&
          users.map((userFind: IUser) => (
            <Link key={userFind._id} to={`/profile/${userFind._id}`} onClick={handleClose}>
              <UserCard user={userFind} border="border" />
            </Link>
          ))}
      </div>
    </form>
  );
};

export default Search;
