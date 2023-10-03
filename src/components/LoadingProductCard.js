import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingProductCard() {
    return (
        <Grid item >
            <Card sx={{ maxWidth: 170, minWidth: 170, padding: 0.25 }}>
                <Skeleton variant="rounded" width={170} height={180} />
                <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width="50%" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width="80%"sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width="50%"sx={{ fontSize: '1rem' }} />
                <Container sx={{ marginTop: 3, paddingBottom: 0.4}}>
                    <Skeleton variant="rounded" width={120} height={35} />
                </Container>
                
            </Card>
        </ Grid>
    );
}