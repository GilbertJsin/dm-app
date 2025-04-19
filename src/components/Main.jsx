import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';

function Main() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Main Content
              </Typography>
              {/* Add your main content here */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Secondary Content
              </Typography>
              {/* Add your secondary content here */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;