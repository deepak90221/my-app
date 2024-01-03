import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const TAF = () => {
  const [items] = useState([
    { id: 1, name: 'Name: Harsha', purpose: 'Meet', date: '12/28/2023', category: 'Parents' },
    { id: 2, name: 'Name: John', purpose: 'Meet', date: '12/28/2023', category: 'Visitors' },
    { id: 3, name: 'Name: Alice', purpose: 'Meet', date: '12/28/2023', category: 'Parents' },
    { id: 4, name: 'Name: Tony', purpose: 'Meet', date: '12/28/2023', category: 'Parents' },
    { id: 5, name: 'Name: Stark', purpose: 'Meet', date: '12/28/2023', category: 'Parents' },
    { id: 6, name: 'Name: Jonny', purpose: 'Meet', date: '12/28/2023', category: 'Parents' },
    { id: 7, name: 'Name: Uday', purpose: 'Meet', date: '12/28/2023', category: 'Visitors' },
    { id: 8, name: 'Name: Surya', purpose: 'Meet', date: '12/28/2023', category: 'Visitors' },
    // ... other items
  ]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter function
  const filterItemsByCategory = (category) => {
    const filtered = items.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setFilteredItems([]);
    setSelectedCategory('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth style={{ marginBottom: '16px' }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={(e) => filterItemsByCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="Parents">Parents</MenuItem>
            <MenuItem value="Visitors">Visitors</MenuItem>
          </Select>
        </FormControl>

        <Button onClick={() => filterItemsByCategory('Parents')}>Parents</Button>
        <Button onClick={() => filterItemsByCategory('Visitors')}>Visitors</Button>
        <Button onClick={clearFilters}>Clear Filters</Button>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {(filteredItems.length > 0 ? filteredItems : items).map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                style={{
                  backgroundColor: item.category === 'Parents' ? '#ffd700' : '#87CEEB',
                }}
              >
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Purpose: {item.purpose}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {item.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TAF;
