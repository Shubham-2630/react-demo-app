import React from 'react';
import { Card, CardContent, Typography, Link, Grid, Avatar, Button } from '@mui/material';
import { data } from './data';
import { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = ({ name, mobile, email }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Card sx={{ minWidth: 275, minHeight: 270 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: "lightgray", width: 56, height: 56, marginRight: 2 }}>{name[0]}</Avatar>
        <Grid container style={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          {isFollowed && <StarRateIcon style={{ marginLeft: '5px', color: 'gold' }} />}
        </Grid>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mobile: <Link>{mobile}</Link>
        </Typography>

        <Grid item lg={12} >
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: <Link>{email}</Link>
        </Typography>
          </Grid>

        <Button onClick={handleFollow} startIcon={<PersonAddIcon />} variant="outlined" sx={{ marginLeft: '10px' }}>
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>

        <Button onClick={handleDelete} startIcon={<DeleteIcon />} variant="outlined" sx={{ marginLeft: '10px' }}>
          Deleted
        </Button>
      </CardContent>
    </Card>
  );
};

const UserList = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((user, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <UserCard {...user} />
        </Grid>
      ))}
    </Grid>
  );
};

const App = () => {
  return (
    <div style={{ margin: "10px 10px" }}>
      <UserList data={data} />
    </div>
  );
};

export default App;
