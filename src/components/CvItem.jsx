import styles from "./CvItem.module.css"

const CvItem = ({ title, yearStart, yearEnd, link, descriptions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p className={styles.title}>{title}</p>
        {
          !yearStart || !yearEnd || yearStart == yearEnd ?
            <p>{yearStart || yearEnd}</p> : <p><span>{yearStart}</span> - <span>{yearEnd}</span></p>
        }
      </div>
      <p className={styles.link}><a href={link}>{link}</a></p>
      <ul className={styles.descList}>
        {descriptions.map((desc, id) => <li key={id}>{desc}</li>)}
      </ul>
    </div>
  )

}

export default CvItem