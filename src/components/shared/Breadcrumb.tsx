import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const Breadcrumb: React.FC<{ prev:string[]; accuml: string }> = ({ prev, accuml }) => {
  return (
     <>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs sx={{fontSize:"14px"}} aria-label="breadcrumb">
    
        { prev.map((item, index) => (
            <Link key={index}  underline="hover" color="inherit" href="/">
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
