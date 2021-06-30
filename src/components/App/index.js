import { useCallback, useEffect } from 'react';
import {
  getMessagesStarted,
  getMessagesFailed,
  getMessagesSuccess,
} from "./../../actions";
import { useContextDispatch } from "../../context";
import Footer from './../Footer';
import Message from './../message';
import { getMessages } from '../../api';
import './app.scss'

function App() {
  const dispatch = useContextDispatch();
  const fetchMessages = useCallback(async () => {
    dispatch(getMessagesStarted());
    try {
      const { data } = await getMessages();
      dispatch(getMessagesSuccess(data));
      window.scrollTo(0, document.body.scrollHeight);
    } catch (error) {
      dispatch(getMessagesFailed(error));
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages])

  
  return (
    <section className="main-wrapper">
      <div>
        <Message />
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </section>
  );
}

export default App;
