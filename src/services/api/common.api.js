export const baseUrl = "http://localhost:8080/api/v1";

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRlNmU2ZmFiZTk4YmEwMmNlNTEwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE2NzIyOCwiZXhwIjoxNjcwMzQwMDI4fQ.BoyeoDK9JmNqhgrlfiru7DvGEl7QXBJtxQ2LJhvj_lA"

export const headers = {
  headers: {
    token: 'Bearer ' + jwtToken,
    'Content-Type': 'application/json'
  }
}
