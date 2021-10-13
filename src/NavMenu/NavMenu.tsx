import { Button, createTheme, Menu, MenuItem, ThemeProvider } from "@mui/material";
import { useState } from "react";
import text from '../text.json';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#838B60"
        },
        secondary: {
            main: "#F4F2E8"
        }
    }
  });

export default function NavMenu(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <ThemeProvider theme={theme}>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}}
                >
                    <MenuRoundedIcon color="secondary"/>
                </Button>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {text.map((x) => {
                        return(
                            <Link to={`/${x.path}`}>
                                <MenuItem>
                                    {x.page}
                                </MenuItem>
                            </Link>
                            
                        );
                    })}
                </Menu>
            </ThemeProvider>
        </>
    );
}