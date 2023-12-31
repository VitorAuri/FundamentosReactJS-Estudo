import styles from './css/Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    return(
        <img className={hasBorder ? styles.avatar : styles.avatarNoBorder} src={src}/>
    )
}