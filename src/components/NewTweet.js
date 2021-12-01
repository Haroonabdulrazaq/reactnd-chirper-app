import React, { Component } from 'react';

class NewTweet extends Component {
  state ={
    text: '',
  }

  handleChange=(e)=>{
    const text = e.target.value

    this.setState(()=>({
      text
    }))
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    const {text} = this.state;

    console.log('This is a NewTweet', text);
    //Add todo: Add text to store

    this.setState(()=>({
      text: '',
    }))
    // Redirect to home view if form Submitted
  }

  render() {
    const {text} = this.state;

    const tweetLeft = 280 - text.length
    return (
      <div>
       <h3 className="new-tweet">Compose New Tweet</h3>
       <form className='new-tweet' onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Compose New Tweet"
          onChange={this.handleChange}
          value={text}
          className="textarea"
          maxLength={280}
          />
          {tweetLeft < 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button type="btn" className='btn' disabled={text=== ''}> Submit</button>
       </form>
      </div>
    )
  }
}

export default NewTweet
