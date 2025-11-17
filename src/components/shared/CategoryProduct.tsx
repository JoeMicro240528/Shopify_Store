import { Paper, Typography } from "@mui/material"

const CategoryProduct = () => {
  return (
    <Paper sx={{
        width:'100%',
        height:'250px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundPosition: 'center',
        cursor:'pointer',
          backgroundSize: 'cover',
          '&:hover':{
                transform:'scale(1.1)'
          },
          transition:'all 0.5s ease-in-out',
        backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8PA7brbI9KmO11G3yQ7P4HnG7i2lrPjmyTT1WYhmBfn79Ids4jnumZubygFyjAqFFGhpRMiKBZTMvq4VMy82_8GkCA3cumJrtPeOmSe_4oCJqAXVJQQYy6K_3EhKHuyc7FWef-sgXyqzXIcHGkSj_dMsrhsgSJut7MvEZNMuH_xYVbNaOeXzrmuGsb9NZztnc0imfZtL7G1fSCqhRnQAqKB9GnC1OwdEfFMDML9GQFgNuwD6gSjYWVCVjNe3U_GWJrZ8SUXOWfT8')"
    }}>
        <img src="" alt="" />
        <Typography sx={{
            fontSize:'24px',
            fontWeight:'600',
            color:'#fff'
        }}>
           Men's
        </Typography>
    </Paper>
  )
}

export default CategoryProduct
