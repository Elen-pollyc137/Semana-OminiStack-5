import React, {Component} from 'react';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component{
    state = {
        newTweet:'',
    };
    handlelNewTweet = (e) =>{};
    handleInputChange = e =>{
        this.setState({newTweet: e.target.value })
    }
    render(){
        return(
            <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="GoTwitter"/>
                <form>
                    <textarea 
                    value={this.state.newTweet}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handlelNewTweet}
                    placeholder="O que esta acontecendo"
                    />
                </form>
            </div>
        );
    }

}