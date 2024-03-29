import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { UserStore } from '../store/UserStore';
import { useNavigate } from "react-router-dom";

function ReplyForm(props) {
    const { SubmitReply, repliesCount } = props;
    const [state, setState] = useState({message: '', errorMsg:[], isLoading: false, successMsg: '', show:false});

    const toggleShow = () => setState({...state, show:!state.show});

    const handleMessageChange = (event) => {
        setState({...state, message:event.target.value});
    }

    const handleSubmit = async (event) => {
        //Submit form
        event.preventDefault();
        setState({...state, isLoading:true});
        let response = await SubmitReply(state.message);
        setState({...state, isLoading:false});
        //console.log('response', response);
        if(response.status == 200 || response.status == 201) {
            console.log('success');
            setState({...state, successMsg:response.message, message: ''});
        }else{
            let message = (response.status == 500) ? ['Sorry, an error occured, try again or inform an administrator'] : response.message;
            console.log('error message: ',response.message);
            setState({...state, errorMsg:message});
        }
        
        //
    }

    const displayErrors = () => {
        if(state.errorMsg.length > 0) {
            setTimeout(() => setState({...state, errorMsg:[]}), 5000);
            return state.errorMsg.map((errorMsg, key) => {
                return (<div key={key} className="alert alert-danger"><span>{errorMsg}</span><br/></div>); 
            })
        }
    }

    const displaysuccess = () => {
        if(state.successMsg != '') {
            setTimeout(() => setState({...state, successMsg:''}), 5000);
            return (<div className="alert alert-success"><span>{state.successMsg}</span><br/></div>); 
        }
    }

    const LeaveReplyStyle = () => {
        if(state.show) {
            return {float: "left", color: "#551A8B", cursor:"pointer"};
        }else{
            return {float: "left", textDecorationLine: "underline", color: "#0000EE", cursor:"pointer"};
        }
    }

    const renderForm = () => {
        if(state.show || repliesCount == 0) {
            return (
                <form onSubmit={handleSubmit} style={{width: "100%", marginTop: 10, marginLeft: "auto", marginRight: "auto"}}>
                    {displayErrors()}
                    {displaysuccess()}
                    <textarea className="form-control" onChange={handleMessageChange} value={state.message} required></textarea>
                    {state.isLoading && (
                        <button className="btn btn-primary" disabled={true} style={{float: "left"}}>
                            <i className={`fa fa-circle-o-notch fa-spin`}></i>
                            Submiting
                        </button>
                    )}
                    {!state.isLoading && <button className="btn btn-primary" style={{float: "left"}}>Submit</button>}
                </form>
            );
        }
    }
    
    return (
                <>
                    <p style={LeaveReplyStyle()} onClick={toggleShow}>Leave a reply</p>
                    {renderForm()}
                </>
        );
}

export default ReplyForm;
