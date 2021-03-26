import { withStyles, Button, Grid, Typography } from '@material-ui/core';

const MyButton = withStyles((theme) => ({
  root: {
    height: 55,
    width: 55,
    backgroundColor: ({ color }) => {
      switch (color) {
        case 'primary':
          return theme.palette.primary.main;
        default:
          return theme.palette.background.default;
      }
    },
    '&:hover': {
      backgroundColor: ({ color }) => {
        switch (color) {
          case 'primary':
            return theme.palette.secondary.main;
          default:
            break;
        }
      },
    },
  },
}))(Button);

const StyledButton = ({ value, onClick, color, fontWeight }) => {
  return (
    <Grid item xs={3}>
      <MyButton onClick={onClick} color={color} disableElevation>
        <Typography fontWeight={fontWeight}>{value}</Typography>
      </MyButton>
    </Grid>
  );
};

export default StyledButton;
