import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetails';
import ProductDetails from './ProductDetails';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid lightgrey',
  boxShadow: 100,
  p: 4,
};

function ProductCard({ product }) {
  const navigate = useNavigate();
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <Card
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{ m: 2, p: 1.5, borderRadius: "16px", border: "1px solid lightgrey", }}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.urls.small}
          alt={product.alt_description}
          sx={{ objectFit: "cover", borderRadius: "16px", cursor: "pointer" }}
        />
        <>
          <Typography mt={2} fontSize="16px" fontWeight="bold" >
            {product?.user?.name}
          </Typography>
        </>

        <Grid container justifyContent="space-between" alignItems="center" my={2}>
          <Grid items>
            <Typography mt="2" fontSize="16px" fontWeight="" >
              {`₹ ${(Math.random() * 100).toFixed(2)}`}
            </Typography>
          </Grid>
          <Grid items>
            <Button
              variant='outlined'
              size='small'
              onClick={handleOpen}
              sx={{ textTransform: "capitalize", borderRadius: "16px" }}>
              Modal View
            </Button>
          </Grid>
        </Grid>
        <>
          <Typography mt={2} fontSize="16px"  >
            {truncateText(product?.alt_description, 35)}
          </Typography>
        </>
      </Card>
      <React.Fragment sx={{backgroundColor:"black"}}>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            
          </Box>
        </Modal>
      </React.Fragment>

    </>
  );

}


export default ProductCard;
