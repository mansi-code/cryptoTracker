import { AppBar, Button, Container, createTheme, IconButton, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


const useStyles = makeStyles({
    title : {
        flex:1,
        color : "yellow",
        fontWeight : "bold",
        cursor : "pointer"

    }
})

const Header = () => {

    const classes = useStyles();

    let navigate = useNavigate();
    const darkTheme = createTheme({
        palette : {
            primary : {
                main : "#fff"
            },
            type : "dark"
        }
    })

    const {currency,setCurrency} = CryptoState();

  return (
    <ThemeProvider  theme={darkTheme}>

        <AppBar color='transparent' position='static' >
            <Container>
                <Toolbar>
                    <Typography
                    className = {classes.title}
                    onClick = {()=>navigate('/')}
                    variant='h6'
                    >
                        GeekHouse

                    </Typography>
                   
                   
                    <Select
                    value={currency}
                    variant = 'outlined'
                    style = {
                        {
                            width:100,
                            height : 40,
                            marginRight : 15
                        }
                    }
                    onChange={(e)=>{setCurrency(e.target.value)}}
                    >
                        <MenuItem value = {"USD"} >USD </MenuItem>
                        <MenuItem value = {"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>

    </ThemeProvider>
  )
}

export default Header