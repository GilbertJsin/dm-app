import { Box, Container, Grid, Paper, Typography } from '@mui/material';

function Main() {
  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        width: '100%',          
        maxWidth: 'none',
        margin: 0,
        padding: 0,
        '& *': {
          boxSizing: 'border-box'
        }
    }}>
      <Paper 
        elevation={3}
        sx={{
          p: 3,
          m: 2,
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          minHeight: '800px',
          overflow: 'auto',
          maxWidth: '800px',
          mx: 'auto'  // centers the paper
        }}
      >
        <Typography 
          variant="body1" 
          sx={{
            textAlign: 'left',
            whiteSpace: 'pre-line',
            textIndent: '2em',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            px: 4,  // horizontal padding
            '& p': {
              marginBottom: '1em'
            }
          }}
          paragraph
        >
          {/* Split text into paragraphs */}
          
        </Typography>
      </Paper>
      <Container 
        maxWidth={false} 
        disableGutters
        sx={{ 
          mt: 4, 
          mb: 4, 
          flex: 1,
          width: '100%',
          maxWidth: 'none'
        }}>
        <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
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
              <Typography variant="h6" gutterBottom>ik
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