import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import GalleryProj from './GalleryProj.js';
import ProjectNav from './ProjectNav.js';
import WebsiteProj from './WebsiteProj.js';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#474a4f',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#87c232',
    },
  },
});

function Projects({projRef}) {

  const [page, setPage] = useState(1)

  const handleChange = (event, page) => {
    setPage(page)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="main" id="project" ref={projRef}>
        <h1>Projects</h1>      
          <ProjectNav page={page}/>
            <Box>
              <Pagination 
                count={2} 
                color='secondary'
                size='large'
                variant='outlined'
                onChange={handleChange}
                page={page}
                sx={{ position: 'relative', color: '#87c232' }}
                />
            </Box>
      </div>
    </ThemeProvider>
  );
}

export default Projects;