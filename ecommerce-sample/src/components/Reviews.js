import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box, Divider } from '@mui/material';
import Marquee from 'react-fast-marquee';

// dummy data
const reviewsData = [
    { name: 'Alice', review: 'I purchased this product last month, and I must say it exceeded my expectations. The quality is top-notch, and the customer service was exceptional. Highly recommend it to anyone looking for value and reliability!' },
    { name: 'Bob', review: 'The product is decent, but I was expecting a bit more based on the description. The shipping was slower than anticipated, and the support team was not very helpful in resolving my issues. There’s room for improvement.' },
    { name: 'Charlie', review: 'Absolutely fantastic! The product arrived quickly and was exactly as described. The build quality is impressive, and it performs flawlessly. I’ve already recommended it to my friends and will definitely purchase again in the future.' },
    { name: 'David', review: 'Good value for the money. The item is well-built and functional, but the packaging could use some improvement. It arrived with some minor dents, but thankfully the product itself was unharmed. Overall, satisfied with the purchase.' },
    { name: 'Eve', review: 'I had an amazing experience with this product. It has been working perfectly since I got it, and the overall quality is exceptional. The design is sleek, and it fits perfectly into my lifestyle. I am very pleased with my purchase and would buy it again.' },
    { name: 'Frank', review: 'The product is okay, but it didn’t meet my expectations. The features didn’t match the description, and I faced some issues with the setup. I contacted customer service, but the response was slower than expected. Not completely satisfied, but it’s functional.' }
];

function Reviews() {
    return (
        <React.Fragment>
            <Grid m={2}  sx={{ border: "1px solid lightgray", borderRadius:"12px" }}>
                <Typography fontSize="24px" fontWeight="bold" p={2} > Reviews </Typography>
                <Divider mt={2} mb={3} sx={{mx:"0"}}/>
                <Marquee gradient={false} pauseOnHover={true} speed={20}>
                    {reviewsData.map((review, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>

                            <Card p={1} sx={{ maxWidth: 300, minWidth: 300 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <Avatar sx={{ bgcolor: '#1976d2', color: 'white', mx: 2 }}>
                                        {review.name[0]}
                                    </Avatar>
                                    <Typography fontSize="16px" >{review.name}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography fontSize="16px"  >{review.review}</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Marquee>

            </Grid >
        </React.Fragment>

    );
}

export default Reviews;
