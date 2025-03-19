import React, {useState, useEffect} from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchOtherUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('nope')
  }
  return response.json();
}

const FetchingStuff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorOne, setError] = useState(null);
  const [value, setValue] = useState('');
  
  const {data, error, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: fetchOtherUsers
  })

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      if (!response.ok) {
        throw new Error('sucks to suck!')
      }
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchUsers()
  }, []);


  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {loading && <p>Loading..</p>}
      {errorOne && <p>{errorOne}</p>}
      <ul>
        {users.map(user => {
          if (user.login.includes(value)) {
            return <li
              key={(user.id)}
            ><strong>{user.login}</strong> - {user.avatar_url}</li>
          } else {
            return []
          }
        })}
      </ul>
      <ul>
        {data?.length > 0 ? (
        data.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))
      ) : (
        <li>Nope</li>
      )}
      </ul>
    </div>
  )
}

export default FetchingStuff