import type { ReactNode } from 'react';
import Badge, { type BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useAppSelector } from '../../store/hooks';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '2px 4px',
    },
}));
export default function WishlistBadge({ Icon }: { Icon?: ReactNode }) {
    const { items } = useAppSelector((state) => state.wishlist)
    return (
        <IconButton aria-label="wishlist" sx={{ '&:hover': { transform: 'scale(1.1)', bgcolor: 'rgba(137, 137, 206, 0.5)' }, transition: 'transform 0.2s' }}>
            <StyledBadge badgeContent={items.length} color="error">
                {
                    Icon ? Icon : <FavoriteBorder />

                }
            </StyledBadge>
        </IconButton>
    );
}

