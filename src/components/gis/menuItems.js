import * as React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Disclosure, Transition } from '@headlessui/react'

//Icons
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function MenuItems() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
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
                        <Disclosure.Panel className="text-gray-500">
                            <div className="flex pl-[6%]">

                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="gms"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="gms" control={<Radio />} label="Google Maps (Satelit)" />
                                        <FormControlLabel value="gmj" control={<Radio />} label="Google Maps (Jalan)" />
                                        <FormControlLabel value="osm" control={<Radio />} label="Open Street Map" />
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
                        <Disclosure.Panel className="text-gray-500">
                            <div className="flex pl-[6%]">

                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="gms"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="gms" control={<Radio />} label="Google Maps (Satelit)" />
                                        <FormControlLabel value="gmj" control={<Radio />} label="Google Maps (Jalan)" />
                                        <FormControlLabel value="osm" control={<Radio />} label="Open Street Map" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </Disclosure>

            </div>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}
