import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { fetchUserDetails } from "../../core/hooks/getUser"

const UserHeader = () => {
  const [error, setError] = useState(null)
  const [userDetails, setUserDetails] = useState("")

  useEffect(() => {
    fetchData()
    async function fetchData() {
      let userDetailsData = await fetchUserDetails()
      setUserDetails(userDetailsData)
      debugger
      console.log(userDetails)
      if (userDetailsData.includes("error")) {
        setError(userDetails)
      }
    }
  }, [])

  return (
    <>
      {userDetails && (
        <Typography
          variant="h6"
          component="h6"
          gutterBottom
          style={{ fontSize: "18px" }}
        >
          {`${userDetails[0].LastName}, ${userDetails[0].FirstName} (${userDetails[0].AccountId})`}
        </Typography>
      )}
      <hr />
    </>
  )
}

export default UserHeader