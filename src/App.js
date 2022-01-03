import * as React from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { orange, blue } from "@material-ui/core/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ImgCard from "./ReusableComponents/ImgCard";
import VideoCard from "./ReusableComponents/VideoCard";
import FullVideoCard from "./ReusableComponents/FullVideoCard";
import GalleryCard from "./ReusableComponents/GalleryCard";
import BarChart from "./ReusableComponents/BarChart";
import LineChart from "./ReusableComponents/LineChart";
import AreaChart from "./ReusableComponents/AreaChart";
import PieChart from "./ReusableComponents/PieChart";
import DoughnutChart from "./ReusableComponents/DoughnutChart";
import CalendarComp from "./ReusableComponents/CalendarComp";

function App() {
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("LN13", checked);
  };

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg,#333,#999)",
      border: 0,
      borderRadius: 15,
      color: "white",
      padding: "10px",
    },
  });
  function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Styled Button</Button>;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: blue[500],
            },
          },
        ],
      },
    },
  });
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Material UI
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <Stack spacing={2} direction="row" mt={4}>
            <Button variant="contained" color="success">
              Contained
            </Button>
            <Button variant="outlined" color="error">
              Outlined
            </Button>

            <FormControlLabel
              label="Checkbox"
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
            />
            <ButtonStyled />
          </Stack> */}
          {/* <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              mt: 4,
              pb: 2,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <Typography variant="h4" gutterBottom component="div" mt={4}>
              Welcome to my page
            </Typography>

            <Typography variant="subtitle1" gutterBottom component="div">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>

            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Grid container spacing={4} justifyContent={"center"} mt={2} mb={2}>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300, background: "white", margin: "auto" }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <div>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{
                  color: "white",
                  border: "1px solid white",
                  marginTop: 10,
                }}
              >
                Open dialog
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleClose} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Box> */}
          <div style={{ display: "flex", margin: "10px" }}>
            <ImgCard
              name="Bat"
              image="https://wallpaperaccess.com/full/1147387.jpg"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis obcaecati"
            />

            <VideoCard
              name="Video Card"
              video="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
              description="Video Description  amet consectetur adipisicing elit. Officiis obcaecati"
            />

            <FullVideoCard video="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
          </div>
          <br />
          <br />
          <GalleryCard />
          <br />
          <br />
          <BarChart />
          <br />
          <br />
          <LineChart />
          <br />
          <br />
          <AreaChart />
          <br />
          <br />
          <PieChart />
          <br />
          <br />
          <DoughnutChart />
          <br />
          <br />
          <CalendarComp />
          <br />
          <br />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
