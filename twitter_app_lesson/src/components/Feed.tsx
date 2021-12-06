//lib
import React from 'react';
import { auth } from '../firebase';

//components
import { TweetInput } from './TweetInput';

//style
import styles from './Feed.module.css';

const Feed = () => {
  return (
    <div className={styles.feed}>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
