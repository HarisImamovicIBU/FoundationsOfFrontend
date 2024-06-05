import React from 'react';
import styles from '../pages/Avatar/AvatarStyles.module.css';
import avatar from '../../src/assets/avatar.png';
function AvatarImage(){
    return(
        <div className={styles.image_container}>
            <img className={styles.avatar} src={avatar} alt="Haris' avatar" />
        </div>
    );
}
export default AvatarImage;