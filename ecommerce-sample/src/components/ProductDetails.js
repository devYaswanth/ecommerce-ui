import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import ProductService from '../services/ProductService';
import { FallingLines, TailSpin } from 'react-loader-spinner';
import Reviews from './Reviews';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await ProductService.getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);


  if (!product) return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FallingLines
        color="#1976d2"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading" />
    </div >
  );
  return (
    <React.Fragment>
      <Card
        sx={{ m: 2, p: 1.5, borderRadius: "16px", border: "1px solid lightgrey", }}
      >
        <Grid container>
          <Grid item xs={12} md={7}>
            {!imageLoaded && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <TailSpin
                  visible={true}
                  color="#1976d2"
                  height="96"
                  width="96"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"

                />
              </div>
            )}
            <CardMedia
              component="img"
              image={product.urls.full}
              alt={product.alt_description}
              sx={{
                objectFit: "cover",
                borderRadius: "8px",
                borderBottomLeftRadius: { xs: 0, sm: 0, md: "16px" },
                borderBottomRightRadius: { xs: 0, sm: 0, md: "16px" },
                height: { xs: "220px", md: "430px" },
                display: imageLoaded ? 'block' : 'none',
              }}
              onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image loads
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                ml: { xs: 0, md: 2 },
                px: 2, pt: 1,
                py: { xs: 2, md: 0.5 },
                borderRadius: { xs: 0, md: "16px" },
                borderTopLeftRadius: { xs: 0, sm: 0, md: "16px" },
                borderTopRightRadius: { xs: 0, sm: 0, md: "16px" },
                border: "1px solid lightgrey",
                background: "#ffffff",
                height: { md: "420px" }
              }}
            >
              {/* product name  */}
              <Grid container gap={2} alignItems={"center"} sx={{ mt: { xs: 2, md: 3 }, }}>
                <Grid item>
                  <Typography fontWeight="light" sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                    Product:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight="bold" sx={{ fontSize: { xs: "16px", md: "24px" } }} >
                    {product?.user?.name}
                  </Typography>
                </Grid>
              </Grid>

              {/* prie */}
              <Grid container gap={2} alignItems={"center"} sx={{ mt: { xs: 2, md: 3 }, }}>
                <Grid item>
                  <Typography fontWeight="light" sx={{ fontSize: { xs: "16px", md: "24px" } }} >
                    Price:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight="bold" sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                    {`₹ ${(Math.random() * 100).toFixed(2)}`}
                  </Typography>
                </Grid>
              </Grid>

              {/* Category */}
              <Grid container gap={2} alignItems={"center"} sx={{ mt: { xs: 2, md: 3 }, }}>
                <Grid item>
                  <Typography fontWeight="light" sx={{ fontSize: { xs: "16px", md: "24px" } }} >
                    Category:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight="bold" sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                    {product?.user?.last_name}
                  </Typography>
                </Grid>
              </Grid>
              {/* button */}
              <Grid sx={{ mt: { xs: 2, md: 3 }, }}>
                <Button
                  variant='contained'
                  size='large'
                  // onClick={handleOpenAlert}
                  disabled
                  sx={{ textTransform: "capitalize", borderRadius: "16px" }}
                >
                  Add to cart
                </Button>
                <Button
                  variant='outlined'
                  size='large'
                  onClick={() => navigate('/')}
                  sx={{ textTransform: "capitalize", borderRadius: "16px", ml: {xs:0, sm:2} , mt: {xs:1, sm:0} }}>
                  Back
                </Button>
              </Grid>
              {/* description */}
              <Grid sx={{ mt: { xs: 2, md: 4 }, }}>
                <Typography fontWeight="bold" sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                  Description:
                </Typography>
                <Typography fontWeight="light" mt={.5} sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                  {product?.alt_description}
                </Typography>
              </Grid>
            </Card>
          </Grid >
        </Grid>
      </Card>
      <Reviews />
    </React.Fragment>
  )
}