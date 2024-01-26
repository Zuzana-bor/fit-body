import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const PageLoader = () => {
  return (
    <Stack sx={{ color: 'grey.500', m: 50 }}>
      <CircularProgress color="primary" size={100} />
    </Stack>
  );
};

export default PageLoader;
