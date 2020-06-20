import React from 'react';

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSubmitted : false,
      email : '',
    };
  }

  handleEmailChange(event){
    const inputValue = event.target.value;
    this.setState({email:inputValue});
  }

  render(){
    let contactForm;

    if(this.state.isSubmitted){
      contactForm = (
        <div className='contact-submit-massage'>
          送信完了
        </div>
      );
    }else{
      contactForm = (
        <form>
          <p>メールアドレス</p>
          <input value={this.state.email}
          onChange={(event)=>{this.handleEmailChange(event)}}
          />

          <p>お問い合わせ内容</p>
          <textarea />

          <input 
            type='submit'
            value='送信'
            />
        </form>
      );
    }




    return(
      <div className='contact-form'>
      {contactForm}
      </div>
    );

  }

}

export default ContactForm;