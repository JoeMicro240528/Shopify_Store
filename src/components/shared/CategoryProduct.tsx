import { Paper, Typography } from "@mui/material"
import type { TCategory } from "../../types/category"
import { useNavigate } from "react-router"

const CategoryProduct = ({ category }: { category: TCategory }) => {

  const navigate = useNavigate()

  return (
    <Paper onClick={() => navigate(`/category/product/${category.slug}`)} sx={{
      width: '100%',
      textDecoration: 'none',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundPosition: 'center',
      cursor: 'pointer',
      backgroundSize: 'cover',
      '&:hover': {
        transform: 'scale(1.1)'
      },
      transition: 'all 0.5s ease-in-out',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('${category.image}')`
    }}>

      <Typography sx={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#fff'
      }}>
        {category.name}
      </Typography>
    </Paper>
  )
}

export default CategoryProduct
