import React from 'react';

class ContactForm extends React.Component {
  render(){
    return(
      <div className='contact-form'>
        <form>
          <p>メールアドレス</p>
          <input />

          <p>お問い合わせ内容</p>
          <textarea></textarea>
          
          <input 
            type='submit'
            value='送信'
            />
        </form>
      </div>
    );

  }

}

export default ContactForm;