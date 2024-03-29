import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import { UserProvider } from "./contexts/UserContext";
import { Counter } from "./pages/counter";

function App() {
    console.log('env', process.env);
    return (
        
        <Router>
            <UserProvider>
                <Box sx={{ display: "flex" }}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                FirstReact
                            </Typography>
                            <Button color="inherit">
                                <Link to="/" style={{
                                    color: "white"
                                }}>Home</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/About" style={{
                                    color: "white"
                                }}>About</Link>
                            </Button>

                            <Button color="inherit">
                                <Link to="/Counter" style={{
                                    color: "white"
                                }}>Counter</Link>
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 5, }}>

                        <Routes>
                            {/* pages */}
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Counter" element={<Counter />} />
                        </Routes>
                    </Box>
                    </Box>
            </UserProvider>
         </Router>
        
    );
}

export default App;
