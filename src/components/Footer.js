import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import {ReactComponent as SandSlogo} from '../images/sands-logo.svg';

export default function Footer() {
    return(
        <Paper sx={{mt: 5}} elevation={2}>
            <Container sx={{p:1}}>
            <Grid container direction="row" justifyContent="start" alignItems="start" spacing={2}>
                <Grid item xs={12} md={6}>
                    <SandSlogo style={{height:85}}/>
                    <List>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <LocationOnIcon/>
                            </ListItemIcon>
                            <ListItemText secondary="Address: 292-FF, CCA, Phase VI, DHA lahore." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <LocalPhoneIcon/>
                            </ListItemIcon>
                            <ListItemText secondary="Phone: 042-37192004 " />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <EmailIcon/>
                            </ListItemIcon>
                            <ListItemText secondary="Email: info.syednson@gmail.com" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="body1" gutterBottom>
                        Customer Support
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="returns-and-refunds">
                            <ListItemText secondary="Returns and Refunds" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="terms-and-conditions">
                            <ListItemText secondary="Terms & Conditions" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="feedback">
                            <ListItemText secondary="Feedback" />
                          </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="body1" gutterBottom>
                        Syed & Sons
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="/">
                            <ListItemText secondary="Store" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="about-us">
                            <ListItemText secondary="About Us" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component={ Link } to="careers">
                            <ListItemText secondary="Careers" />
                          </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid sx={{mt:3, p:1}} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="subtitle2" gutterBottom>
                    Copyright © 2023 Syed & Sons | All Rights Reserved.
                </Typography>
            </Grid>
           </Container>
        </Paper>
    );
}