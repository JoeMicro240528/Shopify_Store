import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const Breadcrumb: React.FC<{ prev: string[]; accuml: string }> = ({ prev, accuml }) => {
  const navigate = useNavigate();
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs sx={{ fontSize: "14px" }} aria-label="breadcrumb">

          {prev.map((item, index) => (
            <Link key={index} onClick={() => navigate(`/home`)} underline="hover" sx={{ cursor: 'pointer' }} color="inherit">
              {item}
            </Link>
          ))}


          <Typography sx={{ color: 'text.primary' }}>  {accuml}</Typography>
        </Breadcrumbs>
      </div>
    </>
  )
}

export default Breadcrumb
