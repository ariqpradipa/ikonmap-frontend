import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

import { Disclosure, Transition } from '@headlessui/react'

import Maps from '../gis/maps';

//Icons
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [mapType, setMapType] = React.useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const mapChange = (event) => {
        setMapType(event.target.value);
        console.log(mapType)
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <a href="/">
                            Peta iKon
                        </a>
                    </Typography>

                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/peta"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Peta
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/tentang"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Tentang
                        </Link>
                    </nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Masuk
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                {/* Sidebar Menu Items */}
                <Divider />
                <div className="flex flex-col">

                    {/*Tipe Peta*/}
                    <Disclosure>
                        <Disclosure.Button>
                            <div className="flex flex-row border-2 rounded-md border-black m-2 p-1">
                                <div className="m-1 flex flex-row">
                                    <div className="pr-6">
                                        <MapIcon />
                                    </div>
                                    Tipe Peta
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="text-gray-800">
                                <div className="flex pl-[6%]">

                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="maps-type-label"
                                            defaultValue="1"
                                            name="maps-type-group"
                                            onChange={mapChange}

                                        >
                                            <FormControlLabel value="1" control={<Radio />} label="Google Maps (Satelit)" />
                                            <FormControlLabel value="2" control={<Radio />} label="Google Maps (Jalan)" />
                                            <FormControlLabel value="3" control={<Radio />} label="Open Street Map" />
                                        </RadioGroup>
                                    </FormControl>

                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>

                    {/*Prakiraan Cuaca*/}
                    <Disclosure>
                        <Disclosure.Button>
                            <div className="flex flex-row border-2 rounded-md border-black m-2 p-1">
                                <div className="m-1 flex flex-row">
                                    <div className="pr-6">
                                        <WbSunnyIcon />
                                    </div>
                                    Prakiraan Cuaca
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="text-gray-800">
                                <div className="flex pl-[6%]">

                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Curah Hujan" />
                                        <FormControlLabel control={<Checkbox />} label="Suhu Udara" />
                                    </FormGroup>

                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                </div>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />

                <Maps tipePeta={mapType} />
                
            </Main>
        </Box>
    );
}
