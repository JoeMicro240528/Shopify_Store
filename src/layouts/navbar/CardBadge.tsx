import type { ReactNode } from 'react';
import Badge, { type BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCartTotalQuantity } from '../../store/cart/cartSlice';
import { useAppSelector } from '../../store/hooks';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '2px 4px',
  },
}));
export default function CardBadge({ Icon }: { Icon?: ReactNode }) {
  const totalQuantity = useAppSelector(getCartTotalQuantity)
  return (
    <IconButton aria-label="cart" sx={{ '&:hover': { transform: 'scale(1.1)', bgcolor: 'rgba(137, 137, 206, 0.5)' }, transition: 'transform 0.2s' }}>
      <StyledBadge badgeContent={totalQuantity} color="primary">
        {
          Icon ? Icon : <ShoppingCartIcon />

        }
      </StyledBadge>
    </IconButton>
  );
}

