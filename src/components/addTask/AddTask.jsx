import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    position: fixed;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1e1e;
    border: solid 1px #eee;
    border-radius: 12px;
    padding: 8px 12px;
    width: calc(100% - 40px);
    max-width: 400px;
`

const Input = styled.input`
    background: transparent;
    border: solid 1px #eee;
    outline-width: 0px;
    width: 100%;
    padding: 4px 8px;
    color: var(--white);
    border-radius: 6px;    
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 0px 10px;
    background: transparent;
    color: var(--white);
    font-size: 22px;
    border: 0px;
    outline-width: 0px;
    padding: 0px;
    cursor: pointer;
`


const AddTask = (props) => {
    const [text, setText] = useState("")

    function handleClick() {
        props.setTask([...props.tasks, text.replace(",", "$/$")])
        localStorage.setItem("tasks", `[${[...props.tasks, text.replace(",", "$/$")]}]`)
        setText("")
    }

    return (
        <Div style={text == "" ? null : { border: "solid 1px var(--light-red)" }}>
            <Input type="text" value={text} onChange={(evt) => setText(evt.target.value)} placeholder='Digite sua tarefa' style={text == "" ? { color: "#ffffff76" } : { color: "#fff" }} />
            <Button style={text == "" ? null : { color: "var(--light-red)" }} onClick={handleClick}><i className="bi bi-plus-circle"></i></Button>
        </Div>
    )
}

export default AddTask
