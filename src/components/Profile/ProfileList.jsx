import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: '20px',
    },
}));

const ListItems = (props) => {
    const classes = useStyles();

    return(
        <div >
            <Paper className={classes.paper}>
                <p>Дата рождения: {props.birthday}</p>
                <p>Город: {props.city}</p>
                <p>email: {props.email}</p>
                <p>ФИО: {props.fio}</p>
                <p>Номер телефона: {props.number}</p>
                <p>Статус: {props.status}</p>
            </Paper>
        </div>
    );
}

export default function ProfileList(props){
    let state = props.arr.profile.arr
    
    let listElements = state.map( p => <ListItems key={p.id} birthday={p.birthday} city={p.city} email={p.email} fio={p.fio} number={p.number} status={p.status}/> );

    return(
        <div>
            { listElements }
        </div>
    );
}