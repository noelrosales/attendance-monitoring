import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';

export default () => {
    return (
        <Sidebar>
            <ul>
                <li><NavLink exact to="/">Dashboard</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/students">Students</NavLink></li>
                <li><NavLink to="/guardians">Guardians</NavLink></li>
                <li><NavLink to="/messages">Messages</NavLink></li>
                <li><NavLink to="/announcements">Announcements</NavLink></li>
                <li><NavLink to="/attendance">Attendance Monitoring</NavLink></li>
            </ul>
        </Sidebar>
    )
}

const Sidebar = styled.nav`
    background: ${props => props.dark ? "black" : "#fff"};

    ul{
        list-style: none;
        padding: 0px;
        grid-area: sidebar;

        li{
            a{
                text-decoration: none;
                color: #333;
                display: block;
                padding: 20px;
                transition: background .2s ease-in-out;

                &.active{
                    background: ${props => props.dark ? "red" : "rgba(0,0,0,.45)"};
                    color: white
                }

                &:hover{
                    background: ${props => props.dark ? "red" : "rgba(0,0,0,.1)"};
                    color: rgba(0,0,0,.4)
                }
            }
        }
    }
`;


