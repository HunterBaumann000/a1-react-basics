import React, { Component } from 'react';

import RefreshDialog from './Dialog';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

class Country extends Component {
    state = {
        name: 'South Korea',
        gold: 0,
      }

    addToCounter = () => {
        this.setState({ gold: (this.state.gold + 1) })
    }

    removeFromCounter = () => {
        if(this.state.gold > 0) {
            this.setState({ gold: (this.state.gold - 1) })
        }
    }

    render() { 
    return (
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>         
            <Card style={{padding:'5em'}} sx={{ maxWidth: 500 }}> 
            <CardContent>
            
                <div className="titleFont">
                    { this.state.name }
                    <hr/>
                </div>

                <div>

                    <div className="smallTextFont">
                        <EmojiEventsIcon/> &nbsp; Gold Medals: &nbsp; <EmojiEventsIcon/>
                    </div>

                    <div className="numberFont">
                        { this.state.gold }
                    </div>
                </div>


                <ButtonGroup style={{marginTop:'.5em'}}>
                <Button
                    color="secondary"
                    aria-label="reduce"
                    onClick={() => {
                        this.removeFromCounter()
                    }}>
                    <RemoveIcon fontSize="small" />
                </Button>

                <Button
                    color="secondary"
                    aria-label="increase"
                    onClick={() => {
                        this.addToCounter()
                    }}>

                    <AddIcon fontSize="small" />
                </Button>
                </ButtonGroup>
            </CardContent>
                
            <RefreshDialog></RefreshDialog>

            
            </Card>   
        </div>           
    );
  }
}

export default Country