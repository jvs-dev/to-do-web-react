import React, { useState } from 'react'
import styled from 'styled-components'

const Article = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid 2px var(--black-red);
    padding: 10px;
`

const Delete = styled.button`
background: transparent;
margin: 0px;
padding: 0px;
outline-width: 0px;
border: 0px;
color: var(--red-2);
font-size: 22px;
cursor: pointer;
`

const Text = styled.p`
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    margin: 0px;
`

const Check = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 30px;
    width: 30px;
    border-radius: 6px;
    margin: 0px;
    padding: 0px;
    outline-width: 0px;
    border: solid 2px var(--black-red);
    margin: 0px 10px 0px 0px;
    cursor: pointer;
    color: #20E3BB;
    font-size: 30px;        
`

const Card = (props) => {

    const [check, setCheck] = useState(false)

    function deleteTask() {
        props.tasks.splice(props.idx, 1)        
        localStorage.setItem("tasks", `[${props.tasks}]`)
        props.setTask([...props.tasks]);        
    }

    return (
        <Article style={check == true ? { borderBottom: "solid 2px #00FFF0" } : null}>
            <Check onClick={() => setCheck(!check)} style={check == true ? { border: "0px" } : null}>{check == true ? <i className="bi bi-check-lg"></i> : null}</Check>
            <Text style={check == true ? { color: "#20E3BB", textDecoration: "line-through" } : null}>{props.text.replace("$/$", ",")}</Text>
            <Delete onClick={deleteTask}><i className="bi bi-trash"></i></Delete>
        </Article>
    )
}

export default Card
