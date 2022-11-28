import {Button} from "@mui/material";

export const Dashboard = () => {
  const name = "John Doe";

  const names = ["John", "Doe"];


  return (
    <div>
      Hello {name}

      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
